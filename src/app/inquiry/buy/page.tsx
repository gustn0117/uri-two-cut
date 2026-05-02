import type { Metadata } from "next";
import InquiryForm from "@/components/InquiryForm";

export const metadata: Metadata = {
  title: "포토부스 구매문의 · 우리투컷",
  description: "자체 보유용 포토부스·포토카드 키오스크 제작·구매 문의",
};

export default function BuyInquiryPage() {
  return (
    <main className="pt-20">
      <InquiryForm
        title="포토부스 구매문의"
        fields={[
          { type: "text", name: "company", label: "업체명/담당자명", required: true },
          { type: "email", name: "email", label: "이메일주소", required: true },
          { type: "phone3", name: "phone", label: "연락처", required: true },
          { type: "text", name: "address", label: "설치 주소", required: true },
          { type: "number", name: "qty", label: "기기 대수", required: true },
          { type: "textarea", name: "memo", label: "내용" },
          { type: "radio", name: "channel", label: "유입경로", options: ["네이버", "블로그", "구글", "인스타", "기타"] },
        ]}
      />
    </main>
  );
}
