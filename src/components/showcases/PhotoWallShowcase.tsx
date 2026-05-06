export default function PhotoWallShowcase() {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-50 p-8 shadow-lg max-w-[480px] mx-auto aspect-[5/4] flex items-center justify-center border border-neutral-200/60">
      <svg
        viewBox="0 0 360 280"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="백월·현수막 미리보기"
      >
        <defs>
          <linearGradient id="wall-bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#171717" />
            <stop offset="100%" stopColor="#0a0a0a" />
          </linearGradient>
          <linearGradient id="banner" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#262626" />
            <stop offset="100%" stopColor="#404040" />
          </linearGradient>
        </defs>

        {/* backdrop wall */}
        <rect x="20" y="20" width="320" height="220" rx="6" fill="url(#wall-bg)" />

        {/* hanging rod */}
        <rect x="20" y="20" width="320" height="6" fill="#525252" />
        <circle cx="40" cy="23" r="4" fill="#737373" />
        <circle cx="320" cy="23" r="4" fill="#737373" />

        {/* main brand banner top */}
        <rect x="60" y="40" width="240" height="42" rx="3" fill="url(#banner)" />
        <text x="180" y="60" textAnchor="middle" fontFamily="system-ui" fontSize="13" fontWeight="800" fill="#ffffff" letterSpacing="4">
          BRAND EVENT
        </text>
        <text x="180" y="74" textAnchor="middle" fontFamily="system-ui" fontSize="8" fill="#ffffff" opacity="0.7" letterSpacing="3">
          PHOTO ZONE
        </text>

        {/* photo grid 3x2 */}
        <g>
          {/* row 1 */}
          <rect x="60" y="96" width="74" height="56" rx="4" fill="#ffffff" opacity="0.95" />
          <rect x="66" y="102" width="62" height="44" rx="2" fill="#525252" opacity="0.5" />

          <rect x="142" y="96" width="74" height="56" rx="4" fill="#ffffff" opacity="0.92" />
          <rect x="148" y="102" width="62" height="44" rx="2" fill="#404040" opacity="0.55" />

          <rect x="224" y="96" width="74" height="56" rx="4" fill="#ffffff" opacity="0.95" />
          <rect x="230" y="102" width="62" height="44" rx="2" fill="#262626" opacity="0.6" />

          {/* row 2 */}
          <rect x="60" y="160" width="74" height="56" rx="4" fill="#ffffff" opacity="0.92" />
          <rect x="66" y="166" width="62" height="44" rx="2" fill="#404040" opacity="0.55" />

          <rect x="142" y="160" width="74" height="56" rx="4" fill="#ffffff" opacity="0.95" />
          <rect x="148" y="166" width="62" height="44" rx="2" fill="#525252" opacity="0.5" />

          <rect x="224" y="160" width="74" height="56" rx="4" fill="#ffffff" opacity="0.92" />
          <rect x="230" y="166" width="62" height="44" rx="2" fill="#737373" opacity="0.5" />
        </g>

        {/* bottom banner */}
        <rect x="60" y="226" width="240" height="14" rx="2" fill="#ffffff" opacity="0.92" />
        <text x="180" y="236" textAnchor="middle" fontFamily="system-ui" fontSize="8" fontWeight="700" fill="#0a0a0a" letterSpacing="3">
          @YOUR BRAND
        </text>

        {/* spotlights */}
        <ellipse cx="100" cy="35" rx="50" ry="20" fill="#ffffff" opacity="0.05" />
        <ellipse cx="260" cy="35" rx="50" ry="20" fill="#ffffff" opacity="0.05" />
      </svg>
    </div>
  );
}
