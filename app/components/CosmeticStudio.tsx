"use client";
import { useEffect, useState, type CSSProperties } from "react";

const options = ["Wings", "Cape", "Shoulder Slime", "Player Pet", "Crown", "Top Hat", "Devil Horns", "Bunny Ears", "Fox Tail", "Halo"];
const headwear = ["Crown", "Top Hat", "Bunny Ears"];
function Box({ name, w, h, d, x, y, z = 0, color = "#b5b9bd" }: { name: string; w: number; h: number; d: number; x: number; y: number; z?: number; color?: string }) {
  return <div className={`modelBox ${name}`} style={{ "--w": `${w}px`, "--h": `${h}px`, "--d": `${d}px`, "--color": color, left: x, top: y, transform: `translateZ(${z}px)` } as CSSProperties}>{["front", "back", "left", "right", "top", "bottom"].map(f => <i key={f} className={f} />)}</div>;
}
export default function CosmeticStudio() {
  const [selected, setSelected] = useState<string[]>(["Wings", "Halo"]);
  const [color, setColor] = useState("#5dea77");
  const [angle, setAngle] = useState(-25);
  const [zoom, setZoom] = useState(1);
  const [pose, setPose] = useState("Idle");
  const [message, setMessage] = useState("");
  const [drag, setDrag] = useState<{ x: number; angle: number } | null>(null);
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
              <Box name="head" w={64} h={64} d={64} x={-32} y={-154} />
              <Box name="torso" w={64} h={96} d={32} x={-32} y={-90} color="#9ea5ac" />
              <div className="modelArm armLeft"><Box name="arm" w={32} h={96} d={32} x={0} y={0} /></div>
              <div className="modelArm armRight"><Box name="arm" w={32} h={96} d={32} x={0} y={0} /></div>
              <Box name="leg" w={32} h={96} d={32} x={-32} y={6} color="#7e8790" /><Box name="leg" w={32} h={96} d={32} x={0} y={6} color="#8b949d" />
              {has("Wings") && <><div className="slimeWing wingLeft" style={{ background: color }} /><div className="slimeWing wingRight" style={{ background: color }} /></>}
              {has("Cape") && <Box name="cape" w={58} h={108} d={5} x={-29} y={-84} z={-22} color={color} />}
              {has("Halo") && <div className="slimeHalo" style={{ borderColor: color, boxShadow: `0 0 22px ${color}` }} />}
              {has("Crown") && <div className="slimeCrown" style={{ borderColor: color }}>{[0,1,2].map(i => <Box key={i} name="gem" w={12} h={22} d={12} x={i*24} y={-16} color={color} />)}</div>}
              {has("Top Hat") && <><Box name="hatBrim" w={80} h={8} d={72} x={-40} y={-162} color="#292d35" /><Box name="hat" w={50} h={45} d={50} x={-25} y={-203} color="#292d35" /><Box name="hatBand" w={52} h={8} d={52} x={-26} y={-170} color={color} /></>}
              {has("Bunny Ears") && <><Box name="ear" w={14} h={64} d={12} x={-26} y={-213} color={color} /><Box name="ear" w={14} h={64} d={12} x={12} y={-213} color={color} /></>}
              {has("Devil Horns") && <><div className="horn hornLeft" style={{ borderBottomColor: color }} /><div className="horn hornRight" style={{ borderBottomColor: color }} /></>}
              {has("Shoulder Slime") && <><Box name="shoulderPet" w={28} h={25} d={28} x={36} y={-115} color={color} /><span className="petEyes">▪ ▪</span></>}
              {has("Fox Tail") && <Box name="tail" w={25} h={82} d={25} x={-12} y={-10} z={-44} color={color} />}
              {has("Player Pet") && <div className="miniPet"><Box name="petHead" w={26} h={26} d={26} x={0} y={0} /><Box name="petBody" w={26} h={38} d={14} x={0} y={26} color={color} /><Box name="petLeg" w={11} h={32} d={14} x={0} y={64} /><Box name="petLeg" w={11} h={32} d={14} x={15} y={64} /></div>}
            </div>
          </div>
        </div>
        <div className="studioSliders"><label>Rotate <input aria-label="Rotate player" type="range" min="-180" max="180" value={angle} onChange={e=>setAngle(Number(e.target.value))}/></label><label>Zoom <input aria-label="Zoom player" type="range" min="0.7" max="1.2" step="0.05" value={zoom} onChange={e=>setZoom(Number(e.target.value))}/></label></div>
        <p className="smallNote">Drag to rotate. These are simplified website models; see the in-game screenshots below for actual cosmetic details.</p>
      </div>
      <div className="studioControls"><h3>Build your look</h3><p>Select accessories. Hats share one slot.</p><div className="cosmeticToggles">{options.map(id=><button type="button" key={id} aria-pressed={has(id)} className={has(id)?"selected":""} onClick={()=>toggle(id)}>{id}<span>{has(id)?"✓":"+"}</span></button>)}</div>
        <label className="colorPicker">Accent color <input aria-label="Cosmetic accent color" type="color" value={color} onChange={e=>setColor(e.target.value)}/></label>
        <label className="fieldLabel">Animation preview<select value={pose} onChange={e=>setPose(e.target.value)}>{["Idle","Wave","T-Pose","Spin"].map(p=><option key={p}>{p}</option>)}</select></label><p className="smallNote">Simple pose studies, not the client&apos;s exact emote animations. Pet Morph is shown in the client rather than on this player.</p>
        <div className="toolActions"><button type="button" onClick={share}>Share look</button><button type="button" onClick={exportLook}>Export look</button><label className="fileButton">Import look<input type="file" accept=".json,application/json" onChange={async e=>{const f=e.target.files?.[0];if(!f)return;try{if(f.size>10000)throw Error("Look file is too large.");loadLook(JSON.parse(await f.text()));setMessage("Website look imported.");}catch(err){setMessage(err instanceof Error?err.message:"Could not import look.");}e.target.value="";}}/></label><button type="button" onClick={()=>{setSelected([]);setAngle(-25);setZoom(1);setPose("Idle");setColor("#5dea77");setMessage("Look reset.");}}>Reset</button></div><p className="smallNote">Look files are for this website preview. They do not change your game profile.</p><p role="status">{message}</p>{shareUrl&&<input aria-label="Share look URL" readOnly value={shareUrl}/>}
      </div>
    </div>
  </section>;
}
