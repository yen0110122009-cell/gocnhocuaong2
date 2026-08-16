import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const standalonePath = path.resolve(process.cwd(), "index.html");
const standalone = readFileSync(standalonePath, "utf8");

describe("index.html standalone learning contracts", () => {
  it("renders the quiz result into the DOM after persisting the attempt", () => {
    expect(standalone).toContain("function submitQuiz()");
    expect(standalone).toContain("profile().attempts.push(result)");
    expect(standalone).toContain("root.innerHTML=resultView(result);bind()");
  });

  it("keeps both study-again actions wired to real helpers", () => {
    expect(standalone).toContain("function retryQuiz()");
    expect(standalone).toContain("function makeWrongCards()");
    expect(standalone).toContain("last.answers[i]!==q.answer");
    expect(standalone).toContain("setView('library')");
    expect(standalone).toContain("e.target.closest('#retry-quiz,#make-wrong-cards')");
    expect(standalone).toContain("if(b.id==='retry-quiz')retryQuiz()");
    expect(standalone).toContain("if(b.id==='make-wrong-cards')makeWrongCards()");
  });

  it("includes all four interactive Flashcard modes and their answer handlers", () => {
    expect(standalone).toContain("Lật thẻ");
    expect(standalone).toContain("Trắc nghiệm");
    expect(standalone).toContain("Gõ đáp án");
    expect(standalone).toContain("Ghép đôi");
    expect(standalone).toContain("[data-flash-choice],#check-typed,#check-match");
  });

  it("defines the complete 900-achievement and title collection contract", () => {
    expect(standalone).toContain("Array.from({length:900}");
    expect(standalone).toContain("Người Giữ Ngọn Lửa Tri Thức");
    expect(standalone).toContain("standaloneTitleRanks");
    expect(standalone).toContain("id=\"ach-search\"");
    expect(standalone).toContain("id=\"ach-status\"");
    expect(standalone).toContain("id=\"ach-title\"");
    expect(standalone).toContain("id=\"ach-difficulty\"");
    expect(standalone).toContain("id=\"ach-fragments\"");
    expect(standalone).toContain("window._achDifficulty");
    expect(standalone).toContain("window._achFragmentOnly");
    expect(standalone).not.toContain(".slice(0,120)");
    expect(standalone).toContain('id="studio-file"');
    expect(standalone).toContain("application/pdf");
    expect(standalone).toContain("file.text()");
    expect(standalone).toContain("Tệp đính kèm");
  });

  it("discloses the standalone local-storage limitation to the learner", () => {
    expect(standalone).toContain("lưu dữ liệu cục bộ trên thiết bị này");
    expect(standalone).toContain("không đồng bộ máy chủ");
  });
});
