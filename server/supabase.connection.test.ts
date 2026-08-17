import { describe, expect, it } from "vitest";

const hasSupabaseCredentials = Boolean(process.env.VITE_SUPABASE_URL && process.env.VITE_SUPABASE_PUBLISHABLE_KEY);

describe("Supabase connection configuration", () => {
  it.skipIf(!hasSupabaseCredentials)("reaches the REST endpoint with the configured publishable key", async () => {
    const url = process.env.VITE_SUPABASE_URL as string;
    const key = process.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;
    const response = await fetch(`${url}/auth/v1/settings`, {
      headers: { apikey: key as string },
    });
    expect(response.status, await response.text()).toBe(200);
  }, 15000);
});
