export default function UIShowcase() {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-neutral-50 to-neutral-100 p-8 shadow-lg max-w-[480px] mx-auto aspect-[5/4] flex items-center justify-center border border-neutral-200/60">
      <svg
        viewBox="0 0 360 280"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="포토부스 UI 미리보기"
      >
        {/* tablet shell */}
        <defs>
          <linearGradient id="ui-shell" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a1a1a" />
            <stop offset="100%" stopColor="#0a0a0a" />
          </linearGradient>
          <linearGradient id="ui-screen" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f5f5f5" />
          </linearGradient>
          <linearGradient id="ui-tile" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#262626" />
            <stop offset="100%" stopColor="#404040" />
          </linearGradient>
        </defs>

        <rect x="40" y="20" width="280" height="240" rx="20" fill="url(#ui-shell)" />
        <rect x="52" y="32" width="256" height="216" rx="12" fill="url(#ui-screen)" />

        {/* status bar */}
        <rect x="68" y="44" width="60" height="4" rx="2" fill="#0a0a0a" opacity="0.7" />
        <circle cx="288" cy="46" r="3" fill="#0a0a0a" opacity="0.6" />

        {/* heading */}
        <text x="180" y="78" textAnchor="middle" fontFamily="system-ui" fontSize="11" fontWeight="700" fill="#0a0a0a" letterSpacing="3">
          SELECT TEMPLATE
        </text>

        {/* 2x2 template tiles */}
        <g>
          <rect x="78" y="92" width="92" height="58" rx="6" fill="url(#ui-tile)" />
          <rect x="84" y="98" width="38" height="46" rx="3" fill="#ffffff" opacity="0.92" />
          <rect x="126" y="98" width="38" height="46" rx="3" fill="#ffffff" opacity="0.78" />

          <rect x="190" y="92" width="92" height="58" rx="6" fill="#0a0a0a" />
          <rect x="196" y="98" width="80" height="20" rx="3" fill="#ffffff" opacity="0.95" />
          <rect x="196" y="122" width="80" height="20" rx="3" fill="#ffffff" opacity="0.7" />

          <rect x="78" y="156" width="92" height="58" rx="6" fill="#262626" />
          <rect x="84" y="162" width="80" height="46" rx="3" fill="#ffffff" opacity="0.85" />

          <rect x="190" y="156" width="92" height="58" rx="6" fill="url(#ui-tile)" />
          <rect x="196" y="162" width="38" height="22" rx="3" fill="#ffffff" opacity="0.9" />
          <rect x="238" y="162" width="38" height="22" rx="3" fill="#ffffff" opacity="0.75" />
          <rect x="196" y="186" width="80" height="22" rx="3" fill="#ffffff" opacity="0.6" />
        </g>

        {/* CTA button */}
        <rect x="118" y="222" width="124" height="20" rx="10" fill="#0a0a0a" />
        <text x="180" y="236" textAnchor="middle" fontFamily="system-ui" fontSize="9" fontWeight="700" fill="#ffffff" letterSpacing="2">
          NEXT
        </text>

        {/* lang chips bottom-left */}
        <rect x="60" y="222" width="20" height="20" rx="10" fill="#0a0a0a" opacity="0.85" />
        <text x="70" y="236" textAnchor="middle" fontFamily="system-ui" fontSize="8" fontWeight="700" fill="#ffffff">KR</text>
        <rect x="84" y="222" width="20" height="20" rx="10" fill="#ffffff" stroke="#0a0a0a" strokeWidth="0.8" />
        <text x="94" y="236" textAnchor="middle" fontFamily="system-ui" fontSize="8" fontWeight="700" fill="#0a0a0a">EN</text>

        {/* tablet stand line */}
        <rect x="170" y="262" width="20" height="6" rx="2" fill="#0a0a0a" opacity="0.4" />
      </svg>
    </div>
  );
}
