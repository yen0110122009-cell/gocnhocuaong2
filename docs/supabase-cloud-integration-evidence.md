# Supabase Cloud Integration Evidence

## Scope

Cloud verification used the Supabase project endpoint supplied by the user and the project publishable key supplied in-session. The key was loaded only into a temporary environment file, was not committed, was not printed, and the temporary file was removed after each run.

## Results

| Check | Result | Evidence |
|---|---|---|
| HTTP health check `auth/v1/settings` | PASS | HTTP 200; response body 611 bytes; curl timeout 10 seconds |
| `server/supabase.connection.test.ts` | PASS | 1 test passed in 993 ms in targeted run |
| `server/supabase.rls.test.ts` | PASS | 1 test passed in 1.209 s in targeted run |
| Credential cleanup | PASS | Temporary environment file removed after runs |
| Full Vitest with cloud credentials | INCONCLUSIVE | The parallel run stalled at the connection test; the sequential run did not complete within 60 seconds and was stopped. No failure assertion was produced. |

## Interpretation

The Supabase endpoint and publishable key are valid for the tested public health endpoint. The RLS smoke test passed with the configured publishable key. This evidence does not establish service-role behavior, authenticated user RLS, database migration readiness, rollback, or write-path concurrency because no service-role key, user session, or database credentials were supplied.

The full-suite stall is treated as a test-runner/network lifecycle issue rather than a product pass or fail. The two targeted cloud integration tests are the authoritative completed cloud results for this run.

## Security note

No secret value is stored in this evidence file, source tree, Git history, or committed artifacts.
