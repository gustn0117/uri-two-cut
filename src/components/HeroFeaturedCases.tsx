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
    <aside className="hidden lg:block w-full max-w-[440px]">
      <div className="flex items-end justify-between mb-4">
        <div>
          <p className="text-[10px] tracking-[0.4em] opacity-70 text-white">FEATURED</p>
          <h3 className="mt-1.5 font-display font-bold text-lg text-white">주요 설치사례</h3>
        </div>
        <a
          href="/portfolio"
          className="text-[11px] tracking-widest opacity-70 hover:opacity-100 text-white inline-flex items-center gap-1"
        >
          전체보기
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 gap-2.5 aspect-[3/2]">
        {six.map((p) => (
          <a
            key={p.id}
            href="/portfolio"
            className="group relative rounded-md overflow-hidden border border-white/15 bg-black/40 backdrop-blur-sm"
          >
            {p.cover ? (
              <img
                src={p.cover}
                alt={p.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full bg-neutral-800" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />
            <div className="absolute bottom-1.5 left-2 right-2 text-white">
              <p className="text-[8px] tracking-widest opacity-80">{p.category}</p>
              <p className="text-[11px] font-bold leading-tight line-clamp-1 mt-0.5">{p.title}</p>
            </div>
          </a>
        ))}
      </div>
    </aside>
  );
}
