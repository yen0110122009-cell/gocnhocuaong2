import { boolean, int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export const studyAccounts = mysqlTable("study_accounts", {
  id: varchar("id", { length: 64 }).primaryKey(),
  name: varchar("name", { length: 120 }).notNull(),
  normalizedName: varchar("normalizedName", { length: 160 }).notNull().unique(),
  code: varchar("code", { length: 48 }).notNull().unique(),
  role: mysqlEnum("role", ["Member", "Admin", "Founder"]).notNull().default("Member"),
  passwordHash: text("passwordHash"),
  locked: boolean("locked").notNull().default(false),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export const studyProfiles = mysqlTable("study_profiles", {
  accountId: varchar("accountId", { length: 64 }).primaryKey(),
  data: text("data").notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull().onUpdateNow(),
});

export const studySessions = mysqlTable("study_sessions", {
  tokenHash: varchar("tokenHash", { length: 64 }).primaryKey(),
  accountId: varchar("accountId", { length: 64 }).notNull(),
  expiresAt: timestamp("expiresAt").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const studySettings = mysqlTable("study_settings", {
  id: varchar("id", { length: 40 }).primaryKey(),
  data: text("data").notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull().onUpdateNow(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;
