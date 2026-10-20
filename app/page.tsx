import Link from "next/link";
import PlayerPhotos from "./components/PlayerPhotos";
import { DISCORD } from "./data";

export default function Home() {
  return (
    <>
    <section className="hauntHero" aria-labelledby="intro-title">
      <div className="hauntScenery" aria-hidden="true" />
      <div className="hauntHeroInner">
        <div className="hauntIntro">
          <p className="hauntSeason"><span className="hauntSeasonStar" aria-hidden="true">✦</span> A little trick. A lot of treat.</p>
          <h1 id="intro-title">BOOGER<span>CLIENT.</span></h1>
          <p className="hauntTagline">Your Minecraft.<br />With a little more mischief.</p>
          <p className="hauntDescription">Your HUD. Your cosmetics. Your way to play.<br className="hauntDesktopBreak" /> Get the launcher and make yourself at home.</p>
          <div className="hauntActions">
            <Link className="hauntButton hauntPrimary" href="/download"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5" /></svg> Download for Windows</Link>
            <a className="hauntButton hauntSecondary" href={DISCORD}>Join the Discord <span aria-hidden="true">↗</span></a>
          </div>
          <p className="hauntCompatibility"><span className="hauntStatusDot" aria-hidden="true" /> Minecraft Java 1.21.11 <span aria-hidden="true">/</span> Fabric <span aria-hidden="true">/</span> Windows</p>
        </div>
        <div className="hauntWorld" aria-hidden="true">
          <div className="hauntOrbit" /><div className="hauntMoon" />
          <span className="hauntBat batOne" /><span className="hauntBat batTwo" /><span className="hauntBat batThree" />
          <div className="hauntWorldGlow" />
          <img className="hauntFriend hauntFriendGoose" src="/images/render-goose-cut.png" alt="" fetchPriority="high" />
          <img className="hauntFriend hauntFriendBloom" src="/images/render-bloom-cut.png" alt="" fetchPriority="high" />
          <img className="hauntCharacter" src="/images/render-purple-cut.png" alt="" fetchPriority="high" />
          <div className="hauntPedestal"><i /><i /><i /></div>
          <img className="hauntVoxelPumpkin pumpkinOne" src="/images/halloween-pumpkin.svg" alt="" />
          <img className="hauntVoxelPumpkin pumpkinTwo" src="/images/halloween-pumpkin.svg" alt="" />
          <span className="hauntSpark sparkOne" /><span className="hauntSpark sparkTwo" /><span className="hauntSpark sparkThree" /><span className="hauntSpark sparkFour" />
          <p className="hauntWorldCaption"><span /> Halloween at Booger Client <span /></p>
        </div>
      </div>
    </section>
    <PlayerPhotos />
    </>
  );
}
