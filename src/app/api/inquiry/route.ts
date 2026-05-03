import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

type IncomingInquiry = {
  type?: string;
  company_name?: string;
  email?: string;
  phone?: string;
  setup_date?: string | null;
  pickup_date?: string | null;
  address?: string | null;
  quantity?: number | null;
  memo?: string | null;
  channel?: string | null;
};

export async function POST(req: Request) {
  let body: IncomingInquiry;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  if (body.type !== "rental" && body.type !== "buy") {
    return NextResponse.json({ error: "type must be rental or buy" }, { status: 400 });
  }
  if (!body.company_name?.trim() || !body.email?.trim() || !body.phone?.trim()) {
    return NextResponse.json({ error: "company_name, email, phone are required" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return NextResponse.json({ error: "invalid email format" }, { status: 400 });
  }

  const row = {
    type: body.type,
    company_name: body.company_name.trim().slice(0, 200),
    email: body.email.trim().slice(0, 200),
    phone: body.phone.trim().slice(0, 50),
    setup_date: body.setup_date || null,
    pickup_date: body.pickup_date || null,
    address: body.address?.trim().slice(0, 500) || null,
    quantity: typeof body.quantity === "number" && body.quantity > 0 ? body.quantity : null,
    memo: body.memo?.trim().slice(0, 5000) || null,
    channel: body.channel?.trim().slice(0, 100) || null,
    status: "new" as const,
  };

  const { data, error } = await supabaseAdmin
    .from("inquiries")
    .insert([row])
    .select("id")
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ ok: true, id: data.id });
}
