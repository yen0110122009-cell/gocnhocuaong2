import { describe, expect, it } from "vitest";

describe("Supabase RLS baseline", () => {
  it("exposes the account table but does not expose unauthenticated rows", async () => {
    const url = process.env.VITE_SUPABASE_URL;
    const key = process.env.VITE_SUPABASE_PUBLISHABLE_KEY;
    expect(url).toBeTruthy();
    expect(key).toBeTruthy();

    const response = await fetch(`${url}/rest/v1/study_accounts?select=user_id,account_code,role`, {
      headers: { apikey: key as string },
    });
    expect(response.status).toBe(200);
    const rows = (await response.json()) as unknown;
    expect(Array.isArray(rows)).toBe(true);
    expect(rows).toEqual([]);
  }, 15000);
});
