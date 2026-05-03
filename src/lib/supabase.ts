import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const serviceRole = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export const supabaseAdmin = createClient(url, serviceRole, {
  db: { schema: "uri_two_cut" },
  auth: { persistSession: false, autoRefreshToken: false },
});

export type Inquiry = {
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
