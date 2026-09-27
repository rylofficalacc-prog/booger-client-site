"use client";

import { useMemo, useState } from "react";

type ModuleItem = {
  name: string;
  icon: string;
  tag: string;
  desc: string;
};

type ShopItem = {
  name: string;
  short: string;
  type: string;
  desc: string;
  badge?: string;
};

const DISCORD = "https://discord.gg/5HxHgKdfMu";

const modules: ModuleItem[] = [
  { name: "Fullbright", icon: "☀", tag: "Visual", desc: "Brightens dark areas for cleaner gameplay." },
  { name: "Zoom", icon: "⌕", tag: "Utility", desc: "Hold C to zoom in and scout farther away." },
  { name: "Toggle Sprint", icon: "⇧", tag: "Movement", desc: "Toggle sprint without holding your sprint key." },
  { name: "Freelook", icon: "◌", tag: "Camera", desc: "Look around without changing your movement direction." },
  { name: "CPS Counter", icon: "◉", tag: "HUD", desc: "Shows left and right click speed." },
  { name: "Keystrokes", icon: "⌨", tag: "HUD", desc: "Shows WASD, mouse buttons and spacebar." },
  { name: "Armor HUD", icon: "▣", tag: "HUD", desc: "Keeps armor status visible while playing." },
  { name: "Combo Counter", icon: "×", tag: "HUD", desc: "Tracks your current hit combo." },
  { name: "Reach Display", icon: "↔", tag: "HUD", desc: "Shows the distance of your latest hit." },
  { name: "Potion Effects", icon: "✦", tag: "HUD", desc: "Displays your active effects in a cleaner way." },
  { name: "Crosshair", icon: "+", tag: "Visual", desc: "Customize your crosshair appearance." },
  { name: "Auto Respawn", icon: "↻", tag: "Utility", desc: "Automatically respawns after death." },
];

const shopItems: ShopItem[] = [
  {
    name: "Neon Slime Wings",
    short: "NW",
    type: "Back",
    badge: "V19",
    desc: "3D animated slime wings with glow, color, size and speed customization.",
  },
  {
    name: "Slime Crown",
    short: "SC",
    type: "Head",
    desc: "A glowing slime-themed crown cosmetic.",
  },
  {
    name: "Slime Halo",
    short: "SH",
    type: "Head",
    desc: "A floating glowing halo that spins above your player.",
  },
  {
    name: "Shoulder Slime",
    short: "SS",
    type: "Pet",
    desc: "A small slime companion that sits on your shoulder.",
  },
  {
    name: "Booger Cape",
    short: "BC",
    type: "Cape",
    desc: "The official Booger Client cape.",
  },
  {
    name: "Bunny Ears",
    short: "BE",
    type: "Head",
    desc: "Animated bunny ears for your player model.",
  },
  {
    name: "Player Pet",
    short: "PP",
    type: "Pet",
    desc: "A mini player companion that follows you around.",
  },
  {
    name: "Pet Morph",
    short: "PM",
    type: "Morph",
    desc: "Turn your local appearance into a supported pet-style morph.",
  },
  {
    name: "Emote Pack",
    short: "EM",
    type: "Animation",
    badge: "19 EMOTES",
    desc: "A full set of client emotes accessed from the emote wheel.",
  },
];

const ranks = [
  ["OWNER", "#ff5757"],
  ["ADMIN", "#ff9a3c"],
  ["STAFF", "#ffd84a"],
  ["BETA", "#2ef2ff"],
  ["SUPPORTER", "#ff5cc8"],
  ["USER", "#aab3ad"],
];

const cardStyle: React.CSSProperties = {
  border: "1px solid rgba(255,255,255,.12)",
  borderRadius: 18,
  background: "linear-gradient(145deg, rgba(19,30,26,.96), rgba(8,14,11,.96))",
  boxShadow: "0 18px 40px rgba(0,0,0,.28)",
};

export default function Page() {
  const [selectedModule, setSelectedModule] = useState<ModuleItem>(modules[0]);
  const [filter, setFilter] = useState("All");

  const visibleShop = useMemo(() => {
    if (filter === "All") return shopItems;
    return shopItems.filter((item) => item.type === filter);
  }, [filter]);

  return (
    <main
      id="top"
      style={{
        minHeight: "100vh",
        background: "#050907",
        color: "#fff",
        overflowX: "hidden",
