"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { DISCORD } from "../data";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/get-started", label: "Get Started" },
  { href: "/modules", label: "Modules" },
  { href: "/cosmetics", label: "Cosmetics" },
  { href: "/emotes", label: "Emotes" },
  { href: "/changelog", label: "Changelog" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/support", label: "Support" },
];

export default function Nav({ members }: { members: number | null }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]); // close the phone menu after navigating
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", close);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", close); document.body.style.overflow = previous; };
  }, [open]);
  const count = members !== null ? `${members.toLocaleString("en-US")} members` : null;

  return (
    <nav className={open ? "navbar open" : "navbar"}>
      <Link className="brand" href="/" aria-label="Booger Client home">
        <img src="/images/booger-logo.png" alt="" />
        <span>Booger <b>Client</b></span>
      </Link>
      <div id="main-navigation" className="navlinks" aria-label="Main navigation">
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} aria-current={path === l.href ? "page" : undefined} className={path === l.href ? "active" : ""}>{l.label}</Link>
        ))}
        <Link href="/download" className={path === "/download" ? "active mobileOnly" : "mobileOnly"}>Download</Link>
      </div>
      <div className="navActions">
        <a className="discord" href={DISCORD}>Discord{count && <small>{count}</small>}</a>
        <Link className="join" href="/download">Download</Link>
        <button type="button" className="burger" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
