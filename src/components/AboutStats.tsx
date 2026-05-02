"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { label: "진행한 프로젝트", target: 5000 },
  { label: "협업 브랜드", target: 3000 },
  { label: "배송된 제품", target: 1000 },
];

export default function AboutStats() {
  return (
    <div className="relative mx-auto max-w-[1100px] px-6 lg:px-10 mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
      {STATS.map((s) => (
        <Counter key={s.label} {...s} />
      ))}
    </div>
  );
}

function Counter({ label, target }: { label: string; target: number }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const start = () => {
      if (started.current) return;
      started.current = true;
      const dur = 1800;
      const t0 = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - t0) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        setN(Math.round(target * eased));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) start();
        });
      },
      { threshold: 0.05 }
    );
    io.observe(el);
    const fallback = setTimeout(start, 800);
    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
  }, [target]);

  return (
    <div ref={ref} className="text-center text-white">
      <p className="text-sm tracking-widest opacity-80 mb-4">{label}</p>
      <p className="font-display font-black text-6xl md:text-7xl text-white">
        {n.toLocaleString()}
        <span className="text-[#737373] ml-1">건+</span>
      </p>
    </div>
  );
}
