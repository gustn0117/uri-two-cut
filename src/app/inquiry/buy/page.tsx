import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import InquiryForm from "@/components/InquiryForm";

export const metadata: Metadata = {
  title: "포토부스 구매문의 · 우리투컷",
  description: "자체 보유용 포토부스·포토카드 키오스크 제작·구매 문의",
};

export default function BuyInquiryPage() {
  return (
    <main>
      <PageHero
        eyebrow="PURCHASE INQUIRY"
        title="포토부스 구매문의"
        subtitle="용도·예산·일정·설치 환경을 알려주시면 맞춤 견적과 일정 상담을 보내드립니다."
        breadcrumb={[{ label: "구매문의" }]}
      />
      <InquiryForm
        title=""
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
