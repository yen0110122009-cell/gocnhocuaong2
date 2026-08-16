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
});
