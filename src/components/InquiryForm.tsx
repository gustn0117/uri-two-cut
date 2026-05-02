"use client";

import { useState } from "react";

type FieldType = "text" | "email" | "tel" | "date" | "number" | "textarea" | "phone3" | "radio";

type Field = {
  type: FieldType;
  name: string;
  label: string;
  required?: boolean;
  options?: string[];
  placeholder?: string;
};

export default function InquiryForm({
  title,
  fields,
}: {
  title: string;
  fields: Field[];
}) {
  const [agreed, setAgreed] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-[900px] px-6 lg:px-10">
        <p className="text-xs tracking-[0.4em] text-[#7c3aed] font-bold text-center">OUR CONTACT</p>
        <h2 className="mt-5 font-display font-black text-3xl md:text-5xl text-center">{title}</h2>

        {sent ? (
          <div className="mt-12 rounded-3xl border border-neutral-100 bg-neutral-50 p-12 text-center">
            <svg className="w-16 h-16 mx-auto text-[#1A6DFF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M8 12l3 3 5-6" />
            </svg>
            <h3 className="mt-5 font-display font-bold text-2xl">문의가 접수되었습니다</h3>
            <p className="mt-3 text-neutral-500">담당자가 영업일 기준 1일 이내 연락드립니다.</p>
            <button
              onClick={() => setSent(false)}
              className="mt-6 px-6 py-2.5 rounded-full border border-neutral-300 text-sm hover:bg-white"
            >
              새 문의 작성
            </button>
          </div>
        ) : (
          <form
            className="mt-14 grid gap-7"
            onSubmit={(e) => {
              e.preventDefault();
              if (!agreed) {
                alert("개인정보 수집 및 이용에 동의해 주세요.");
                return;
              }
              setSent(true);
            }}
          >
            {fields.map((f) => (
              <div
                key={f.name}
                className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-6 items-start border-b border-neutral-200 pb-7"
              >
                <label className="font-bold text-neutral-900 pt-2.5">
                  {f.label}
                  {f.required && <span className="text-[#1A6DFF] ml-1">*</span>}
                </label>
                <div>
                  {f.type === "textarea" ? (
                    <textarea
                      name={f.name}
                      required={f.required}
                      rows={6}
                      placeholder={f.placeholder}
                      className="w-full p-4 rounded-md border border-neutral-200 focus:border-[#1A6DFF] outline-none transition resize-none"
                    />
                  ) : f.type === "phone3" ? (
                    <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-2 items-center">
                      <input
                        name={`${f.name}1`}
                        required={f.required}
                        maxLength={3}
                        type="tel"
                        className="h-11 px-3 rounded-md border border-neutral-200 focus:border-[#1A6DFF] outline-none text-center"
                      />
                      <span>-</span>
                      <input
                        name={`${f.name}2`}
                        required={f.required}
                        maxLength={4}
                        type="tel"
                        className="h-11 px-3 rounded-md border border-neutral-200 focus:border-[#1A6DFF] outline-none text-center"
                      />
                      <span>-</span>
                      <input
                        name={`${f.name}3`}
                        required={f.required}
                        maxLength={4}
                        type="tel"
                        className="h-11 px-3 rounded-md border border-neutral-200 focus:border-[#1A6DFF] outline-none text-center"
                      />
                    </div>
                  ) : f.type === "radio" ? (
                    <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
                      {f.options!.map((o) => (
                        <label key={o} className="inline-flex items-center gap-2 text-sm cursor-pointer">
                          <input
                            type="radio"
                            name={f.name}
                            value={o}
                            required={f.required}
                            className="accent-[#1A6DFF]"
                          />
                          <span>{o}</span>
                        </label>
                      ))}
                    </div>
                  ) : (
                    <input
                      type={f.type}
                      name={f.name}
                      required={f.required}
                      placeholder={f.placeholder}
                      className="w-full h-11 px-4 rounded-md border border-neutral-200 focus:border-[#1A6DFF] outline-none transition"
                    />
                  )}
                </div>
              </div>
            ))}

            <div className="rounded-md border border-neutral-200 p-6 text-xs text-neutral-600 leading-relaxed bg-neutral-50">
              <p className="font-bold text-neutral-900 mb-3">개인정보 수집 및 이용 동의</p>
              <p>
                ㈜우리투컷(이하 ‘회사’라 한다)는 개인정보 보호법 제30조에 따라 정보 주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리지침을 수립, 공개합니다.
              </p>
              <p className="mt-3">
                <strong className="text-neutral-800">제1조 (개인정보의 처리목적)</strong> 회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
              </p>
              <p className="mt-3">
                <strong className="text-neutral-800">제2조 (개인정보의 처리 및 보유기간)</strong> 회사는 법령에 따른 개인정보 보유, 이용 기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유, 이용 기간 내에서 개인정보를 처리, 보유합니다.
              </p>
              <label className="mt-5 flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="accent-[#1A6DFF]"
                />
                <span className="text-neutral-800 font-bold">위 내용에 동의합니다.</span>
              </label>
            </div>

            <button
              type="submit"
              className="h-14 rounded-md bg-[#1A6DFF] hover:bg-[#0b56e0] text-white font-bold text-lg transition w-full md:w-auto md:px-12 md:mx-auto"
            >
              문의 보내기
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
