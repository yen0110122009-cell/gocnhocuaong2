import { describe, expect, it } from "vitest";
import { canAssignRole, canManageMembers, canModifyAccount } from "../shared/permissions";

describe("study account permissions", () => {
  it("allows only Admin and Founder to manage members", () => {
    expect(canManageMembers("Member")).toBe(false);
    expect(canManageMembers("Admin")).toBe(true);
    expect(canManageMembers("Founder")).toBe(true);
  });

  it("allows only Founder to assign Founder", () => {
    expect(canAssignRole("Member", "Admin")).toBe(false);
    expect(canAssignRole("Admin", "Founder")).toBe(false);
    expect(canAssignRole("Founder", "Founder")).toBe(true);
  });

  it("protects another Founder account from modification", () => {
    expect(canModifyAccount("Admin", "Founder")).toBe(false);
    expect(canModifyAccount("Founder", "Founder", false)).toBe(false);
    expect(canModifyAccount("Founder", "Founder", true)).toBe(true);
    expect(canModifyAccount("Admin", "Member")).toBe(true);
  });
});
