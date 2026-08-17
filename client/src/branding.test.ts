import { describe, expect, it } from "vitest";
import { BRAND } from "./branding";

describe("application brand manifest", () => {
  it("uses the approved display name", () => {
    expect(BRAND.displayName).toBe("GÓC HỌC TẬP CỦA ONG");
    expect(BRAND.naturalName).toBe("Góc học tập của Ong");
  });

  it("keeps legacy names explicit for compatibility audits", () => {
    expect(BRAND.legacyNames).toEqual(["Góc nhỏ của Ong", "GÓC NHỎ CỦA ONG"]);
  });
});
