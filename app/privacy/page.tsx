import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import { DISCORD } from "../data";

export const metadata: Metadata = { title: "Privacy", description: "What Booger Client and its launcher store, and what they never collect." };

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Privacy" title="Your Data" sub="Plain-English summary. Last updated September 29, 2026." />
      <section className="section tight">
        <div className="prose">
          <h2>The short version</h2>
          <p>Booger Client has no ads, no analytics and no tracking. It connects to a small Booger server only to show who&apos;s online, badges and announcements. It never sees your Microsoft password or your sign-in token.</p>

          <h2>The Booger online service</h2>
          <p>When you play with Booger Client, it connects to the Booger server. To prove who you are it uses Mojang&apos;s own check (the same one Minecraft servers use), so your sign-in token only ever goes to Mojang, never to us.</p>
          <ul>
            <li><b>What the server receives:</b> your Minecraft username and UUID, your Booger Client version, and that you&apos;re currently online.</li>
            <li><b>What it keeps:</b> your username and UUID (so badges stay attached to you), any badges you&apos;ve been given, announcements, and simple counts like the number of players. Online status is only held in memory and disappears a few minutes after you stop playing.</li>
            <li><b>Other players:</b> Booger players on the same server can see that you use Booger Client (the logo next to your name) and your badge.</li>
            <li><b>Not collected:</b> chat, messages, server addresses, worlds, gameplay, your password, or your sign-in token.</li>
            <li><b>Hosting:</b> the server runs on Cloudflare, which keeps standard technical logs (such as IP addresses) to run its network. Booger doesn&apos;t store IP addresses.</li>
          </ul>

          <h2>The launcher</h2>
          <ul>
            <li><b>Sign-in:</b> you sign in on Microsoft&apos;s own website. The launcher never sees your password.</li>
            <li><b>What it keeps on your PC:</b> your Minecraft username, UUID and a Microsoft sign-in token, saved encrypted with Windows&apos; built-in protection. Signing out deletes it.</li>
            <li><b>Logs:</b> saved on your PC in the Booger folder, with sign-in details removed. They&apos;re only shared if you copy and send them yourself.</li>
            <li><b>Who it talks to:</b> Microsoft, Xbox and Mojang (sign-in and Minecraft files), Fabric and Modrinth (Fabric, Fabric API and the optional Performance Pack and add-ons), Adoptium (Java), GitHub (Booger Client and launcher updates), this website (news and update info), and Discord (only if Discord is open, to show your &quot;Playing Booger Client&quot; status).</li>
          </ul>

          <h2>The Booger Client mod</h2>
          <ul>
            <li>Your settings, keybinds, HUD layout, profiles and loadouts are saved in your Minecraft <code>config</code> folder on your PC.</li>
            <li><b>Player Pet and skin copying:</b> when you type a username, Booger asks Mojang&apos;s public API for that player&apos;s skin.</li>
          </ul>

          <h2>This website</h2>
          <p>No cookies or trackers. The Discord member count is read from Discord&apos;s public invite info. The site is hosted on Vercel, which keeps standard server logs.</p>

          <h2>Removing your data</h2>
          <p>Ask us in the <a href={DISCORD}>Discord</a> and we&apos;ll delete your username, UUID and badges from the Booger server. Uninstalling Booger Client can also remove everything it downloaded to your PC.</p>
        </div>
      </section>
    </>
  );
}
