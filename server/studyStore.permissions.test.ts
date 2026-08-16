import { describe, expect, it } from "vitest";
import { assertAdminOperation, assertRoleAssignment } from "./studyStore";

describe("studyStore admin guards", () => {
  it("rejects Member before any admin operation", () => {
    expect(() => assertAdminOperation({ role: "Member" })).toThrow("Admin hoặc Founder");
  });

  it("allows Admin for ordinary management but rejects Founder assignment", () => {
    expect(() => assertAdminOperation({ role: "Admin" })).not.toThrow();
    expect(() => assertRoleAssignment({ role: "Admin" }, "Member")).not.toThrow();
    expect(() => assertRoleAssignment({ role: "Admin" }, "Admin")).not.toThrow();
    expect(() => assertRoleAssignment({ role: "Admin" }, "Founder")).toThrow("Founder");
  });

  it("allows Founder to assign Founder", () => {
    expect(() => assertAdminOperation({ role: "Founder" })).not.toThrow();
    expect(() => assertRoleAssignment({ role: "Founder" }, "Founder")).not.toThrow();
  });
});
