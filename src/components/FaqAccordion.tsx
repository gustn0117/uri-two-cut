"use client";

import { useState } from "react";

type Item = { q: string; a: string };

const DEFAULT_ITEMS: Item[] = [
  {
    q: "최소 렌탈 기간이 정해져 있나요?",
    a: "당일 4시간 단기 렌탈부터 장기(주/월 단위) 까지 가능합니다. 행사 일정에 맞춰 견적을 드립니다.",
  },
  {
    q: "설치는 얼마나 걸리나요?",
    a: "미니/스탠드형은 약 30분, 부스형은 약 1시간 내외로 설치 완료됩니다. 현장 환경에 따라 변동될 수 있습니다.",
  },
  {
    q: "인화지는 무제한 사용 가능한가요?",
    a: "기본 제공 수량이 포함되며, 추가 인화지는 별도 비용으로 보충 가능합니다. 행사 규모에 맞춰 사전 안내드립니다.",
  },
  {
    q: "프레임 / 랩핑 / UI 커스터마이징은 어디까지 가능한가요?",
    a: "브랜드 컬러·로고·메시지를 기반으로 외관 랩핑부터 인화지 템플릿, 터치스크린 UI, 이벤트형 미니게임까지 모두 풀 커스텀 가능합니다.",
  },
  {
    q: "전국 출장 / 설치 가능한가요?",
    a: "전국 어디든 출장 설치 가능합니다. 거리에 따라 출장비가 추가될 수 있습니다.",
  },
  {
    q: "결제 방식은 어떻게 되나요?",
    a: "무료/유료/쿠폰 모드 모두 지원하며, 카드·현금·QR 결제 옵션을 운영자가 자유롭게 설정할 수 있습니다.",
  },
  {
    q: "취소·환불 정책이 어떻게 되나요?",
    a: "행사일 7일 전 취소 시 전액 환불, 3일 전 50%, 행사 당일 취소는 환불이 어렵습니다. 자세한 사항은 계약서에 명시됩니다.",
  },
  {
    q: "현장에 운영자가 상주하나요?",
    a: "옵션입니다. 셀프 운영도 가능하고, 현장 운영자 동행 옵션을 추가하실 수도 있습니다.",
  },
];

export default function FaqAccordion({ items = DEFAULT_ITEMS, title = "자주 묻는 질문" }: { items?: Item[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 lg:py-28 bg-neutral-50">
      <div className="mx-auto max-w-[900px] px-6 lg:px-10">
        <div className="text-center mb-12">
          <p className="font-display tracking-[0.4em] text-sm text-[#0a0a0a] font-bold">FAQ</p>
          <h2 className="mt-4 font-display font-black text-3xl md:text-5xl">{title}</h2>
        </div>
        <ul className="grid gap-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <li key={i} className="bg-white rounded-xl border border-neutral-200">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-bold text-neutral-900">{it.q}</span>
                  <svg
                    className={`w-5 h-5 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-neutral-600 leading-relaxed whitespace-pre-line border-t border-neutral-100 pt-4">
                    {it.a}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
