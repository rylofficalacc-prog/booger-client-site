"use client";

import { useState } from "react";
import { CATEGORIES, modules, type Category } from "../data";

export default function ModulesExplorer() {
  const [filter, setFilter] = useState<"All" | Category>("All");
  const [query, setQuery] = useState("");
  const shown = modules.filter(m => (filter === "All" || m.tag === filter) && `${m.name} ${m.desc} ${m.key ?? ""}`.toLowerCase().includes(query.trim().toLowerCase()));
  return (
    <>
      <label className="catalogSearch moduleSearch"><span>Search modules</span><input type="search" placeholder="Find a module or keybind…" value={query} onChange={e => setQuery(e.target.value)} /></label>
      <div className="chips" role="group" aria-label="Filter modules">
        {CATEGORIES.map((c) => (
          <button key={c} type="button" aria-pressed={filter === c} className={filter === c ? "chip active" : "chip"} onClick={() => setFilter(c)}>
            {c} <em>{c === "All" ? modules.length : modules.filter((m) => m.tag === c).length}</em>
          </button>
        ))}
      </div>
      <p className="catalogCount" role="status">{shown.length} of {modules.length} modules</p>
      {shown.length === 0 && <div className="emptyCatalog"><h3>No modules found.</h3><button type="button" onClick={() => { setQuery(""); setFilter("All"); }}>Clear filters</button></div>}
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
