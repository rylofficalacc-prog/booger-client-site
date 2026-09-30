"use client";

import { useState } from "react";
import Link from "next/link";
import { modules, type Module } from "../data";

export default function ModulePreviewCard() {
  const heroModules = modules.slice(0, 9);
  const [hovered, setHovered] = useState<Module>(heroModules[0]);
  return (
    <article className="featureCard moduleCard">
      <div className="featureIcon cube"><img className="ico" src="/icons/boxes.svg" alt="" /></div>
      <h3>Fully Integrated Modules</h3>
      <p>Hover a module to preview what it does.</p>
      <div className="moduleGrid">
        {heroModules.map((mod) => (
          <button key={mod.name} type="button" onMouseEnter={() => setHovered(mod)} onFocus={() => setHovered(mod)}
            className={hovered.name === mod.name ? "moduleIcon active" : "moduleIcon"} aria-label={`${mod.name}: ${mod.desc}`}>
            <img className="ico" src={`/icons/${mod.icon}.svg`} alt="" />
          </button>
        ))}
      </div>
      <div className="modulePreview">
        <strong>{hovered.name}</strong>
        <span>{hovered.tag}{hovered.key ? ` · Key ${hovered.key}` : ""}</span>
        <p>{hovered.desc}</p>
      </div>
      <Link className="cardLink" href="/modules">See all {modules.length} modules →</Link>
    </article>
  );
}
