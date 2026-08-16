import { describe, expect, it } from "vitest";
import { buildExternalAiPrompt, convertImportToQuiz, validateExternalAiData } from "./aiDataImport";

describe("quiz modes and deep explanation contract", () => {
  it("prompt yêu cầu hai lớp dữ liệu và cảnh báo không bịa", () => {
    const prompt = buildExternalAiPrompt({ target: "quiz", questionType: "mixed", quantity: 10, subject: "Lịch sử", topic: "Nhà Trần" });
    expect(prompt).toContain("deepExplanation");
    expect(prompt).toContain("needsVerification=true");
    expect(prompt).toContain("solutionSteps");
  });

  it("giữ dữ liệu Hiểu tận gốc khi nhập quiz", () => {
    const validation = validateExternalAiData(JSON.stringify({ questions: [{ type: "multiple", question: "Ai lãnh đạo?", options: ["A", "B"], answer: "A", explanation: "Vì nguồn ghi rõ.", source: "Sách", deepExplanation: { knowledge: "Bối cảnh", givenData: "Dữ kiện", formula: "Không sử dụng công thức.", solutionSteps: ["Đọc dữ kiện", "Đối chiếu nguồn"], whyThisMethod: "Phù hợp", commonMistakes: ["Đoán"], alternativeSolution: "Không có", deepQuestions: [{ question: "Vì sao?", answer: "Do bối cảnh" }], variationExplanation: "Nếu dữ kiện đổi", needsVerification: false } }] }));
    const quiz = convertImportToQuiz(validation, { title: "Đề mẫu", subject: "Lịch sử", topic: "Nhà Trần" });
    expect(validation.valid).toBe(true);
    expect(quiz.questions[0].deepExplanation?.solutionSteps).toHaveLength(2);
    expect(quiz.questions[0].deepExplanation?.needsVerification).toBe(false);
  });

  it("cảnh báo khi câu hỏi thiếu dữ liệu Hiểu tận gốc hoặc cần xác minh", () => {
    const validation = validateExternalAiData(JSON.stringify([{ type: "short", question: "Nêu sự kiện", answer: "A", deepExplanation: { needsVerification: true } }]));
    expect(validation.warnings.some((warning) => warning.includes("Hiểu tận gốc"))).toBe(true);
    expect(validation.warnings.some((warning) => warning.includes("cần xác minh"))).toBe(true);
  });
});
