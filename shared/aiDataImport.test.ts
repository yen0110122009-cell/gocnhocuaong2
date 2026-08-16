import { describe, expect, it } from "vitest";
import { buildExternalAiPrompt, buildWrongAnswerDeepPrompt, convertImportToFlashcards, convertImportToQuiz, parseExternalAiData, validateExternalAiData } from "./aiDataImport";

describe("AI Data Import external workflow", () => {
  it("creates a prompt that delegates document reading to an external AI", () => {
    const prompt = buildExternalAiPrompt({ target: "both", questionType: "mixed", quantity: 20, subject: "Lịch sử", topic: "Nhà Trần", extraRequest: "Giữ nguyên đáp án trong tài liệu" });
    expect(prompt).toContain("chỉ sử dụng thông tin có trong tài liệu");
    expect(prompt).toContain("đề kiểm tra và Flashcard");
    expect(prompt).toContain("Chỉ trả về JSON");
  });

  it("builds a source-aware deep review prompt from wrong answers", () => {
    const prompt = buildWrongAnswerDeepPrompt([{ questionId: "q1", question: "Ai lãnh đạo?", answer: "A", userAnswer: "B", explanation: "Theo tài liệu" }], { subject: "Lịch sử", topic: "Nhà Trần" });
    expect(prompt).toContain("questionId");
    expect(prompt).toContain("correctAnswer");
    expect(prompt).toContain("learnerAnswer");
    expect(prompt).toContain("needsVerification=true");
    expect(prompt).toContain("Nhà Trần");
  });

  it("parses normalized JSON and QUESTION blocks", () => {
    expect(parseExternalAiData(JSON.stringify({ questions: [{ type: "multiple", question: "Ai?", options: ["A", "B"], answer: "B" }] }))).toHaveLength(1);
    expect(parseExternalAiData("[QUESTION]\ntype: true_false\nquestion: Có?\nanswer: Đúng\n[/QUESTION]")).toHaveLength(1);
  });

  it("reports missing answers, invalid choices and duplicate questions", () => {
    const result = validateExternalAiData(JSON.stringify({ questions: [
      { type: "multiple", question: "Câu A", options: ["A", "B"], answer: "C" },
      { type: "short", question: "Câu A", answer: "" },
    ] }));
    expect(result.valid).toBe(false);
    expect(result.errors.join(" ")).toContain("không nằm trong lựa chọn");
    expect(result.errors.join(" ")).toContain("bị trùng");
  });

  it("creates quiz and caps flashcards at 27 per import", () => {
    const raw = JSON.stringify({ questions: Array.from({ length: 30 }, (_, index) => ({ type: "short", question: `Câu ${index}`, answer: `Đáp án ${index}`, explanation: "Giải thích" })) });
    const validation = validateExternalAiData(raw);
    const set = convertImportToFlashcards(validation, { title: "Nguồn ngoài", subject: "Lịch sử", topic: "Ôn tập" }, "2026-08-16T00:00:00.000Z");
    const quiz = convertImportToQuiz(validation, { title: "Đề ngoài", subject: "Lịch sử", topic: "Ôn tập" }, "2026-08-16T00:00:00.000Z");
    expect(validation.valid).toBe(true);
    expect(validation.warnings.join(" ")).toContain("27");
    expect(set.cards).toHaveLength(27);
    expect(quiz.questions).toHaveLength(30);
  });
});
