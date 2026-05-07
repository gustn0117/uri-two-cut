"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import projectsData from "@/lib/projects.json";

type Inquiry = {
  id: string;
  type: "rental" | "buy";
  company_name: string;
  email: string;
  phone: string;
  setup_date: string | null;
  pickup_date: string | null;
  address: string | null;
  quantity: number | null;
  memo: string | null;
  channel: string | null;
  status: "new" | "contacted" | "closed";
  created_at: string;
};

type Project = {
  id: string;
  date: string | null;
  title: string;
  category: string;
  cover: string;
  photos: string[];
};

const PROJECTS = projectsData as Project[];

const STATUS_LABEL: Record<Inquiry["status"], string> = {
  new: "신규",
  contacted: "연락완료",
  closed: "종료",
};

const STATUS_TONE: Record<Inquiry["status"], string> = {
  new: "bg-blue-50 text-blue-700 border-blue-200",
  contacted: "bg-amber-50 text-amber-700 border-amber-200",
  closed: "bg-neutral-100 text-neutral-600 border-neutral-200",
};

type Tab = "inquiries" | "projects";

export default function AdminPage() {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState<string | null>(null);
  const [tab, setTab] = useState<Tab>("inquiries");

  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/inquiries", { cache: "no-store" });
      if (res.status === 401) {
        setAuthed(false);
        return;
      }
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "load failed");
      setInquiries(json.inquiries ?? []);
      setAuthed(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function login(e: React.FormEvent) {
    e.preventDefault();
    setLoginError(null);
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      setPassword("");
      await load();
    } else {
      setLoginError("비밀번호가 올바르지 않습니다.");
    }
  }

  async function logout() {
    await fetch("/api/admin/login", { method: "DELETE" });
    setAuthed(false);
    setInquiries([]);
  }

  if (authed === null) {
    return (
      <main className="min-h-screen grid place-items-center bg-neutral-50">
        <p className="text-sm text-neutral-500">로딩 중...</p>
      </main>
    );
  }

  if (!authed) {
    return (
      <main className="min-h-screen grid place-items-center bg-neutral-50 px-6">
        <form
          onSubmit={login}
          className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-8 grid gap-5"
        >
          <div>
            <p className="text-xs tracking-[0.4em] text-neutral-500 font-bold">ADMIN</p>
            <h1 className="mt-2 font-display font-black text-2xl">우리투컷 어드민</h1>
            <p className="mt-2 text-sm text-neutral-500">비밀번호를 입력해 주세요.</p>
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
            autoFocus
            className="h-12 px-4 rounded-md border border-neutral-200 focus:border-[#0a0a0a] outline-none"
          />
          {loginError && <p className="text-xs text-red-600">{loginError}</p>}
          <button
            type="submit"
            className="h-12 rounded-md bg-[#0a0a0a] hover:bg-[#262626] font-bold transition"
            style={{ color: "#ffffff" }}
          >
            로그인
          </button>
        </form>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-100 lg:flex">
      {/* Sidebar */}
      <aside className="lg:w-60 lg:shrink-0 bg-white border-b lg:border-b-0 lg:border-r border-neutral-200">
        <div className="p-5 lg:p-6 border-b border-neutral-100">
          <p className="text-xs tracking-[0.4em] text-neutral-500 font-bold">ADMIN</p>
          <h1 className="mt-1 font-display font-black text-xl">우리투컷</h1>
        </div>
        <nav className="p-3 lg:p-4 flex lg:block gap-1 overflow-x-auto">
          <NavBtn
            active={tab === "inquiries"}
            onClick={() => setTab("inquiries")}
            label="문의 관리"
            count={inquiries.length}
          />
          <NavBtn
            active={tab === "projects"}
            onClick={() => setTab("projects")}
            label="프로젝트 아카이브"
            count={PROJECTS.length}
          />
        </nav>
        <div className="hidden lg:block p-4 mt-auto">
          <button
            onClick={logout}
            className="w-full h-10 rounded-md text-sm bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition"
          >
            로그아웃
          </button>
        </div>
        <div className="lg:hidden flex justify-end px-5 pb-4">
          <button
            onClick={logout}
            className="h-9 px-3 rounded-md text-xs bg-neutral-100 hover:bg-neutral-200 text-neutral-700"
          >
            로그아웃
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 min-w-0">
        {tab === "inquiries" ? (
          <InquiriesView
            inquiries={inquiries}
            loading={loading}
            onReload={load}
            setInquiries={setInquiries}
          />
        ) : (
          <ProjectsView projects={PROJECTS} />
        )}
      </div>
    </div>
  );
}

function NavBtn({
  active,
  onClick,
  label,
  count,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  count: number;
}) {
  return (
    <button
      onClick={onClick}
      className={`shrink-0 lg:w-full text-left px-4 py-2.5 rounded-md text-sm font-semibold transition flex items-center justify-between gap-3 ${
        active
          ? "bg-[#0a0a0a]"
          : "text-neutral-600 hover:bg-neutral-100"
      }`}
      style={active ? { color: "#ffffff" } : undefined}
    >
      <span>{label}</span>
      <span className={`text-xs ${active ? "opacity-70" : "text-neutral-400"}`}>
        {count}
      </span>
    </button>
  );
}

function InquiriesView({
  inquiries,
  loading,
  onReload,
  setInquiries,
}: {
  inquiries: Inquiry[];
  loading: boolean;
  onReload: () => void;
  setInquiries: React.Dispatch<React.SetStateAction<Inquiry[]>>;
}) {
  const [filter, setFilter] = useState<"all" | Inquiry["status"]>("all");
  const [typeFilter, setTypeFilter] = useState<"all" | "rental" | "buy">("all");
  const [openId, setOpenId] = useState<string | null>(null);

  async function updateStatus(id: string, status: Inquiry["status"]) {
    const prev = inquiries;
    setInquiries((rows) => rows.map((r) => (r.id === id ? { ...r, status } : r)));
    const res = await fetch("/api/admin/inquiries", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    if (!res.ok) {
      setInquiries(prev);
      alert("상태 변경 실패");
    }
  }

  async function remove(id: string) {
    if (!confirm("이 문의를 삭제할까요? 되돌릴 수 없습니다.")) return;
    const prev = inquiries;
    setInquiries((rows) => rows.filter((r) => r.id !== id));
    setOpenId(null);
    const res = await fetch("/api/admin/inquiries", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (!res.ok) {
      setInquiries(prev);
      alert("삭제 실패");
    }
  }

  const visible = inquiries.filter(
    (r) =>
      (filter === "all" || r.status === filter) &&
      (typeFilter === "all" || r.type === typeFilter)
  );

  const open = inquiries.find((r) => r.id === openId) || null;

  return (
    <section className="px-5 lg:px-10 py-8 max-w-[1100px] mx-auto">
      <header className="flex items-end justify-between gap-4 flex-wrap mb-6">
        <div>
          <h2 className="font-display font-bold text-2xl">문의 관리</h2>
          <p className="text-sm text-neutral-500 mt-1">
            전체 {inquiries.length}건 · 표시 {visible.length}건
          </p>
        </div>
        <button
          onClick={onReload}
          className="h-9 px-4 rounded-md border border-neutral-300 text-sm hover:bg-white"
        >
          새로고침
        </button>
      </header>

      <div className="flex flex-wrap items-center gap-2 mb-6">
        <span className="text-xs text-neutral-500 mr-1">상태</span>
        {(["all", "new", "contacted", "closed"] as const).map((s) => (
          <Chip key={s} active={filter === s} onClick={() => setFilter(s)}>
            {s === "all" ? "전체" : STATUS_LABEL[s]}
          </Chip>
        ))}
        <span className="text-xs text-neutral-500 ml-3 mr-1">유형</span>
        {(["all", "rental", "buy"] as const).map((t) => (
          <Chip key={t} active={typeFilter === t} onClick={() => setTypeFilter(t)}>
            {t === "all" ? "전체" : t === "rental" ? "렌탈" : "구매"}
          </Chip>
        ))}
      </div>

      {loading ? (
        <p className="text-center text-sm text-neutral-500 py-12">불러오는 중...</p>
      ) : visible.length === 0 ? (
        <p className="text-center text-sm text-neutral-500 py-16">조건에 맞는 문의가 없습니다.</p>
      ) : (
        <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
          <ul className="divide-y divide-neutral-100">
            {visible.map((r) => (
              <li key={r.id}>
                <button
                  onClick={() => setOpenId(r.id === openId ? null : r.id)}
                  className="w-full text-left px-5 py-4 hover:bg-neutral-50 transition grid grid-cols-[auto_1fr_auto] gap-4 items-center"
                >
                  <span
                    className={`inline-block px-2 py-0.5 rounded-full border text-[11px] font-semibold ${STATUS_TONE[r.status]}`}
                  >
                    {STATUS_LABEL[r.status]}
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[11px] tracking-widest font-bold text-neutral-500">
                        {r.type === "rental" ? "렌탈" : "구매"}
                      </span>
                      <span className="font-semibold truncate">{r.company_name}</span>
                    </div>
                    <p className="text-xs text-neutral-500 truncate mt-0.5">
                      {r.phone} · {r.email}
                    </p>
                  </div>
                  <p className="text-xs text-neutral-400 whitespace-nowrap">
                    {new Date(r.created_at).toLocaleDateString("ko-KR", {
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </p>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Detail drawer */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-end"
          onClick={() => setOpenId(null)}
        >
          <aside
            className="w-full max-w-md bg-white h-full overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-neutral-200 px-6 py-4 flex items-center justify-between">
              <div>
                <span className={`inline-block px-2 py-0.5 rounded-full border text-[11px] font-semibold ${STATUS_TONE[open.status]}`}>
                  {STATUS_LABEL[open.status]}
                </span>
                <span className="ml-2 text-[11px] tracking-widest font-bold text-neutral-500">
                  {open.type === "rental" ? "렌탈" : "구매"}
                </span>
              </div>
              <button
                onClick={() => setOpenId(null)}
                aria-label="닫기"
                className="w-8 h-8 grid place-items-center rounded-md hover:bg-neutral-100"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M6 6l12 12M18 6l-12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 grid gap-5 text-sm">
              <div>
                <p className="text-xs text-neutral-500">담당자/업체</p>
                <p className="font-bold text-base mt-1">{open.company_name}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-neutral-500">연락처</p>
                  <p className="mt-1 break-all">{open.phone}</p>
                </div>
                <div>
                  <p className="text-xs text-neutral-500">이메일</p>
                  <p className="mt-1 break-all">{open.email}</p>
                </div>
              </div>
              {(open.setup_date || open.pickup_date) && (
                <div>
                  <p className="text-xs text-neutral-500">설치 / 회수</p>
                  <p className="mt-1">
                    {open.setup_date ?? "-"} ~ {open.pickup_date ?? "-"}
                  </p>
                </div>
              )}
              {open.address && (
                <div>
                  <p className="text-xs text-neutral-500">설치 주소</p>
                  <p className="mt-1">{open.address}</p>
                </div>
              )}
              {open.quantity != null && (
                <div>
                  <p className="text-xs text-neutral-500">기기 대수</p>
                  <p className="mt-1">{open.quantity}</p>
                </div>
              )}
              {open.memo && (
                <div>
                  <p className="text-xs text-neutral-500">내용</p>
                  <p className="mt-1 whitespace-pre-line bg-neutral-50 rounded-md p-3 text-neutral-800">
                    {open.memo}
                  </p>
                </div>
              )}
              {open.channel && (
                <div>
                  <p className="text-xs text-neutral-500">유입경로</p>
                  <p className="mt-1">{open.channel}</p>
                </div>
              )}
              <div>
                <p className="text-xs text-neutral-500">접수 일시</p>
                <p className="mt-1">
                  {new Date(open.created_at).toLocaleString("ko-KR")}
                </p>
              </div>

              <div className="border-t border-neutral-100 pt-5 grid gap-3">
                <label className="text-xs text-neutral-500">상태 변경</label>
                <select
                  value={open.status}
                  onChange={(e) => updateStatus(open.id, e.target.value as Inquiry["status"])}
                  className="h-10 px-3 rounded-md border border-neutral-300 text-sm"
                >
                  <option value="new">신규</option>
                  <option value="contacted">연락완료</option>
                  <option value="closed">종료</option>
                </select>
                <button
                  onClick={() => remove(open.id)}
                  className="h-10 rounded-md text-sm border border-red-200 text-red-600 hover:bg-red-50"
                >
                  문의 삭제
                </button>
              </div>
            </div>
          </aside>
        </div>
      )}
    </section>
  );
}

type DbProject = Project & { editable: true; hero_featured: boolean };
type StaticProject = Project & { editable: false; hero_featured: false };
type AnyProject = DbProject | StaticProject;

const VALID_CATEGORIES = [
  "설치사례",
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

function ProjectsView({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<string>("전체");
  const [q, setQ] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);
  const [showAdd, setShowAdd] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const [dbProjects, setDbProjects] = useState<DbProject[]>([]);
  const [editing, setEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [editDate, setEditDate] = useState("");
  const [savingEdit, setSavingEdit] = useState(false);

  const loadDb = useCallback(async () => {
    const res = await fetch("/api/admin/projects", { cache: "no-store" });
    if (!res.ok) return;
    const j = await res.json();
    setDbProjects(
      (j.projects ?? []).map((p: Record<string, unknown>) => ({
        id: p.id as string,
        date: (p.event_date as string | null) ?? null,
        title: p.title as string,
        category: p.category as string,
        cover: (p.cover as string | null) ?? "",
        photos: (p.photos as string[]) ?? [],
        hero_featured: Boolean(p.hero_featured),
        editable: true as const,
      }))
    );
  }, []);

  useEffect(() => {
    loadDb();
  }, [loadDb]);

  const merged: AnyProject[] = useMemo(() => {
    const staticOnes: StaticProject[] = projects.map((p) => ({ ...p, editable: false as const, hero_featured: false as const }));
    return [...dbProjects, ...staticOnes];
  }, [dbProjects, projects]);

  const featuredCount = dbProjects.filter((p) => p.hero_featured).length;

  async function toggleHeroFeatured(id: string, next: boolean) {
    if (next && featuredCount >= 6) {
      alert("Hero에 노출할 수 있는 프로젝트는 최대 6개입니다. 다른 항목을 먼저 해제해 주세요.");
      return;
    }
    const prev = dbProjects;
    setDbProjects((rows) => rows.map((r) => (r.id === id ? { ...r, hero_featured: next } : r)));
    const res = await fetch("/api/admin/projects", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, hero_featured: next }),
    });
    if (!res.ok) {
      setDbProjects(prev);
      alert("Hero 노출 상태 변경 실패");
    }
  }

  const categories = useMemo(() => {
    const set = new Set<string>();
    merged.forEach((p) => set.add(p.category));
    return ["전체", ...Array.from(set)];
  }, [merged]);

  const visible = useMemo(() => {
    return merged.filter((p) => {
      if (active !== "전체" && p.category !== active) return false;
      if (q && !p.title.toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
  }, [merged, active, q]);

  const open = merged.find((p) => p.id === openId) || null;

  // Esc to close lightbox
  useEffect(() => {
    if (!openId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openId]);

  // Reset edit state when lightbox closes or target changes
  useEffect(() => {
    setEditing(false);
  }, [openId]);

  async function deleteDbProject(id: string) {
    if (!confirm("이 프로젝트를 삭제할까요? 업로드된 사진도 함께 삭제됩니다.")) return;
    const res = await fetch("/api/admin/projects", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (!res.ok) {
      const j = await res.json().catch(() => ({}));
      alert("삭제 실패: " + (j.error || "unknown"));
      return;
    }
    setOpenId(null);
    await loadDb();
  }

  async function saveDbProject(
    id: string,
    fields: { title: string; category: string; event_date: string | null }
  ) {
    const res = await fetch("/api/admin/projects", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, ...fields }),
    });
    if (!res.ok) {
      const j = await res.json().catch(() => ({}));
      alert("수정 실패: " + (j.error || "unknown"));
      return false;
    }
    setDbProjects((rows) =>
      rows.map((r) =>
        r.id === id
          ? { ...r, title: fields.title, category: fields.category, date: fields.event_date }
          : r
      )
    );
    return true;
  }

  return (
    <section className="px-5 lg:px-10 py-8 max-w-[1400px] mx-auto">
      <header className="flex items-end justify-between gap-4 flex-wrap mb-6">
        <div>
          <h2 className="font-display font-bold text-2xl">프로젝트 아카이브</h2>
          <p className="text-sm text-neutral-500 mt-1">
            등록 {dbProjects.length}건 · 아카이브 {projects.length}건 · 표시 {visible.length}건
            {" · "}
            <span className="text-amber-700 font-semibold">Hero 노출 {featuredCount}/6</span>
          </p>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <input
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="이벤트 검색..."
            className="h-10 px-3 rounded-md border border-neutral-300 text-sm flex-1 sm:w-64"
          />
          <button
            onClick={() => setShowAdd(true)}
            className="h-10 px-4 rounded-md bg-[#0a0a0a] hover:bg-[#262626] text-sm font-semibold whitespace-nowrap"
            style={{ color: "#ffffff" }}
          >
            + 새 프로젝트
          </button>
        </div>
      </header>

      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((c) => (
          <Chip key={c} active={active === c} onClick={() => setActive(c)}>
            {c}
          </Chip>
        ))}
      </div>

      {showAdd && (
        <AddProjectModal
          onClose={() => setShowAdd(false)}
          onCreated={async () => {
            setShowAdd(false);
            await loadDb();
          }}
        />
      )}

      {/* Hero featured panel */}
      <div className="bg-amber-50/50 rounded-2xl border border-amber-200 p-5 lg:p-6 mb-6">
        <div className="flex items-end justify-between gap-3 mb-4 flex-wrap">
          <div>
            <p className="text-[10px] tracking-[0.4em] text-amber-700 font-bold">★ HERO 노출</p>
            <h3 className="mt-1 font-display font-bold text-lg">메인 페이지 주요 설치사례</h3>
            <p className="mt-1 text-xs text-neutral-500">
              홈 화면 상단에 표시할 6개 프로젝트를 선택하세요.
            </p>
          </div>
          <span className="text-sm font-semibold text-amber-700">
            {featuredCount}/6 등록됨
          </span>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
          {Array.from({ length: 6 }).map((_, i) => {
            const featured = dbProjects.filter((p) => p.hero_featured)[i];
            if (featured) {
              return (
                <div
                  key={featured.id}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden border-2 border-amber-300 bg-white group"
                >
                  {featured.cover && (
                    <img
                      src={featured.cover}
                      alt={featured.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute top-1 left-1 w-5 h-5 grid place-items-center rounded-full bg-amber-400 text-amber-950 text-[10px] font-bold">
                    {i + 1}
                  </div>
                  <button
                    onClick={() => toggleHeroFeatured(featured.id, false)}
                    title="Hero 노출 해제"
                    className="absolute top-1 right-1 w-7 h-7 grid place-items-center rounded-full bg-black/70 hover:bg-red-600 text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    ×
                  </button>
                  <p className="absolute bottom-1 left-2 right-2 text-white text-[10px] font-bold leading-tight line-clamp-1 drop-shadow">
                    {featured.title}
                  </p>
                </div>
              );
            }
            return (
              <button
                key={`empty-${i}`}
                onClick={() => setShowPicker(true)}
                className="aspect-[4/3] rounded-lg border-2 border-dashed border-amber-300 bg-white/60 hover:bg-amber-100 hover:border-amber-400 grid place-items-center transition cursor-pointer"
              >
                <div className="text-center text-amber-600">
                  <p className="text-2xl font-bold leading-none">+</p>
                  <p className="text-[10px] mt-1 font-semibold">슬롯 {i + 1}</p>
                  <p className="text-[9px] opacity-70">클릭해서 등록</p>
                </div>
              </button>
            );
          })}
        </div>
        <p className="mt-3 text-[11px] text-neutral-500">
          빈 슬롯을 클릭하면 등록할 프로젝트를 고를 수 있습니다. 등록된 항목 위에 마우스를 올리면 <span className="text-red-500 font-bold">×</span> 버튼으로 해제할 수 있습니다.
        </p>
      </div>

      {showPicker && (
        <HeroPickerModal
          dbProjects={dbProjects}
          featuredCount={featuredCount}
          onClose={() => setShowPicker(false)}
          onPick={async (id) => {
            await toggleHeroFeatured(id, true);
          }}
        />
      )}

      {editingId && (() => {
        const target = dbProjects.find((p) => p.id === editingId);
        if (!target) return null;
        return (
          <EditProjectModal
            project={target}
            onClose={() => setEditingId(null)}
            onSave={async (fields) => {
              const ok = await saveDbProject(target.id, fields);
              if (ok) setEditingId(null);
            }}
          />
        );
      })()}

      {visible.length === 0 ? (
        <p className="text-center text-sm text-neutral-500 py-16">조건에 맞는 이벤트가 없습니다.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {visible.map((p) => (
            <div
              key={p.id}
              className="group rounded-lg overflow-hidden bg-white border border-neutral-200 hover:shadow-md transition relative"
            >
              {p.editable && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleHeroFeatured(p.id, !p.hero_featured);
                  }}
                  title={p.hero_featured ? "Hero 노출 해제" : "Hero 노출 등록"}
                  className={`absolute top-2 left-2 z-10 w-8 h-8 grid place-items-center rounded-full text-base font-bold transition shadow-sm ${
                    p.hero_featured
                      ? "bg-amber-400 text-amber-950 hover:bg-amber-300"
                      : "bg-white/90 text-neutral-400 hover:bg-white hover:text-amber-500"
                  }`}
                >
                  {p.hero_featured ? "★" : "☆"}
                </button>
              )}
              {p.editable && (
                <span className="absolute top-2 right-2 z-10 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                  등록
                </span>
              )}
              <button
                onClick={() => setOpenId(p.id)}
                className="block w-full text-left"
              >
              <div className="aspect-[4/3] bg-neutral-100 overflow-hidden">
                {p.cover ? (
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full grid place-items-center text-xs text-neutral-400">no cover</div>
                )}
              </div>
              <div className="p-3">
                <p className="text-[10px] tracking-widest text-neutral-500">{p.category}</p>
                <h4 className="text-sm font-bold leading-snug mt-1 line-clamp-2 min-h-[2.5em]">{p.title}</h4>
                <p className="text-[11px] text-neutral-400 mt-1">{p.date ?? ""}</p>
              </div>
              </button>
              {p.editable && (
                <div className="flex border-t border-neutral-200">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setEditTitle(p.title);
                      setEditCategory(p.category);
                      setEditDate(p.date ?? "");
                      setEditingId(p.id);
                    }}
                    className="flex-1 py-2.5 text-xs font-semibold text-neutral-700 hover:bg-neutral-50 transition flex items-center justify-center gap-1"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                    수정
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteDbProject(p.id);
                    }}
                    className="flex-1 py-2.5 text-xs font-semibold text-red-600 hover:bg-red-50 transition border-l border-neutral-200 flex items-center justify-center gap-1"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                    삭제
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm overflow-y-auto"
          onClick={() => setOpenId(null)}
        >
          <button
            aria-label="닫기"
            onClick={() => setOpenId(null)}
            className="fixed top-5 right-5 z-10 w-10 h-10 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 text-white"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6l-12 12" />
            </svg>
          </button>
          <div
            className="mx-auto max-w-[1100px] p-6 lg:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-white mb-6 flex items-start justify-between gap-4 flex-wrap">
              {editing && open.editable ? (
                <div className="flex-1 min-w-[260px] grid gap-2">
                  <select
                    value={editCategory}
                    onChange={(e) => setEditCategory(e.target.value)}
                    className="h-9 px-3 rounded-md bg-white/10 border border-white/30 text-white text-xs tracking-[0.2em]"
                  >
                    {VALID_CATEGORIES.map((c) => (
                      <option key={c} value={c} className="text-black">
                        {c}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    placeholder="제목"
                    className="h-11 px-3 rounded-md bg-white/10 border border-white/30 text-white font-display font-bold text-xl"
                  />
                  <input
                    type="date"
                    value={editDate}
                    onChange={(e) => setEditDate(e.target.value)}
                    className="h-9 px-3 rounded-md bg-white/10 border border-white/30 text-white text-sm"
                  />
                </div>
              ) : (
                <div>
                  <p className="text-xs tracking-[0.4em] opacity-70">{open.category}</p>
                  <h3 className="font-display font-bold text-2xl md:text-3xl mt-2">{open.title}</h3>
                  <p className="text-sm opacity-60 mt-1">{open.date ?? ""}</p>
                </div>
              )}
              {open.editable && (
                <div className="flex gap-2">
                  {editing ? (
                    <>
                      <button
                        disabled={savingEdit}
                        onClick={async () => {
                          if (!editTitle.trim()) {
                            alert("제목을 입력해주세요.");
                            return;
                          }
                          setSavingEdit(true);
                          const ok = await saveDbProject(open.id, {
                            title: editTitle.trim(),
                            category: editCategory,
                            event_date: editDate || null,
                          });
                          setSavingEdit(false);
                          if (ok) setEditing(false);
                        }}
                        className="h-9 px-4 rounded-md text-sm bg-emerald-500 hover:bg-emerald-400 text-white font-semibold disabled:opacity-50 whitespace-nowrap"
                      >
                        {savingEdit ? "저장중..." : "저장"}
                      </button>
                      <button
                        disabled={savingEdit}
                        onClick={() => setEditing(false)}
                        className="h-9 px-4 rounded-md text-sm border border-white/30 text-white hover:bg-white/10 whitespace-nowrap"
                      >
                        취소
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          setEditTitle(open.title);
                          setEditCategory(open.category);
                          setEditDate(open.date ?? "");
                          setEditing(true);
                        }}
                        className="h-9 px-4 rounded-md text-sm bg-white/10 hover:bg-white/20 text-white border border-white/30 whitespace-nowrap"
                      >
                        수정
                      </button>
                      <button
                        onClick={() => deleteDbProject(open.id)}
                        className="h-9 px-4 rounded-md text-sm border border-red-300/50 text-red-200 hover:bg-red-500/20 whitespace-nowrap"
                      >
                        삭제
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
            <div className="grid gap-4">
              {open.cover && <img src={open.cover} alt={open.title} className="w-full rounded-md" />}
              {open.photos.map((src) => (
                <img key={src} src={src} alt={open.title} loading="lazy" className="w-full rounded-md" />
              ))}
            </div>
            <p className="text-center text-xs text-white/50 mt-6">
              총 {(open.cover ? 1 : 0) + open.photos.length}장 — Esc 또는 배경 클릭으로 닫기
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

function Chip({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-full text-xs border transition ${
        active
          ? "bg-[#0a0a0a] border-[#0a0a0a]"
          : "bg-white border-neutral-300 text-neutral-700 hover:border-neutral-500"
      }`}
      style={active ? { color: "#ffffff" } : undefined}
    >
      {children}
    </button>
  );
}

function AddProjectModal({
  onClose,
  onCreated,
}: {
  onClose: () => void;
  onCreated: () => void | Promise<void>;
}) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [photosPreview, setPhotosPreview] = useState<string[]>([]);

  // Esc to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !submitting) onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, submitting]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm grid place-items-center p-4"
      onClick={() => !submitting && onClose()}
    >
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={async (e) => {
          e.preventDefault();
          setError(null);
          setSubmitting(true);
          try {
            const fd = new FormData(e.currentTarget);
            const res = await fetch("/api/admin/projects", {
              method: "POST",
              body: fd,
            });
            const json = await res.json();
            if (!res.ok) throw new Error(json.error || "upload failed");
            await onCreated();
          } catch (err) {
            const msg = err instanceof Error ? err.message : "upload failed";
            setError(msg);
          } finally {
            setSubmitting(false);
          }
        }}
        className="w-full max-w-2xl bg-white rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto"
      >
        <header className="sticky top-0 bg-white border-b border-neutral-200 px-6 py-4 flex items-center justify-between">
          <h3 className="font-display font-bold text-lg">새 프로젝트 등록</h3>
          <button
            type="button"
            onClick={() => !submitting && onClose()}
            className="w-8 h-8 grid place-items-center rounded-md hover:bg-neutral-100"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6l-12 12" />
            </svg>
          </button>
        </header>

        <div className="p-6 grid gap-5">
          <div className="grid gap-1.5">
            <label className="text-xs font-bold text-neutral-700">제목 *</label>
            <input
              name="title"
              required
              maxLength={200}
              placeholder="예: LG전자 플래그십 D5 포토부스 납품"
              className="h-11 px-3 rounded-md border border-neutral-300 focus:border-[#0a0a0a] outline-none text-sm"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-1.5">
              <label className="text-xs font-bold text-neutral-700">카테고리 *</label>
              <select
                name="category"
                required
                defaultValue=""
                className="h-11 px-3 rounded-md border border-neutral-300 focus:border-[#0a0a0a] outline-none text-sm bg-white"
              >
                <option value="" disabled>선택...</option>
                {VALID_CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div className="grid gap-1.5">
              <label className="text-xs font-bold text-neutral-700">행사 일자</label>
              <input
                type="date"
                name="event_date"
                className="h-11 px-3 rounded-md border border-neutral-300 focus:border-[#0a0a0a] outline-none text-sm"
              />
            </div>
          </div>

          <div className="grid gap-1.5">
            <label className="text-xs font-bold text-neutral-700">커버 이미지 * <span className="font-normal text-neutral-500">(JPG/PNG/WebP, 최대 10MB)</span></label>
            <input
              type="file"
              name="cover"
              required
              accept="image/jpeg,image/png,image/webp"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) setCoverPreview(URL.createObjectURL(f));
                else setCoverPreview(null);
              }}
              className="text-sm file:mr-3 file:px-4 file:py-2 file:rounded-md file:border-0 file:bg-neutral-100 file:text-sm file:font-semibold hover:file:bg-neutral-200 cursor-pointer"
            />
            {coverPreview && (
              <img src={coverPreview} alt="cover preview" className="mt-2 rounded-md max-h-48 object-cover" />
            )}
          </div>

          <div className="grid gap-1.5">
            <label className="text-xs font-bold text-neutral-700">추가 사진 <span className="font-normal text-neutral-500">(여러 장 선택 가능)</span></label>
            <input
              type="file"
              name="photos"
              multiple
              accept="image/jpeg,image/png,image/webp"
              onChange={(e) => {
                const files = Array.from(e.target.files || []);
                setPhotosPreview(files.map((f) => URL.createObjectURL(f)));
              }}
              className="text-sm file:mr-3 file:px-4 file:py-2 file:rounded-md file:border-0 file:bg-neutral-100 file:text-sm file:font-semibold hover:file:bg-neutral-200 cursor-pointer"
            />
            {photosPreview.length > 0 && (
              <div className="mt-2 grid grid-cols-3 gap-2">
                {photosPreview.map((src, i) => (
                  <img key={i} src={src} alt={`preview ${i}`} className="rounded-md aspect-square object-cover" />
                ))}
              </div>
            )}
          </div>

          {error && <p className="text-xs text-red-600">{error}</p>}
        </div>

        <footer className="sticky bottom-0 bg-white border-t border-neutral-200 px-6 py-4 flex justify-end gap-2">
          <button
            type="button"
            onClick={() => !submitting && onClose()}
            disabled={submitting}
            className="h-10 px-4 rounded-md border border-neutral-300 text-sm hover:bg-neutral-50 disabled:opacity-60"
          >
            취소
          </button>
          <button
            type="submit"
            disabled={submitting}
            className="h-10 px-5 rounded-md bg-[#0a0a0a] hover:bg-[#262626] text-sm font-semibold disabled:opacity-60"
            style={{ color: "#ffffff" }}
          >
            {submitting ? "업로드 중..." : "등록"}
          </button>
        </footer>
      </form>
    </div>
  );
}

function HeroPickerModal({
  dbProjects,
  featuredCount,
  onClose,
  onPick,
}: {
  dbProjects: DbProject[];
  featuredCount: number;
  onClose: () => void;
  onPick: (id: string) => Promise<void>;
}) {
  const candidates = dbProjects.filter((p) => !p.hero_featured);
  const slotsLeft = Math.max(0, 6 - featuredCount);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="min-h-full flex items-start justify-center p-4 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white rounded-2xl w-full max-w-3xl shadow-2xl my-auto">
          <header className="flex items-center justify-between px-5 py-4 border-b border-neutral-200">
            <div>
              <p className="text-[10px] tracking-[0.4em] text-amber-700 font-bold">★ HERO 노출 등록</p>
              <h3 className="font-display font-bold text-lg mt-0.5">프로젝트 선택</h3>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 grid place-items-center rounded-full hover:bg-neutral-100 text-neutral-500"
              aria-label="닫기"
            >
              ×
            </button>
          </header>

          <div className="px-5 py-3 bg-amber-50 border-b border-amber-100">
            <p className="text-xs text-amber-800">
              남은 슬롯 <span className="font-bold">{slotsLeft}</span>개 · 등록된 프로젝트 <span className="font-bold">{candidates.length}</span>개 중 선택
            </p>
          </div>

          {candidates.length === 0 ? (
            <div className="p-10 text-center text-sm text-neutral-500">
              {dbProjects.length === 0 ? (
                <>
                  아직 등록된 프로젝트가 없습니다.
                  <br />
                  먼저 우측 상단 <span className="font-bold text-neutral-700">+ 새 프로젝트</span> 버튼으로 사진을 업로드해주세요.
                </>
              ) : (
                <>
                  모든 프로젝트가 이미 Hero에 노출 중입니다.
                </>
              )}
            </div>
          ) : (
            <div className="p-5 grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-[60vh] overflow-y-auto">
              {candidates.map((p) => (
                <button
                  key={p.id}
                  onClick={async () => {
                    await onPick(p.id);
                    if (slotsLeft <= 1) onClose();
                  }}
                  disabled={slotsLeft === 0}
                  className="group relative aspect-[4/3] rounded-lg overflow-hidden border-2 border-neutral-200 hover:border-amber-400 disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                  {p.cover ? (
                    <img
                      src={p.cover}
                      alt={p.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-neutral-100" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute inset-0 grid place-items-center bg-amber-500/0 group-hover:bg-amber-500/30 transition">
                    <span className="opacity-0 group-hover:opacity-100 transition px-3 py-1.5 rounded-full bg-amber-400 text-amber-950 text-xs font-bold shadow-lg">
                      ★ 등록
                    </span>
                  </div>
                  <div className="absolute bottom-2 left-2 right-2 text-white text-left">
                    <p className="text-[9px] tracking-[0.2em] opacity-75 uppercase">{p.category}</p>
                    <p className="text-xs font-bold leading-tight line-clamp-2 mt-0.5 drop-shadow">
                      {p.title}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}

          <footer className="px-5 py-3 border-t border-neutral-200 flex justify-end">
            <button
              onClick={onClose}
              className="h-9 px-4 rounded-md border border-neutral-300 hover:bg-neutral-50 text-sm font-semibold"
            >
              닫기
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}

function EditProjectModal({
  project,
  onClose,
  onSave,
}: {
  project: DbProject;
  onClose: () => void;
  onSave: (fields: { title: string; category: string; event_date: string | null }) => Promise<void>;
}) {
  const [title, setTitle] = useState(project.title);
  const [category, setCategory] = useState(project.category);
  const [date, setDate] = useState(project.date ?? "");
  const [saving, setSaving] = useState(false);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm overflow-y-auto"
      onClick={() => !saving && onClose()}
    >
      <div
        className="min-h-full flex items-start justify-center p-4 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            if (!title.trim()) {
              alert("제목을 입력해주세요.");
              return;
            }
            setSaving(true);
            await onSave({ title: title.trim(), category, event_date: date || null });
            setSaving(false);
          }}
          className="bg-white rounded-2xl w-full max-w-lg shadow-2xl my-auto"
        >
          <header className="flex items-center justify-between px-5 py-4 border-b border-neutral-200">
            <div>
              <p className="text-[10px] tracking-[0.4em] text-neutral-500 font-bold">EDIT PROJECT</p>
              <h3 className="font-display font-bold text-lg mt-0.5">프로젝트 수정</h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              disabled={saving}
              className="w-8 h-8 grid place-items-center rounded-full hover:bg-neutral-100 text-neutral-500 disabled:opacity-50"
              aria-label="닫기"
            >
              ×
            </button>
          </header>

          <div className="p-5 grid gap-4">
            {project.cover && (
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-neutral-100">
                <img src={project.cover} alt={project.title} className="w-full h-full object-cover" />
              </div>
            )}
            <div className="grid gap-1.5">
              <label className="text-xs font-semibold text-neutral-600">제목</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                maxLength={200}
                className="h-10 px-3 rounded-md border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-300"
              />
            </div>
            <div className="grid gap-1.5">
              <label className="text-xs font-semibold text-neutral-600">카테고리</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="h-10 px-3 rounded-md border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-300"
              >
                {VALID_CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div className="grid gap-1.5">
              <label className="text-xs font-semibold text-neutral-600">진행일자 (선택)</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="h-10 px-3 rounded-md border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-300"
              />
            </div>
          </div>

          <footer className="px-5 py-3 border-t border-neutral-200 flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              disabled={saving}
              className="h-9 px-4 rounded-md border border-neutral-300 hover:bg-neutral-50 text-sm font-semibold disabled:opacity-50"
            >
              취소
            </button>
            <button
              type="submit"
              disabled={saving}
              className="h-9 px-5 rounded-md bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold disabled:opacity-50"
            >
              {saving ? "저장 중..." : "저장"}
            </button>
          </footer>
        </form>
      </div>
    </div>
  );
}
