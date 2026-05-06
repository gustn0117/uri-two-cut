"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const NAV: NavItem[] = [
  { label: "회사소개", href: "/about" },
  {
    label: "행사렌탈",
    href: "/rental",
    children: [
      { label: "포토부스", href: "/rental/booth" },
      { label: "포토카드", href: "/rental/card" },
      { label: "게임키오스크", href: "/rental/game" },
    ],
  },
  {
    label: "제작구매",
    href: "/manufacture",
    children: [
      { label: "포토부스", href: "/manufacture/booth" },
      { label: "포토카드", href: "/manufacture/card" },
    ],
  },
  { label: "설치사례", href: "/portfolio" },
  { label: "렌탈문의", href: "/inquiry/rental" },
  { label: "구매문의", href: "/inquiry/buy" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";
  const isAdmin = pathname?.startsWith("/admin");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  if (isAdmin) return null;

  const transparent = isHome && !scrolled && !open;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        transparent
          ? "bg-transparent text-white"
          : "bg-white/95 backdrop-blur scroll-shadow text-neutral-900"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center shrink-0">
          <span className="flex flex-col leading-none">
            <span className="text-[10px] tracking-[0.2em] opacity-70">SELF PHOTO STUDIO</span>
            <span className="text-lg font-display font-bold">우리투컷</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium h-full">
          {NAV.map((n) => {
            const active =
              pathname === n.href ||
              (n.href !== "/" && pathname.startsWith(n.href + "/"));
            return (
              <div key={n.href} className="relative group h-full flex items-center">
                <Link
                  href={n.href}
                  className={`hover:opacity-70 transition-opacity ${
                    active ? "font-bold" : ""
                  }`}
                >
                  {n.label}
                </Link>
                {n.children && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                    <div className="bg-white text-neutral-900 rounded-xl shadow-xl border border-neutral-100 py-2 min-w-[160px]">
                      {n.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className={`block px-5 py-2.5 text-sm hover:bg-neutral-50 hover:text-[#0a0a0a] ${
                            pathname === c.href ? "text-[#0a0a0a] font-semibold" : ""
                          }`}
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <button
          aria-label="Menu"
          className="lg:hidden grid place-items-center w-10 h-10"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6l-12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white text-neutral-900 border-t border-neutral-100 max-h-[80vh] overflow-y-auto">
          <ul className="px-6 py-4 grid gap-1 text-base">
            {NAV.map((n) => (
              <li key={n.href} className="border-b border-neutral-100 last:border-0">
                <Link href={n.href} className="block py-3 font-semibold">
                  {n.label}
                </Link>
                {n.children && (
                  <ul className="pl-4 pb-2 grid gap-1 text-sm text-neutral-600">
                    {n.children.map((c) => (
                      <li key={c.href}>
                        <Link href={c.href} className="flex items-center gap-2 py-1.5">
                          <svg className="w-3 h-3 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4v10a4 4 0 0 0 4 4h12" /><path d="M16 14l4 4-4 4" /></svg>
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
