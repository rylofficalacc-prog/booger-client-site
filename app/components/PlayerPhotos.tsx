"use client";

import { useRef, useState } from "react";

const PHOTOS = [
  { src: "/images/shots/wings.jpg", title: "Spread your wings", alt: "Minecraft player wearing green wings beside a mountain lake" },
  { src: "/images/shots/cape.jpg", title: "Wear your colors", alt: "Minecraft player showing a rainbow cape overlooking the coast" },
  { src: "/images/shots/player-pet.jpg", title: "Bring a little company", alt: "Minecraft player standing beside a miniature player pet" },
  { src: "/images/shots/shoulder-slime.jpg", title: "A friend on your shoulder", alt: "Booger Client shoulder slime cosmetic in Minecraft" },
  { src: "/images/shots/crown.jpg", title: "Claim your crown", alt: "Minecraft player showing the Booger Client crown cosmetic" },
  { src: "/images/shots/devil-horns.jpg", title: "A little mischief", alt: "Minecraft player wearing devil horns" },
];

export default function PlayerPhotos() {
  const [selected, setSelected] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);
  const photo = PHOTOS[selected];
  function close() { dialog.current?.close(); }
  return (
    <section className="hauntPhotos" aria-labelledby="photos-title">
      <div className="hauntPhotosHeading"><div><p>IN-GAME / BOOGER CLIENT</p><h2 id="photos-title">Make it look like you.</h2></div><span>Click a photo for a closer look <span aria-hidden="true">↗</span></span></div>
      <div className="hauntPhotoRail" role="list" aria-label="Player screenshots">
        {PHOTOS.map((item, index) => <div className="hauntPhotoItem" role="listitem" key={item.src}>
          <button type="button" className="hauntPhoto" aria-label={`View photo: ${item.title}`} aria-haspopup="dialog" onClick={event => { lastTrigger.current = event.currentTarget; setSelected(index); dialog.current?.showModal(); }}>
            <img src={item.src} alt={item.alt} loading="lazy" width="480" height="600" />
            <span className="hauntPhotoCorner" aria-hidden="true">↗</span>
            <span className="hauntPhotoLabel"><small>0{index + 1}</small>{item.title}</span>
          </button>
        </div>)}
      </div>
      <dialog ref={dialog} className="hauntLightbox" aria-labelledby="photo-title" onClick={event => { if (event.target === event.currentTarget) close(); }} onClose={() => lastTrigger.current?.focus()} onKeyDown={event => { if (event.key === "ArrowRight") setSelected(index => (index + 1) % PHOTOS.length); if (event.key === "ArrowLeft") setSelected(index => (index - 1 + PHOTOS.length) % PHOTOS.length); }}>
        <div className="hauntLightboxInner">
          <button className="hauntPhotoClose" type="button" aria-label="Close photo" onClick={close} autoFocus>Close <span aria-hidden="true">×</span></button>
          <img src={photo.src} alt={photo.alt} width="480" height="600" />
          <div className="hauntPhotoControls"><button type="button" onClick={() => setSelected(index => (index - 1 + PHOTOS.length) % PHOTOS.length)} aria-label="Previous photo">←</button><div><h3 id="photo-title">{photo.title}</h3><span>{selected + 1} / {PHOTOS.length}</span></div><button type="button" onClick={() => setSelected(index => (index + 1) % PHOTOS.length)} aria-label="Next photo">→</button></div>
        </div>
      </dialog>
    </section>
  );
}
