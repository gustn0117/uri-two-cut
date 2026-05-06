import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PortfolioGrid from "@/components/PortfolioGrid";
import { supabaseAdmin } from "@/lib/supabase";
import projectsData from "@/lib/projects.json";

export const metadata: Metadata = {
  title: "설치사례 · 우리투컷",
  description: "우리투컷이 함께한 행사·기업·기관 설치사례를 한 눈에 확인하세요.",
};

export const dynamic = "force-dynamic";

type Project = {
  id: string;
  title: string;
  category: string;
  date: string | null;
  cover: string;
  photos: string[];
};

const STATIC = (projectsData as Project[]).filter((p) => p.cover);

async function loadDbProjects(): Promise<Project[]> {
  const { data, error } = await supabaseAdmin
    .from("projects")
    .select("id,title,category,event_date,cover,photos,created_at")
    .order("created_at", { ascending: false });
  if (error || !data) return [];
  return data
    .filter((r) => r.cover)
    .map((r) => ({
      id: r.id as string,
      title: r.title as string,
      category: r.category as string,
      date: (r.event_date as string | null) ?? null,
      cover: r.cover as string,
      photos: ((r.photos as string[]) ?? []) as string[],
    }));
}

export default async function PortfolioPage() {
  const dbProjects = await loadDbProjects();
  // Merge: DB first (newest admin uploads), then static archive, dedupe by id
  const seen = new Set<string>();
  const merged: Project[] = [];
  for (const p of [...dbProjects, ...STATIC]) {
    if (seen.has(p.id)) continue;
    seen.add(p.id);
    merged.push(p);
  }

  return (
    <main>
      <PageHero
        eyebrow="OUR PROJECTS"
        title="우리투컷이 함께한 현장"
        subtitle="기업 행사부터 페스티벌, 학회, 팝업스토어까지 — 다양한 브랜드와 함께한 실제 설치 · 운영 사례입니다."
        breadcrumb={[{ label: "설치사례" }]}
      />
      <PortfolioGrid projects={merged} />
    </main>
  );
}
