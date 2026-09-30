"use client";
import { useEffect, useRef, useState, type CSSProperties } from "react";

const options = ["Wings", "Cape", "Shoulder Slime", "Player Pet", "Crown", "Top Hat", "Devil Horns", "Bunny Ears", "Fox Tail", "Halo"];
const headwear = ["Crown", "Top Hat", "Bunny Ears"];
const faces = ["front", "back", "left", "right", "top", "bottom"] as const;
type FaceTextures = Partial<Record<typeof faces[number], string>>;
function Box({ name, w, h, d, x, y, z = 0, color = "#b5b9bd", texture }: { name: string; w: number; h: number; d: number; x: number; y: number; z?: number; color?: string; texture?: FaceTextures }) {
  return <div className={`modelBox ${name}`} style={{ "--w": `${w}px`, "--h": `${h}px`, "--d": `${d}px`, "--color": color, left: x, top: y, transform: `translateZ(${z}px)` } as CSSProperties}>{faces.map(f => <i key={f} className={f} style={texture?.[f] ? { backgroundImage: `url(${texture[f]})`, backgroundSize: "100% 100%", imageRendering: "pixelated", backgroundColor: "#b5b9bd" } : undefined} />)}</div>;
}
function Wing({ side, color }: { side: string; color: string }) { return <div className={`slimeWing wing${side}`}><svg viewBox="0 0 110 160" aria-hidden="true"><path d="M104 147 92 35 47 4 13 18 3 54 23 70 7 93 37 97 22 122 53 117 50 146 76 133Z" fill={color} fillOpacity=".7" stroke={color} strokeWidth="4"/><path d="m93 36-48 44-31-28m31 28 39 27-47-11m47 11-31 12m40-83 9 107" fill="none" stroke="#e2ffdd" strokeOpacity=".6" strokeWidth="3"/><path d="m47 13 13 11-10 13-13-11Z M28 45l8 7-6 8-9-7Z M74 94l10 9-8 10-10-9Z" fill="#fff" fillOpacity=".45"/></svg></div>; }
function skinFaces(atlas: HTMLCanvasElement, slim: boolean, overlay: boolean) {
  const result: Record<string, FaceTextures> = {};
  const armWidth = slim ? 3 : 4;
  const parts: [string, number, number, number, number, number, number, number][] = [
    ["head",0,0,8,8,8,32,0], ["torso",16,16,8,12,4,16,32],
    ["rightArm",40,16,armWidth,12,4,40,32], ["leftArm",32,48,armWidth,12,4,48,48],
    ["rightLeg",0,16,4,12,4,0,32], ["leftLeg",16,48,4,12,4,0,48],
  ];
  for (const [name,u,v,w,h,d,ou,ov] of parts) {
    const rectangles = { front:[d,d,w,h], back:[2*d+w,d,w,h], left:[d+w,d,d,h], right:[0,d,d,h], top:[d,0,w,d], bottom:[d+w,0,w,d] };
    result[name] = {};
    for (const face of faces) { const [x,y,width,height]=rectangles[face];const tile=document.createElement("canvas");tile.width=width;tile.height=height;const ctx=tile.getContext("2d");if(!ctx)throw Error("Skin preview is not supported by this browser.");ctx.drawImage(atlas,u+x,v+y,width,height,0,0,width,height);if(overlay)ctx.drawImage(atlas,ou+x,ov+y,width,height,0,0,width,height);result[name][face]=tile.toDataURL("image/png"); }
  }
  return result;
}
export default function CosmeticStudio() {
  const [selected, setSelected] = useState<string[]>(["Wings", "Halo"]);
  const [color, setColor] = useState("#5dea77");
  const [angle, setAngle] = useState(-25);
  const [zoom, setZoom] = useState(1);
  const [pose, setPose] = useState("Idle");
  const [message, setMessage] = useState("");
  const [drag, setDrag] = useState<{ x: number; angle: number } | null>(null);
  const [skinName, setSkinName] = useState("");
  const [slim, setSlim] = useState(false);
  const [overlay, setOverlay] = useState(true);
  const [textures, setTextures] = useState<Record<string, FaceTextures>>({});
  const skinAtlas = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => { if (skinAtlas.current) setTextures(skinFaces(skinAtlas.current,slim,overlay)); }, [skinName,slim,overlay]);
  async function uploadSkin(file: File) {
    try {
      if (file.size > 2 * 1024 * 1024) throw Error("Choose a skin PNG smaller than 2 MB.");
      const header=new Uint8Array(await file.slice(0,24).arrayBuffer());
      if(header.length<24 || ![137,80,78,71,13,10,26,10].every((v,i)=>header[i]===v))throw Error("Choose a PNG skin file, not a screenshot or another file type.");
      const view=new DataView(header.buffer);const width=view.getUint32(16);const height=view.getUint32(20);
      if(width!==height || width<64 || width>1024 || width%64!==0)throw Error("Use a modern square skin: 64 × 64 pixels, or a square HD multiple of 64 up to 1024. Legacy 64 × 32 skins are not supported.");
      const bitmap=await createImageBitmap(file);const atlas=document.createElement("canvas");atlas.width=64;atlas.height=64;const ctx=atlas.getContext("2d");if(!ctx){bitmap.close();throw Error("Skin preview is not supported by this browser.");}ctx.imageSmoothingEnabled=false;ctx.drawImage(bitmap,0,0,64,64);bitmap.close();const next=skinFaces(atlas,slim,overlay);skinAtlas.current=atlas;setTextures(next);setSkinName(file.name);setMessage("Your skin is ready. Try some cosmetics!");
    } catch(error){setMessage(error instanceof Error?error.message:"Could not load skin.");}
  }
  const has = (id: string) => selected.includes(id);
  function loadLook(value: unknown) {
    const v = value as { type?: string; cosmetics?: unknown; color?: unknown };
    if (!v || v.type !== "booger-website-look-v1" || !Array.isArray(v.cosmetics) || v.cosmetics.length > 10 || !v.cosmetics.every(x => typeof x === "string" && options.includes(x)) || typeof v.color !== "string" || !/^#[0-9a-f]{6}$/i.test(v.color) || v.cosmetics.filter(x => headwear.includes(x)).length > 1) throw new Error("This is not a valid Booger website look.");
    setSelected([...new Set(v.cosmetics)]); setColor(v.color);
  }
  useEffect(() => { const raw = new URLSearchParams(window.location.hash.slice(1)).get("look"); if (raw) { try { loadLook(JSON.parse(raw)); setMessage("Shared look loaded."); } catch { setMessage("That shared look could not be loaded."); } } }, []);
  const look = () => ({ type: "booger-website-look-v1", cosmetics: selected, color });
  function toggle(id: string) { setSelected(s => s.includes(id) ? s.filter(x => x !== id) : [...s.filter(x => !headwear.includes(id) || !headwear.includes(x)), id]); }
  async function share() { const url = `${location.origin}/cosmetics#${new URLSearchParams({ look: JSON.stringify(look()) })}`; try { await navigator.clipboard.writeText(url); setMessage("Look link copied."); } catch { setMessage("Copy this look link:"); setShareUrl(url); } }
  const [shareUrl, setShareUrl] = useState("");
  function exportLook() { const url = URL.createObjectURL(new Blob([JSON.stringify(look(), null, 2)], { type: "application/json" })); const a = document.createElement("a"); a.href = url; a.download = "booger-website-look.json"; a.click(); URL.revokeObjectURL(url); setMessage("Website look exported."); }
  return <section className="section tight" id="studio">
    <div className="sectionHead"><p>Try It On</p><h2>Your Look. Your Slime.</h2><span>Rotate the player, mix cosmetics, and share your favorite combination.</span></div>
    <div className="studioLayout">
      <div className="studioPreview">
        <div className="studioBadge">Interactive 3D preview</div>
        <div className="modelStage" role="img" aria-label={`Player wearing ${selected.join(", ") || "no cosmetics"}. ${pose} pose.`} onPointerDown={e => { e.currentTarget.setPointerCapture(e.pointerId); setDrag({ x: e.clientX, angle }); }} onPointerMove={e => { if (drag) setAngle(((drag.angle + (e.clientX - drag.x) * .6 + 180) % 360 + 360) % 360 - 180); }} onPointerUp={() => setDrag(null)} onPointerCancel={() => setDrag(null)}>
          <div className="studioFloor" />
          <div className="modelOrbit" style={{ transform: `rotateX(-8deg) rotateY(${angle}deg) scale(${zoom})` }}>
            <div className={`playerModel pose${pose.replace(/\s/g, "")}`}>
              <Box name="head" w={64} h={64} d={64} x={-32} y={-154} texture={textures.head} />
              <Box name="torso" w={64} h={96} d={32} x={-32} y={-90} color="#9ea5ac" texture={textures.torso} />
              <div className={`modelArm armLeft ${slim?"slimArm":""}`}><Box name="arm" w={slim?24:32} h={96} d={32} x={slim?8:0} y={0} texture={textures.rightArm} /></div>
              <div className="modelArm armRight"><Box name="arm" w={slim?24:32} h={96} d={32} x={0} y={0} texture={textures.leftArm} /></div>
              <Box name="leg" w={32} h={96} d={32} x={-32} y={6} color="#7e8790" texture={textures.rightLeg} /><Box name="leg" w={32} h={96} d={32} x={0} y={6} color="#8b949d" texture={textures.leftLeg} />
              {has("Wings") && <><Wing side="Left" color={color}/><Wing side="Right" color={color}/></>}
              {has("Cape") && <Box name="cape" w={58} h={108} d={5} x={-29} y={-84} z={-22} color={color} />}
              {has("Halo") && <div className="slimeHalo" style={{ borderColor: color, boxShadow: `0 0 22px ${color}` }} />}
              {has("Crown") && <div className="crownAssembly"><Box name="crownBand" w={70} h={10} d={70} x={-35} y={-161} color="#d6ad42"/>{[-27,0,27].map(x=><div key={x}><Box name="crownPoint" w={12} h={21} d={10} x={x-6} y={-181} z={33} color="#e8c75d"/><Box name="crownJewel" w={7} h={8} d={3} x={x-3.5} y={-172} z={39} color={color}/><Box name="crownPoint" w={12} h={21} d={10} x={x-6} y={-181} z={-33} color="#e8c75d"/></div>)}</div>}
              {has("Top Hat") && <><Box name="hatBrim" w={80} h={8} d={72} x={-40} y={-162} color="#292d35" /><Box name="hat" w={50} h={45} d={50} x={-25} y={-203} color="#292d35" /><Box name="hatBand" w={52} h={8} d={52} x={-26} y={-170} color={color} /></>}
              {has("Bunny Ears") && <>{[-26,12].map(x=><div key={x} className="earAssembly"><Box name="ear" w={16} h={64} d={12} x={x} y={-214} color="#e4e7e4"/><Box name="earInner" w={8} h={46} d={2} x={x+4} y={-206} z={7} color={color}/></div>)}</>}
              {has("Devil Horns") && <>{[-1,1].map(side=><div key={side} className="hornAssembly">{[0,1,2,3].map(i=><Box key={i} name="hornSegment" w={18-i*4} h={16} d={18-i*4} x={side*(25+i*4)-(18-i*4)/2} y={-165-i*12} z={-i*3} color={color}/>)}</div>)}</>}
              {has("Shoulder Slime") && <><Box name="shoulderPet" w={28} h={25} d={28} x={36} y={-115} color={color} /><span className="petEyes">▪ ▪</span></>}
              {has("Fox Tail") && <div className="tailAssembly">{[0,1,2,3].map(i=><Box key={i} name="tailSegment" w={i===3?20:28} h={24} d={26} x={-14+i*5} y={-8+i*17} z={-32-i*18} color={i===3?"#f2f1df":color}/>)}</div>}
              {has("Player Pet") && <div className="miniPet"><Box name="petHead" w={26} h={26} d={26} x={0} y={0} texture={textures.head}/><Box name="petBody" w={26} h={38} d={14} x={0} y={26} color={color} texture={textures.torso}/><Box name="petArm" w={12} h={38} d={14} x={-12} y={26} texture={textures.rightArm}/><Box name="petArm" w={12} h={38} d={14} x={26} y={26} texture={textures.leftArm}/><Box name="petLeg" w={12} h={32} d={14} x={0} y={64} texture={textures.rightLeg}/><Box name="petLeg" w={12} h={32} d={14} x={14} y={64} texture={textures.leftLeg}/></div>}
            </div>
          </div>
        </div>
        <div className="studioSliders"><label>Rotate <input aria-label="Rotate player" type="range" min="-180" max="180" value={angle} onChange={e=>setAngle(Number(e.target.value))}/></label><label>Zoom <input aria-label="Zoom player" type="range" min="0.7" max="1.2" step="0.05" value={zoom} onChange={e=>setZoom(Number(e.target.value))}/></label></div>
        <p className="smallNote">Drag to rotate. These are simplified website models; see the in-game screenshots below for actual cosmetic details.</p>
        <div className="skinControls"><h4>Try your own skin</h4><div className="toolActions"><label className="fileButton">Upload skin PNG<input type="file" accept="image/png,.png" onChange={async e=>{const file=e.target.files?.[0];if(file)await uploadSkin(file);e.target.value="";}}/></label>{skinName&&<button type="button" onClick={()=>{skinAtlas.current=null;setTextures({});setSkinName("");setMessage("Returned to the plain model.");}}>Remove skin</button>}</div><p className="skinFileName">{skinName||"Plain player model"}</p><label className="fieldLabel">Arm style<select value={slim?"slim":"classic"} onChange={e=>setSlim(e.target.value==="slim")}><option value="classic">Classic · 4 pixel arms</option><option value="slim">Slim · 3 pixel arms</option></select></label><label className="skinOverlay"><input type="checkbox" checked={overlay} onChange={e=>setOverlay(e.target.checked)}/> Show skin overlay layer</label><p className="smallNote">Use a 64 × 64 skin PNG or square HD skin. It stays in this browser and is not included in shared links or look files.</p></div>
      </div>
      <div className="studioControls"><h3>Build your look</h3><p>Select accessories. Hats share one slot.</p><div className="cosmeticToggles">{options.map(id=><button type="button" key={id} aria-pressed={has(id)} className={has(id)?"selected":""} onClick={()=>toggle(id)}>{id}<span>{has(id)?"✓":"+"}</span></button>)}</div>

        <label className="colorPicker">Accent color <input aria-label="Cosmetic accent color" type="color" value={color} onChange={e=>setColor(e.target.value)}/></label>
        <label className="fieldLabel">Animation preview<select value={pose} onChange={e=>setPose(e.target.value)}>{["Idle","Wave","T-Pose","Spin"].map(p=><option key={p}>{p}</option>)}</select></label><p className="smallNote">Simple pose studies, not the client&apos;s exact emote animations. Pet Morph is shown in the client rather than on this player.</p>
        <div className="toolActions"><button type="button" onClick={share}>Share look</button><button type="button" onClick={exportLook}>Export look</button><label className="fileButton">Import look<input type="file" accept=".json,application/json" onChange={async e=>{const f=e.target.files?.[0];if(!f)return;try{if(f.size>10000)throw Error("Look file is too large.");loadLook(JSON.parse(await f.text()));setMessage("Website look imported.");}catch(err){setMessage(err instanceof Error?err.message:"Could not import look.");}e.target.value="";}}/></label><button type="button" onClick={()=>{setSelected([]);setAngle(-25);setZoom(1);setPose("Idle");setColor("#5dea77");setMessage("Look reset.");}}>Reset</button></div><p className="smallNote">Look files are for this website preview. They do not change your game profile.</p><p role="status">{message}</p>{shareUrl&&<input aria-label="Share look URL" readOnly value={shareUrl}/>}
      </div>
    </div>
  </section>;
}
