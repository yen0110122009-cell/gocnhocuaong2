export type StudyRole = "Member" | "Admin" | "Founder";

export type Flashcard = {
  id: string;
  front: string;
  back: string;
  status: "new" | "learning" | "known";
  starred: boolean;
};

export type FlashcardSet = {
  id: string;
  title: string;
  subject: string;
  topic: string;
  difficulty: "Cơ bản" | "Trung bình" | "Nâng cao";
  createdAt: string;
  studyCount: number;
  cards: Flashcard[];
};

export type QuizQuestion = {
  id: string;
  type: "multiple" | "boolean" | "short";
  prompt: string;
  options?: string[];
  answer: string;
  explanation?: string;
};

export type Quiz = {
  id: string;
  title: string;
  subject: string;
  topic: string;
  difficulty: "Cơ bản" | "Trung bình" | "Nâng cao";
  durationMinutes: number;
  createdAt: string;
  questions: QuizQuestion[];
};

export type QuizAttempt = {
  id: string;
  quizId: string;
  completedAt: string;
  correct: number;
  total: number;
  accuracy: number;
  durationSeconds: number;
};

export type CharacterTimeline = {
  id: string;
  title: string;
  content: string;
  requiredFragments: number;
};

export type HistoricalCharacter = {
  id: string;
  name: string;
  aliases: string;
  birthYear: string;
  deathYear: string;
  hometown: string;
  role: string;
  categories: string[];
  summary: string;
  biography: string;
  sourceName: string;
  sourceUrl: string;
  imageUrl: string;
  imageSource: string;
  fragmentTotal: number;
  timeline: CharacterTimeline[];
  updatedAt: string;
};

export type Encouragement = {
  id: string;
  type: "correct" | "incorrect";
  text: string;
  enabled: boolean;
};

export type WheelReward = {
  id: string;
  label: string;
  kind: "xp" | "fragment" | "badge" | "ticket" | "item";
  value: number;
  probability: number;
  color: string;
};

export type AchievementOverride = {
  achievementId: string;
  enabled?: boolean;
  rewardXp?: number;
  rewardFragments?: number;
  label?: string;
  description?: string;
};

export type CustomAchievement = {
  id: string;
  name: string;
  description: string;
  metric: "xp" | "learnedCards" | "completedQuizzes" | "completedSets";
  threshold: number;
  rewardXp: number;
  rewardFragments: number;
  enabled: boolean;
};

export type AppConfig = {
  characters: HistoricalCharacter[];
  encouragements: Encouragement[];
  wheelRewards: WheelReward[];
  achievementOverrides: AchievementOverride[];
  customAchievements: CustomAchievement[];
  updatedAt: string;
};

export type ProfileState = {
  xp: number;
  level: number;
  flashcardSets: FlashcardSet[];
  quizzes: Quiz[];
  attempts: QuizAttempt[];
  fragments: Record<string, number>;
  unlockedAchievementIds: string[];
  ownedBadges: string[];
  activeTitle: string | null;
  wheelTickets: number;
  inventory: string[];
  soundEnabled: boolean;
  theme: "light" | "dark";
  lastActivityAt: string | null;
};

export type StudyAccount = {
  id: string;
  name: string;
  code: string;
  role: StudyRole;
  locked: boolean;
  createdAt: string;
};

export type StudySession = {
  token: string;
  expiresAt: string;
  account: StudyAccount;
};

export type AchievementMetric = "xp" | "learnedCards" | "completedQuizzes" | "completedSets" | "fragments";

export type Achievement = {
  id: string;
  rank: number;
  rankName: string;
  icon: string;
  name: string;
  description: string;
  metric: AchievementMetric;
  threshold: number;
  rewardXp: number;
  rewardFragments: number;
  title: string | null;
};

export const emptyProfile = (): ProfileState => ({
  xp: 0,
  level: 1,
  flashcardSets: [],
  quizzes: [],
  attempts: [],
  fragments: {},
  unlockedAchievementIds: [],
  ownedBadges: [],
  activeTitle: null,
  wheelTickets: 0,
  inventory: [],
  soundEnabled: true,
  theme: "light",
  lastActivityAt: null,
});

export const emptyAppConfig = (): AppConfig => ({
  characters: [],
  encouragements: [],
  wheelRewards: [],
  achievementOverrides: [],
  customAchievements: [],
  updatedAt: new Date().toISOString(),
});

export const levelForXp = (xp: number) => Math.max(1, Math.floor(Math.sqrt(Math.max(0, xp) / 90)) + 1);
export const xpForNextLevel = (level: number) => Math.max(90, level * level * 90);

export const statsForProfile = (profile: ProfileState) => {
  const learnedCards = profile.flashcardSets.reduce(
    (sum, set) => sum + set.cards.filter((card) => card.status === "known").length,
    0,
  );
  const completedSets = profile.flashcardSets.filter(
    (set) => set.cards.length > 0 && set.cards.every((card) => card.status === "known"),
  ).length;
  const fragments = Object.values(profile.fragments).reduce((sum, value) => sum + Math.max(0, value), 0);
  return {
    xp: profile.xp,
    learnedCards,
    completedSets,
    completedQuizzes: profile.attempts.length,
    fragments,
  };
};

const ranks = [
  ["🌱", "Khởi Đầu"],
  ["🌿", "Tiến Bước"],
  ["🔥", "Bứt Phá"],
  ["⚔️", "Chinh Phục"],
  ["🏔️", "Vượt Giới Hạn"],
  ["👑", "Tinh Anh"],
  ["🌌", "Huyền Thoại"],
  ["✨", "Truyền Thuyết"],
  ["♾️", "Vô Cực"],
] as const;

const metricLabels: Record<AchievementMetric, string> = {
  xp: "XP",
  learnedCards: "Flashcard đã nhớ",
  completedQuizzes: "đề đã hoàn thành",
  completedSets: "bộ Flashcard đã hoàn thành",
  fragments: "mảnh ghép đang sở hữu",
};

const titleSeeds = [
  "Người Giữ Lửa", "Bền Chí Vững Tâm", "Vượt Sóng Vươn Xa", "Mở Lối Tri Thức",
  "Tâm Sáng Đường Xa", "Người Học Không Mỏi", "Gieo Mầm Khát Vọng", "Chí Lớn Mỗi Ngày",
];

export function generateAchievements(): Achievement[] {
  const metrics: AchievementMetric[] = ["learnedCards", "completedQuizzes", "xp", "completedSets", "fragments"];
  const result: Achievement[] = [];
  ranks.forEach(([icon, rankName], rank) => {
    for (let withinRank = 0; withinRank < 100; withinRank += 1) {
      const index = rank * 100 + withinRank;
      const metric = metrics[index % metrics.length];
      const growth = Math.pow(1.055, withinRank) * (rank + 1);
      const base = metric === "xp" ? 180 : metric === "learnedCards" ? 5 : metric === "completedQuizzes" ? 1 : 1;
      const threshold = Math.max(1, Math.round(base * growth));
      const title = index >= 500 ? `${titleSeeds[index % titleSeeds.length]} · ${index - 499}` : null;
      result.push({
        id: `rank-${rank + 1}-${withinRank + 1}`,
        rank: rank + 1,
        rankName,
        icon,
        name: `${rankName} ${withinRank + 1}`,
        description: `Đạt ${threshold.toLocaleString("vi-VN")} ${metricLabels[metric]}.`,
        metric,
        threshold,
        rewardXp: 20 + rank * 25 + Math.floor(withinRank / 10) * 5,
        rewardFragments: withinRank % 20 === 19 ? 1 : 0,
        title,
      });
    }
  });
  return result;
}

export function computedAchievements(profile: ProfileState, config: AppConfig): Achievement[] {
  const stats = statsForProfile(profile) as Record<AchievementMetric, number>;
  const overrides = new Map(config.achievementOverrides.map((item) => [item.achievementId, item]));
  const standard = generateAchievements()
    .map((achievement) => ({ ...achievement, ...overrides.get(achievement.id) }))
    .filter((achievement) => achievement.enabled !== false)
    .filter((achievement) => stats[achievement.metric] >= achievement.threshold);
  const customs: Achievement[] = config.customAchievements
    .filter((item) => item.enabled)
    .filter((item) => (stats[item.metric] ?? 0) >= item.threshold)
    .map((item) => ({
      id: item.id,
      rank: 9,
      rankName: "Tùy chỉnh",
      icon: "🏆",
      name: item.name,
      description: item.description,
      metric: item.metric,
      threshold: item.threshold,
      rewardXp: item.rewardXp,
      rewardFragments: item.rewardFragments,
      title: null,
    }));
  return [...standard, ...customs];
}

export function normalizeProfile(value: unknown): ProfileState {
  const source = value && typeof value === "object" ? (value as Partial<ProfileState>) : {};
  const base = emptyProfile();
  const merged: ProfileState = {
    ...base,
    ...source,
    xp: Math.max(0, Number(source.xp) || 0),
    flashcardSets: Array.isArray(source.flashcardSets) ? source.flashcardSets : [],
    quizzes: Array.isArray(source.quizzes) ? source.quizzes : [],
    attempts: Array.isArray(source.attempts) ? source.attempts : [],
    fragments: source.fragments && typeof source.fragments === "object" ? source.fragments : {},
    unlockedAchievementIds: Array.isArray(source.unlockedAchievementIds) ? source.unlockedAchievementIds : [],
    ownedBadges: Array.isArray(source.ownedBadges) ? source.ownedBadges : [],
    inventory: Array.isArray(source.inventory) ? source.inventory : [],
  };
  merged.level = levelForXp(merged.xp);
  return merged;
}
