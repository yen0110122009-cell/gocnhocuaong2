import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";

describe("AI Studio prompt contract", () => {
  const source = readFileSync(join(process.cwd(), "client/src/pages/Home.tsx"), "utf8");

  it("supports both outputs and preserves the learning purpose in the prompt", () => {
    expect(source).toContain('useState<"cards" | "quiz" | "both">');
    expect(source).toContain('mode: tab');
    expect(source).toContain('label="Mục đích học"');
    expect(source).toContain("purpose || \"[mục đích học]\"");
  });

  it("allows direct prompt editing and regeneration", () => {
    expect(source).toContain('aria-label="Prompt AI có thể chỉnh sửa"');
    expect(source).toContain("setPromptDraft");
    expect(source).toContain("Đã tạo lại prompt từ biểu mẫu.");
  });
});

