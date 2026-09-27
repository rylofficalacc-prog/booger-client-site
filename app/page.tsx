"use client";

import { useState } from "react";

type Module = {
  name: string;
  icon: string;
  desc: string;
  tag: string;
};

type ShopItem = {
  name: string;
  icon: string;
  type: string;
  desc: string;
  badge?: string;
};

const DISCORD = "https://discord.gg/5HxHgKdfMu";

const modules: Module[] = [
  { name: "Fullbright", icon: "☀", tag: "Visual", desc: "Keeps dark areas bright without changing your world." },
  { name: "Zoom", icon: "⌕", tag: "Utility", desc: "Hold C to zoom and use the mouse wheel to fine tune it." },
  { name: "Toggle Sprint", icon: "⇧", tag: "Movement", desc: "Simple toggle sprint for everyday movement and PvP." },
  { name: "Freelook", icon: "◌", tag: "Camera", desc: "Look around without changing the direction your player is facing." },
  { name: "CPS Counter", icon: "◉", tag: "HUD", desc: "Tracks left and right click speed in a compact HUD element." },
  { name: "Keystrokes", icon: "⌨", tag: "HUD", desc: "Displays WASD, mouse buttons and spacebar with a clean overlay." },
  { name: "Armor HUD", icon: "▣", tag: "HUD", desc: "Keeps armor and durability information visible while you play." },
  { name: "Combo Counter", icon: "×", tag: "HUD", desc: "Tracks your current hit combo during fights." },
  { name: "Reach Display", icon: "↔", tag: "HUD", desc: "Shows the distance of your latest hit." },
  { name: "Potion Effects", icon: "✦", tag: "HUD", desc: "Shows active potion effects in a cleaner layout." },
  { name: "Crosshair", icon: "+", tag: "Visual", desc: "Customize the look of your crosshair." },
  { name: "Auto Respawn", icon: "↻", tag: "Utility", desc: "Automatically respawns you after death." },
];

const shopItems: ShopItem[] = [
  { name: "Neon Slime Wings", icon: "NW", type: "Back Cosmetic", badge: "V19", desc: "Real 3D translucent wings with glowing veins, animated flapping, custom color, glow, size and speed." },
  { name: "Slime Crown", icon: "SC", type: "Head Cosmetic", desc: "A crown with customizable metal and glowing slime gems." },
  { name: "Slime Halo", icon: "SH", type: "Head Cosmetic", desc: "A glowing ring that floats, spins and bobs above your head." },
  { name: "Shoulder Slime", icon: "SS", type: "Companion Cosmetic", desc: "A small slime companion that rides on your shoulder." },
  { name: "Booger Cape", icon: "BC", type: "Cape", desc: "The official Booger Client cape for your player." },
  { name: "Bunny Ears", icon: "BE", type: "Head Cosmetic", desc: "Animated bunny ears built directly into the cosmetic renderer." },
  { name: "Player Pet", icon: "PP", type: "Pet", desc: "A mini player that walks beside you using your skin or any Minecraft username." },
  { name: "Pet Morph", icon: "PM", type: "Morph", desc: "Turn your local player appearance into a supported pet-style morph." },
  { name: "Emotes", icon: "EM", type: "Animation Pack", badge: "19 EMOTES", desc: "Includes Twerk, Backflip, Floss, Spin, Sit, Robot and more through the emote wheel." },
];

const ranks = [
  { name: "OWNER", className: "owner", desc: "Reserved for the Booger Client owner." },
  { name: "ADMIN", className: "admin", desc: "Client-side profile label for administration." },
  { name: "STAFF", className: "staff", desc: "Client-side staff profile label." },
  { name: "BETA", className: "beta", desc: "Label for beta members and testers." },
  { name: "SUPPORTER", className: "supporter", desc: "Supporter identity label for the client." },
  { name: "USER", className: "user", desc: "Default Booger Client profile label." },
];

export default function Page() {
  const [hoveredModule, setHoveredModule] = useState<Module>(modules[0]);
  const [shopFilter, setShopFilter] = useState("All");

  const filteredShop = shopItems.filter((item) =>
    shopFilter === "All" ? true : item.type.toLowerCase().includes(shopFilter.toLowerCase())
  );

  return (
    <main className="page" id="top">
      <style>{`
        .versionPill{display:inline-flex;align-items:center;justify-content:center;padding:8px 13px;margin-bottom:8px;border:1px solid rgba(125,255,103,.4);border-radius:999px;background:rgba(5,13,8,.68);color:#a3ff94;font-size:11px;font-weight:900;letter-spacing:2px;box-shadow:0 0 22px rgba(125,255,103,.12)}
        .statLine{display:flex;align-items:end;gap:12px;margin-top:24px;padding-top:20px;border-top:1px solid rgba(255,255,255,.1)}
        .statLine strong{font-size:46px;line-height:.9;color:var(--green)}
        .statLine span{color:#c8d3cb;font-size:13px;text-transform:uppercase;font-weight:900;letter-spacing:1px}
        .version h2{font-size:clamp(34px,3vw,51px);line-height:.9}
        .shopSection{position:relative;background:radial-gradient(circle at 50% 0%,rgba(125,255,103,.09),transparent 34%),#070b09}
        .shopToolbar{width:min(1180px,100%);margin:0 auto 22px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap}
        .shopFilter{border:1px solid rgba(255,255,255,.14);border-radius:999px;padding:10px 17px;background:#0e1513;color:#cbd6cf;cursor:pointer;font-weight:900;transition:.18s ease}
        .shopFilter:hover,.shopFilter.active{border-color:var(--green);color:#071007;background:var(--green);box-shadow:0 0 22px rgba(125,255,103,.22)}
        .shopGrid{width:min(1180px,100%);margin:0 auto;display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
        .shopCard{overflow:hidden;border:1px solid rgba(255,255,255,.12);border-radius:20px;background:linear-gradient(145deg,#101a16,#0a100d);box-shadow:0 20px 40px rgba(0,0,0,.24);transition:.2s ease}
        .shopCard:hover{transform:translateY(-4px);border-color:rgba(125,255,103,.55);box-shadow:0 24px 48px rgba(0,0,0,.35),0 0 30px rgba(125,255,103,.08)}
        .shopVisual{position:relative;min-height:190px;display:grid;place-items:center;background:radial-gradient(circle,rgba(125,255,103,.22),transparent 52%),linear-gradient(160deg,#101b16,#050907);border-bottom:1px solid rgba(255,255,255,.09)}
        .shopVisual span{width:94px;height:94px;display:grid;place-items:center;border:1px solid rgba(125,255,103,.45);border-radius:25px;background:rgba(125,255,103,.1);color:var(--green);font-size:30px;font-weight:950;letter-spacing:-1px;box-shadow:0 0 36px rgba(125,255,103,.17),inset 0 0 22px rgba(125,255,103,.06)}
        .shopVisual b{position:absolute;top:15px;right:15px;padding:7px 10px;border-radius:8px;background:#7dff67;color:#071007;font-size:10px;letter-spacing:1px}
        .shopInfo{padding:20px}
        .shopType{color:#8ffb80;font-size:11px;text-transform:uppercase;letter-spacing:2px;font-weight:900}
        .shopInfo h3{margin:7px 0 8px;font-size:23px}
        .shopInfo p{margin:0;color:#b8c5bd;line-height:1.52;min-height:70px}
        .shopBottom{margin-top:18px;padding-top:15px;border-top:1px solid rgba(255,255,255,.09);display:flex;align-items:center;justify-content:space-between;gap:14px}
        .shopBottom a{color:var(--green);font-size:13px;font-weight:900}
        .shopStatus{padding:7px 10px;border-radius:8px;background:rgba(255,216,74,.1);border:1px solid rgba(255,216,74,.24);color:#ffd84a;font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:.8px}
        .ranksSection{padding-top:62px;background:#050907}
        .rankGrid{width:min(1000px,100%);margin:0 auto;display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
        .rankCard{padding:22px;border:1px solid rgba(255,255,255,.1);border-radius:15px;background:#0d1411}
        .rankCard p{margin:10px 0 0;color:#b9c4bd;line-height:1.45}
        .rankTag{font-size:19px;font-weight:950;text-shadow:0 0 16px currentColor}
        .rankTag.owner{color:#ff4d4d}.rankTag.admin{color:#ff9a3c}.rankTag.staff{color:#ffd84a}.rankTag.beta{color:#2ef2ff}.rankTag.supporter{color:#ff5cc8}.rankTag.user{color:#9aa59e}
        .footer{min-height:110px;padding:28px 48px;display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:20px;border-top:1px solid rgba(255,255,255,.09);background:#050706}
        .footer .brand img{width:38px;height:38px}.footer .brand span{font-size:18px}.footer p{margin:0;color:#89958e;font-size:13px;text-align:center}.footer>a:last-child{justify-self:end;color:var(--green);font-weight:900}
        @media(max-width:1050px){.shopGrid,.rankGrid{grid-template-columns:repeat(2,1fr)}.footer{grid-template-columns:1fr 1fr}.footer p{display:none}}
        @media(max-width:680px){.shopGrid,.rankGrid{grid-template-columns:1fr}.shopSection,.ranksSection{padding-left:18px;padding-right:18px}.shopInfo p{min-height:0}.footer{padding:24px 18px}.footer>a:last-child{justify-self:end}}
      `}</style>
      <nav className="navbar">
        <a className="brand" href="#top" aria-label="Booger Client home">
          <img src="/images/booger-logo-icon.png" alt="" />
          <span>Booger <b>Client</b></span>
        </a>

        <div className="navlinks" aria-label="Main navigation">
          <a className="active" href="#client">Client</a>
          <a href="#modules">Modules</a>
          <a href="#shop">Shop</a>
          <a href="#ranks">Ranks</a>
          <a href="#release">Release</a>
          <a href="#faq">FAQ</a>
        </div>

        <div className="navActions">
          <a className="discord" href={DISCORD}>Discord</a>
          <a className="join" href="#shop">Shop</a>
        </div>
      </nav>

      <section className="hero">
        <div className="heroBg" />
        <div className="shade" />
        <div className="orb orbOne" />
        <div className="orb orbTwo" />
