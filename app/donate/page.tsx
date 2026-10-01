import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import { DISCORD } from "../data";

export const metadata: Metadata = { title: "Donate", description: "Support Booger Client development with an optional donation through PayPal." };

export default function DonatePage() {
  return <>
    <PageHeader eyebrow="Support development" title="Help Build Booger Client" sub="Every update starts with an idea. Support the work behind the client with an optional donation." />
    <section className="section tight donationSection">
      <div className="donationPanel">
        <div className="donationBlock" aria-hidden="true">◆</div>
        <p className="microLabel">FOR THE NEXT CHAPTER</p>
        <h2>Support the client.</h2>
        <p>Booger Client is an upcoming Minecraft client focused on customization, cosmetics, emotes, and a polished launcher experience. If you want to help support development, you can donate through PayPal.</p>
        <a className="bigButton paypalButton" href="https://paypal.me/BoogerClient" target="_blank" rel="noopener noreferrer">Donate with PayPal ↗</a>
        <span className="donationNote">Choose your amount on PayPal. You&apos;ll leave this website to complete your donation.</span>
        <div className="donationDetails"><h3>Completely optional.</h3><p>A donation is voluntary support, not a purchase. It does not include ranks, cosmetics, premium access, or a guaranteed feature or release date.</p><h3>Feedback helps, too.</h3><p>Report bugs, suggest features, or share the client with a friend. There are plenty of ways to help without donating.</p></div>
        <div className="donationLinks"><Link href="/support">Share feedback →</Link><a href={DISCORD}>Join the community →</a></div>
      </div>
    </section>
  </>;
}
