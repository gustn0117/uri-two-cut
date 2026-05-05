"use client";

import { useEffect, useState } from "react";
import projectsData from "@/lib/projects.json";

type Project = {
  id: string;
  date: string | null;
  title: string;
  category: string;
  cover: string;
};

const ALL = (projectsData as Project[]).filter((p) => p.cover);

export default function HeroProjectsGrid() {
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (ALL.length <= 4) return;
    const t = setInterval(() => {
      setPage((p) => (p + 1) % Math.ceil(ALL.length / 4));
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const start = page * 4;
  const visible = ALL.slice(start, start + 4);
  // Pad to 4 if needed
  while (visible.length < 4 && ALL.length > 0) {
    visible.push(ALL[visible.length % ALL.length]);
  }

  return (
    <div className="hidden lg:block absolute right-10 bottom-24 w-[420px] z-10">
      <p className="text-xs tracking-[0.4em] opacity-70 mb-3 text-white">RECENT PROJECTS</p>
      <div className="grid grid-cols-2 gap-3">
        {visible.map((p, i) => (
          <div
            key={`${p.id}-${i}`}
            className="aspect-[4/3] rounded-lg overflow-hidden border border-white/20 bg-black/30 backdrop-blur-sm relative group"
          >
            <img
              src={p.cover}
              alt={p.title}
              loading="lazy"
              className="w-full h-full object-cover transition-opacity duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent" />
            <div className="absolute bottom-2 left-2 right-2 text-white">
              <p className="text-[10px] tracking-widest opacity-80">{p.category}</p>
              <p className="text-xs font-bold leading-tight line-clamp-1 mt-0.5">{p.title}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-[10px] text-white/50 mt-3 text-right">자동 로테이션 · {ALL.length}건</p>
    </div>
  );
}
