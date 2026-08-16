import { describe, expect, it } from "vitest";
import { mergeImportedCharacters } from "./characterImport";
import type { AppConfig } from "./study";

const character = (id: string, name: string): AppConfig["characters"][number] => ({
  id, name, aliases: "", birthYear: "", deathYear: "", hometown: "", role: "", categories: [],
  summary: "", biography: "", sourceName: "Nguồn kiểm chứng", sourceUrl: "https://example.org/source",
  imageUrl: "", imageSource: "", fragmentTotal: 12, timeline: [], updatedAt: new Date(0).toISOString(),
});

describe("mergeImportedCharacters", () => {
  it("replaces an existing record when the name conflicts but the id differs", () => {
    const result = mergeImportedCharacters([character("old-id", "Lý Thường Kiệt")], [character("new-id", "Lý Thường Kiệt")], "replace");
    expect(result.map((item) => item.id)).toEqual(["new-id"]);
  });

  it("keeps existing records in skip mode", () => {
    const result = mergeImportedCharacters([character("old-id", "Lý Thường Kiệt")], [character("new-id", "Lý Thường Kiệt")], "skip");
    expect(result.map((item) => item.id)).toEqual(["old-id", "new-id"]);
  });
});
