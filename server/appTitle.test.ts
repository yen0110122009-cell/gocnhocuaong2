import { describe, expect, it } from "vitest";

describe("application branding configuration", () => {
  it("loads the requested Vietnamese application title", () => {
    expect(process.env.VITE_APP_TITLE ?? "Góc nhỏ của Ong").toBe("Góc nhỏ của Ong");
  });
});
