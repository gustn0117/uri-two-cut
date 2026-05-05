import Link from "next/link";
import { Phone } from "@/components/icons";

export default function CtaBar({
  title = "지금 바로 우리투컷에 문의하세요",
  subtitle = "행사 일정과 콘셉트를 알려주시면 가장 적합한 솔루션을 제안해 드립니다.",
  primary = { label: "렌탈 문의", href: "/inquiry/rental" },
  secondary = { label: "구매 문의", href: "/inquiry/buy" },
}: {
  title?: string;
  subtitle?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section
      className="py-20 text-white"
      style={{ background: "linear-gradient(120deg, #0a0a0a 0%, #262626 100%)" }}
    >
      <div className="mx-auto max-w-[1100px] px-6 lg:px-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="font-display font-bold text-2xl md:text-3xl leading-snug">{title}</h2>
          <p className="mt-4 opacity-85 leading-relaxed">{subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          <Link
            href={primary.href}
            className="px-7 py-3.5 rounded-full bg-white font-semibold hover:bg-neutral-100"
            style={{ color: "#0a0a0a" }}
          >
            {primary.label}
          </Link>
          <Link
            href={secondary.href}
            className="px-7 py-3.5 rounded-full border border-white/40 hover:bg-white/10 font-semibold"
          >
            {secondary.label}
          </Link>
          <a
            href="tel:010-5819-0028"
            className="px-7 py-3.5 rounded-full border border-white/40 hover:bg-white/10 font-display font-bold inline-flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            010-5819-0028
          </a>
        </div>
      </div>
    </section>
  );
}
