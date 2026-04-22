"use client";

import { useState, useEffect } from "react";

const ACCENT = '#7CFF50';
const BG = '#080808';
const SURFACE = '#111111';
const BORDER = '#1E1E1E';
const TEXT = '#F0F0F0';
const MUTED = '#555555';

const NAV_ITEMS = ['Home','Features','Download','Shop','Donate','Account','Roadmap','FAQ','Staff','Terms','Changelog'];

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
  input,textarea,select{-webkit-appearance:none;border-radius:0 !important;outline:none;}
  .shopcard{transition:border-color .2s;}
  .clog-item{transition:border-left-color .2s;}
  .clog-item:hover{border-left-color:#7CFF50 !important;}
  .navbtn:hover{color:#7CFF50 !important;}
  .staffcard:hover{border-color:#7CFF50 !important;transform:translateY(-3px);}
  .staffcard{transition:all .2s ease;}
  .faqitem{transition:border-color .2s;}
  .faqitem:hover{border-color:#333 !important;}
`;

export default function BoogerClientSite() {
  const [page, setPage] = useState('Home');
  const [easterEgg, setEasterEgg] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => { window.scrollTo(0, 0); setMenuOpen(false); }, [page]);

  return (
    <div style={{ background: BG, minHeight: '100vh', fontFamily: "'DM Mono',monospace", color: TEXT }}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <Nav page={page} setPage={setPage} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      {easterEgg && (
        <div onClick={() => setEasterEgg(false)} style={{
          position: 'fixed', inset: 0, zIndex: 9999,
          background: 'rgba(0,0,0,0.95)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer',
        }}>
          <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize: 32, letterSpacing: 6, color: '#39FF14', marginBottom: 24 }}>
            YOU FOUND IT 👾
          </div>
          <img src="/easter.gif" alt="easter egg" style={{
            maxWidth: '80vw', maxHeight: '60vh', borderRadius: 12,
            border: '3px solid #39FF14',
            boxShadow: '0 0 60px rgba(57,255,20,0.4)',
          }}/>
          <div style={{ marginTop: 24, color: '#555', fontSize: 12, letterSpacing: 2 }}>
            click anywhere to close
          </div>
        </div>
      )}

      <main style={{ paddingTop: 64 }}>
        {page === 'Home'      && <HomePage      setPage={setPage} setEasterEgg={setEasterEgg} />}
        {page === 'Features'  && <FeaturesPage  />}
        {page === 'Download'  && <DownloadPage  />}
        {page === 'Shop'      && <ShopPage      />}
        {page === 'Donate'    && <DonatePage    />}
        {page === 'Account'   && <AccountPage   />}
        {page === 'Roadmap'   && <RoadmapPage   />}
        {page === 'FAQ'       && <FAQPage       />}
        {page === 'Staff'     && <StaffPage     />}
        {page === 'Terms'     && <TermsPage     />}
        {page === 'Changelog' && <ChangelogPage />}
      </main>
      <Footer setPage={setPage} />
    </div>
  );
}

/* ─── NAV ─────────────────────────────────────────────────── */
function Nav({ page, setPage, menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  const primary = ['Home','Features','Download','Shop','Donate'];
  const secondary = ['Account','Roadmap','FAQ','Staff','Terms','Changelog'];

  return (
    <nav style={{
      position:'fixed',top:0,left:0,right:0,zIndex:100,
      background: scrolled ? 'rgba(8,8,8,0.97)' : 'rgba(8,8,8,0.85)',
      backdropFilter:'blur(16px)',
      borderBottom:`1px solid ${scrolled?BORDER:'transparent'}`,
      transition:'all .3s ease',
    }}>
      <div style={{ height:64, display:'flex', alignItems:'center', padding:'0 40px', justifyContent:'space-between' }}>
        <div onClick={() => setPage('Home')} style={{ cursor:'pointer', userSelect:'none' }}>
          <img src="/logo.png" alt="Booger Client" style={{ height:52, width:'auto', objectFit:'contain' }}/>
        </div>
        <div style={{ display:'flex', gap:20, alignItems:'center', flexWrap:'wrap' }}>
          {primary.map(item => (
            <button key={item} className="navbtn" onClick={() => setPage(item)} style={{
              background:'none', border:'none', cursor:'pointer',
              fontFamily:"'DM Mono',monospace", fontSize:11,
              letterSpacing:1.5, color: page===item ? ACCENT : MUTED,
              textTransform:'uppercase', transition:'color .2s',
              borderBottom:`1px solid ${page===item?ACCENT:'transparent'}`,
              paddingBottom:2,
            }}>{item}</button>
          ))}
          <div style={{ position:'relative' }}>
            <button onClick={()=>setMenuOpen(!menuOpen)} style={{
              background:'none', border:`1px solid ${BORDER}`, cursor:'pointer',
              fontFamily:"'DM Mono',monospace", fontSize:10,
              letterSpacing:1.5, color:MUTED, padding:'5px 12px',
              textTransform:'uppercase', transition:'all .2s',
            }}>More ▾</button>
            {menuOpen && (
              <div style={{
                position:'absolute', top:36, right:0, background:'#0e0e0e',
                border:`1px solid ${BORDER}`, minWidth:160, zIndex:200,
              }}>
                {secondary.map(item=>(
                  <button key={item} onClick={()=>setPage(item)} style={{
                    display:'block', width:'100%', textAlign:'left',
                    background: page===item?'rgba(124,255,80,0.07)':'none',
                    border:'none', borderBottom:`1px solid ${BORDER}`,
                    cursor:'pointer', fontFamily:"'DM Mono',monospace",
                    fontSize:11, letterSpacing:1.5,
                    color: page===item?ACCENT:MUTED,
                    textTransform:'uppercase', padding:'12px 16px',
                    transition:'color .2s',
                  }}>{item}</button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

/* ─── HOME ────────────────────────────────────────────────── */
function HomePage({ setPage, setEasterEgg }) {
  return (
    <div>
      <section style={{
        minHeight:'100vh', display:'flex', flexDirection:'column',
        justifyContent:'center', alignItems:'center', textAlign:'center',
        padding:'0 40px', position:'relative', overflow:'hidden',
      }}>
        <div style={{
          position:'absolute', inset:0,
          backgroundImage:`linear-gradient(rgba(124,255,80,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(124,255,80,.035) 1px,transparent 1px)`,
          backgroundSize:'60px 60px', pointerEvents:'none',
        }}/>
        <div style={{
          position:'absolute', top:'45%', left:'50%', transform:'translate(-50%,-50%)',
          width:700, height:700,
          background:'radial-gradient(circle,rgba(124,255,80,.07) 0%,transparent 68%)',
          pointerEvents:'none',
        }}/>
        <div style={{ position:'relative', zIndex:1 }}>
          <div className="fu1" style={{ fontSize:10, letterSpacing:6, color:ACCENT, textTransform:'uppercase', marginBottom:28 }}>
            All Versions · Free & Open Source
          </div>
          <div className="fu2" style={{ marginBottom:8 }}>
            <img src="/logo.png" alt="Booger Client" style={{ width:'min(520px,85vw)', height:'auto', objectFit:'contain', filter:'drop-shadow(0 0 30px rgba(57,255,20,0.4))' }}/>
          </div>
          <p className="fu3" style={{ fontSize:13, color:MUTED, marginTop:32, marginBottom:48, letterSpacing:.5, lineHeight:1.9, maxWidth:460 }}>
            A sleek, lightweight Minecraft client.<br/>
            Modules. HUD. Authentication. Built different.
          </p>
          <div className="fu4" style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap', alignItems:'center' }}>
            <Btn primary onClick={() => setPage('Download')}>↓ Download Free</Btn>
            <button onClick={() => setEasterEgg(true)} style={{
              width:38, height:38, borderRadius:'50%',
              background:'transparent', border:'1px solid #1e1e1e',
              color:'#2a2a2a', fontSize:16, fontWeight:700,
              cursor:'pointer', fontFamily:"'DM Mono',monospace",
              transition:'all .2s ease', display:'flex',
              alignItems:'center', justifyContent:'center', flexShrink:0,
            }}
            onMouseEnter={e=>{ e.currentTarget.style.borderColor='#39FF14'; e.currentTarget.style.color='#39FF14'; }}
            onMouseLeave={e=>{ e.currentTarget.style.borderColor='#1e1e1e'; e.currentTarget.style.color='#2a2a2a'; }}>
              ?
            </button>
            <Btn onClick={() => setPage('Account')}>Create Account</Btn>
          </div>
        </div>
        <div style={{ position:'absolute', bottom:36, left:'50%', transform:'translateX(-50%)', color:MUTED, fontSize:10, letterSpacing:4, textTransform:'uppercase' }}>scroll ↓</div>
      </section>

      {/* Stats */}
      <section style={{ borderTop:`1px solid ${BORDER}`, borderBottom:`1px solid ${BORDER}`, padding:'36px 40px', display:'flex', justifyContent:'center', gap:80, flexWrap:'wrap' }}>
        {[['All Versions','MC Support'],['20+','Modules'],['Free','Always'],['Open Source','GitHub']].map(([v,l])=>(
          <div key={l} style={{ textAlign:'center' }}>
            <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:38, color:ACCENT, letterSpacing:2 }}>{v}</div>
            <div style={{ fontSize:10, color:MUTED, letterSpacing:2, textTransform:'uppercase', marginTop:4 }}>{l}</div>
          </div>
        ))}
      </section>

      {/* Features preview */}
      <section style={{ padding:'112px 40px', maxWidth:1200, margin:'0 auto' }}>
        <Label>What's inside</Label>
        <SectionTitle>Built for players,<br/><span style={{color:ACCENT}}>by players.</span></SectionTitle>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:20, marginTop:56 }}>
          {[
            {icon:'⚡',title:'Auto Sprint',desc:'Always-on sprint without holding the key. Smooth, seamless, and efficient.'},
            {icon:'🎨',title:'Custom HUD',desc:'Watermark, armor display, FPS counter, coords and more. Fully styled.'},
            {icon:'👁️',title:'Fullbright',desc:'See everything clearly in dark caves and at night. No more getting lost.'},
            {icon:'🌍',title:'World Tools',desc:'Chunk borders, light levels, biome display, time changer and more.'},
          ].map(f=>(
            <div key={f.title} className="fcard" style={{ border:`1px solid ${BORDER}`, padding:'32px 28px' }}>
              <div style={{ fontSize:28, marginBottom:16 }}>{f.icon}</div>
              <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:22, letterSpacing:2, marginBottom:10 }}>{f.title}</div>
              <div style={{ fontSize:12, color:MUTED, lineHeight:1.8 }}>{f.desc}</div>
            </div>
          ))}
        </div>
        <div style={{ textAlign:'center', marginTop:40 }}>
          <Btn onClick={()=>setPage('Features')}>View All Features →</Btn>
        </div>
      </section>

      {/* Discord CTA */}
      <section style={{ margin:'0 40px', border:`1px solid ${BORDER}`, padding:'56px 48px', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:32, position:'relative', overflow:'hidden', background:'rgba(88,101,242,0.04)' }}>
        <div style={{ position:'absolute', right:-80, top:-80, width:300, height:300, background:'radial-gradient(circle,rgba(88,101,242,.06) 0%,transparent 70%)', pointerEvents:'none' }}/>
        <div>
          <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:36, letterSpacing:4, marginBottom:10 }}>JOIN THE COMMUNITY</div>
          <div style={{ fontSize:13, color:MUTED, lineHeight:1.8, maxWidth:480 }}>Thousands of players are already in the Booger Client Discord. Get updates, report bugs, and hang out.</div>
        </div>
        <Btn onClick={()=>window.open('https://discord.gg/boogerclient','_blank')}>Join Discord →</Btn>
      </section>

      {/* Roadmap teaser */}
      <section style={{ padding:'112px 40px', maxWidth:1200, margin:'0 auto' }}>
        <Label>What's coming</Label>
        <SectionTitle>The <span style={{color:ACCENT}}>Roadmap</span></SectionTitle>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:16, marginTop:48 }}>
          {[
            {phase:'Phase 1',title:'Core Client',status:'IN PROGRESS',color:ACCENT},
            {phase:'Phase 2',title:'Module System',status:'PLANNED',color:'#FF9955'},
            {phase:'Phase 3',title:'Shop & Cosmetics',status:'PLANNED',color:MUTED},
            {phase:'Phase 4',title:'Launcher',status:'PLANNED',color:MUTED},
          ].map(r=>(
            <div key={r.phase} style={{ border:`1px solid ${BORDER}`, padding:'24px 20px' }}>
              <div style={{ fontSize:10, letterSpacing:3, color:r.color, marginBottom:8, textTransform:'uppercase' }}>{r.phase}</div>
              <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:22, letterSpacing:2, marginBottom:12 }}>{r.title}</div>
              <div style={{ fontSize:10, letterSpacing:2, color:r.color, border:`1px solid ${r.color}`, display:'inline-block', padding:'2px 8px' }}>{r.status}</div>
            </div>
          ))}
        </div>
        <div style={{ textAlign:'center', marginTop:32 }}>
          <Btn onClick={()=>setPage('Roadmap')}>Full Roadmap →</Btn>
        </div>
      </section>

      {/* Donate CTA */}
      <section style={{ margin:'0 40px 100px', border:`1px solid ${BORDER}`, padding:'56px 48px', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:32, position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', right:-80, top:-80, width:300, height:300, background:'radial-gradient(circle,rgba(124,255,80,.06) 0%,transparent 70%)', pointerEvents:'none' }}/>
        <div>
          <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:36, letterSpacing:4, marginBottom:10 }}>ENJOY THE CLIENT?</div>
          <div style={{ fontSize:13, color:MUTED, lineHeight:1.8, maxWidth:480 }}>Booger Client is and always will be free. If you want to support hosting costs and future development, any amount means a lot.</div>
        </div>
        <Btn primary onClick={()=>setPage('Donate')}>Donate via PayPal →</Btn>
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
                <div key={mod}
                  style={{ padding:'8px 16px', border:`1px solid ${BORDER}`, fontSize:12, letterSpacing:.5, color:TEXT, transition:'all .2s', cursor:'default' }}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor=cat.color;e.currentTarget.style.color=cat.color;}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor=BORDER;e.currentTarget.style.color=TEXT;}}
                >{mod}</div>
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
      <Label>Get the client</Label>
      <PageTitle>DOWNLOAD</PageTitle>
      <div style={{ border:'2px solid #2a2a2a', marginTop:40, marginBottom:40, position:'relative', overflow:'hidden', background:'rgba(10,10,10,0.95)', padding:'60px 40px', textAlign:'center' }}>
        <svg width="100%" height="32" viewBox="0 0 800 32" preserveAspectRatio="xMidYMid meet" style={{position:'absolute',top:0,left:0}}>
          {Array.from({length:20}).map((_,i)=>(
            <g key={i} transform={`translate(${i*44},4)`}>
              <rect x="0" y="4" width="32" height="16" rx="8" fill="none" stroke="#444" strokeWidth="3"/>
              <rect x="10" y="0" width="12" height="24" rx="6" fill="none" stroke="#444" strokeWidth="3"/>
            </g>
          ))}
        </svg>
        <svg width="100%" height="32" viewBox="0 0 800 32" preserveAspectRatio="xMidYMid meet" style={{position:'absolute',bottom:0,left:0}}>
          {Array.from({length:20}).map((_,i)=>(
            <g key={i} transform={`translate(${i*44},4)`}>
              <rect x="0" y="4" width="32" height="16" rx="8" fill="none" stroke="#444" strokeWidth="3"/>
              <rect x="10" y="0" width="12" height="24" rx="6" fill="none" stroke="#444" strokeWidth="3"/>
            </g>
          ))}
        </svg>
        <svg height="100%" width="32" viewBox="0 0 32 400" preserveAspectRatio="xMidYMid meet" style={{position:'absolute',left:0,top:0,height:'100%'}}>
          {Array.from({length:15}).map((_,i)=>(
            <g key={i} transform={`translate(4,${i*44})`}>
              <rect x="4" y="0" width="16" height="32" rx="8" fill="none" stroke="#444" strokeWidth="3"/>
              <rect x="0" y="10" width="24" height="12" rx="6" fill="none" stroke="#444" strokeWidth="3"/>
            </g>
          ))}
        </svg>
        <svg height="100%" width="32" viewBox="0 0 32 400" preserveAspectRatio="xMidYMid meet" style={{position:'absolute',right:0,top:0,height:'100%'}}>
          {Array.from({length:15}).map((_,i)=>(
            <g key={i} transform={`translate(4,${i*44})`}>
              <rect x="4" y="0" width="16" height="32" rx="8" fill="none" stroke="#444" strokeWidth="3"/>
              <rect x="0" y="10" width="24" height="12" rx="6" fill="none" stroke="#444" strokeWidth="3"/>
            </g>
          ))}
        </svg>
        <div style={{ fontSize:72, marginBottom:16, filter:'grayscale(1) opacity(0.6)' }}>🔒</div>
        <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:48, letterSpacing:8, color:'#444', marginBottom:12 }}>DOWNLOAD LOCKED</div>
        <div style={{ fontSize:13, color:'#3a3a3a', letterSpacing:1, lineHeight:1.9, maxWidth:480, margin:'0 auto' }}>
          Booger Client is currently in development.<br/>The download will be unlocked when the first stable release is ready.<br/>
          <span style={{ color:'#555' }}>Stay tuned — it's coming soon.</span>
        </div>
        <div style={{ marginTop:32, display:'inline-flex', alignItems:'center', gap:12, border:'1px solid #2a2a2a', padding:'12px 28px', color:'#333', fontFamily:"'DM Mono',monospace", fontSize:11, letterSpacing:3, textTransform:'uppercase', cursor:'not-allowed', userSelect:'none' }}>
          ⛓️ &nbsp; COMING SOON &nbsp; ⛓️
        </div>
      </div>
      <div style={{ border:`1px solid ${BORDER}`, padding:32, marginBottom:40 }}>
        <SectionLabel>Requirements</SectionLabel>
        {[['Minecraft','All Versions'],['Fabric Loader','Latest'],['Fabric API','Latest (from Modrinth)'],['Java','17 or newer']].map(([k,v])=>(
          <div key={k} style={{ display:'flex', justifyContent:'space-between', padding:'12px 0', borderBottom:`1px solid ${BORDER}`, fontSize:13 }}>
            <span style={{ color:MUTED }}>{k}</span><span style={{ color:TEXT }}>{v}</span>
          </div>
        ))}
      </div>
      <SectionLabel>Installation (when available)</SectionLabel>
      {['Install Fabric Loader for your Minecraft version from fabricmc.net','Download Fabric API and drop it into your /mods folder','Download BoogerClient.jar from the button above','Place BoogerClient.jar into your /mods folder','Launch Minecraft using the Fabric profile','Press Right Shift in-game to open the module menu'].map((step,i)=>(
        <div key={i} style={{ display:'flex', gap:20, padding:'16px 0', borderBottom:`1px solid ${BORDER}` }}>
          <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:18, color:ACCENT, letterSpacing:2, minWidth:28, flexShrink:0 }}>{String(i+1).padStart(2,'0')}</div>
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
      <p style={{ color:MUTED, fontSize:13, marginBottom:56, lineHeight:1.8, letterSpacing:.5 }}>The client is free forever. These cosmetics just make you look cool.</p>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:20 }}>
        {items.map(item=>(
          <div key={item.id} className="shopcard" style={{ border:`1px solid ${inCart(item.id)?ACCENT:BORDER}`, padding:28 }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:16 }}>
              <Tag active={inCart(item.id)}>{item.tag}</Tag>
              <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:26, color:ACCENT, letterSpacing:2 }}>${item.price.toFixed(2)}</div>
            </div>
            <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:22, letterSpacing:2, marginBottom:10 }}>{item.name}</div>
            <div style={{ fontSize:12, color:MUTED, lineHeight:1.8, marginBottom:24 }}>{item.desc}</div>
            <button onClick={()=>toggle(item.id)} style={{ width:'100%', padding:'10px 0', background:inCart(item.id)?ACCENT:'transparent', color:inCart(item.id)?'#000':TEXT, border:`1px solid ${inCart(item.id)?ACCENT:BORDER}`, fontFamily:"'DM Mono',monospace", fontSize:11, letterSpacing:2, textTransform:'uppercase', cursor:'pointer', transition:'all .2s' }}>
              {inCart(item.id) ? '✓ Added' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
      {cart.length>0 && (
        <div style={{ marginTop:32, border:`1px solid ${ACCENT}`, padding:'20px 28px', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:16 }}>
          <div style={{ fontSize:13, letterSpacing:.5 }}>
            <span style={{ color:MUTED }}>{cart.length} item{cart.length!==1?'s':''} · </span>
            <span style={{ color:ACCENT, fontFamily:"'Bebas Neue',sans-serif", fontSize:20 }}>${total.toFixed(2)}</span>
          </div>
          <Btn primary>Checkout →</Btn>
        </div>
      )}
    </div>
  );
}

/* ─── DONATE ────────────────────────────────────────────────── */
function DonatePage() {
  const [amount, setAmount] = useState(5);
  const [custom, setCustom] = useState('');
  const [note, setNote]     = useState('');
  const presets = [3, 5, 10, 25];
  const finalAmount = custom ? parseFloat(custom)||0 : amount;
  const handleDonate = () => {
    if (finalAmount <= 0) return;
    window.open(`https://www.paypal.me/BoogerClient/${finalAmount.toFixed(2)}`, '_blank');
  };
  return (
    <div style={{ padding:'80px 40px', maxWidth:680, margin:'0 auto' }}>
      <Label>Support the project</Label>
      <PageTitle>DONATE</PageTitle>
      <p style={{ color:MUTED, fontSize:13, marginBottom:56, lineHeight:1.9, letterSpacing:.5 }}>Booger Client is free forever. Donations cover servers, the domain, and development time. Every dollar genuinely helps. 🙏</p>
      <div style={{ border:`1px solid ${BORDER}`, padding:28, marginBottom:36 }}>
        <SectionLabel>Where your money goes</SectionLabel>
        {[['🖥️','Server hosting & CDN'],['🌐','Domain & SSL costs'],['⏱️','Development time & updates'],['☕','Keeping the dev caffeinated']].map(([icon,label])=>(
          <div key={label} style={{ display:'flex', gap:16, padding:'10px 0', borderBottom:`1px solid ${BORDER}`, fontSize:13, color:MUTED }}><span>{icon}</span><span>{label}</span></div>
        ))}
      </div>
      <div style={{ marginBottom:32 }}>
        <SectionLabel>Choose an amount (USD)</SectionLabel>
        <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
          {presets.map(p=>{
            const active = amount===p && !custom;
            return (
              <button key={p} onClick={()=>{setAmount(p);setCustom('');}} style={{ padding:'12px 28px', background:active?ACCENT:'transparent', color:active?'#000':TEXT, border:`1px solid ${active?ACCENT:BORDER}`, fontFamily:"'DM Mono',monospace", fontSize:15, cursor:'pointer', transition:'all .2s' }}>${p}</button>
            );
          })}
          <input type="number" placeholder="Custom $" value={custom} onChange={e=>setCustom(e.target.value)} min="1" style={{ padding:'12px 14px', background:'transparent', border:`1px solid ${custom?ACCENT:BORDER}`, color:TEXT, width:130, fontFamily:"'DM Mono',monospace", fontSize:14 }}/>
        </div>
      </div>
      <div style={{ marginBottom:40 }}>
        <SectionLabel>Leave a note (optional)</SectionLabel>
        <textarea value={note} onChange={e=>setNote(e.target.value)} placeholder="Say something nice..." rows={3} style={{ width:'100%', background:SURFACE, border:`1px solid ${BORDER}`, color:TEXT, padding:16, fontFamily:"'DM Mono',monospace", fontSize:13, resize:'vertical', lineHeight:1.7 }}/>
      </div>
      <div style={{ border:`1px solid ${BORDER}`, padding:28, marginBottom:20 }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:24 }}>
          <span style={{ fontSize:12, color:MUTED, letterSpacing:1 }}>Total donation</span>
          <span style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:32, color:ACCENT, letterSpacing:2 }}>${finalAmount>0?finalAmount.toFixed(2):'—'}</span>
        </div>
        <button onClick={handleDonate} className={finalAmount>0?'glowbtn':''} style={{ width:'100%', padding:'16px 0', background:finalAmount>0?ACCENT:BORDER, color:finalAmount>0?'#000':MUTED, border:'none', fontFamily:"'DM Mono',monospace", fontSize:13, letterSpacing:3, textTransform:'uppercase', cursor:finalAmount>0?'pointer':'not-allowed', fontWeight:500, transition:'all .2s' }}>
          Donate ${finalAmount>0?finalAmount.toFixed(2):'0.00'} with PayPal →
        </button>
      </div>
      <p style={{ fontSize:11, color:MUTED, textAlign:'center', lineHeight:1.9, letterSpacing:.3 }}>Powered by PayPal · Secured with 256-bit TLS encryption<br/>Donations are non-refundable and do not grant gameplay advantages.</p>
    </div>
  );
}

/* ─── ACCOUNT ───────────────────────────────────────────────── */
function AccountPage() {
  const [tab, setTab] = useState('signup');
  const [form, setForm] = useState({ username:'', email:'', password:'', confirm:'' });
  const [done, setDone] = useState(false);
  const update = k => e => setForm(f=>({...f,[k]:e.target.value}));

  if (done) return (
    <div style={{ padding:'80px 40px', maxWidth:500, margin:'0 auto', textAlign:'center' }}>
      <div style={{ fontSize:56, marginBottom:24 }}>🎉</div>
      <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:48, letterSpacing:4, color:ACCENT, marginBottom:16 }}>WELCOME!</div>
      <p style={{ color:MUTED, fontSize:13, lineHeight:1.9 }}>Account created for <span style={{color:TEXT}}>{form.username}</span>. Once Booger Client launches you'll be able to log in and access your profile, cosmetics and more.</p>
      <button onClick={()=>setDone(false)} style={{ marginTop:40, background:'transparent', color:MUTED, border:`1px solid ${BORDER}`, padding:'12px 28px', fontFamily:"'DM Mono',monospace", fontSize:11, letterSpacing:2, textTransform:'uppercase', cursor:'pointer' }}>← Back</button>
    </div>
  );

  return (
    <div style={{ padding:'80px 40px', maxWidth:520, margin:'0 auto' }}>
      <Label>Community account</Label>
      <PageTitle>ACCOUNT</PageTitle>
      <p style={{ color:MUTED, fontSize:13, marginBottom:40, lineHeight:1.9 }}>Create a Booger Client community account to access the shop, track your cosmetics, and be ready for launch day.</p>

      {/* Tabs */}
      <div style={{ display:'flex', borderBottom:`1px solid ${BORDER}`, marginBottom:40 }}>
        {['signup','login'].map(t=>(
          <button key={t} onClick={()=>setTab(t)} style={{ flex:1, padding:'14px 0', background:'none', border:'none', borderBottom:`2px solid ${tab===t?ACCENT:'transparent'}`, color:tab===t?ACCENT:MUTED, fontFamily:"'DM Mono',monospace", fontSize:11, letterSpacing:2, textTransform:'uppercase', cursor:'pointer', transition:'all .2s' }}>
            {t==='signup'?'Create Account':'Sign In'}
          </button>
        ))}
      </div>

      {tab==='signup' ? (
        <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
          <Field label="Minecraft Username" placeholder="Steve" value={form.username} onChange={update('username')}/>
          <Field label="Email Address" placeholder="you@email.com" type="email" value={form.email} onChange={update('email')}/>
          <Field label="Password" placeholder="••••••••" type="password" value={form.password} onChange={update('password')}/>
          <Field label="Confirm Password" placeholder="••••••••" type="password" value={form.confirm} onChange={update('confirm')}/>
          <div style={{ border:`1px solid ${BORDER}`, padding:16, fontSize:12, color:MUTED, lineHeight:1.8, marginTop:8 }}>
            By creating an account you agree to our <span style={{color:ACCENT,cursor:'pointer'}}>Terms of Service</span>. Your account will be ready for Booger Client launch day.
          </div>
          <button onClick={()=>{ if(form.username&&form.email&&form.password) setDone(true); }} style={{ padding:'16px 0', background:ACCENT, color:'#000', border:'none', fontFamily:"'DM Mono',monospace", fontSize:13, letterSpacing:3, textTransform:'uppercase', cursor:'pointer', fontWeight:500, marginTop:8 }}>
            Create Account →
          </button>
        </div>
      ) : (
        <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
          <Field label="Email or Username" placeholder="you@email.com" value={form.email} onChange={update('email')}/>
          <Field label="Password" placeholder="••••••••" type="password" value={form.password} onChange={update('password')}/>
          <button style={{ padding:'16px 0', background:ACCENT, color:'#000', border:'none', fontFamily:"'DM Mono',monospace", fontSize:13, letterSpacing:3, textTransform:'uppercase', cursor:'pointer', fontWeight:500, marginTop:8 }}>
            Sign In →
          </button>
          <div style={{ textAlign:'center', fontSize:12, color:MUTED }}>Forgot password? <span style={{color:ACCENT,cursor:'pointer'}}>Reset it</span></div>
        </div>
      )}
    </div>
  );
}

/* ─── ROADMAP ───────────────────────────────────────────────── */
function RoadmapPage() {
  const phases = [
    { phase:'Phase 1', title:'Core Client', status:'IN PROGRESS', color:ACCENT, items:['Fabric mod scaffold','Event system (EventBus)','Module base class & Category system','BoogerClient main entrypoint','Microsoft OAuth authentication'] },
    { phase:'Phase 2', title:'Module System', status:'PLANNED', color:'#FF9955', items:['ModuleManager','Sprint module','Fullbright module','HUD watermark','Keybind system','Config save/load'] },
    { phase:'Phase 3', title:'HUD & Visuals', status:'PLANNED', color:'#5599FF', items:['Full HUD system','FPS counter','Armor display','Coords display','Custom crosshair','CPS counter'] },
    { phase:'Phase 4', title:'Shop & Cosmetics', status:'PLANNED', color:'#CC88FF', items:['Backend API (Node.js)','Cosmetic system','Cape rendering','HUD themes','User profiles'] },
    { phase:'Phase 5', title:'Public Launch', status:'PLANNED', color:MUTED, items:['Download unlocked','Website fully live','Discord community','First stable release','Launcher (Tauri)'] },
  ];
  return (
    <div style={{ padding:'80px 40px', maxWidth:860, margin:'0 auto' }}>
      <Label>Development progress</Label>
      <PageTitle>ROADMAP</PageTitle>
      <p style={{ color:MUTED, fontSize:13, marginBottom:64, lineHeight:1.8 }}>Here's exactly what we're building and in what order. Updated as development progresses.</p>
      <div style={{ display:'flex', flexDirection:'column', gap:40 }}>
        {phases.map((p,i)=>(
          <div key={p.phase} style={{ borderLeft:`2px solid ${p.color}`, paddingLeft:32 }}>
            <div style={{ display:'flex', alignItems:'center', gap:14, marginBottom:16, flexWrap:'wrap' }}>
              <span style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:28, letterSpacing:3 }}>{p.phase} — {p.title}</span>
              <span style={{ fontSize:9, letterSpacing:2, border:`1px solid ${p.color}`, padding:'3px 8px', color:p.color }}>{p.status}</span>
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
              {p.items.map((item,j)=>(
                <div key={j} style={{ display:'flex', gap:12, alignItems:'center', fontSize:13, color:MUTED }}>
                  <span style={{ color: i===0&&j<3 ? ACCENT : MUTED }}>{i===0&&j<3 ? '✓' : '○'}</span>
                  <span style={{ color: i===0&&j<3 ? TEXT : MUTED }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── FAQ ───────────────────────────────────────────────────── */
function FAQPage() {
  const [open, setOpen] = useState(null);
  const faqs = [
    { q:'Is Booger Client free?', a:'Yes. Booger Client is completely free to download and use, forever. Cosmetics in the shop are optional and never affect gameplay.' },
    { q:'Is this a hack client?', a:'No. Booger Client is a legitimate utility client. It adds quality-of-life features like auto sprint, fullbright, HUD improvements and world tools — nothing that gives unfair gameplay advantages.' },
    { q:'Will I get banned using Booger Client?', a:'Booger Client does not include any features designed to break server rules. However, always check the rules of any server you play on. We are not responsible for bans resulting from misuse.' },
    { q:'What Minecraft versions are supported?', a:'Booger Client supports all Minecraft versions via Fabric. We aim to stay up to date with new releases shortly after they drop.' },
    { q:'When will the download be available?', a:'We are actively developing the client. The download will be unlocked once we reach a stable, polished first release. Follow our Discord for updates.' },
    { q:'How do I install Booger Client?', a:'Once released, you will need Fabric Loader and Fabric API installed for your Minecraft version. Then simply drop the Booger Client .jar into your mods folder and launch Minecraft.' },
    { q:'Do I need a Booger Client account?', a:'No account is required to use the client. An account is only needed if you want to access shop cosmetics or your community profile.' },
    { q:'How can I report a bug?', a:'Join our Discord server and post in the bug-reports channel. Please include your Minecraft version, Fabric version, and a description of the issue.' },
    { q:'Can I contribute to the project?', a:'Yes! Booger Client is open source. Check out our GitHub repo and feel free to open a pull request. All contributions are welcome.' },
  ];
  return (
    <div style={{ padding:'80px 40px', maxWidth:800, margin:'0 auto' }}>
      <Label>Got questions?</Label>
      <PageTitle>FAQ</PageTitle>
      <div style={{ display:'flex', flexDirection:'column', gap:0, marginTop:48 }}>
        {faqs.map((f,i)=>(
          <div key={i} className="faqitem" style={{ borderBottom:`1px solid ${BORDER}`, borderTop: i===0?`1px solid ${BORDER}`:'none' }}>
            <button onClick={()=>setOpen(open===i?null:i)} style={{ width:'100%', background:'none', border:'none', padding:'20px 0', cursor:'pointer', display:'flex', justifyContent:'space-between', alignItems:'center', gap:16, textAlign:'left' }}>
              <span style={{ fontFamily:"'DM Mono',monospace", fontSize:13, color:TEXT, letterSpacing:.5 }}>{f.q}</span>
              <span style={{ color:ACCENT, fontSize:18, flexShrink:0, transition:'transform .2s', transform:open===i?'rotate(45deg)':'none' }}>+</span>
            </button>
            {open===i && (
              <div style={{ fontSize:13, color:MUTED, lineHeight:1.9, paddingBottom:20, paddingRight:32 }}>{f.a}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── STAFF ─────────────────────────────────────────────────── */
function StaffPage() {
  const staff = [
    { name:'Zackerie', role:'Founder & Lead Dev', tag:'FOUNDER', desc:'Building Booger Client from the ground up. Handles everything from the core client to the website.', color:ACCENT },
    { name:'[Open]', role:'Backend Developer', tag:'HIRING', desc:'We are looking for a Node.js/backend developer to help build the shop and API infrastructure.', color:'#FF9955' },
    { name:'[Open]', role:'UI/UX Designer', tag:'HIRING', desc:'Looking for someone to help design in-game menus and the client HUD.', color:'#5599FF' },
    { name:'[Open]', role:'Community Manager', tag:'HIRING', desc:'Help us grow and moderate the Booger Client Discord community.', color:'#CC88FF' },
  ];
  return (
    <div style={{ padding:'80px 40px', maxWidth:1000, margin:'0 auto' }}>
      <Label>The people behind it</Label>
      <PageTitle>STAFF</PageTitle>
      <p style={{ color:MUTED, fontSize:13, marginBottom:56, lineHeight:1.8 }}>A small but dedicated team building something great. Interested in joining? Reach out on Discord.</p>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:20 }}>
        {staff.map((s,i)=>(
          <div key={i} className="staffcard" style={{ border:`1px solid ${BORDER}`, padding:'28px 24px', position:'relative' }}>
            <div style={{ position:'absolute', top:16, right:16, fontSize:9, letterSpacing:2, border:`1px solid ${s.color}`, padding:'3px 8px', color:s.color }}>{s.tag}</div>
            <div style={{ width:48, height:48, background:`rgba(${s.color==='#7CFF50'?'124,255,80':s.color==='#FF9955'?'255,153,85':s.color==='#5599FF'?'85,153,255':'204,136,255'},.12)`, border:`1px solid ${s.color}`, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:16, fontSize:20 }}>
              {i===0?'👾':'❓'}
            </div>
            <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:22, letterSpacing:2, marginBottom:4 }}>{s.name}</div>
            <div style={{ fontSize:11, color:s.color, letterSpacing:1, marginBottom:16, textTransform:'uppercase' }}>{s.role}</div>
            <div style={{ fontSize:12, color:MUTED, lineHeight:1.8 }}>{s.desc}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop:48, border:`1px solid ${BORDER}`, padding:'28px 32px', textAlign:'center' }}>
        <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:28, letterSpacing:4, marginBottom:12 }}>WANT TO JOIN THE TEAM?</div>
        <p style={{ color:MUTED, fontSize:13, marginBottom:24, lineHeight:1.8 }}>We're always looking for passionate people. Reach out to us on Discord and tell us what you can bring to the project.</p>
        <Btn onClick={()=>window.open('https://discord.gg/boogerclient','_blank')}>Apply on Discord →</Btn>
      </div>
    </div>
  );
}

/* ─── TERMS ─────────────────────────────────────────────────── */
function TermsPage() {
  const sections = [
    { title:'1. Acceptance of Terms', body:'By downloading, installing, or using Booger Client ("the Client"), you agree to be bound by these Terms of Service. If you do not agree, do not use the Client.' },
    { title:'2. Use of the Client', body:'Booger Client is provided for personal, non-commercial use. You may not redistribute, sell, or claim ownership of the Client or any of its components without explicit written permission from the Booger Client team.' },
    { title:'3. Server Rules', body:'You are solely responsible for how you use Booger Client on any Minecraft server. Always check and follow the rules of any server you play on. We are not responsible for bans, penalties, or consequences resulting from your use of the Client on third-party servers.' },
    { title:'4. No Warranty', body:'Booger Client is provided "as is" without any warranty of any kind. We do not guarantee the Client will be error-free, uninterrupted, or compatible with all versions of Minecraft.' },
    { title:'5. Accounts', body:'Community accounts are optional. You are responsible for maintaining the security of your account credentials. We reserve the right to suspend or terminate accounts that violate these terms.' },
    { title:'6. Shop & Purchases', body:'All purchases of cosmetic items are final and non-refundable. Cosmetics are cosmetic only and do not affect gameplay. We reserve the right to modify, discontinue, or update cosmetic items at any time.' },
    { title:'7. Donations', body:'Donations are voluntary and non-refundable. Donating does not grant any special privileges, early access, or guarantees of any kind beyond what is explicitly stated.' },
    { title:'8. Intellectual Property', body:'All content, logos, and assets of Booger Client are the property of the Booger Client team. Booger Client is not affiliated with, endorsed by, or in any way officially connected with Mojang Studios or Microsoft.' },
    { title:'9. Changes to Terms', body:'We reserve the right to update these Terms of Service at any time. Continued use of the Client after changes constitutes acceptance of the new terms.' },
    { title:'10. Contact', body:'For questions about these terms, reach out to us through our Discord server.' },
  ];
  return (
    <div style={{ padding:'80px 40px', maxWidth:800, margin:'0 auto' }}>
      <Label>Legal</Label>
      <PageTitle>TERMS OF SERVICE</PageTitle>
      <p style={{ color:MUTED, fontSize:12, marginBottom:56, letterSpacing:.5 }}>Last updated: April 2026</p>
      <div style={{ display:'flex', flexDirection:'column', gap:36 }}>
        {sections.map((s,i)=>(
          <div key={i}>
            <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:18, letterSpacing:3, marginBottom:12, color:TEXT }}>{s.title}</div>
            <div style={{ fontSize:13, color:MUTED, lineHeight:1.9 }}>{s.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── CHANGELOG ─────────────────────────────────────────────── */
function ChangelogPage() {
  const releases = [
    { version:'v0.1.0-beta', date:'Coming Soon', type:'BETA', latest:true, changes:[
      {type:'new',text:'Initial public release'},
      {type:'new',text:'Module system with Category support'},
      {type:'new',text:'Sprint, Fullbright, AntiAFK modules'},
      {type:'new',text:'Custom HUD with watermark'},
      {type:'new',text:'EventBus system for module hooks'},
      {type:'new',text:'Microsoft OAuth2 authentication'},
      {type:'fix',text:'Fixed keybind conflicts with vanilla Minecraft'},
    ]},
    { version:'v0.0.2-alpha', date:'December 2024', type:'ALPHA', latest:false, changes:[
      {type:'new',text:'Event system foundation'},
      {type:'new',text:'BoogerClient main entrypoint scaffolded'},
      {type:'fix',text:'Fixed mixin loading order issue'},
      {type:'change',text:'Migrated project from Forge to Fabric'},
    ]},
    { version:'v0.0.1-alpha', date:'November 2024', type:'ALPHA', latest:false, changes:[
      {type:'new',text:'Project initialized with Fabric Loom'},
      {type:'new',text:'Basic mixin proof of concept'},
      {type:'new',text:'GitHub repo & project structure set up'},
    ]},
  ];
  const typeColor = {new:ACCENT, fix:'#FF5555', change:'#FF9955'};
  const typeLabel = {new:'NEW', fix:'FIX', change:'CHG'};
  return (
    <div style={{ padding:'80px 40px', maxWidth:800, margin:'0 auto' }}>
      <Label>Release history</Label>
      <PageTitle>CHANGELOG</PageTitle>
      <div style={{ display:'flex', flexDirection:'column', gap:56, marginTop:64 }}>
        {releases.map((rel)=>(
          <div key={rel.version} className="clog-item" style={{ borderLeft:`2px solid ${rel.latest?ACCENT:BORDER}`, paddingLeft:32 }}>
            <div style={{ display:'flex', alignItems:'center', gap:14, marginBottom:8, flexWrap:'wrap' }}>
              <span style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:30, letterSpacing:3 }}>{rel.version}</span>
              <span style={{ fontSize:9, letterSpacing:2, border:`1px solid ${rel.latest?ACCENT:BORDER}`, padding:'3px 8px', color:rel.latest?ACCENT:MUTED }}>{rel.type}</span>
              <span style={{ fontSize:11, color:MUTED, marginLeft:'auto' }}>{rel.date}</span>
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:10, marginTop:20 }}>
              {rel.changes.map((c,ci)=>(
                <div key={ci} style={{ display:'flex', gap:12, alignItems:'flex-start' }}>
                  <span style={{ fontSize:9, letterSpacing:1, color:typeColor[c.type], border:`1px solid ${typeColor[c.type]}`, padding:'2px 6px', flexShrink:0, marginTop:3 }}>{typeLabel[c.type]}</span>
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
  const cols = [
    { title:'Navigate', links:['Home','Features','Download','Shop','Donate'] },
    { title:'Info', links:['Roadmap','FAQ','Staff','Terms','Changelog'] },
    { title:'Community', links:['Discord','GitHub','Modrinth'] },
  ];
  return (
    <footer style={{ borderTop:`1px solid ${BORDER}`, padding:'56px 40px 40px', display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:40 }}>
      <div>
        <img src="/logo.png" alt="Booger Client" style={{ height:60, width:'auto', objectFit:'contain', marginBottom:12 }}/>
        <div style={{ fontSize:11, color:MUTED, lineHeight:1.9 }}>Free & open source Minecraft client.<br/>All Versions · Always Free.</div>
      </div>
      <div style={{ display:'flex', gap:56, flexWrap:'wrap' }}>
        {cols.map(col=>(
          <div key={col.title}>
            <div style={{ fontSize:10, letterSpacing:3, color:MUTED, textTransform:'uppercase', marginBottom:16 }}>{col.title}</div>
            <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
              {col.links.map(l=>(
                <button key={l} onClick={()=>setPage&&setPage(l)} style={{ background:'none', border:'none', textAlign:'left', fontSize:13, color:MUTED, cursor:'pointer', letterSpacing:.5, fontFamily:"'DM Mono',monospace", transition:'color .2s' }}
                  onMouseEnter={e=>e.target.style.color=TEXT}
                  onMouseLeave={e=>e.target.style.color=MUTED}
                >{l}</button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{ width:'100%', borderTop:`1px solid ${BORDER}`, paddingTop:24, display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:12 }}>
        <span style={{ fontSize:11, color:MUTED }}>© 2026 Booger Client. All rights reserved.</span>
        <span style={{ fontSize:11, color:MUTED }}>Not affiliated with Mojang or Microsoft.</span>
      </div>
    </footer>
  );
}

/* ─── SHARED COMPONENTS ─────────────────────────────────────── */
function Btn({ children, primary, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <button onClick={onClick} className={primary?'glowbtn':''} style={{ background:primary?ACCENT:'transparent', color:primary?'#000':hov?ACCENT:TEXT, border:primary?'none':`1px solid ${hov?ACCENT:BORDER}`, padding:'14px 34px', fontFamily:"'DM Mono',monospace", fontSize:12, letterSpacing:2, textTransform:'uppercase', cursor:'pointer', fontWeight:primary?500:400, transition:'all .2s' }}
      onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}>{children}</button>
  );
}
function Tag({ children, active }) {
  return <div style={{ fontSize:9, letterSpacing:2, color:active?ACCENT:MUTED, border:`1px solid ${active?ACCENT:BORDER}`, padding:'3px 8px', textTransform:'uppercase' }}>{children}</div>;
}
function Label({ children }) {
  return <div style={{ fontSize:10, letterSpacing:5, color:ACCENT, marginBottom:16, textTransform:'uppercase' }}>{children}</div>;
}
function SectionLabel({ children }) {
  return <div style={{ fontSize:11, letterSpacing:3, color:MUTED, textTransform:'uppercase', marginBottom:16 }}>{children}</div>;
}
function PageTitle({ children }) {
  return <h1 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(48px,8vw,80px)', letterSpacing:6, marginBottom:8, lineHeight:1 }}>{children}</h1>;
}
function SectionTitle({ children }) {
  return <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(36px,5vw,60px)', letterSpacing:4, lineHeight:1.1 }}>{children}</h2>;
}
function Field({ label, placeholder, type='text', value, onChange }) {
  return (
    <div>
      <div style={{ fontSize:10, letterSpacing:2, color:MUTED, textTransform:'uppercase', marginBottom:8 }}>{label}</div>
      <input type={type} placeholder={placeholder} value={value} onChange={onChange} style={{ width:'100%', background:SURFACE, border:`1px solid ${BORDER}`, color:TEXT, padding:'12px 16px', fontFamily:"'DM Mono',monospace", fontSize:13, letterSpacing:.5 }}/>
    </div>
  );
}