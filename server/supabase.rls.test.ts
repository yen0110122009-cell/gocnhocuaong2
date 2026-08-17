import { describe, expect, it } from "vitest";
import { fetchSupabaseWithTimeout } from "./supabaseTestUtils";

const hasSupabaseCredentials = Boolean(process.env.VITE_SUPABASE_URL && process.env.VITE_SUPABASE_PUBLISHABLE_KEY);

describe("Supabase RLS baseline", () => {
  it.skipIf(!hasSupabaseCredentials)("exposes the account table but does not expose unauthenticated rows", async () => {
    const url = process.env.VITE_SUPABASE_URL as string;
    const key = process.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

    const response = await fetchSupabaseWithTimeout(`${url}/rest/v1/study_accounts?select=user_id,account_code,role`, {
      headers: { apikey: key as string },
    });
    expect(response.status).toBe(200);
    const rows = (await response.json()) as unknown;
    expect(Array.isArray(rows)).toBe(true);
    expect(rows).toEqual([]);
  }, 15000);
});
