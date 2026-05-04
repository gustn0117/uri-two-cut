import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { supabaseAdmin } from "@/lib/supabase";
import crypto from "crypto";

const BUCKET = "uri-two-cut-projects";
const VALID_CATEGORIES = [
  "기업·관공서",
  "교육·학교",
  "페스티벌·축제",
  "학회·컨퍼런스",
  "스포츠",
  "팝업·브랜드",
  "엔터·미디어",
  "교회",
  "웨딩",
];

async function isAuthenticated() {
  const store = await cookies();
  return store.get("admin_session")?.value === "valid";
}

function publicUrl(path: string) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  return `${url}/storage/v1/object/public/${BUCKET}/${path}`;
}

function safeExt(name: string) {
  const ext = name.split(".").pop()?.toLowerCase() ?? "jpg";
  return ["jpg", "jpeg", "png", "webp"].includes(ext) ? ext : "jpg";
}

export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const { data, error } = await supabaseAdmin
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ projects: data ?? [] });
}

export async function POST(req: Request) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const fd = await req.formData();
  const title = String(fd.get("title") ?? "").trim();
  const category = String(fd.get("category") ?? "").trim();
  const event_date = (fd.get("event_date") as string) || null;

  if (!title) return NextResponse.json({ error: "제목 필수" }, { status: 400 });
  if (!VALID_CATEGORIES.includes(category)) {
    return NextResponse.json({ error: "유효하지 않은 카테고리" }, { status: 400 });
  }

  const cover = fd.get("cover") as File | null;
  const photos = fd.getAll("photos").filter((p): p is File => p instanceof File && p.size > 0);

  if (!cover || cover.size === 0) {
    return NextResponse.json({ error: "커버 이미지 필수" }, { status: 400 });
  }

  const id = crypto.randomUUID();
  const uploaded: string[] = [];
  let coverUrl: string | null = null;

  try {
    // Cover
    {
      const ext = safeExt(cover.name);
      const path = `${id}/cover.${ext}`;
      const buf = Buffer.from(await cover.arrayBuffer());
      const { error } = await supabaseAdmin.storage
        .from(BUCKET)
        .upload(path, buf, {
          contentType: cover.type || `image/${ext === "jpg" ? "jpeg" : ext}`,
          upsert: false,
        });
      if (error) throw new Error(`cover upload: ${error.message}`);
      uploaded.push(path);
      coverUrl = publicUrl(path);
    }

    // Photos
    const photoUrls: string[] = [];
    for (let i = 0; i < photos.length; i++) {
      const f = photos[i];
      const ext = safeExt(f.name);
      const path = `${id}/photo-${i + 1}.${ext}`;
      const buf = Buffer.from(await f.arrayBuffer());
      const { error } = await supabaseAdmin.storage
        .from(BUCKET)
        .upload(path, buf, {
          contentType: f.type || `image/${ext === "jpg" ? "jpeg" : ext}`,
          upsert: false,
        });
      if (error) throw new Error(`photo ${i + 1} upload: ${error.message}`);
      uploaded.push(path);
      photoUrls.push(publicUrl(path));
    }

    // Insert DB row
    const { data, error } = await supabaseAdmin
      .from("projects")
      .insert([
        {
          id,
          title: title.slice(0, 200),
          category,
          event_date,
          cover: coverUrl,
          photos: photoUrls,
        },
      ])
      .select()
      .single();

    if (error) throw new Error(`db insert: ${error.message}`);

    return NextResponse.json({ ok: true, project: data });
  } catch (err) {
    // Best-effort cleanup of any uploaded files
    if (uploaded.length > 0) {
      await supabaseAdmin.storage.from(BUCKET).remove(uploaded).catch(() => {});
    }
    const msg = err instanceof Error ? err.message : "upload failed";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const { id } = (await req.json()) as { id?: string };
  if (!id) return NextResponse.json({ error: "id required" }, { status: 400 });

  // Get project to know which paths to delete
  const { data: row } = await supabaseAdmin.from("projects").select("*").eq("id", id).single();

  // Delete row first
  const { error } = await supabaseAdmin.from("projects").delete().eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  // Delete files (best effort) — list everything under <id>/ prefix and remove
  const { data: files } = await supabaseAdmin.storage.from(BUCKET).list(id);
  if (files && files.length > 0) {
    const paths = files.map((f) => `${id}/${f.name}`);
    await supabaseAdmin.storage.from(BUCKET).remove(paths).catch(() => {});
  }
  // Mark unused to silence TS
  void row;

  return NextResponse.json({ ok: true });
}
