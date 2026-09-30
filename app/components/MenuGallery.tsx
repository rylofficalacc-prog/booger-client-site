"use client";

import { useState } from "react";
import { menuShots } from "../data";

export default function MenuGallery() {
  const [i, setI] = useState(0);
  return (
    <div className="menuGallery">
      <img className="menuMain" src={menuShots[i].image} alt={`Booger Client menu - ${menuShots[i].label} modules`} />
      <div className="menuThumbs">
        {menuShots.map((m, n) => (
          <button key={m.label} type="button" className={n === i ? "menuThumb active" : "menuThumb"} onClick={() => setI(n)}>
            <img src={m.image} alt="" />
            <span>{m.label}</span>
          </button>
        ))}
      </div>
      <p className="menuCaption">Real screenshots of the Right Shift menu in game.</p>
    </div>
  );
}
