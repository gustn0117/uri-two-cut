"use client";

import { useEffect, useMemo, useState } from "react";

type Project = {
  id: string;
  title: string;
  category: string;
  date: string | null;
  cover: string;
  photos: string[];
};

const PER_PAGE = 24;

export default function PortfolioGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<string>("전체");
  const [page, setPage] = useState(1);
  const [openId, setOpenId] = useState<string | null>(null);

  const categories = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => set.add(p.category));
    // Pin 설치사례 first if present
    const list = Array.from(set);
    list.sort((a, b) => (a === "설치사례" ? -1 : b === "설치사례" ? 1 : 0));
    return ["전체", ...list];
  }, [projects]);

  const filtered = useMemo(() => {
    return active === "전체" ? projects : projects.filter((p) => p.category === active);
  }, [active, projects]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const visible = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  // Reset page when filter changes
  useEffect(() => {
    setPage(1);
  }, [active]);

  const open = projects.find((p) => p.id === openId) || null;

  // Esc to close lightbox
  useEffect(() => {
    if (!openId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openId]);

  return (
    <>
      <section className="py-12 lg:py-16 bg-white border-b border-neutral-100">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2 rounded-full text-sm transition border ${
                active === c
                  ? "bg-[#0a0a0a] border-[#0a0a0a]"
                  : "bg-white border-neutral-300 text-neutral-700 hover:border-neutral-500"
              }`}
              style={active === c ? { color: "#ffffff" } : undefined}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm text-neutral-500">전체 {filtered.length}건</p>
            {totalPages > 1 && (
              <p className="text-sm text-neutral-500">{page} / {totalPages} 페이지</p>
            )}
          </div>

          {visible.length === 0 ? (
            <p className="text-center text-neutral-400 py-20">해당 카테고리의 사례가 없습니다.</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
              {visible.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setOpenId(p.id)}
                  className="group text-left cursor-pointer"
                >
                  <div className="aspect-[4/3] relative overflow-hidden rounded-md mb-4 bg-neutral-100">
                    <img
                      src={p.cover}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <p className="text-xs tracking-widest text-neutral-500">{p.category}</p>
                  <h4 className="font-bold text-base leading-snug mt-1 group-hover:text-[#0a0a0a] transition-colors line-clamp-2">
                    {p.title}
                  </h4>
                  {p.date && <p className="text-xs text-neutral-400 mt-1">{p.date}</p>}
                </button>
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <nav className="mt-16 flex justify-center items-center gap-1">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="w-10 h-10 grid place-items-center rounded-md hover:bg-neutral-100 text-neutral-500 disabled:opacity-30"
                aria-label="prev"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6" /></svg>
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter((p) => Math.abs(p - page) < 4 || p === 1 || p === totalPages)
                .map((p, i, arr) => (
                  <span key={p}>
                    {i > 0 && p - arr[i - 1] > 1 && <span className="px-2 text-neutral-400">…</span>}
                    <button
                      onClick={() => setPage(p)}
                      className={`w-10 h-10 rounded-md font-medium ${
                        p === page ? "bg-[#0a0a0a]" : "hover:bg-neutral-100 text-neutral-600"
                      }`}
                      style={p === page ? { color: "#ffffff" } : undefined}
                    >
                      {p}
                    </button>
                  </span>
                ))}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="w-10 h-10 grid place-items-center rounded-md hover:bg-neutral-100 text-neutral-500 disabled:opacity-30"
                aria-label="next"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
              </button>
            </nav>
          )}
        </div>
      </section>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm overflow-y-auto"
          onClick={() => setOpenId(null)}
        >
          <button
            aria-label="닫기"
            onClick={() => setOpenId(null)}
            className="fixed top-5 right-5 z-10 w-11 h-11 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 text-white"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6l-12 12" />
            </svg>
          </button>
          <div className="mx-auto max-w-[1100px] p-6 lg:p-10" onClick={(e) => e.stopPropagation()}>
            <div className="text-white mb-6">
              <p className="text-xs tracking-[0.4em] opacity-70">{open.category}</p>
              <h3 className="font-display font-bold text-2xl md:text-3xl mt-2">{open.title}</h3>
              {open.date && <p className="text-sm opacity-60 mt-1">{open.date}</p>}
            </div>
            <div className="grid gap-4">
              <img src={open.cover} alt={open.title} className="w-full rounded-md" />
              {open.photos.map((src) => (
                <img key={src} src={src} alt={open.title} loading="lazy" className="w-full rounded-md" />
              ))}
            </div>
            <p className="text-center text-xs text-white/50 mt-6">
              총 {1 + open.photos.length}장 — Esc 또는 배경 클릭으로 닫기
            </p>
          </div>
        </div>
      )}
    </>
  );
}
