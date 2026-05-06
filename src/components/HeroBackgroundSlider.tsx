"use client";

import { useEffect, useState } from "react";
import projectsData from "@/lib/projects.json";

type Item = { id: string; cover: string; title?: string };

const FALLBACK = (projectsData as Item[])
  .filter((p) => p.cover)
  .slice(0, 6);

export default function HeroBackgroundSlider() {
  const [items, setItems] = useState<Item[]>(FALLBACK);

  useEffect(() => {
    let abort = false;
    fetch("/api/projects/recent?limit=6", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => {
        if (abort) return;
        if (j?.items?.length) setItems(j.items);
      })
      .catch(() => {});
    return () => {
      abort = true;
    };
  }, []);

  // Duplicate so the marquee loops seamlessly when translated by -50%
  const TRACK = [...items, ...items];

  return (
    <div className="absolute inset-0 overflow-hidden bg-neutral-950">
      <div className="hero-marquee flex h-full">
        {TRACK.map((p, i) => (
          <div
            key={`${p.id}-${i}`}
            className="h-full shrink-0 w-[60vw] sm:w-[42vw] lg:w-[28vw]"
            aria-hidden
          >
            <img
              src={p.cover}
              alt=""
              loading={i < 4 ? "eager" : "lazy"}
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
