import Link from "next/link";
import { DISCORD } from "./data";

export default function Home() {
  return (
    <section className="hauntHero" aria-labelledby="intro-title">
      <div className="hauntScenery" aria-hidden="true">
        <div className="hauntMoon" />
        <span className="hauntBat batOne" /><span className="hauntBat batTwo" />
        <div className="hauntPumpkin pumpkinOne"><i /><i /><b /></div>
        <div className="hauntPumpkin pumpkinTwo"><i /><i /><b /></div>
        <div className="hauntFog" />
      </div>
      <div className="hauntIntro">
        <p className="hauntSeason"><span aria-hidden="true">✦</span> Halloween at Booger Client</p>
        <img className="hauntLogo" src="/images/booger-logo.png" alt="" fetchPriority="high" />
        <h1 id="intro-title">BOOGER<span>CLIENT.</span></h1>
        <p className="hauntTagline">Your game. A little more wicked.</p>
        <p className="hauntDescription">Make Minecraft yours with a customizable HUD, cosmetics, and emotes. Grab the launcher and join us in-game.</p>
        <div className="hauntActions">
          <Link className="hauntButton hauntPrimary" href="/download">Download for Windows <span aria-hidden="true">↓</span></Link>
          <a className="hauntButton hauntSecondary" href={DISCORD}>Join the Discord <span aria-hidden="true">↗</span></a>
        </div>
        <p className="hauntCompatibility">Minecraft Java 1.21.11 <span aria-hidden="true">·</span> Fabric <span aria-hidden="true">·</span> Windows 10 / 11</p>
      </div>
    </section>
  );
}
