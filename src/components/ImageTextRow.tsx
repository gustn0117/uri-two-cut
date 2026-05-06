import Link from "next/link";
import { Search } from "@/components/icons";
import GalleryButton from "@/components/GalleryButton";

export type Cta =
  | { label: string; href: string }
  | { label: string; gallery: string[]; galleryTitle?: string };

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  highlight?: string;
  description: string;
  ctas?: Cta[];
  reverse?: boolean;
  visual: React.ReactNode;
  bg?: string;
};

export default function ImageTextRow({
  eyebrow,
  title,
  highlight,
  description,
  ctas,
  reverse,
  visual,
  bg = "white",
}: Props) {
  return (
    <section className="py-20 lg:py-28" style={{ background: bg }}>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div>
            <p className="text-xs tracking-[0.4em] text-[#0a0a0a] font-bold">{eyebrow}</p>
            <h2 className="mt-5 font-display font-black text-3xl md:text-4xl lg:text-5xl leading-[1.2]">
              {title}
              {highlight && (
                <>
                  <br />
                  <span className="text-[#0a0a0a]">{highlight}</span>
                </>
              )}
            </h2>
            <p className="mt-7 text-neutral-600 leading-relaxed whitespace-pre-line">
              {description}
            </p>
            {ctas && (
              <div className="mt-8 flex flex-wrap gap-3">
                {ctas.map((c, i) => {
                  if ("gallery" in c) {
                    return (
                      <GalleryButton
                        key={`${c.label}-${i}`}
                        label={c.label}
                        images={c.gallery}
                        galleryTitle={c.galleryTitle}
                        primary={i === 0}
                      />
                    );
                  }
                  return (
                    <Link
                      key={c.href}
                      href={c.href}
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition ${
                        i === 0
                          ? "bg-[#0a0a0a] hover:bg-[#262626]"
                          : "border border-neutral-300 hover:bg-neutral-50"
                      }`}
                      style={{ color: i === 0 ? "#ffffff" : "#404040" }}
                    >
                      <Search className="w-4 h-4" />
                      {c.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
          <div>{visual}</div>
        </div>
      </div>
    </section>
  );
}

export function TabletVisual({ children, bg = "#1f1f1f" }: { children?: React.ReactNode; bg?: string }) {
  return (
    <div
      className="relative mx-auto rounded-[36px] p-3 shadow-2xl max-w-[480px]"
      style={{ background: bg }}
    >
      <div className="aspect-[4/5] bg-white rounded-[24px] overflow-hidden grid place-items-center">
        {children}
      </div>
    </div>
  );
}

export function PaletteVisual({ colors }: { colors: string[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 max-w-[480px] mx-auto">
      {colors.map((c, i) => (
        <div
          key={i}
          className="aspect-[4/5] rounded-2xl shadow grid place-items-center"
          style={{ background: c }}
        >
          <div className="w-3/4 h-3/4 rounded bg-white/40" />
        </div>
      ))}
    </div>
  );
}
