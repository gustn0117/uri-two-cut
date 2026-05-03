"use client";

import { useEffect, useState, useCallback } from "react";

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

export default function AdminPage() {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState<string | null>(null);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<"all" | Inquiry["status"]>("all");
  const [typeFilter, setTypeFilter] = useState<"all" | "rental" | "buy">("all");

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
    (r) => (filter === "all" || r.status === filter) && (typeFilter === "all" || r.type === typeFilter)
  );

  if (authed === null) {
    return (
      <main className="min-h-screen grid place-items-center">
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
    <main className="min-h-screen bg-neutral-50">
      <header className="bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <p className="text-xs tracking-[0.4em] text-neutral-500 font-bold">ADMIN</p>
            <h1 className="font-display font-black text-lg">우리투컷 문의 관리</h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={load}
              className="h-9 px-4 rounded-md border border-neutral-300 text-sm hover:bg-neutral-50"
            >
              새로고침
            </button>
            <button
              onClick={logout}
              className="h-9 px-4 rounded-md text-sm bg-[#0a0a0a] hover:bg-[#262626]"
              style={{ color: "#ffffff" }}
            >
              로그아웃
            </button>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-[1400px] px-6 lg:px-10 py-8">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="text-xs text-neutral-500">상태</span>
          {(["all", "new", "contacted", "closed"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-3 py-1.5 rounded-full text-xs border transition ${
                filter === s
                  ? "bg-[#0a0a0a] border-[#0a0a0a] text-white"
                  : "bg-white border-neutral-300 text-neutral-700 hover:border-neutral-500"
              }`}
            >
              {s === "all" ? "전체" : STATUS_LABEL[s]}
            </button>
          ))}
          <span className="text-xs text-neutral-500 ml-4">유형</span>
          {(["all", "rental", "buy"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTypeFilter(t)}
              className={`px-3 py-1.5 rounded-full text-xs border transition ${
                typeFilter === t
                  ? "bg-[#0a0a0a] border-[#0a0a0a] text-white"
                  : "bg-white border-neutral-300 text-neutral-700 hover:border-neutral-500"
              }`}
            >
              {t === "all" ? "전체" : t === "rental" ? "렌탈" : "구매"}
            </button>
          ))}
          <span className="ml-auto text-xs text-neutral-500">
            총 {visible.length}건 / 전체 {inquiries.length}건
          </span>
        </div>

        {loading ? (
          <p className="text-center text-sm text-neutral-500 py-12">불러오는 중...</p>
        ) : visible.length === 0 ? (
          <p className="text-center text-sm text-neutral-500 py-12">조건에 맞는 문의가 없습니다.</p>
        ) : (
          <div className="grid gap-3">
            {visible.map((r) => (
              <article
                key={r.id}
                className="bg-white rounded-xl border border-neutral-200 p-5 grid lg:grid-cols-[120px_1fr_auto] gap-4 items-start"
              >
                <div className="text-xs">
                  <span
                    className={`inline-block px-2 py-0.5 rounded-full border ${STATUS_TONE[r.status]}`}
                  >
                    {STATUS_LABEL[r.status]}
                  </span>
                  <p className="mt-2 font-bold">{r.type === "rental" ? "렌탈" : "구매"}</p>
                  <p className="text-neutral-500">
                    {new Date(r.created_at).toLocaleString("ko-KR", {
                      year: "2-digit",
                      month: "2-digit",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
                <div className="grid gap-1 text-sm">
                  <p className="font-bold text-base">{r.company_name}</p>
                  <p className="text-neutral-700">{r.phone} · {r.email}</p>
                  {r.address && <p className="text-neutral-600">📍 {r.address}</p>}
                  {(r.setup_date || r.pickup_date) && (
                    <p className="text-neutral-600">
                      📅 {r.setup_date ?? "-"} ~ {r.pickup_date ?? "-"}
                    </p>
                  )}
                  {r.quantity != null && <p className="text-neutral-600">수량: {r.quantity}</p>}
                  {r.memo && (
                    <p className="text-neutral-700 mt-1 whitespace-pre-line bg-neutral-50 rounded-md p-3">
                      {r.memo}
                    </p>
                  )}
                  {r.channel && <p className="text-xs text-neutral-400">유입경로: {r.channel}</p>}
                </div>
                <div className="flex flex-col gap-2 lg:items-end">
                  <select
                    value={r.status}
                    onChange={(e) => updateStatus(r.id, e.target.value as Inquiry["status"])}
                    className="h-9 px-3 rounded-md border border-neutral-300 text-sm"
                  >
                    <option value="new">신규</option>
                    <option value="contacted">연락완료</option>
                    <option value="closed">종료</option>
                  </select>
                  <button
                    onClick={() => remove(r.id)}
                    className="h-9 px-3 rounded-md text-sm border border-red-200 text-red-600 hover:bg-red-50"
                  >
                    삭제
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
