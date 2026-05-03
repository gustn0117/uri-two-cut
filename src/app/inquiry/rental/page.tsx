import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import InquiryForm from "@/components/InquiryForm";

export const metadata: Metadata = {
  title: "포토부스 렌탈문의 · 우리투컷",
  description: "포토부스·포토카드·게임키오스크 렌탈 견적 문의",
};

export default function RentalInquiryPage() {
  return (
    <main>
      <PageHero
        eyebrow="RENTAL INQUIRY"
        title="포토부스 렌탈문의"
        subtitle="행사 일정·장소·예산을 알려주시면 맞춤 견적을 보내드립니다."
        breadcrumb={[{ label: "렌탈문의" }]}
      />
      <InquiryForm
        title=""
        inquiryType="rental"
        fields={[
          { type: "text", name: "company", label: "업체명/담당자명", required: true },
          { type: "email", name: "email", label: "이메일주소", required: true },
          { type: "phone3", name: "phone", label: "연락처", required: true },
          { type: "date", name: "setup", label: "설치 날짜", required: true },
          { type: "date", name: "pickup", label: "회수 날짜", required: true },
          { type: "text", name: "address", label: "설치 주소", required: true },
          { type: "textarea", name: "memo", label: "내용" },
          { type: "radio", name: "channel", label: "유입경로", options: ["네이버", "블로그", "구글", "인스타", "기타"] },
        ]}
      />
    </main>
  );
}
