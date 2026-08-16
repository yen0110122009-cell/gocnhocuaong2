import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";

describe("AI Studio document generation contract", () => {
  const source = readFileSync(join(process.cwd(), "server/routers/study.ts"), "utf8");

  it("accepts supported documents with bounded input and stores bytes outside the database", () => {
    expect(source).toContain('mode: z.enum(["cards", "quiz"])');
    expect(source).toContain('application/pdf');
    expect(source).toContain('bytes.length > 5 * 1024 * 1024');
    expect(source).toContain('storagePut(`study-historia/documents/');
  });

  it("passes PDF references as file content and requests structured JSON", () => {
    expect(source).toContain('type: "file_url"');
    expect(source).toContain('mime_type: "application/pdf"');
    expect(source).toContain('response_format: { type: "json_schema"');
    expect(source).toContain('maxItems: 27');
  });
});
