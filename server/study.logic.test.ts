import { describe, expect, it } from "vitest";
import { applyAchievementRewards, computedAchievements, emptyAppConfig, emptyProfile, generateAchievements, levelForXp, normalizeProfile, statsForProfile } from "../shared/study";

describe("quy tắc Study Historia", () => {
  it("tạo chính xác 900 thành tích với 400 danh hiệu từ nửa sau", () => {
    const achievements = generateAchievements();
    expect(achievements).toHaveLength(900);
    expect(achievements.filter((achievement) => achievement.title !== null)).toHaveLength(400);
    expect(new Set(achievements.map((achievement) => achievement.id)).size).toBe(900);
  });

  it("tính cấp độ từ XP và chuẩn hóa hồ sơ an toàn", () => {
    expect(levelForXp(0)).toBe(1);
    expect(levelForXp(90)).toBe(2);
    expect(normalizeProfile({ xp: -100, flashcardSets: "invalid" })).toMatchObject({ xp: 0, level: 1, flashcardSets: [] });
  });

  it("tính thống kê Flashcard và thành tích theo đúng hồ sơ đang xét", () => {
    const profileA = emptyProfile();
    profileA.xp = 500;
    profileA.flashcardSets = [{ id: "set-a", title: "A", subject: "Toán", topic: "", difficulty: "Cơ bản", createdAt: "", studyCount: 1, cards: [
      { id: "a1", front: "1", back: "1", status: "known", starred: false },
      { id: "a2", front: "2", back: "2", status: "known", starred: false },
    ] }];
    const profileB = emptyProfile();
    expect(statsForProfile(profileA)).toMatchObject({ learnedCards: 2, completedSets: 1, xp: 500 });
    expect(statsForProfile(profileB)).toMatchObject({ learnedCards: 0, completedSets: 0, xp: 0 });
    const config = emptyAppConfig();
    config.customAchievements = [{ id: "personal-xp", name: "Bắt đầu", description: "", metric: "xp", threshold: 100, rewardXp: 20, rewardFragments: 0, enabled: true }];
    expect(computedAchievements(profileA, config).some((item) => item.id === "personal-xp")).toBe(true);
    expect(computedAchievements(profileB, config).some((item) => item.id === "personal-xp")).toBe(false);
  });

  it("chỉ cấp phần thưởng thành tích một lần cho mỗi hồ sơ", () => {
    const profile = emptyProfile();
    profile.xp = 120;
    const config = emptyAppConfig();
    config.customAchievements = [{ id: "reward-once", name: "Bắt đầu", description: "", metric: "xp", threshold: 100, rewardXp: 30, rewardFragments: 1, enabled: true }];
    const first = applyAchievementRewards(profile, config);
    expect(first.newlyUnlocked.map((item) => item.id)).toContain("reward-once");
    expect(first.profile.xp).toBeGreaterThan(120);
    const second = applyAchievementRewards(first.profile, config);
    expect(second.newlyUnlocked.some((item) => item.id === "reward-once")).toBe(false);
  });
});
