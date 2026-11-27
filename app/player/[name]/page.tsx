import type { Metadata } from "next";
import { headers } from "next/headers";
import PageHeader from "../../components/PageHeader";
import CopyLink from "./CopyLink";

// A Booger player's public profile, from Booger online (GET /v1/profile/<name>).
const API = process.env.BOOGER_API || "https://booger-api.rylofficalacc.workers.dev";

type Achievement = { id: string; name: string; rarity: string; at?: number };
type Profile = {
  name: string; uuid: string; bio: string; banner: string; favoriteServers: string[]; badges: string[];
  achievements: Achievement[]; views: number; online: boolean; cosmetics: string[]; skin: string;
  stats?: { matches: number; wins: number; losses: number; kills: number; deaths: number };
};
type Result = { profile?: Profile; status: number };

async function load(name: string): Promise<Result> {
  if (!/^[A-Za-z0-9_]{1,16}$/.test(name)) return { status: 404 };
  const h = await headers();
  const viewer = (h.get("x-forwarded-for") || "").split(",")[0].trim();
  try {
    // the visitor's address counts the view; Booger online only believes it with the site's key (a Vercel secret)
    const key = process.env.BOOGER_SITE_KEY || "";
    const r = await fetch(`${API}/v1/profile/${encodeURIComponent(name)}`, {
      headers: viewer && key ? { "x-booger-viewer": viewer, "x-booger-site-key": key } : {}, cache: "no-store",
    });
    if (r.status !== 200) return { status: r.status };
    return { status: 200, profile: (await r.json()) as Profile };
  } catch {
    return { status: 502 };
  }
}

export async function generateMetadata({ params }: { params: Promise<{ name: string }> }): Promise<Metadata> {
  const { name } = await params;
  return { title: `${name}'s profile`, description: `${name}'s Booger Client profile: badges, achievements and stats.` };
}

const BADGE_COLOR: Record<string, string> = {
  FOUNDER: "#FFD84A", STAFF: "#FF5A5A", DEVELOPER: "#5AB4FF", CREATOR: "#FF6FD0", TESTER: "#3BE0C8", BETA: "#B27CFF", OG: "#3BE06A",
};
const RARITY_COLOR: Record<string, string> = { COMMON: "#9AA0A8", RARE: "#5AB4FF", EPIC: "#B27CFF", LEGENDARY: "#FFD84A" };

export default async function PlayerPage({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const { profile: p, status } = await load(name);
  if (!p) {
    const why = status === 403 ? "This profile is private." : status === 404 ? "No Booger player has that name yet."
      : status === 429 ? "Too many profile visits right now. Try again in a minute." : "Booger online can't be reached right now.";
    return <PageHeader eyebrow="Player" title={name} sub={why} />;
  }
  const kd = p.stats ? (p.stats.deaths ? (p.stats.kills / p.stats.deaths).toFixed(2) : String(p.stats.kills)) : null;
  const wl = p.stats ? (p.stats.losses ? (p.stats.wins / p.stats.losses).toFixed(2) : String(p.stats.wins)) : null;
  return (
    <>
      <PageHeader eyebrow={p.online ? "Player · online now" : "Player"} title={p.name} sub={p.bio || undefined} />
      <section className="section tight">
        <div className="profileWrap">
          <div className="profileBanner" style={{ ["--c" as string]: p.banner || "#3BE06A" }} />
          <div className="profileMeta">
            {p.badges.map((b) => <span key={b} className="profileBadge" style={{ ["--c" as string]: BADGE_COLOR[b] || "#3BE06A" }}>{b}</span>)}
            <span className="profileMuted">{p.views} {p.views === 1 ? "view" : "views"}</span>
            <CopyLink path={`/player/${p.name}`} />
          </div>
          <div className="profileGrid">
            <article className="profileCard profileSkin">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.skin} alt={`${p.name}'s skin`} width={240} height={432} />
              <p className="profileMuted">Wearing {p.cosmetics.length} {p.cosmetics.length === 1 ? "cosmetic" : "cosmetics"} in Booger</p>
            </article>
            <div className="profileSide">
              {p.stats && (
                <article className="profileCard">
                  <h2>Stats</h2>
                  <div className="profileStats">
                    <div><b>{p.stats.wins}</b><span>Wins</span></div>
                    <div><b>{p.stats.losses}</b><span>Losses</span></div>
                    <div><b>{wl}</b><span>W/L</span></div>
                    <div><b>{p.stats.kills}</b><span>Kills</span></div>
                    <div><b>{kd}</b><span>K/D</span></div>
                    <div><b>{p.stats.matches}</b><span>Matches</span></div>
                  </div>
                </article>
              )}
              {p.favoriteServers.length > 0 && (
                <article className="profileCard">
                  <h2>Favourite servers</h2>
                  <ul className="profileList">{p.favoriteServers.map((s) => <li key={s}><code>{s}</code></li>)}</ul>
                </article>
              )}
              <article className="profileCard">
                <h2>Achievements</h2>
                {p.achievements.length === 0 ? <p className="profileMuted">None yet.</p> : (
                  <ul className="profileList">
                    {p.achievements.map((a) => (
                      <li key={a.id} style={{ ["--c" as string]: RARITY_COLOR[a.rarity] || "#9AA0A8" }} className="profileAch">
                        <b>{a.name}</b> <span className="profileMuted">{a.rarity.toLowerCase()}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
