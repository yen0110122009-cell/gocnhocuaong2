# Master Build Backlog — Study Empire

## Mục tiêu

Mở rộng từ baseline đã chạy được sang các năng lực cloud và kiểm chứng sâu, nhưng không trộn lẫn dữ liệu production với artifact standalone local-only.

## Hiện trạng đã xác nhận

| Khu vực | Trạng thái hiện tại | Nhận định |
|---|---|---|
| Branding | Đã đổi sang GÓC HỌC TẬP CỦA ONG | Đã có Brand Manifest, test và runtime smoke evidence. |
| Auth study account | Đã có login Founder/Admin/Member, session token hash và lock/reset/delete | Cần test sâu hơn; chưa phải Supabase Auth. |
| Cloud store | Đã có schema additive cho accounts, profiles, sessions, settings, catalog/progress/ledger/audit | Profile blob vẫn giữ nguyên; migration 0002/0003 đã generate nhưng chưa apply vì môi trường không có DATABASE_URL. |
| Achievement/title | Đã có shared catalog contract và tRPC `study.master.catalog` | 900/400 semantics được test; claim persistence/idempotency vẫn chờ DB apply và mutation layer. |
| Piece/fragment | Đã có schema `piece_types`, `user_pieces`, `piece_transactions` và invariant pure function | Chưa có atomic server mutation/exchange API; không giả lập migration thành công. |
| Event/quest | Có một phần UI/spec nhưng chưa có backend entity/claim pipeline đầy đủ | Cần làm sau ledger foundation. |
| Historical characters | Có import/validation và lưu một phần trong app config | Chưa có catalog cloud, source verification record và soft delete server-side. |
| Admin/AI | Có AI document import và admin UI | Cần approval/audit trail nếu mở rộng content generation. |
| Standalone | Chạy local-only, có contract test | Giữ làm demo/fixture; không tuyên bố cloud production. |
| Supabase probe | Có client helper và 2 integration tests | Không phải source of truth của web app hiện tại; chỉ chạy khi credentials có sẵn. |

## Backlog theo thứ tự ưu tiên

| ID | Ưu tiên | Hạng mục | Phạm vi triển khai | Điều kiện đạt |
|---|---:|---|---|---|
| MB-01 | P0 | Data integrity foundation | **Đã triển khai schema/type contract** cho catalog/progress/ledger/audit; uniqueness, soft-delete columns và account ownership FKs đã được generate. | Typecheck/build đạt; migration 0002/0003 đã sinh; apply/rollback thực tế còn chờ DATABASE_URL. |
| MB-02 | P0 | Achievement/title catalog | **Đã triển khai** shared catalog mapper, 900/400 validation, tRPC lookup và contract tests; không thay đổi semantics. | Count 900/400 đạt; claim persistence/idempotency còn chờ DB mutation layer. |
| MB-03 | P0 | Piece ledger | **Đã triển khai phần schema và pure invariant**; mutation atomic, exchange rules và audit write chưa triển khai. | Không âm số dư ở pure contract; database/concurrency chưa được chứng minh khi thiếu credentials. |
| MB-04 | P1 | Deep web auth/admin QA | **Đã kiểm tra một phần** login validation, wrong-input path và standalone Founder bootstrap; lock/reset/role/delete/session/export chưa chạy đủ. | Browser smoke và server regression có evidence; cần batch QA tiếp theo cho các nhánh còn lại. |
| MB-05 | P1 | Website/standalone regression | **Đã kiểm tra một phần** React initial/login validation, standalone Founder, Museum, Achievement 900/400 và search filter. | 98 test passed + 2 conditional skips; responsive matrix, admin, reports, flashcard/quiz/Pomodoro và console-error audit còn tiếp tục. |
| MB-06 | P1 | Historical character cloud catalog | Chuẩn hóa catalog, source URL/text, image verification state, timeline, soft delete; duy trì import validation. | Không fake image/source; delete là soft delete; quyền Founder/Admin đúng. |
| MB-07 | P2 | Event/quest engine | Event, task, condition, reward, participant, claim với daily/account cap và anti-farm. | Claim limit và idempotency test; chưa bật AI auto-publish. |
| MB-08 | P2 | Admin AI approval | Draft generation, schema validation, approval/reject, prompt version và audit log. | Không auto-publish; mọi write có actor, before/after và reason. |
| MB-09 | P2 | Cloud integration decision | Chỉ bổ sung Supabase adapter khi người dùng chốt migration source-of-truth; hiện tại giữ MySQL/TiDB backend làm runtime truth. | Có migration/dual-write/rollback plan riêng; không silently đổi auth/data plane. |

## Ranh giới an toàn

Trong batch tiếp theo, chỉ nên triển khai MB-01 đến MB-05. MB-06 đến MB-09 cần thêm migration/data-seed hoặc quyết định kiến trúc riêng. Không dùng kết quả của standalone để chứng minh RLS/cloud production. Không đổi repository slug, storage key, mascot persona hoặc piece seed tier trong khi chưa có quyết định mới.

## Đề xuất batch hiện tại

Batch hiện tại đã hoàn tất phần schema/rule layer của MB-01/MB-02, triển khai contract foundation cho MB-03, đồng thời bắt đầu MB-04/MB-05 bằng browser smoke và full regression. Bước kế tiếp cần credentials database để apply/rollback migration và triển khai mutation atomic cho piece ledger; không tuyên bố cloud production readiness từ test local.
