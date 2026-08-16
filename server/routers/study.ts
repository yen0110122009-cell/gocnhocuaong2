import { TRPCError } from "@trpc/server";
import { z } from "zod";
import {
  createAccountForToken,
  deleteAccountForToken,
  exportProfileForToken,
  getAppConfig,
  getProfileForToken,
  getStudySession,
  listAccountsForToken,
  loginStudyAccount,
  logoutStudyAccount,
  saveAppConfigForToken,
  saveProfileForToken,
  updateAccountForToken,
} from "../studyStore";
import { storagePut } from "../storage";
import { publicProcedure, router } from "../_core/trpc";

function asTrpcError(error: unknown): never {
  throw new TRPCError({ code: "BAD_REQUEST", message: error instanceof Error ? error.message : "Không thể xử lý yêu cầu." });
}

const tokenInput = z.object({ token: z.string().min(20) });
const roleSchema = z.enum(["Member", "Admin", "Founder"]);

export const studyRouter = router({
  auth: router({
    login: publicProcedure.input(z.object({ name: z.string().min(1), password: z.string().min(1), code: z.string().min(1) })).mutation(async ({ input }) => {
      try { return await loginStudyAccount(input); } catch (error) { return asTrpcError(error); }
    }),
    session: publicProcedure.input(tokenInput).query(async ({ input }) => {
      try { return await getStudySession(input.token); } catch (error) { return asTrpcError(error); }
    }),
    logout: publicProcedure.input(tokenInput).mutation(async ({ input }) => {
      try { return await logoutStudyAccount(input.token); } catch (error) { return asTrpcError(error); }
    }),
  }),
  profile: router({
    get: publicProcedure.input(tokenInput).query(async ({ input }) => {
      try { return await getProfileForToken(input.token); } catch (error) { return asTrpcError(error); }
    }),
    save: publicProcedure.input(tokenInput.extend({ profile: z.unknown() })).mutation(async ({ input }) => {
      try { return await saveProfileForToken(input.token, input.profile); } catch (error) { return asTrpcError(error); }
    }),
    export: publicProcedure.input(tokenInput).query(async ({ input }) => {
      try { return await exportProfileForToken(input.token); } catch (error) { return asTrpcError(error); }
    }),
    import: publicProcedure.input(tokenInput.extend({ profile: z.unknown() })).mutation(async ({ input }) => {
      try { return await saveProfileForToken(input.token, input.profile); } catch (error) { return asTrpcError(error); }
    }),
  }),
  config: router({
    get: publicProcedure.query(async () => getAppConfig()),
    save: publicProcedure.input(tokenInput.extend({ config: z.unknown() })).mutation(async ({ input }) => {
      try { return await saveAppConfigForToken(input.token, input.config); } catch (error) { return asTrpcError(error); }
    }),
  }),
  admin: router({
    accounts: publicProcedure.input(tokenInput).query(async ({ input }) => {
      try { return await listAccountsForToken(input.token); } catch (error) { return asTrpcError(error); }
    }),
    createAccount: publicProcedure.input(tokenInput.extend({ name: z.string().min(1), code: z.string().min(1), role: roleSchema })).mutation(async ({ input }) => {
      try { return await createAccountForToken(input.token, input); } catch (error) { return asTrpcError(error); }
    }),
    updateAccount: publicProcedure.input(tokenInput.extend({ id: z.string().uuid(), role: roleSchema.optional(), locked: z.boolean().optional(), reset: z.boolean().optional() })).mutation(async ({ input }) => {
      try { return await updateAccountForToken(input.token, input); } catch (error) { return asTrpcError(error); }
    }),
    deleteAccount: publicProcedure.input(tokenInput.extend({ id: z.string().uuid() })).mutation(async ({ input }) => {
      try { return await deleteAccountForToken(input.token, input.id); } catch (error) { return asTrpcError(error); }
    }),
    uploadCharacterImage: publicProcedure.input(tokenInput.extend({ fileName: z.string().min(1).max(160), contentType: z.string().regex(/^image\/(png|jpeg|webp|gif)$/), dataUrl: z.string().min(32).max(4_300_000) })).mutation(async ({ input }) => {
      try {
        const { account } = await getStudySession(input.token);
        if (account.role !== "Admin" && account.role !== "Founder") throw new Error("Chỉ Admin hoặc Founder được tải ảnh nhân vật.");
        const match = input.dataUrl.match(/^data:(image\/(?:png|jpeg|webp|gif));base64,([A-Za-z0-9+/=]+)$/);
        if (!match) throw new Error("Dữ liệu ảnh không hợp lệ.");
        const safeName = input.fileName.replace(/[^a-zA-Z0-9._-]/g, "-");
        const { url, key } = await storagePut(`study-historia/characters/${Date.now()}-${safeName}`, Buffer.from(match[2], "base64"), match[1]);
        return { url, key };
      } catch (error) { return asTrpcError(error); }
    }),
  }),
});
