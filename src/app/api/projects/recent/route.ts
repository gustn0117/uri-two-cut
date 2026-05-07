import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import projectsData from "@/lib/projects.json";

type StaticProject = {
  id: string;
  date: string | null;
  title: string;
  category: string;
  cover: string;
  photos: string[];
};

const STATIC = (projectsData as StaticProject[]).filter((p) => p.cover);

export const dynamic = "force-dynamic";

type Item = { id: string; title: string; category: string; cover: string; date: string | null };

function toItem(r: Record<string, unknown>): Item {
  return {
    id: r.id as string,
    title: r.title as string,
    category: r.category as string,
    cover: r.cover as string,
    date: (r.event_date as string | null) ?? null,
  };
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const limit = Math.min(50, Math.max(1, parseInt(url.searchParams.get("limit") || "6", 10)));

  // 1. Prefer admin-registered Hero featured items
  const { data: featuredRows } = await supabaseAdmin
    .from("projects")
    .select("id,title,category,event_date,cover,created_at,hero_featured")
    .eq("hero_featured", true)
    .order("created_at", { ascending: false })
    .limit(limit);

  if (featuredRows && featuredRows.length > 0) {
    const items = featuredRows.filter((r) => r.cover).map(toItem);
    return NextResponse.json(
      { items, source: "featured" },
      { headers: { "Cache-Control": "public, max-age=0, must-revalidate" } }
    );
  }

  // 2. Fallback: newest DB + static archive merged
  const { data: dbRows } = await supabaseAdmin
    .from("projects")
    .select("id,title,category,event_date,cover,created_at")
    .order("created_at", { ascending: false })
    .limit(limit * 2);

  const fromDb: Item[] = (dbRows ?? []).filter((r) => r.cover).map(toItem);
  const fromStatic: Item[] = STATIC.slice(0, limit * 2).map((p) => ({
    id: p.id,
    title: p.title,
    category: p.category,
    cover: p.cover,
    date: p.date,
  }));

  const seen = new Set<string>();
  const merged: Item[] = [];
  for (const item of [...fromDb, ...fromStatic]) {
    if (seen.has(item.id)) continue;
    seen.add(item.id);
    merged.push(item);
    if (merged.length >= limit) break;
  }

  return NextResponse.json(
    { items: merged, source: "fallback" },
    { headers: { "Cache-Control": "public, max-age=0, must-revalidate" } }
  );
}
