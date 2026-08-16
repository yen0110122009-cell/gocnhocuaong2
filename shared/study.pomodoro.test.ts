import { describe, expect, it } from "vitest";
import { applyStudyActivityRewards, emptyAppConfig, emptyProfile, normalizeProfile, statsForProfile, type PomodoroSession } from "./study";

const session = (index: number, status: PomodoroSession["status"] = "completed"): PomodoroSession => ({
  id: `session-${index}`,
  startedAt: `2026-08-${String(Math.min(28, index)).padStart(2, "0")}T08:00:00.000Z`,
  endedAt: `2026-08-${String(Math.min(28, index)).padStart(2, "0")}T08:25:00.000Z`,
  durationMinutes: 25,
  subject: "Lịch sử Việt Nam",
  topic: "Nhà Trần",
  sessionNumber: index,
  totalSessions: 4,
  mode: "focus",
  status,
});

const activity = (index: number) => ({
  id: `pomodoro-${index}`,
  occurredAt: session(index).endedAt,
  kind: "pomodoro" as const,
  quantity: 1,
  durationSeconds: 1500,
  xpEarned: 50,
});

describe("Pomodoro domain", () => {
  it("normalizes old profiles with empty Pomodoro history", () => {
    const profile = normalizeProfile({ xp: 20 });
    expect(profile.pomodoroHistory).toEqual([]);
    expect(statsForProfile(profile).pomodoroSessions).toBe(0);
  });

  it("adds a completed Pomodoro as activity and updates XP/stats", () => {
    const result = applyStudyActivityRewards(emptyProfile(), { ...activity(1) }, emptyAppConfig());
    const profile = { ...result.profile, pomodoroHistory: [session(1)] };
    expect(result.added).toBe(true);
    expect(profile.studyActivity[0].kind).toBe("pomodoro");
    expect(statsForProfile(profile).pomodoroSessions).toBe(1);
    expect(profile.xp).toBe(50);
    expect(profile.currentStreak).toBe(1);
  });

  it("awards one general fragment at every tenth completed session, not every session", () => {
    const history = Array.from({ length: 9 }, (_, index) => session(index + 1));
    const activities = Array.from({ length: 9 }, (_, index) => activity(index + 1));
    const base = { ...emptyProfile(), pomodoroHistory: history, studyActivity: activities };
    const result = applyStudyActivityRewards(base, { ...activity(10), occurredAt: "2026-08-10T08:25:00.000Z" }, emptyAppConfig());
    expect(result.profile.fragments.general).toBe(1);
  });

  it("does not count abandoned or skipped sessions toward Pomodoro achievements", () => {
    const profile = normalizeProfile({ pomodoroHistory: [session(1, "abandoned"), session(2, "skipped")] });
    expect(statsForProfile(profile).pomodoroSessions).toBe(0);
  });
});
