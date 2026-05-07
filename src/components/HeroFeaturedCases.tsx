"use client";

import { useEffect, useState } from "react";
import projectsData from "@/lib/projects.json";

type Item = {
  id: string;
  cover: string;
  title: string;
  category: string;
};

const FALLBACK = (projectsData as Item[])
  .filter((p) => p.cover)
  .slice(0, 6);

export default function HeroFeaturedCases() {
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

  const six = items.slice(0, 6);

  return (
    <aside className="hidden lg:block w-full max-w-[520px]">
      <div className="flex items-end justify-between mb-5">
        <div>
          <p className="text-[10px] tracking-[0.4em] opacity-70 text-white">FEATURED</p>
          <h3 className="mt-2 font-display font-bold text-xl text-white">주요 설치사례</h3>
        </div>
        <a
          href="/portfolio"
          className="text-[11px] tracking-widest opacity-70 hover:opacity-100 text-white inline-flex items-center gap-1 pb-1"
        >
          전체보기
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {six.map((p) => (
          <a
            key={p.id}
            href="/portfolio"
            className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-white/15 bg-black/40 backdrop-blur-sm shadow-xl"
          >
            {p.cover ? (
              <img
                src={p.cover}
                alt={p.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full bg-neutral-800" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute bottom-2.5 left-3 right-3 text-white">
              <p className="text-[9px] tracking-[0.3em] opacity-75 uppercase">{p.category}</p>
              <p className="text-xs font-bold leading-tight line-clamp-2 mt-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                {p.title}
              </p>
            </div>
          </a>
        ))}
      </div>
    </aside>
  );
}
