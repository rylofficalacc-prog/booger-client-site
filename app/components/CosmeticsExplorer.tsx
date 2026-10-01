"use client";
import { useState } from "react";
import { cosmetics, COSMETIC_COUNT } from "../data";
const categories = ["All", "Wings & Capes", "Pets", "Headwear", "Accessories"] as const;
function category(name: string) {
  if (/Wings|Cape/.test(name)) return "Wings & Capes";
  if (/Slime$|Pet|Morph/.test(name)) return "Pets";
  if (/Crown|Hat|Horns|Ears|Halo/.test(name)) return "Headwear";
  return "Accessories";
}
export default function CosmeticsExplorer() {
  const [filter,setFilter]=useState<string>("All");
  const [query,setQuery]=useState("");
  const shown=cosmetics.filter(c=>(filter==="All"||category(c.name)===filter)&&(`${c.name} ${c.desc}`).toLowerCase().includes(query.trim().toLowerCase()));
  return <div id="catalog" className="catalogExplorer">
    <div className="catalogToolbar"><div><p className="microLabel">IN-GAME SHOWCASE</p><h2>Find your next favorite.</h2></div><label className="catalogSearch"><span>Search cosmetics</span><input type="search" placeholder="Try wings, cape, pet…" value={query} onChange={e=>setQuery(e.target.value)} /></label></div>
    <div className="chips" role="group" aria-label="Cosmetic categories">{categories.map(c=><button key={c} type="button" className={filter===c?"chip active":"chip"} aria-pressed={filter===c} onClick={()=>setFilter(c)}>{c}</button>)}</div>
    <p className="catalogCount" role="status">{shown.length} of {cosmetics.length} featured cosmetics · {COSMETIC_COUNT} total in the client. The studio previews selected accessories.</p>
    <div className="cosPhotoGrid">{shown.map(c=><article className="cosPhoto" key={c.name} style={{["--c" as string]:c.color}}>{c.image?<img src={c.image} alt={`${c.name} cosmetic in game`} loading="lazy"/>:<div className="cosPhotoIcon"><img className="ico" src={`/icons/${c.icon}.svg`} alt=""/></div>}<div className="cosPhotoText"><span className="cosCategory">{category(c.name)}</span><h3>{c.name}</h3><p>{c.desc}</p></div></article>)}</div>
    {shown.length===0&&<div className="emptyCatalog"><h3>No matches yet.</h3><p>Try a different name or browse all featured cosmetics.</p><button type="button" onClick={()=>{setQuery("");setFilter("All");}}>Clear filters</button></div>}
  </div>;
}
