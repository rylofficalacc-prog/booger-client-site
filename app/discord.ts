import { DISCORD_INVITE_CODE } from "./data";

/**
 * Live member count from Discord's public invite info. Cached for 15 minutes on Vercel.
 * Returns null if Discord can't be reached, and the site then simply hides the number.
 */
export async function discordMemberCount(): Promise<number | null> {
  try {
    const res = await fetch(`https://discord.com/api/v10/invites/${DISCORD_INVITE_CODE}?with_counts=true`, { next: { revalidate: 900 } });
    if (!res.ok) return null;
    const data = await res.json();
    return typeof data.approximate_member_count === "number" ? data.approximate_member_count : null;
  } catch {
    return null;
  }
}
