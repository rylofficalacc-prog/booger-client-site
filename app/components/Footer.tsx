import Link from "next/link";
import { DISCORD } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <img src="/images/booger-logo.png" alt="" />
      <span>Booger Client · Not affiliated with Mojang or Microsoft.</span>
      <nav className="footerLinks">
        <Link href="/donate">Donate</Link>
        <Link href="/support">Support & Feedback</Link>
        <Link href="/performance">Performance</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/ranks">Team</Link>
        <Link href="/changelog">Changelog</Link>
        <a href={DISCORD}>Discord</a>
      </nav>
    </footer>
  );
}
