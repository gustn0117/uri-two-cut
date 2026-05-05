import HeroBackgroundSlider from "@/components/HeroBackgroundSlider";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-end overflow-hidden bg-neutral-900 text-white"
    >
      <HeroBackgroundSlider />

      {/* Strong overlay so the marquee stays subtle behind the headline */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.72) 50%, rgba(0,0,0,0.92) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1400px] w-full px-6 lg:px-10 pb-24 pt-40">
        <p className="text-sm md:text-base tracking-wide opacity-80 mb-6 animate-float-up">
          브랜드를 경험으로, 공간을 자산으로
        </p>
        <h1 className="font-display font-black leading-[0.9] text-[18vw] md:text-[10vw] lg:text-[160px] tracking-tight animate-float-up drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
          우리투컷
        </h1>
        <p className="font-display font-bold text-2xl md:text-4xl lg:text-5xl mt-4 opacity-95 animate-float-up drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
          프리미엄 포토부스
        </p>
        <p className="mt-8 max-w-2xl text-base md:text-lg opacity-90 animate-float-up">
          맞춤형 포토 키오스크 <strong>제작 · 구매 · 렌탈</strong> 서비스 우리투컷
        </p>

        <div className="mt-12 flex flex-wrap gap-3">
          <a
            href="#rental-inquiry"
            className="px-7 py-3.5 rounded-full bg-white hover:bg-neutral-100 font-semibold transition-colors"
            style={{ color: "#0a0a0a" }}
          >
            렌탈 문의하기
          </a>
          <a
            href="/rental/booth#pricing"
            className="px-7 py-3.5 rounded-full border border-white/50 hover:bg-white/10 transition-colors font-semibold backdrop-blur-sm"
          >
            렌탈비용 보기
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs tracking-[0.3em] opacity-70 z-10 inline-flex items-center gap-2">
        SCROLL
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M6 13l6 6 6-6" /></svg>
      </div>
    </section>
  );
}
