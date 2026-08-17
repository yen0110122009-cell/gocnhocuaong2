import { describe, expect, it } from "vitest";

describe("application branding configuration", () => {
  it("loads the requested Vietnamese application title", () => {
    expect(process.env.VITE_APP_TITLE ?? "Góc học tập của Ong").toBe("Góc học tập của Ong");
  });
});
