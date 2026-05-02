export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-end overflow-hidden bg-neutral-900 text-white"
    >
      {/* Background visual: gradient + decorative kiosks */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 80% at 70% 20%, rgba(86,114,255,0.25) 0%, rgba(0,0,0,0) 60%), linear-gradient(180deg, #0b0f1a 0%, #11162b 50%, #0b0f1a 100%)",
        }}
      />
      {/* Decorative grid kiosks */}
      <div className="absolute inset-0 -z-10 opacity-25 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(transparent_95%,rgba(255,255,255,0.06)_95%),linear-gradient(90deg,transparent_95%,rgba(255,255,255,0.06)_95%)] bg-[size:80px_80px]" />
      </div>

      {/* Floating colored kiosks */}
      <KioskCluster />

      <div className="relative z-10 mx-auto max-w-[1400px] w-full px-6 lg:px-10 pb-24 pt-40">
        <p className="text-sm md:text-base tracking-wide opacity-80 mb-6 animate-float-up">
          브랜드를 경험으로, 공간을 자산으로
        </p>
        <h1 className="font-display font-black leading-[0.9] text-[18vw] md:text-[10vw] lg:text-[160px] tracking-tight animate-float-up">
          우리투컷
        </h1>
        <p className="font-display font-bold text-2xl md:text-4xl lg:text-5xl mt-4 opacity-90 animate-float-up">
          PREMIUM KIOSKS.
        </p>
        <p className="mt-8 max-w-2xl text-base md:text-lg opacity-80 animate-float-up">
          맞춤형 포토 키오스크 <strong>제작 · 구매 · 렌탈</strong> 서비스 우리투컷
        </p>

        <div className="mt-12 flex flex-wrap gap-3">
          <a
            href="#rental-inquiry"
            className="px-7 py-3.5 rounded-full bg-[#1A6DFF] hover:bg-[#0b56e0] text-white font-semibold transition-colors"
          >
            렌탈 문의하기
          </a>
          <a
            href="#purchase-inquiry"
            className="px-7 py-3.5 rounded-full border border-white/30 hover:bg-white hover:text-neutral-900 transition-colors font-semibold"
          >
            구매 상담받기
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs tracking-[0.3em] opacity-60 z-10 inline-flex items-center gap-2">
        SCROLL
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M6 13l6 6 6-6" /></svg>
      </div>
    </section>
  );
}

function KioskCluster() {
  const items = [
    { c: "#ff5b5b", x: "8%", y: "30%", r: -6 },
    { c: "#22c55e", x: "78%", y: "22%", r: 8 },
    { c: "#1A6DFF", x: "65%", y: "55%", r: -3 },
    { c: "#a855f7", x: "20%", y: "62%", r: 4 },
    { c: "#fbbf24", x: "45%", y: "20%", r: 0 },
  ];
  return (
    <div className="absolute inset-0 -z-10 hidden md:block opacity-60">
      {items.map((k, i) => (
        <div
          key={i}
          className="absolute w-32 h-56 rounded-2xl shadow-2xl"
          style={{
            background: `linear-gradient(160deg, ${k.c} 0%, ${k.c}aa 60%, #00000020 100%)`,
            left: k.x,
            top: k.y,
            transform: `rotate(${k.r}deg)`,
          }}
        >
          <div className="absolute inset-2 rounded-xl border border-white/30 bg-black/20 flex items-center justify-center">
            <div className="w-3/4 aspect-[3/4] rounded bg-white/20 backdrop-blur-sm" />
          </div>
        </div>
      ))}
    </div>
  );
}
