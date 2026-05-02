type Stripe = string;
type Pattern = { type: "h" | "v" | "diag"; stripes: Stripe[] };

const FLAGS: Record<string, Pattern> = {
  AU: { type: "h", stripes: ["#012169", "#012169", "#012169"] },
  AT: { type: "h", stripes: ["#ed2939", "#ffffff", "#ed2939"] },
  BE: { type: "v", stripes: ["#000000", "#fdda24", "#ef3340"] },
  BR: { type: "h", stripes: ["#009c3b", "#009c3b", "#009c3b"] },
  BG: { type: "h", stripes: ["#ffffff", "#00966e", "#d62612"] },
  CA: { type: "v", stripes: ["#ff0000", "#ffffff", "#ff0000"] },
  HR: { type: "h", stripes: ["#ff0000", "#ffffff", "#171796"] },
  CY: { type: "h", stripes: ["#ffffff", "#ffffff", "#ffffff"] },
  CZ: { type: "h", stripes: ["#ffffff", "#d7141a", "#11457e"] },
  DK: { type: "h", stripes: ["#c8102e", "#c8102e", "#c8102e"] },
  EE: { type: "h", stripes: ["#0072ce", "#000000", "#ffffff"] },
  FI: { type: "h", stripes: ["#ffffff", "#003580", "#ffffff"] },
  FR: { type: "v", stripes: ["#002654", "#ffffff", "#ed2939"] },
  DE: { type: "h", stripes: ["#000000", "#dd0000", "#ffce00"] },
  GI: { type: "h", stripes: ["#ffffff", "#da291c", "#ffffff"] },
  GR: { type: "h", stripes: ["#0d5eaf", "#ffffff", "#0d5eaf"] },
  HK: { type: "h", stripes: ["#de2910", "#de2910", "#de2910"] },
  HU: { type: "h", stripes: ["#cd2a3e", "#ffffff", "#436f4d"] },
  IN: { type: "h", stripes: ["#ff9933", "#ffffff", "#138808"] },
  ID: { type: "h", stripes: ["#ff0000", "#ffffff", "#ffffff"] },
  IE: { type: "v", stripes: ["#169b62", "#ffffff", "#ff883e"] },
  IT: { type: "v", stripes: ["#009246", "#ffffff", "#ce2b37"] },
  JP: { type: "h", stripes: ["#ffffff", "#ffffff", "#ffffff"] },
  LV: { type: "h", stripes: ["#9e3039", "#ffffff", "#9e3039"] },
  LI: { type: "h", stripes: ["#002b7f", "#002b7f", "#ce1126"] },
  LT: { type: "h", stripes: ["#fdb913", "#006a44", "#c1272d"] },
  LU: { type: "h", stripes: ["#ed2939", "#ffffff", "#00a1de"] },
  MY: { type: "h", stripes: ["#cc0001", "#ffffff", "#cc0001"] },
  MT: { type: "v", stripes: ["#ffffff", "#cf142b", "#cf142b"] },
  MX: { type: "v", stripes: ["#006847", "#ffffff", "#ce1126"] },
  NL: { type: "h", stripes: ["#ae1c28", "#ffffff", "#21468b"] },
  NZ: { type: "h", stripes: ["#012169", "#012169", "#012169"] },
  NO: { type: "h", stripes: ["#ef2b2d", "#ef2b2d", "#ef2b2d"] },
  PL: { type: "h", stripes: ["#ffffff", "#ffffff", "#dc143c"] },
  PT: { type: "v", stripes: ["#006600", "#ff0000", "#ff0000"] },
  RO: { type: "v", stripes: ["#002b7f", "#fcd116", "#ce1126"] },
  SG: { type: "h", stripes: ["#ed2939", "#ffffff", "#ffffff"] },
  SK: { type: "h", stripes: ["#ffffff", "#0b4ea2", "#ee1c25"] },
  SI: { type: "h", stripes: ["#ffffff", "#0000ff", "#ff0000"] },
  ES: { type: "h", stripes: ["#aa151b", "#f1bf00", "#aa151b"] },
  SE: { type: "h", stripes: ["#006aa7", "#fecc00", "#006aa7"] },
  CH: { type: "h", stripes: ["#ff0000", "#ff0000", "#ff0000"] },
  TH: { type: "h", stripes: ["#a51931", "#f4f5f8", "#2d2a4a"] },
  AE: { type: "h", stripes: ["#00732f", "#ffffff", "#000000"] },
  GB: { type: "h", stripes: ["#012169", "#ffffff", "#c8102e"] },
  US: { type: "h", stripes: ["#bf0a30", "#ffffff", "#bf0a30"] },
};

export default function FlagBadge({
  code,
  className = "w-6 h-4",
}: {
  code: string;
  className?: string;
}) {
  const f = FLAGS[code] ?? { type: "h", stripes: ["#e5e5e5", "#a3a3a3", "#525252"] } as Pattern;

  return (
    <svg
      className={`${className} rounded-[2px] shrink-0 border border-neutral-300/40`}
      viewBox="0 0 30 20"
      preserveAspectRatio="none"
      role="img"
      aria-label={code}
    >
      {f.type === "h" &&
        f.stripes.map((color, i) => (
          <rect
            key={i}
            x={0}
            y={(i * 20) / f.stripes.length}
            width={30}
            height={20 / f.stripes.length}
            fill={color}
          />
        ))}
      {f.type === "v" &&
        f.stripes.map((color, i) => (
          <rect
            key={i}
            x={(i * 30) / f.stripes.length}
            y={0}
            width={30 / f.stripes.length}
            height={20}
            fill={color}
          />
        ))}
      {/* Special markings */}
      {code === "JP" && <circle cx={15} cy={10} r={5} fill="#bc002d" />}
      {code === "CY" && <path d="M11 7l4 3 4-3v6l-4 3-4-3z" fill="#d57800" />}
      {code === "CA" && <path d="M15 5l1.2 2.4 2.6.4-1.9 1.8.5 2.6L15 11l-2.4 1.2.5-2.6L11.2 7.8l2.6-.4z" fill="#ff0000" />}
      {code === "BR" && <>
        <polygon points="15,4 27,10 15,16 3,10" fill="#ffdf00" />
        <circle cx={15} cy={10} r={3.2} fill="#002776" />
      </>}
      {code === "AU" && <rect x="0" y="0" width="13" height="10" fill="#ffffff" opacity="0.15" />}
      {code === "NZ" && <rect x="0" y="0" width="13" height="10" fill="#ffffff" opacity="0.15" />}
      {code === "GB" && <>
        <rect x="0" y="8" width="30" height="4" fill="#ffffff" />
        <rect x="13" y="0" width="4" height="20" fill="#ffffff" />
        <rect x="0" y="9" width="30" height="2" fill="#c8102e" />
        <rect x="14" y="0" width="2" height="20" fill="#c8102e" />
      </>}
      {code === "US" && <>
        <rect y="2" width="30" height="2" fill="#ffffff" />
        <rect y="6" width="30" height="2" fill="#ffffff" />
        <rect y="10" width="30" height="2" fill="#ffffff" />
        <rect y="14" width="30" height="2" fill="#ffffff" />
        <rect y="18" width="30" height="2" fill="#ffffff" />
        <rect width="12" height="10" fill="#3c3b6e" />
      </>}
      {code === "CH" && <>
        <rect x="13" y="6" width="4" height="8" fill="#ffffff" />
        <rect x="11" y="8" width="8" height="4" fill="#ffffff" />
      </>}
      {code === "DK" && <>
        <rect x="0" y="8" width="30" height="4" fill="#ffffff" />
        <rect x="9" y="0" width="4" height="20" fill="#ffffff" />
      </>}
      {code === "FI" && <>
        <rect x="0" y="8" width="30" height="4" fill="#003580" />
        <rect x="9" y="0" width="4" height="20" fill="#003580" />
      </>}
      {code === "NO" && <>
        <rect x="0" y="8" width="30" height="4" fill="#ffffff" />
        <rect x="9" y="0" width="4" height="20" fill="#ffffff" />
        <rect x="0" y="9" width="30" height="2" fill="#002868" />
        <rect x="10" y="0" width="2" height="20" fill="#002868" />
      </>}
      {code === "SE" && <>
        <rect x="0" y="8" width="30" height="4" fill="#fecc00" />
        <rect x="9" y="0" width="4" height="20" fill="#fecc00" />
      </>}
      {code === "HK" && <path d="M15 5a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5z" fill="#ffffff" />}
      {code === "SG" && <circle cx="8" cy="6" r="2.5" fill="#ed2939" />}
      {code === "MY" && <circle cx="8" cy="6" r="2.2" fill="#ffcc00" />}
      {code === "ID" && <rect y="10" width="30" height="10" fill="#ffffff" />}
      {code === "PL" && <rect y="10" width="30" height="10" fill="#dc143c" />}
      {code === "TH" && <>
        <rect y="0" width="30" height="4" fill="#a51931" />
        <rect y="4" width="30" height="4" fill="#f4f5f8" />
        <rect y="8" width="30" height="4" fill="#2d2a4a" />
        <rect y="12" width="30" height="4" fill="#f4f5f8" />
        <rect y="16" width="30" height="4" fill="#a51931" />
      </>}
      {code === "AE" && <rect x="0" y="0" width="6" height="20" fill="#ff0000" />}
      {code === "MT" && <rect x="0" y="0" width="15" height="20" fill="#ffffff" />}
      {code === "GI" && <rect y="13" width="30" height="7" fill="#da291c" />}
      {code === "LI" && <circle cx="8" cy="6" r="1.5" fill="#ffd83d" />}
    </svg>
  );
}
