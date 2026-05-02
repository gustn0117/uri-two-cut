"use client";

import { useState } from "react";
import { Headset } from "@/components/icons";

export default function FloatingChat() {
  const [open, setOpen] = useState(true);

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-6 z-40 bg-white rounded-2xl shadow-2xl border border-neutral-200 px-4 py-3 max-w-[260px] animate-float-up">
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <p className="font-bold text-sm">궁금한 건 채팅으로 문의하세요</p>
              <p className="text-xs text-neutral-500 mt-1">빠르게 답변 받으실 수 있어요</p>
            </div>
            <button
              aria-label="close"
              onClick={() => setOpen(false)}
              className="text-neutral-400 hover:text-neutral-700 -mt-1 -mr-1 leading-none"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6l-12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
      <button
        aria-label="문의 채팅 열기"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white grid place-items-center shadow-2xl transition-transform hover:scale-105"
      >
        <Headset className="w-7 h-7" />
      </button>
    </>
  );
}
