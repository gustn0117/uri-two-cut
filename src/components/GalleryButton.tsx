"use client";

import { useEffect, useState } from "react";

export default function GalleryButton({
  label,
  images,
  galleryTitle,
  primary = false,
}: {
  label: string;
  images: string[];
  galleryTitle?: string;
  primary?: boolean;
}) {
  const single = images.length === 1;
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState<number | null>(single ? 0 : null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (single) {
        setOpen(false);
        return;
      }
      if (activeIdx !== null) setActiveIdx(null);
      else setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, activeIdx, single]);

  // Lock body scroll when modal open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition ${
          primary
            ? "bg-[#0a0a0a] hover:bg-[#262626]"
            : "border border-neutral-300 hover:bg-neutral-50"
        }`}
        style={{ color: primary ? "#ffffff" : "#404040" }}
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
        {label}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm overflow-y-auto"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            aria-label="닫기"
            onClick={() => setOpen(false)}
            className="fixed top-5 right-5 z-10 w-11 h-11 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 text-white transition"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6l-12 12" />
            </svg>
          </button>

          {!single && (
            <div
              className="mx-auto max-w-[1200px] p-6 lg:p-10"
              onClick={(e) => e.stopPropagation()}
            >
              {galleryTitle && (
                <div className="text-white mb-8 text-center">
                  <p className="text-xs tracking-[0.4em] opacity-70">DESIGN GALLERY</p>
                  <h3 className="font-display font-bold text-2xl md:text-3xl mt-2">{galleryTitle}</h3>
                  <p className="text-sm opacity-60 mt-1">총 {images.length}개 디자인 · 클릭하면 크게 볼 수 있습니다</p>
                </div>
              )}

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {images.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIdx(i)}
                    className="aspect-square rounded-md overflow-hidden bg-neutral-900 hover:ring-2 hover:ring-white/40 transition group relative"
                  >
                    <img
                      src={src}
                      alt={`${galleryTitle ?? "디자인"} ${i + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeIdx !== null && (
            <div
              className="fixed inset-0 z-50 bg-black/95 grid place-items-center p-6"
              onClick={() => (single ? setOpen(false) : setActiveIdx(null))}
              role="dialog"
              aria-modal="true"
            >
              {!single && (
                <>
                  <button
                    aria-label="이전"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIdx((i) => (i! - 1 + images.length) % images.length);
                    }}
                    className="fixed left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 text-white"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 6l-6 6 6 6" />
                    </svg>
                  </button>
                  <button
                    aria-label="다음"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIdx((i) => (i! + 1) % images.length);
                    }}
                    className="fixed right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 text-white"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 6l6 6-6 6" />
                    </svg>
                  </button>
                </>
              )}
              <img
                src={images[activeIdx]}
                alt=""
                className="max-h-[90vh] max-w-full object-contain rounded-md"
                onClick={(e) => e.stopPropagation()}
              />
              <p className="fixed bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/60">
                {single ? "Esc 또는 배경 클릭으로 닫기" : `${activeIdx + 1} / ${images.length} · Esc 또는 배경 클릭으로 닫기`}
              </p>
            </div>
          )}
        </div>
      )}
    </>
  );
}
