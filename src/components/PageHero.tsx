import Link from "next/link";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  breadcrumb: { label: string; href?: string }[];
  variant?: "blue" | "dark" | "purple" | "green";
};

const VARIANTS: Record<NonNullable<Props["variant"]>, string> = {
  blue: "linear-gradient(120deg, #0b2461 0%, #1A6DFF 60%, #4f9bff 120%)",
  dark: "linear-gradient(120deg, #0a0a0a 0%, #1f1f1f 60%, #3f3f3f 120%)",
  purple: "linear-gradient(120deg, #2e1065 0%, #7c3aed 60%, #a78bfa 120%)",
  green: "linear-gradient(120deg, #14532d 0%, #16a34a 60%, #4ade80 120%)",
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumb,
  variant = "blue",
}: Props) {
  return (
    <section
      className="relative pt-40 pb-24 text-white overflow-hidden"
      style={{ background: VARIANTS[variant] }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 20%, rgba(255,255,255,0.4) 0%, transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <nav className="text-sm opacity-80 flex items-center gap-2">
          <Link href="/" className="hover:text-white">HOME</Link>
          {breadcrumb.map((b, i) => (
            <span key={i} className="flex items-center gap-2">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
              {b.href ? (
                <Link href={b.href} className="hover:text-white">{b.label}</Link>
              ) : (
                <span className="text-white">{b.label}</span>
              )}
            </span>
          ))}
        </nav>
        <p className="mt-8 text-xs tracking-[0.4em] opacity-80">{eyebrow}</p>
        <h1 className="mt-3 font-display font-black text-4xl md:text-5xl lg:text-6xl leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-base md:text-lg opacity-85 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
