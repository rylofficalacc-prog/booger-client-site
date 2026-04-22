"use client";

import { useState, useEffect } from "react";

const ACCENT = '#7CFF50';
const BG = '#080808';
const SURFACE = '#111111';
const BORDER = '#1E1E1E';
const TEXT = '#F0F0F0';
const MUTED = '#555555';

const NAV_ITEMS = ['Home', 'Features', 'Download', 'Shop', 'Donate', 'Changelog'];

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&display=swap');
  *{box-sizing:border-box;margin:0;padding:0;}
  body{background:#080808;color:#F0F0F0;font-family:'DM Mono',monospace;}
  ::-webkit-scrollbar{width:4px;}
  ::-webkit-scrollbar-track{background:#080808;}
  ::-webkit-scrollbar-thumb{background:#1E1E1E;}
  @keyframes fadeUp{from{opacity:0;transform:translateY(24px);}to{opacity:1;transform:translateY(0);}}
  @keyframes pulseGlow{0%,100%{box-shadow:0 0 20px rgba(124,255,80,.3);}50%{box-shadow:0 0 50px rgba(124,255,80,.6);}}
  .fu1{animation:fadeUp .6s ease forwards;}
  .fu2{animation:fadeUp .6s .15s ease forwards;opacity:0;}
  .fu3{animation:fadeUp .6s .3s ease forwards;opacity:0;}
  .fu4{animation:fadeUp .6s .45s ease forwards;opacity:0;}
  .glowbtn{animation:pulseGlow 3s ease-in-out infinite;}
  .fcard{transition:all .25s ease;cursor:default;}
  .fcard:hover{border-color:#7CFF50 !important;transform:translateY(-4px);}
  .modtag{transition:all .2s;cursor:default;}
  .modtag:hover{border-color:var(--cat-color) !important;color:var(--cat-color) !important;}
  input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;}
  input,textarea{-webkit-appearance:none;border-radius:0 !important;}
  .shopcard{transition:border-color .2s;}
  .clog-item{transition:border-left-color .2s;}
  .clog-item:hover{border-left-color:#7CFF50 !important;}
`;

export default function BoogerClientSite() {
  const [page, setPage] = useState('Home');
  useEffect(() => { window.scrollTo(0, 0); }, [page]);

  return (
    <div style={{ background: BG, minHeight: '100vh', fontFamily: "'DM Mono',monospace", color: TEXT }}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <Nav page={page} setPage={setPage} />
      <main style={{ paddingTop: 64 }}>
        {page === 'Home'      && <HomePage      setPage={setPage} />}
        {page === 'Features'  && <FeaturesPage  />}
        {page === 'Download'  && <DownloadPage  />}
        {page === 'Shop'      && <ShopPage      />}
        {page === 'Donate'    && <DonatePage    />}
        {page === 'Changelog' && <ChangelogPage />}
      </main>
      <Footer setPage={setPage} />
    </div>
  );
}

/* ─── NAV ─────────────────────────────────────────────────── */
function Nav({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: 64,
      background: scrolled ? 'rgba(8,8,8,0.96)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? `1px solid ${BORDER}` : 'none',
      transition: 'all .3s ease',
      display: 'flex', alignItems: 'center',
      padding: '0 40px', justifyContent: 'space-between',
    }}>
      <div onClick={() => setPage('Home')} style={{
        fontFamily: "'Bebas Neue',sans-serif", fontSize: 20,
        letterSpacing: 4, color: ACCENT, cursor: 'pointer', userSelect: 'none',
      }}>
        BOOGER<span style={{ color: TEXT }}>CLIENT</span>
      </div>

      <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
        {NAV_ITEMS.map(item => (
          <button key={item} onClick={() => setPage(item)} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontFamily: "'DM Mono',monospace", fontSize: 11,
            letterSpacing: 1.5, color: page === item ? ACCENT : MUTED,
            textTransform: 'uppercase', transition: 'color .2s',
            borderBottom: `1px solid ${page === item ? ACCENT : 'transparent'}`,
            paddingBottom: 2,
          }}>
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
}

/* ─── HOME ────────────────────────────────────────────────── */
function HomePage({ setPage }) {
  return (
    <div>
      {/* Hero */}
      <section style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center', textAlign: 'center',
        padding: '0 40px', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(rgba(124,255,80,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(124,255,80,.035) 1px,transparent 1px)`,
          backgroundSize: '60px 60px', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', top: '45%', left: '50%',
          transform: 'translate(-50%,-50%)', width: 700, height: 700,
          background: 'radial-gradient(circle,rgba(124,255,80,.07) 0%,transparent 68%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="fu1" style={{ fontSize: 10, letterSpacing: 6, color: ACCENT, textTransform: 'uppercase', marginBottom: 28 }}>
            All Versions · Free & Open Source
          </div>
          <h1 className="fu2" style={{
            fontFamily: "'Bebas Neue',sans-serif",
            fontSize: 'clamp(72px,14vw,180px)', lineHeight: .9,
            letterSpacing: 8, color: TEXT, marginBottom: 8,
          }}>
            BOOGER<br /><span style={{ color: ACCENT }}>CLIENT</span>
          </h1>
          <p className="fu3" style={{
            fontSize: 13, color: MUTED, marginTop: 32, marginBottom: 48,
            letterSpacing: .5, lineHeight: 1.9, maxWidth: 460,
          }}>
            A sleek, lightweight Minecraft client.<br />
            Modules. HUD. Authentication. Built different.
          </p>
          <div className="fu4" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Btn primary onClick={() => setPage('Download')}>↓ Download Free</Btn>
            <Btn onClick={() => setPage('Donate')}>Support Us</Btn>
          </div>
        </div>
        <div style={{
          position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)',
          color: MUTED, fontSize: 10, letterSpacing: 4, textTransform: 'uppercase',
        }}>scroll ↓</div>
      </section>

      {/* Stats */}
      <section style={{
        borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`,
        padding: '36px 40px', display: 'flex', justifyContent: 'center', gap: 80, flexWrap: 'wrap',
      }}>
        {[['All Versions','MC Support'],['20+','Modules'],['Free','Always'],['Open Source','GitHub']].map(([v,l])=>(
          <div key={l} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:38, color:ACCENT, letterSpacing:2 }}>{v}</div>
            <div style={{ fontSize:10, color:MUTED, letterSpacing:2, textTransform:'uppercase', marginTop:4 }}>{l}</div>
          </div>
        ))}
      </section>

      {/* Feature preview */}
      <section style={{ padding: '112px 40px', maxWidth: 1200, margin: '0 auto' }}>
        <Label>What's inside</Label>
        <SectionTitle>Built for players,<br /><span style={{color:ACCENT}}>by players.</span></SectionTitle>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:20, marginTop:56 }}>
          {[
            {icon:'⚡',title:'Sprint Module',desc:'Auto-sprint without holding the key. Smooth and always-on.'},
            {icon:'🎨',title:'Custom HUD',desc:'Armor display, FPS counter, coords, potion timers. Fully styled.'},
            {icon:'🌍',title:'World Tools',desc:'Light levels, chunk borders, biome display, time changer and more.'},
            {icon:'🎨',title:'Custom HUD',desc:'Watermark, armor display, FPS counter. Fully styled to match.'},
          ].map(f=>(
            <div key={f.title} className="fcard" style={{ border:`1px solid ${BORDER}`, padding:'32px 28px' }}>
              <div style={{ fontSize:28, marginBottom:16 }}>{f.icon}</div>
              <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:22, letterSpacing:2, marginBottom:10 }}>{f.title}</div>
              <div style={{ fontSize:12, color:MUTED, lineHeight:1.8 }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Donate CTA banner */}
      <section style={{
        margin:'0 40px 100px', border:`1px solid ${BORDER}`,
        padding:'56px 48px', display:'flex', alignItems:'center',
        justifyContent:'space-between', flexWrap:'wrap', gap:32,
        position:'relative', overflow:'hidden',
      }}>
        <div style={{
          position:'absolute', right:-80, top:-80,
          width:300, height:300,
          background:'radial-gradient(circle,rgba(124,255,80,.06) 0%,transparent 70%)',
          pointerEvents:'none',
        }}/>
        <div>
          <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:36, letterSpacing:4, marginBottom:10 }}>
            ENJOY THE CLIENT?
          </div>
          <div style={{ fontSize:13, color:MUTED, lineHeight:1.8, maxWidth:480 }}>
            Booger Client is and always will be free. If you want to support hosting costs and future development, any amount means a lot.
          </div>
        </div>
        <Btn primary onClick={() => setPage('Donate')}>Donate via PayPal →</Btn>
      </section>
    </div>
  );
}

/* ─── FEATURES ────────────────────────────────────────────── */
function FeaturesPage() {
  const cats = [
    { name:'MOVEMENT', color:ACCENT,    modules:['Auto Sprint','Sneak Toggle','SafeWalk','Step Assist','Zoom','Path Display'] },
    { name:'RENDER',   color:'#5599FF', modules:['Fullbright','Custom Crosshair','Block Overlay','Nametags','Held Item Info','ViewModel Tweaks'] },
    { name:'PLAYER',   color:'#FF9955', modules:['Anti AFK','Auto Eat','Fast Place','Inventory HUD','Screenshot Manager','Zoom'] },
    { name:'HUD',      color:'#CC88FF', modules:['Watermark','FPS Display','CPS Counter','Armor Status','Ping','Coords','Clock','Potion HUD'] },
    { name:'WORLD',    color:'#55DDDD', modules:['Time Changer','Chunk Borders','Light Level','Block Info','Biome Display','Weather Display'] },
    { name:'MISC',     color:'#FF9955', modules:['Chat Filter','Discord RPC','FPS Boost','Notifications','Auto Respawn','Language'] },
  ];

  return (
    <div style={{ padding:'80px 40px', maxWidth:1100, margin:'0 auto' }}>
      <Label>Module list</Label>
      <PageTitle>FEATURES</PageTitle>
      <p style={{ color:MUTED, fontSize:13, marginBottom:64, letterSpacing:.5 }}>Every module, every category. All free.</p>
      <div style={{ display:'flex', flexDirection:'column', gap:48 }}>
        {cats.map(cat=>(
          <div key={cat.name}>
            <div style={{ display:'flex', alignItems:'center', gap:16, marginBottom:20, borderBottom:`1px solid ${BORDER}`, paddingBottom:16 }}>
              <div style={{ width:8, height:8, background:cat.color, flexShrink:0 }}/>
              <span style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:20, letterSpacing:4, color:cat.color }}>{cat.name}</span>
              <span style={{ fontSize:10, color:MUTED, marginLeft:'auto' }}>{cat.modules.length} modules</span>
            </div>
            <div style={{ display:'flex', flexWrap:'wrap', gap:10 }}>
              {cat.modules.map(mod=>(
                <div key={mod} className="modtag" style={{
                  '--cat-color': cat.color,
                  padding:'8px 16px', border:`1px solid ${BORDER}`,
                  fontSize:12, letterSpacing:.5, color:TEXT,
                }}
                onMouseEnter={e=>{ e.currentTarget.style.borderColor=cat.color; e.currentTarget.style.color=cat.color; }}
                onMouseLeave={e=>{ e.currentTarget.style.borderColor=BORDER; e.currentTarget.style.color=TEXT; }}
                >
                  {mod}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── DOWNLOAD ─────────────────────────────────────────────── */
function DownloadPage() {
  return (
    <div style={{ padding:'80px 40px', maxWidth:860, margin:'0 auto' }}>
      <Label>Get the mod</Label>
      <PageTitle>DOWNLOAD</PageTitle>

      {/* Latest release card */}
      <div style={{ border:`1px solid ${ACCENT}`, padding:40, marginBottom:20, position:'relative', marginTop:48 }}>
        <div style={{
          position:'absolute', top:-1, left:32, background:BG,
          padding:'0 12px', fontSize:10, letterSpacing:3, color:ACCENT, textTransform:'uppercase',
        }}>Latest Release</div>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:24 }}>
          <div>
            <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:42, letterSpacing:4, marginBottom:8 }}>v0.1.0-beta</div>
            <div style={{ fontSize:12, color:MUTED, letterSpacing:1 }}>All Minecraft Versions · Fabric Support</div>
            <div style={{ fontSize:11, color:MUTED, marginTop:6 }}>Released January 2025 · 1,204 downloads</div>
          </div>
          <Btn primary style={{ alignSelf:'center' }}>↓ Download .jar</Btn>
        </div>
      </div>

      {/* Requirements */}
      <div style={{ border:`1px solid ${BORDER}`, padding:32, marginBottom:40 }}>
        <SectionLabel>Requirements</SectionLabel>
        {[['Minecraft','All Versions'],['Fabric Loader','0.16.0 or newer'],['Fabric API','Latest (from Modrinth)'],['Java','21 or newer']].map(([k,v])=>(
          <div key={k} style={{ display:'flex', justifyContent:'space-between', padding:'12px 0', borderBottom:`1px solid ${BORDER}`, fontSize:13 }}>
            <span style={{ color:MUTED }}>{k}</span>
            <span style={{ color:TEXT }}>{v}</span>
          </div>
        ))}
      </div>

      {/* Install steps */}
      <SectionLabel>Installation</SectionLabel>
      {[
        'Install Fabric Loader for your Minecraft version from fabricmc.net',
        'Download Fabric API and drop it into your /mods folder',
        'Download BoogerClient.jar from the button above',
        'Place BoogerClient.jar into your /mods folder',
        'Launch Minecraft using the Fabric profile',
        'Press Right Shift in-game to open the module menu',
      ].map((step,i)=>(
        <div key={i} style={{ display:'flex', gap:20, padding:'16px 0', borderBottom:`1px solid ${BORDER}` }}>
          <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:18, color:ACCENT, letterSpacing:2, minWidth:28, flexShrink:0 }}>
            {String(i+1).padStart(2,'0')}
          </div>
          <div style={{ fontSize:13, color:MUTED, lineHeight:1.7 }}>{step}</div>
        </div>
      ))}
    </div>
  );
}

/* ─── SHOP ─────────────────────────────────────────────────── */
function ShopPage() {
  const [cart, setCart] = useState([]);
  const items = [
    {id:1,name:'Elite Cape',   desc:'Exclusive animated cape visible to other Booger Client users.',price:4.99,tag:'COSMETIC'},
    {id:2,name:'Neon Pack',    desc:'Neon color theme applied to your HUD and module list.',         price:2.99,tag:'THEME'},
    {id:3,name:'Client Tag',   desc:'Custom colored tag next to your username in-client.',           price:1.99,tag:'BADGE'},
    {id:4,name:'Supporter Icon',desc:'Permanent supporter icon on your in-client profile.',          price:3.99,tag:'BADGE'},
    {id:5,name:'Premium Bundle',desc:'Everything above plus all future cosmetic drops. Best value.', price:9.99,tag:'BUNDLE'},
  ];
  const inCart = id => cart.includes(id);
  const toggle = id => setCart(c => c.includes(id) ? c.filter(x=>x!==id) : [...c,id]);
  const total  = items.filter(i=>cart.includes(i.id)).reduce((s,i)=>s+i.price,0);

  return (
    <div style={{ padding:'80px 40px', maxWidth:1100, margin:'0 auto' }}>
      <Label>Cosmetics only · no pay-to-win</Label>
      <PageTitle>SHOP</PageTitle>
      <p style={{ color:MUTED, fontSize:13, marginBottom:56, lineHeight:1.8, letterSpacing:.5 }}>
        The client is free forever. These cosmetics just make you look cool.
      </p>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:20 }}>
        {items.map(item=>(
          <div key={item.id} className="shopcard" style={{ border:`1px solid ${inCart(item.id)?ACCENT:BORDER}`, padding:28 }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:16 }}>
              <Tag active={inCart(item.id)}>{item.tag}</Tag>
              <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:26, color:ACCENT, letterSpacing:2 }}>
                ${item.price.toFixed(2)}
              </div>
            </div>
            <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:22, letterSpacing:2, marginBottom:10 }}>{item.name}</div>
            <div style={{ fontSize:12, color:MUTED, lineHeight:1.8, marginBottom:24 }}>{item.desc}</div>
            <button onClick={()=>toggle(item.id)} style={{
              width:'100%', padding:'10px 0',
              background: inCart(item.id) ? ACCENT : 'transparent',
              color: inCart(item.id) ? '#000' : TEXT,
              border:`1px solid ${inCart(item.id)?ACCENT:BORDER}`,
              fontFamily:"'DM Mono',monospace", fontSize:11,
              letterSpacing:2, textTransform:'uppercase',
              cursor:'pointer', transition:'all .2s',
            }}>
              {inCart(item.id) ? '✓ Added' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
      {cart.length>0 && (
        <div style={{
          marginTop:32, border:`1px solid ${ACCENT}`, padding:'20px 28px',
          display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:16,
        }}>
          <div style={{ fontSize:13, letterSpacing:.5 }}>
            <span style={{ color:MUTED }}>{cart.length} item{cart.length!==1?'s':''} · </span>
            <span style={{ color:ACCENT, fontFamily:"'Bebas Neue',sans-serif", fontSize:20 }}>${total.toFixed(2)}</span>
          </div>
          <Btn primary>Checkout with Stripe →</Btn>
        </div>
      )}
    </div>
  );
}

/* ─── DONATE ────────────────────────────────────────────────── */
function DonatePage() {
  const [amount, setAmount]   = useState(5);
  const [custom, setCustom]   = useState('');
  const [note, setNote]       = useState('');
  const [success, setSuccess] = useState(false);
  const presets = [3, 5, 10, 25];
  const finalAmount = custom ? parseFloat(custom)||0 : amount;

  const handleDonate = () => {
    if (finalAmount <= 0) return;
    const url = `https://www.paypal.me/BoogerClient/${finalAmount.toFixed(2)}`;
    window.open(url, '_blank');
  };

  if (success) return (
    <div style={{ padding:'80px 40px', maxWidth:600, margin:'0 auto', textAlign:'center' }}>
      <div style={{ fontSize:56, marginBottom:24 }}>🎉</div>
      <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:48, letterSpacing:4, color:ACCENT, marginBottom:16 }}>
        THANK YOU!
      </div>
      <p style={{ color:MUTED, fontSize:13, lineHeight:1.9 }}>
        Your donation of <span style={{color:ACCENT}}>${finalAmount.toFixed(2)}</span> genuinely means a lot to us.
        It helps keep the servers running and development moving forward.
      </p>
      <button onClick={()=>setSuccess(false)} style={{
        marginTop:40, background:'transparent', color:MUTED,
        border:`1px solid ${BORDER}`, padding:'12px 28px',
        fontFamily:"'DM Mono',monospace", fontSize:11,
        letterSpacing:2, textTransform:'uppercase', cursor:'pointer',
      }}>← Back</button>
    </div>
  );

  return (
    <div style={{ padding:'80px 40px', maxWidth:680, margin:'0 auto' }}>
      <Label>Support the project</Label>
      <PageTitle>DONATE</PageTitle>
      <p style={{ color:MUTED, fontSize:13, marginBottom:56, lineHeight:1.9, letterSpacing:.5 }}>
        Booger Client is free forever. Donations cover servers, the domain, and development time.
        Every dollar genuinely helps. Thank you. 🙏
      </p>

      {/* What you're supporting */}
      <div style={{ border:`1px solid ${BORDER}`, padding:28, marginBottom:36 }}>
        <SectionLabel>Where your money goes</SectionLabel>
        {[
          ['🖥️', 'Server hosting & CDN'],
          ['🌐', 'Domain & SSL costs'],
          ['⏱️', 'Development time & updates'],
          ['☕', 'Keeping the dev caffeinated'],
        ].map(([icon,label])=>(
          <div key={label} style={{ display:'flex', gap:16, padding:'10px 0', borderBottom:`1px solid ${BORDER}`, fontSize:13, color:MUTED }}>
            <span>{icon}</span><span>{label}</span>
          </div>
        ))}
      </div>

      {/* Amount selector */}
      <div style={{ marginBottom:32 }}>
        <SectionLabel>Choose an amount (USD)</SectionLabel>
        <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
          {presets.map(p=>{
            const active = amount===p && !custom;
            return (
              <button key={p} onClick={()=>{setAmount(p);setCustom('');}} style={{
                padding:'12px 28px',
                background: active ? ACCENT : 'transparent',
                color: active ? '#000' : TEXT,
                border:`1px solid ${active?ACCENT:BORDER}`,
                fontFamily:"'DM Mono',monospace", fontSize:15,
                cursor:'pointer', transition:'all .2s', fontWeight: active?500:400,
              }}>
                ${p}
              </button>
            );
          })}
          <input type="number" placeholder="Custom $" value={custom}
            onChange={e=>setCustom(e.target.value)} min="1"
            style={{
              padding:'12px 14px', background:'transparent',
              border:`1px solid ${custom?ACCENT:BORDER}`, color:TEXT,
              width:130, fontFamily:"'DM Mono',monospace", fontSize:14, outline:'none',
            }}
          />
        </div>
      </div>

      {/* Note */}
      <div style={{ marginBottom:40 }}>
        <SectionLabel>Leave a note (optional)</SectionLabel>
        <textarea value={note} onChange={e=>setNote(e.target.value)}
          placeholder="Say something nice..." rows={3}
          style={{
            width:'100%', background:SURFACE, border:`1px solid ${BORDER}`,
            color:TEXT, padding:16, fontFamily:"'DM Mono',monospace",
            fontSize:13, outline:'none', resize:'vertical',
            letterSpacing:.5, lineHeight:1.7,
          }}
        />
      </div>

      {/* Summary */}
      <div style={{ border:`1px solid ${BORDER}`, padding:28, marginBottom:20 }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:24 }}>
          <span style={{ fontSize:12, color:MUTED, letterSpacing:1 }}>Total donation</span>
          <span style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:32, color:ACCENT, letterSpacing:2 }}>
            ${finalAmount>0?finalAmount.toFixed(2):'—'}
          </span>
        </div>
        <button onClick={handleDonate} className={finalAmount>0?'glowbtn':''} style={{
          width:'100%', padding:'16px 0',
          background: finalAmount>0 ? ACCENT : BORDER,
          color: finalAmount>0 ? '#000' : MUTED,
          border:'none', fontFamily:"'DM Mono',monospace", fontSize:13,
          letterSpacing:3, textTransform:'uppercase',
          cursor: finalAmount>0 ? 'pointer' : 'not-allowed',
          fontWeight:500, transition:'all .2s',
        }}>
          Donate ${finalAmount>0?finalAmount.toFixed(2):'0.00'} with PayPal →
        </button>
      </div>

      <p style={{ fontSize:11, color:MUTED, textAlign:'center', lineHeight:1.9, letterSpacing:.3 }}>
        Powered by PayPal · Secured with 256-bit TLS encryption<br />
        Donations are non-refundable and do not grant gameplay advantages.
      </p>
    </div>
  );
}

/* ─── CHANGELOG ─────────────────────────────────────────────── */
function ChangelogPage() {
  const releases = [
    {
      version:'v0.1.0-beta', date:'January 2025', type:'BETA', latest:true,
      changes:[
        {type:'new',text:'Initial public release'},
        {type:'new',text:'Module system with Category support (Combat, Movement, Render, Player, HUD, Misc)'},
        {type:'new',text:'Sprint, Fly, Speed, NoFall modules'},
        {type:'new',text:'Custom HUD with animated watermark'},
        {type:'new',text:'EventBus system for module hooks'},
        {type:'new',text:'Microsoft OAuth2 authentication flow'},
        {type:'fix',text:'Fixed keybind conflicts with vanilla Minecraft'},
        {type:'fix',text:'Fixed module state not persisting on reload'},
      ],
    },
    {
      version:'v0.0.2-alpha', date:'December 2024', type:'ALPHA', latest:false,
      changes:[
        {type:'new',text:'Event system foundation (EventBus, EventHandler annotation)'},
        {type:'new',text:'BoogerClient main entrypoint scaffolded'},
        {type:'fix',text:'Fixed mixin loading order issue'},
        {type:'change',text:'Migrated project from Forge to Fabric'},
      ],
    },
    {
      version:'v0.0.1-alpha', date:'November 2024', type:'ALPHA', latest:false,
      changes:[
        {type:'new',text:'Project initialized with Fabric Loom'},
        {type:'new',text:'Basic mixin proof of concept'},
        {type:'new',text:'GitHub repo & project structure set up'},
      ],
    },
  ];

  const typeColor = {new:ACCENT, fix:'#FF5555', change:'#FF9955'};
  const typeLabel = {new:'NEW', fix:'FIX', change:'CHG'};

  return (
    <div style={{ padding:'80px 40px', maxWidth:800, margin:'0 auto' }}>
      <Label>Release history</Label>
      <PageTitle>CHANGELOG</PageTitle>
      <div style={{ display:'flex', flexDirection:'column', gap:56, marginTop:64 }}>
        {releases.map((rel)=>(
          <div key={rel.version} className="clog-item" style={{
            borderLeft:`2px solid ${rel.latest?ACCENT:BORDER}`,
            paddingLeft:32,
          }}>
            <div style={{ display:'flex', alignItems:'center', gap:14, marginBottom:8, flexWrap:'wrap' }}>
              <span style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:30, letterSpacing:3 }}>{rel.version}</span>
              <span style={{
                fontSize:9, letterSpacing:2,
                border:`1px solid ${rel.latest?ACCENT:BORDER}`,
                padding:'3px 8px', color:rel.latest?ACCENT:MUTED,
              }}>{rel.type}</span>
              <span style={{ fontSize:11, color:MUTED, marginLeft:'auto' }}>{rel.date}</span>
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:10, marginTop:20 }}>
              {rel.changes.map((c,ci)=>(
                <div key={ci} style={{ display:'flex', gap:12, alignItems:'flex-start' }}>
                  <span style={{
                    fontSize:9, letterSpacing:1, color:typeColor[c.type],
                    border:`1px solid ${typeColor[c.type]}`, padding:'2px 6px',
                    flexShrink:0, marginTop:3,
                  }}>{typeLabel[c.type]}</span>
                  <span style={{ fontSize:13, color:MUTED, lineHeight:1.7 }}>{c.text}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── FOOTER ─────────────────────────────────────────────────── */
function Footer({ setPage }) {
  return (
    <footer style={{
      borderTop:`1px solid ${BORDER}`, padding:'56px 40px 40px',
      display:'flex', justifyContent:'space-between', alignItems:'flex-start',
      flexWrap:'wrap', gap:40,
    }}>
      <div>
        <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:18, letterSpacing:4, color:ACCENT, marginBottom:8 }}>
          BOOGER<span style={{color:TEXT}}>CLIENT</span>
        </div>
        <div style={{ fontSize:11, color:MUTED, lineHeight:1.9 }}>
          Free & open source Minecraft client.<br />
          All Versions
        </div>
      </div>
      <div style={{ display:'flex', gap:56, flexWrap:'wrap' }}>
        <FooterCol title="Navigate" links={NAV_ITEMS} setPage={setPage} />
        <FooterCol title="Links" links={['GitHub','Discord','Modrinth']} />
      </div>
      <div style={{ width:'100%', borderTop:`1px solid ${BORDER}`, paddingTop:24,
        display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:12 }}>
        <span style={{ fontSize:11, color:MUTED }}>© 2025 Booger Client. All rights reserved.</span>
        <span style={{ fontSize:11, color:MUTED }}>Not affiliated with Mojang or Microsoft.</span>
      </div>
    </footer>
  );
}

function FooterCol({ title, links, setPage }) {
  return (
    <div>
      <div style={{ fontSize:10, letterSpacing:3, color:MUTED, textTransform:'uppercase', marginBottom:16 }}>{title}</div>
      <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
        {links.map(l=>(
          <button key={l} onClick={()=>setPage&&setPage(l)} style={{
            background:'none', border:'none', textAlign:'left',
            fontSize:13, color:MUTED, cursor:'pointer', letterSpacing:.5,
            fontFamily:"'DM Mono',monospace",
            transition:'color .2s',
          }}
          onMouseEnter={e=>e.target.style.color=TEXT}
          onMouseLeave={e=>e.target.style.color=MUTED}
          >{l}</button>
        ))}
      </div>
    </div>
  );
}

/* ─── SHARED COMPONENTS ─────────────────────────────────────── */
function Btn({ children, primary, onClick, style: s }) {
  const [hov, setHov] = useState(false);
  return (
    <button onClick={onClick} className={primary?'glowbtn':''} style={{
      background: primary ? ACCENT : 'transparent',
      color: primary ? '#000' : hov ? ACCENT : TEXT,
      border: primary ? 'none' : `1px solid ${hov?ACCENT:BORDER}`,
      padding:'14px 34px',
      fontFamily:"'DM Mono',monospace", fontSize:12,
      letterSpacing:2, textTransform:'uppercase',
      cursor:'pointer', fontWeight: primary?500:400,
      transition:'all .2s', ...s,
    }}
    onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}>
      {children}
    </button>
  );
}

function Tag({ children, active }) {
  return (
    <div style={{
      fontSize:9, letterSpacing:2,
      color: active?ACCENT:MUTED,
      border:`1px solid ${active?ACCENT:BORDER}`,
      padding:'3px 8px', textTransform:'uppercase',
    }}>{children}</div>
  );
}

function Label({ children }) {
  return <div style={{ fontSize:10, letterSpacing:5, color:ACCENT, marginBottom:16, textTransform:'uppercase' }}>{children}</div>;
}

function SectionLabel({ children }) {
  return <div style={{ fontSize:11, letterSpacing:3, color:MUTED, textTransform:'uppercase', marginBottom:16 }}>{children}</div>;
}

function PageTitle({ children }) {
  return (
    <h1 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(48px,8vw,80px)', letterSpacing:6, marginBottom:8, lineHeight:1 }}>
      {children}
    </h1>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(36px,5vw,60px)', letterSpacing:4, lineHeight:1.1 }}>
      {children}
    </h2>
  );
}