"use client";

import { useState } from "react";
import { CATEGORIES, modules, type Category } from "../data";

export default function ModulesExplorer() {
  const [filter, setFilter] = useState<"All" | Category>("All");
  const shown = filter === "All" ? modules : modules.filter((m) => m.tag === filter);
  return (
    <>
      <div className="chips" role="tablist" aria-label="Filter modules">
        {CATEGORIES.map((c) => (
          <button key={c} type="button" className={filter === c ? "chip active" : "chip"} onClick={() => setFilter(c)}>
            {c} <em>{c === "All" ? modules.length : modules.filter((m) => m.tag === c).length}</em>
          </button>
        ))}
      </div>
      <div className="modGrid">
        {shown.map((m) => (
          <article className="modCard" key={m.name}>
            <div className="modIcon"><img className="ico" src={`/icons/${m.icon}.svg`} alt="" /></div>
            <div>
              <h3>{m.name}{m.key && <kbd>{m.key}</kbd>}</h3>
              <span>{m.tag}</span>
              <p>{m.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
