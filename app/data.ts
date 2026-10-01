// Shared site content. Edit here and every page updates.
export type Category = "HUD" | "Visual" | "Utility" | "Player";
export type Module = { name: string; icon: string; tag: Category; desc: string; key?: string };

/** Total cosmetics in the client (the Cosmetics page only shows photos of some). */
export const COSMETIC_COUNT = 80;

export const DISCORD = "https://discord.gg/5HxHgKdfMu";
export const CATEGORIES: ("All" | Category)[] = ["All", "HUD", "Visual", "Utility", "Player"];

export const team = [
  { name: "Snot2", role: "Founder", color: "#7dff67", desc: "Created Booger Client and leads development." },
  { name: "TRM", role: "Co-Founder", color: "#26bdf2", desc: "Co-owner of Booger Client, helping run and grow the project." },
  { name: "Vueril", role: "Advisor", color: "#ffd84a", desc: "Advises the team on features, direction and the community." },
];

export const modules: Module[] = [
  { name: "Fullbright", icon: "sun", tag: "Visual", key: "G", desc: "See clearly in caves, the Nether and at night without touching your gamma setting." },
  { name: "Zoom", icon: "zoom-in", tag: "Utility", key: "C", desc: "Hold to zoom with a smooth animation. Scroll while zooming to adjust." },
  { name: "Toggle Sprint", icon: "footprints", tag: "Player", key: "V", desc: "Keeps you sprinting while moving forward, following normal sprint rules." },
  { name: "Freelook", icon: "eye", tag: "Utility", key: "Alt", desc: "Hold Left Alt to look around in third person while you keep walking straight." },
  { name: "Crosshair", icon: "crosshair", tag: "Visual", desc: "Cross, T-shape, dot or circle. Size, gap, thickness, color, outline, live preview." },
  { name: "Low Fire", icon: "flame", tag: "Visual", desc: "Lowers the fire on your screen while you're burning so you can still see." },
  { name: "Low Shield", icon: "shield-half", tag: "Visual", desc: "Lowers your shield in first person so it blocks less of your view." },
  { name: "FPS Counter", icon: "gauge", tag: "HUD", desc: "Your live frame rate in a clean, movable overlay." },
  { name: "CPS Counter", icon: "mouse-pointer-click", tag: "HUD", desc: "Left and right clicks per second over a rolling one-second window." },
  { name: "Keystrokes", icon: "keyboard", tag: "HUD", desc: "WASD, Space and mouse buttons light up as you press them. Three styles." },
  { name: "Coordinates", icon: "map-pin", tag: "HUD", desc: "Live X / Y / Z in compact or detailed layout." },
  { name: "Direction HUD", icon: "compass", tag: "HUD", desc: "The way you're facing: North-East, South and so on, with axis and yaw." },
  { name: "Armor HUD", icon: "shield", tag: "HUD", desc: "Your armor icons with live durability." },
  { name: "Potion Effects", icon: "flask-conical", tag: "HUD", desc: "Active effects with their real icons, level and time left." },
  { name: "Combo Counter", icon: "zap", tag: "HUD", desc: "Counts hits you land in a row. Resets when you get hit." },
  { name: "Reach Display", icon: "ruler", tag: "HUD", desc: "Shows how far away your last hit was. Display only - it never changes reach." },
  { name: "Playtime", icon: "clock", tag: "HUD", desc: "How long this session has been running." },
  { name: "Stopwatch", icon: "timer", tag: "HUD", desc: "Start, pause, resume and reset from the menu or your own keybinds." },
  { name: "Auto Respawn", icon: "rotate-ccw", tag: "Player", desc: "Presses the normal Respawn button for you after a short delay." },
];

export const cosmetics: { name: string; color: string; icon: string; image?: string; desc: string }[] = [
  { name: "Neon Slime Wings", color: "#7dff67", icon: "sparkles", image: "/images/shots/wings.jpg", desc: "Glowing, translucent 3D wings that flap as you walk and tuck in when you sneak." },
  { name: "Booger Cape", color: "#26bdf2", icon: "sparkles", image: "/images/shots/cape.jpg", desc: "30 cape designs, including Booger Logo, Slime Drip, Galaxy, Flame, Midnight and Rainbow." },
  { name: "Shoulder Slime", color: "#7dff67", icon: "sparkles", image: "/images/shots/shoulder-slime.jpg", desc: "A tiny slime pet on your shoulder that hops, squishes and blinks." },
  { name: "Player Pet", color: "#26bdf2", icon: "sparkles", image: "/images/shots/player-pet.jpg", desc: "A mini player walks beside you. Your skin, or type any username to wear theirs." },
  { name: "Slime Crown", color: "#ffd84a", icon: "sparkles", image: "/images/shots/crown.jpg", desc: "A crown with glowing slime gems. Pick the metal and gem colors." },
  { name: "Top Hat", color: "#7dff67", icon: "sparkles", image: "/images/shots/top-hat.jpg", desc: "A classy tilted top hat with a colored band." },
  { name: "Devil Horns", color: "#ff5c6c", icon: "sparkles", image: "/images/shots/devil-horns.jpg", desc: "Curved horns with an optional glow." },
  { name: "Bunny Ears", color: "#ff7ad9", icon: "sparkles", image: "/images/shots/bunny-ears.jpg", desc: "Floppy ears that bounce while you walk." },
  { name: "Fox Tail", color: "#ff9a3c", icon: "sparkles", image: "/images/shots/fox-tail.jpg", desc: "A fluffy tail that swishes side to side as you move." },
  { name: "Slime Halo", color: "#7dff67", icon: "sparkles", image: "/images/shots/halo.jpg", desc: "A glowing ring above your head with orbiting sparkles." },
  { name: "Pet Morph", color: "#ffd84a", icon: "paw-print", desc: "Turn into a pig, wolf, cat, fox, frog and more. It walks and turns with you." },
];

export const menuShots = [
  { label: "HUD", image: "/images/shots/menu-hud.jpg" },
  { label: "Visual", image: "/images/shots/menu-visual.jpg" },
  { label: "Utility", image: "/images/shots/menu-utility.jpg" },
  { label: "Player", image: "/images/shots/menu-player.jpg" },
];

export const emotes = [
  "Twerk", "Wave", "Dab", "T-Pose", "Floss", "Clap", "Salute", "Zombie", "Backflip", "Spin",
  "Jumping Jacks", "Bow", "Headbang", "Cheer", "Sit", "Facepalm", "Robot", "Shrug", "Groove",
];

export const looks = [
  { name: "Golden Goose", image: "/images/render-goose-cut.png", desc: "Chaotic, bright, and impossible to ignore." },
  { name: "Midnight", image: "/images/render-midnight-cut.png", desc: "Clean black fit with a sharp diamond look." },
  { name: "Bloom", image: "/images/render-bloom-cut.png", desc: "Dark skin, icy glow, and quiet menace." },
  { name: "Crown Set", image: "/images/render-purple-cut.png", desc: "Royal purple cosmetic showcase." },
];

export const clientFeatures = [
  { icon: "layout-grid", title: "Right Shift Menu", desc: "Mods, HUD, Cosmetics, Profiles and Settings in one clean menu with search and categories." },
  { icon: "move", title: "HUD Editor", desc: "Drag every HUD element where you want it, scroll to resize, snap to edges. Saved automatically." },
  { icon: "layers", title: "Profiles", desc: "Separate setups for PvP, Survival or Recording - modules, keybinds, HUD layout and cosmetics." },
  { icon: "keyboard", title: "Custom Keybinds", desc: "Bind any module to any key. What the menu shows is exactly what the game uses." },
];


/** Flip ready to true and fill in url + version when the launcher installer is published. */
// On release day: set ready to true and replace YOUR-GITHUB-NAME/booger-launcher with your launcher releases repo.
// "releases/latest/download" always points at the newest BoogerInstaller.exe, so you never have to edit this again.
export const launcherDownload = {
  ready: false,
  url: "https://github.com/YOUR-GITHUB-NAME/booger-launcher/releases/latest/download/BoogerInstaller.exe",
  version: "2.0",
  size: "about 110 MB",
  releaseDate: "Friday, October 2",
};

export const DISCORD_INVITE_CODE = "5HxHgKdfMu";
export const SITE_URL = "https://booger-client-site.vercel.app";

export const keybinds = [
  { key: "Right Shift", action: "Open or close the Booger Client menu" },
  { key: "C", action: "Zoom (hold) - scroll while holding to adjust" },
  { key: "G", action: "Fullbright on / off" },
  { key: "V", action: "Toggle Sprint on / off" },
  { key: "Left Alt", action: "Freelook (hold) - look around while walking straight" },
  { key: "B", action: "Emote wheel: hold, point, release" },
  { key: "N", action: "Create a waypoint at your current location" },
  { key: "F5", action: "Third person - see your cosmetics" },
];

export type RoadmapItem = { title: string; desc: string };
export const roadmap: { status: "Done" | "In Progress" | "Planned"; color: string; items: RoadmapItem[] }[] = [
  { status: "Done", color: "#7dff67", items: [
    { title: "19 modules", desc: "HUD, zoom, freelook, crosshair, low fire, low shield and more." },
    { title: "80 cosmetics", desc: "30 capes, 17 trails and 23 accessories, plus wings, pets and more." },
    { title: "19 emotes", desc: "Smooth blending and whole-body moves." },
    { title: "Profiles and HUD editor", desc: "Separate setups and drag-and-drop HUD." },
    { title: "Installer and launcher", desc: "One installer; Java, Fabric and updates are automatic." },
    { title: "Booger online", desc: "Booger logo next to Booger players, colored badges, announcements." },
    { title: "Waypoints", desc: "Mark places and find your way back." },
  ] },
  { status: "In Progress", color: "#ffd84a", items: [
    { title: "Public release", desc: "Booger Client launches Friday, October 2." },
    { title: "Code signing", desc: "So Windows stops warning about the installer." },
  ] },
  { status: "Planned", color: "#26bdf2", items: [
    { title: "Friends list", desc: "See when your friends are online." },
    { title: "Minimap", desc: "A small map in the corner." },
    { title: "See other players' cosmetics", desc: "Your cosmetics and emotes visible to other Booger Client users." },
    { title: "More cosmetics and emotes", desc: "Based on what the community asks for." },
  ] },
];
