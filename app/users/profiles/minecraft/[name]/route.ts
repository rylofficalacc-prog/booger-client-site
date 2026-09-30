// Forwards Mojang's username -> UUID lookup for the Booger online service (used when giving badges by name).
export const dynamic = "force-dynamic";

export async function GET(_request: Request, { params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  if (!/^[A-Za-z0-9_]{1,16}$/.test(name)) {
    return new Response(JSON.stringify({ error: "bad request" }), { status: 400, headers: { "content-type": "application/json" } });
  }
  const r = await fetch(`https://api.mojang.com/users/profiles/minecraft/${name}`, {
    headers: { "user-agent": "BoogerClient-API/1.0 (+https://booger-client-site.vercel.app)" },
    cache: "no-store",
  });
  const body = r.status === 200 ? await r.text() : null;
  return new Response(body, { status: r.status, headers: { "content-type": "application/json", "cache-control": "no-store" } });
}
