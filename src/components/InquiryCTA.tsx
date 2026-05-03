"use client";

export default function InquiryCTA() {
  return (
    <section
      id="rental-inquiry"
      className="py-28 lg:py-36 text-white"
      style={{
        background:
          "linear-gradient(120deg, #0a0a0a 0%, #1f1f1f 60%, #404040 120%)",
      }}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm tracking-[0.3em] opacity-80 mb-5">CONTACT US</p>
          <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight">
            지금 우리투컷과 함께
            <br />
            <span className="text-[#ffffff]">브랜드 경험을 시작하세요.</span>
          </h2>
          <p className="mt-6 text-lg opacity-85 max-w-lg leading-relaxed">
            행사 일정, 예산, 원하는 콘셉트를 알려주시면 가장 적합한 포토부스 솔루션을 제안해 드립니다.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-5 max-w-lg">
            <a
              href="tel:1833-7998"
              className="rounded-2xl border border-white/30 backdrop-blur px-6 py-5 hover:bg-white/10 transition"
            >
              <p className="text-xs tracking-widest opacity-80">전화 문의</p>
              <p className="font-display font-bold text-2xl mt-2">1833-7998</p>
            </a>
            <a
              href="mailto:bs18337998@daum.net"
              className="rounded-2xl border border-white/30 backdrop-blur px-6 py-5 hover:bg-white/10 transition"
            >
              <p className="text-xs tracking-widest opacity-80">이메일</p>
              <p className="font-bold text-base mt-2 break-all">bs18337998@daum.net</p>
            </a>
          </div>
        </div>

        <form
          id="purchase-inquiry"
          className="bg-white text-neutral-900 rounded-3xl p-8 md:p-10 shadow-2xl"
          onSubmit={(e) => {
            e.preventDefault();
            alert("문의가 접수되었습니다. 빠른 시일 내 연락드리겠습니다.");
          }}
        >
          <h3 className="font-display font-bold text-2xl mb-6">빠른 견적 문의</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="담당자명" name="name" placeholder="홍길동" required />
            <Field label="연락처" name="phone" placeholder="010-1234-5678" required />
            <Field label="회사 / 단체" name="company" placeholder="(주)우리브랜드" />
            <Field label="이메일" name="email" type="email" placeholder="hello@brand.com" />
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium mb-2 text-neutral-700">서비스 종류</label>
              <select className="w-full h-12 px-4 rounded-xl border border-neutral-200 bg-neutral-50 focus:border-[#0a0a0a] focus:bg-white outline-none transition">
                <option>포토부스 렌탈</option>
                <option>포토부스 제작 / 구매</option>
                <option>포토카드 제작</option>
                <option>게임 / 스탠드 키오스크</option>
                <option>기타 문의</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium mb-2 text-neutral-700">문의 내용</label>
              <textarea
                rows={4}
                placeholder="행사 일정, 장소, 예산, 원하시는 디자인 등을 자유롭게 적어주세요."
                className="w-full p-4 rounded-xl border border-neutral-200 bg-neutral-50 focus:border-[#0a0a0a] focus:bg-white outline-none transition resize-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full h-14 rounded-xl bg-[#0a0a0a] hover:bg-[#262626] font-bold text-lg transition"
            style={{ color: "#ffffff" }}
          >
            무료 견적 받기
          </button>

          <p className="mt-3 text-xs text-neutral-400 text-center">
            * 입력 정보는 견적 안내 목적 외에 사용되지 않습니다.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2 text-neutral-700">
        {label} {required && <span className="text-[#0a0a0a]">*</span>}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full h-12 px-4 rounded-xl border border-neutral-200 bg-neutral-50 focus:border-[#0a0a0a] focus:bg-white outline-none transition"
      />
    </div>
  );
}
