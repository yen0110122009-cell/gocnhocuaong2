const DEFAULT_SUPABASE_TEST_TIMEOUT_MS = 10_000;

export async function fetchSupabaseWithTimeout(
  input: string,
  init: RequestInit = {},
  timeoutMs = DEFAULT_SUPABASE_TEST_TIMEOUT_MS,
): Promise<Response> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(input, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
}
