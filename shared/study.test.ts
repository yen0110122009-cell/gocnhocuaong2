import { describe, expect, it } from "vitest";
import { computedAchievements, emptyAppConfig, emptyProfile, generateAchievements, levelForXp, normalizeProfile } from "./study";

describe("Study Historia learning state", () => {
  it("generates exactly 900 structured achievements", () => {
    const achievements = generateAchievements();
    expect(achievements).toHaveLength(900);
    expect(new Set(achievements.map((item) => item.id)).size).toBe(900);
    expect(achievements.filter((item) => item.title).length).toBe(400);
  });

  it("derives the level from XP instead of accepting a hard-coded level", () => {
    expect(levelForXp(0)).toBe(1);
    expect(normalizeProfile({ xp: 900, level: 999 }).level).toBe(levelForXp(900));
  });

  it("re-evaluates an achievement when learning data decreases", () => {
    const profile = emptyProfile();
    profile.xp = 10000;
    const unlocked = computedAchievements(profile, emptyAppConfig());
    expect(unlocked.length).toBeGreaterThan(0);
    profile.xp = 0;
    expect(computedAchievements(profile, emptyAppConfig()).filter((item) => item.metric === "xp")).toHaveLength(0);
  });

  it("preserves quiz attempt identity and answer flags during profile normalization", () => {
    const normalized = normalizeProfile({ attempts: [{ id: "attempt-1", quizId: "quiz-1", completedAt: "2026-08-16T00:00:00.000Z", correct: 2, total: 3, accuracy: 67, durationSeconds: 42, answers: [{ questionId: "q1", answer: "A", flagged: true, correct: false }] }] });
    expect(normalized.attempts).toEqual([{ id: "attempt-1", quizId: "quiz-1", completedAt: "2026-08-16T00:00:00.000Z", correct: 2, total: 3, accuracy: 67, durationSeconds: 42, answers: [{ questionId: "q1", answer: "A", flagged: true, correct: false }] }]);
  });

  it("preserves valid learning activity and discards malformed activity safely", () => {
    const normalized = normalizeProfile({ studyActivity: [
      { id: "activity-1", occurredAt: "2026-08-16T00:00:00.000Z", kind: "quiz", quantity: 8, durationSeconds: 600, xpEarned: 84, correct: 7, total: 8 },
      { id: "broken", kind: "reading" },
    ] });
    expect(normalized.studyActivity).toEqual([{ id: "activity-1", occurredAt: "2026-08-16T00:00:00.000Z", kind: "quiz", quantity: 8, durationSeconds: 600, xpEarned: 84, correct: 7, total: 8 }]);
  });
});
