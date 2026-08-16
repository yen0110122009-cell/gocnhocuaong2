import { describe, expect, it } from "vitest";
import { applyAchievementRewards, computedAchievements, emptyAppConfig, emptyProfile, generateAchievements, levelForXp, normalizeProfile } from "./study";

describe("Study Historia learning state", () => {
  it("generates exactly 900 structured achievements", () => {
    const achievements = generateAchievements();
    expect(achievements).toHaveLength(900);
    expect(new Set(achievements.map((item) => item.id)).size).toBe(900);
    const titles = achievements.filter((item) => item.title);
    expect(titles).toHaveLength(400);
    expect(new Set(titles.map((item) => item.title)).size).toBe(400);
    expect(new Set(titles.map((item) => item.titleMeaning)).size).toBe(400);
    for (const metric of ["xp", "learnedCards", "completedQuizzes", "completedSets", "fragments"] as const) {
      const thresholds = titles.filter((item) => item.metric === metric).map((item) => item.threshold);
      expect(thresholds.every((value, index) => index === 0 || value > thresholds[index - 1])).toBe(true);
    }
    expect(achievements.slice(0, 100).every((item) => item.rankName === "Khởi Đầu")).toBe(true);
    expect(achievements.slice(500).every((item) => item.titleMeaning && item.rewardXp > 0)).toBe(true);
    expect(achievements[899].title).toBe("Người Giữ Ngọn Lửa Tri Thức");
  });

  it("keeps previously stored learning data when catalog metadata evolves", () => {
    const normalized = normalizeProfile({ xp: 420, activeTitle: "Danh hiệu cũ", unlockedAchievementIds: ["rank-1-1"], flashcardSets: [{ id: "set-1", title: "Lịch sử", subject: "Sử", topic: "Việt Nam", difficulty: "Cơ bản", createdAt: "2026-08-16T00:00:00.000Z", studyCount: 2, cards: [{ id: "card-1", front: "A", back: "B", status: "known", starred: false }] }] });
    expect(normalized.xp).toBe(420);
    expect(normalized.activeTitle).toBe("Danh hiệu cũ");
    expect(normalized.unlockedAchievementIds).toEqual(["rank-1-1"]);
    expect(normalized.achievementUnlockDates).toEqual({});
    expect(normalized.flashcardSets[0].cards).toHaveLength(1);
  });

  it("derives the level from XP instead of accepting a hard-coded level", () => {
    expect(levelForXp(0)).toBe(1);
    expect(normalizeProfile({ xp: 900, level: 999 }).level).toBe(levelForXp(900));
  });

  it("persists achievement rewards across profile normalization", () => {
    const profile = emptyProfile();
    profile.xp = 250;
    const config = { ...emptyAppConfig(), wheelTicketsPerAchievement: 3 };
    const rewarded = applyAchievementRewards(profile, config);
    expect(rewarded.newlyUnlocked.length).toBeGreaterThan(0);
    expect(rewarded.profile.wheelTickets).toBe(rewarded.newlyUnlocked.filter((item) => item.rewardFragments > 0).length * 3);
    expect(rewarded.profile.xp).toBeGreaterThan(profile.xp);
    expect(rewarded.profile.unlockedAchievementIds.length).toBe(rewarded.newlyUnlocked.length);
    expect(rewarded.profile.ownedBadges.length).toBeGreaterThan(0);
    expect(Object.keys(rewarded.profile.achievementUnlockDates)).toHaveLength(rewarded.newlyUnlocked.length);
    const restored = normalizeProfile(rewarded.profile);
    expect(restored.unlockedAchievementIds).toEqual(rewarded.profile.unlockedAchievementIds);
    expect(restored.ownedBadges).toEqual(rewarded.profile.ownedBadges);
    expect(restored.achievementUnlockDates).toEqual(rewarded.profile.achievementUnlockDates);
  });

  it("supports custom achievement titles and fragment rewards", () => {
    const profile = emptyProfile();
    profile.xp = 100;
    const config = { ...emptyAppConfig(), customAchievements: [{ id: "custom-1", name: "Người giữ sử liệu", description: "Đạt mốc", metric: "xp" as const, threshold: 100, rewardXp: 20, rewardFragments: 2, title: "Người Giữ Sử Liệu", titleMeaning: "Biết trân trọng ký ức lịch sử.", enabled: true }] };
    const achievements = computedAchievements(profile, config);
    expect(achievements[0]?.title).toBe("Người Giữ Sử Liệu");
    expect(achievements[0]?.titleMeaning).toContain("trân trọng");
    expect(achievements[0]?.rewardFragments).toBe(2);
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
