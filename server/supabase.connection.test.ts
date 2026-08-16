import { describe, expect, it } from "vitest";

describe("Supabase connection configuration", () => {
  it("reaches the REST endpoint with the configured publishable key", async () => {
    const url = process.env.VITE_SUPABASE_URL;
    const key = process.env.VITE_SUPABASE_PUBLISHABLE_KEY;
    expect(url).toBeTruthy();
    expect(key).toBeTruthy();
    const response = await fetch(`${url}/auth/v1/settings`, {
      headers: { apikey: key as string },
    });
    expect(response.status, await response.text()).toBe(200);
  }, 15000);
});
