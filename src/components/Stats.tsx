"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { label: "진행한 프로젝트", target: 5000, suffix: "건+" },
  { label: "협업 브랜드", target: 320, suffix: "건+" },
  { label: "배송된 제품", target: 1800, suffix: "건+" },
];

export default function Stats() {
  return (
    <section className="bg-neutral-950 text-white pb-28 lg:pb-36 -mt-1">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="border-t border-white/10 pt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {STATS.map((s) => (
            <Counter key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ label, target, suffix }: { label: string; target: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const dur = 1600;
            const t0 = performance.now();
            const tick = (t: number) => {
              const p = Math.min(1, (t - t0) / dur);
              const eased = 1 - Math.pow(1 - p, 3);
              setN(Math.round(target * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-sm tracking-wider opacity-70 mb-3">{label}</p>
      <p className="font-display font-black text-5xl md:text-6xl">
        {n.toLocaleString()}
        <span className="text-[#0a0a0a] ml-1">{suffix}</span>
      </p>
    </div>
  );
}
