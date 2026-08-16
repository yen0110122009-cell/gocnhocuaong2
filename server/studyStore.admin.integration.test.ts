import { beforeEach, describe, expect, it, vi } from "vitest";

const state = vi.hoisted(() => ({ actorRole: "Member" as "Member" | "Admin" | "Founder", targetRole: "Member" as "Member" | "Admin" | "Founder", inserted: [] as any[], created: false, targetIsActor: false }));

vi.mock("./db", () => ({
  getDb: async () => ({
    select: (...args: any[]) => {
      const chain: any = {
        joined: Boolean(args.length),
        from(table: any) { chain.table = table; return chain; },
        innerJoin() { chain.joined = true; return chain; },
        where() { return chain; },
        then: (resolve: any, reject: any) => Promise.resolve(chain.joined
          ? [{ account: { id: "actor", name: "Actor", code: "A", role: state.actorRole, locked: false, createdAt: new Date() }, session: {} }]
          : [{ id: state.targetIsActor ? "actor" : "target", name: "Target", normalizedName: "target", code: "T", role: state.targetRole, locked: false, createdAt: new Date(), updatedAt: new Date(), data: JSON.stringify({}) }]).then(resolve, reject),
        limit: async () => chain.joined
          ? [{ account: { id: "actor", name: "Actor", code: "A", role: state.actorRole, locked: false, createdAt: new Date() }, session: {} }]
          : state.created
            ? [{ id: state.targetIsActor ? "actor" : "target", name: "Target", normalizedName: "target", code: "T", role: state.targetRole, locked: false, createdAt: new Date(), updatedAt: new Date(), data: JSON.stringify({}) }]
            : [],
      };
      return chain;
    },
    insert: () => ({
      values: (value: any) => { state.inserted.push(value); if (value?.normalizedName || value?.code) state.created = true; return { onDuplicateKeyUpdate: async () => undefined }; },
    }),
    update: () => ({ set: () => ({ where: async () => undefined }) }),
    delete: () => ({ where: async () => undefined }),
  }),
}));

import { createAccountForToken, deleteAccountForToken, listAccountsForToken, saveAppConfigForToken, updateAccountForToken } from "./studyStore";

const token = "a".repeat(32);
const uuid = "00000000-0000-0000-0000-000000000001";

describe("studyStore admin operations", () => {
  beforeEach(() => { state.actorRole = "Member"; state.targetRole = "Member"; state.inserted = []; state.created = false; state.targetIsActor = false; });

  it("rejects Member across all real admin operations", async () => {
    await expect(saveAppConfigForToken(token, {})).rejects.toThrow("Admin hoặc Founder");
    await expect(listAccountsForToken(token)).rejects.toThrow("Admin hoặc Founder");
    await expect(createAccountForToken(token, { name: "New", code: "N1", role: "Member" })).rejects.toThrow("Admin hoặc Founder");
    await expect(updateAccountForToken(token, { id: uuid, locked: true })).rejects.toThrow("Admin hoặc Founder");
    await expect(deleteAccountForToken(token, uuid)).rejects.toThrow("Admin hoặc Founder");
  });

  it("allows Admin ordinary operations but rejects Founder assignment and Founder edit", async () => {
    state.actorRole = "Admin";
    await expect(saveAppConfigForToken(token, { theme: "dark" })).resolves.toMatchObject({ theme: "dark" });
    await expect(listAccountsForToken(token)).resolves.toHaveLength(1);
    await expect(createAccountForToken(token, { name: "New", code: "N1", role: "Member" })).resolves.toBeDefined();
    await expect(createAccountForToken(token, { name: "New2", code: "N2", role: "Founder" })).rejects.toThrow("Founder");
    state.targetRole = "Founder";
    await expect(updateAccountForToken(token, { id: uuid, locked: true })).rejects.toThrow("Không thể thay đổi tài khoản này");
    await expect(deleteAccountForToken(token, uuid)).rejects.toThrow("Không thể xóa tài khoản Founder");
    state.targetRole = "Member";
    await expect(deleteAccountForToken(token, uuid)).resolves.toEqual({ success: true });
  });

  it("allows Founder to configure, create and modify Founder", async () => {
    state.actorRole = "Founder";
    state.targetRole = "Founder";
    await expect(saveAppConfigForToken(token, { theme: "light" })).resolves.toMatchObject({ theme: "light" });
    await expect(listAccountsForToken(token)).resolves.toHaveLength(1);
    await expect(createAccountForToken(token, { name: "New", code: "N3", role: "Founder" })).resolves.toBeDefined();
    state.targetIsActor = true;
    await expect(updateAccountForToken(token, { id: uuid, locked: true })).resolves.toBeDefined();
    state.targetIsActor = false;
    await expect(deleteAccountForToken(token, uuid)).rejects.toThrow("Không thể xóa tài khoản Founder");
    state.targetRole = "Member";
    await expect(deleteAccountForToken(token, uuid)).resolves.toEqual({ success: true });
  });
});
