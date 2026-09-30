// Forwards Mojang's "hasJoined" identity check for the Booger online service.
// Mojang blocks requests from Cloudflare Workers, so the service asks here instead (Vercel can reach Mojang).
// Only passes through Mojang's own answer; accepts nothing but a username and a server id.
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const username = url.searchParams.get("username") ?? "";
  const serverId = url.searchParams.get("serverId") ?? "";
  if (!/^[A-Za-z0-9_]{1,16}$/.test(username) || !/^[0-9a-fA-F-]{1,64}$/.test(serverId)) {
    return new Response(JSON.stringify({ error: "bad request" }), { status: 400, headers: { "content-type": "application/json" } });
  }
  const r = await fetch(`https://sessionserver.mojang.com/session/minecraft/hasJoined?username=${username}&serverId=${serverId}`, {
    headers: { "user-agent": "BoogerClient-API/1.0 (+https://booger-client-site.vercel.app)" },
    cache: "no-store",
  });
  const body = r.status === 200 ? await r.text() : null;
  return new Response(body, { status: r.status, headers: { "content-type": "application/json", "cache-control": "no-store" } });
}
