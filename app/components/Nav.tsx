import Link from "next/link";
import { DISCORD } from "../data";

export default function Nav() {
  return (
    <header className="hauntHeader">
      <Link className="hauntBrand" href="/" aria-label="Booger Client intro"><img src="/images/booger-logo.png" alt="" /><span>Booger <b>Client</b></span></Link>
      <nav className="hauntNav" aria-label="Main navigation">
        <Link href="/">Intro</Link>
        <a href={DISCORD}>Discord</a>
        <Link className="hauntNavDownload" href="/download">Download <span aria-hidden="true">↓</span></Link>
      </nav>
    </header>
  );
}
