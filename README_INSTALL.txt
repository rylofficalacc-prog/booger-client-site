Booger Client fresh website — Vercel root fixed

IMPORTANT:
When you make the GitHub repo, the files app/, package.json, next.config.ts, and tsconfig.json must be at the TOP LEVEL of the repo.

Correct repo layout:
app/page.tsx
app/layout.tsx
app/globals.css
package.json
next.config.ts
tsconfig.json

Wrong repo layout:
booger-client-fresh-site/app/page.tsx
booger-client-fresh-site/package.json

If you already uploaded the nested folder, either:
1. Move everything inside booger-client-fresh-site/ to the repo root, OR
2. In Vercel Project Settings -> General -> Root Directory, set it to: booger-client-fresh-site

Then redeploy.
