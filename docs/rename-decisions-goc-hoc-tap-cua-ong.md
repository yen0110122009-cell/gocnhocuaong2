# Decision Log — GÓC HỌC TẬP CỦA ONG

Ngày: 2026-08-17

| Decision | Quyết định đã chốt | Tác động |
|---|---|---|
| Baseline | Khôi phục implementation từ commit `e97be6b`, là historical baseline gần nhất có working tree và các surface branding thực tế. | Cho phép triển khai trên source có căn cứ; không triển khai trên `HEAD 374b7ab` vì HEAD rỗng. |
| Scope | Đây là **rename-only implementation**: đổi mọi user-facing display từ “Góc nhỏ của Ong” thành “GÓC HỌC TẬP CỦA ONG”. | Không mở rộng sang redesign, domain logic, achievement/piece/event, Supabase migration hoặc mascot redesign. |
| Technical identifiers | Giữ repository slug `gocnhocuaong2`, migration IDs, storage keys, routes và internal identifiers. | Tránh breaking change; chỉ tạo legacy alias nếu cần cho dữ liệu/compatibility. |
| Piece tiers | Không thay đổi piece tiers trong task rename. Trong source catalog, mô hình chính thức được ghi nhận là ordered configurable `piece_types`; seed naming/count là việc riêng ngoài phạm vi. | Conflict piece được RESOLVED; không migration piece. |
| Mascot naming | Giữ **Lumi** là persona runtime của baseline; coi “Bloomy” là legacy/spec alias chưa dùng trong rename. Không đổi tên mascot trong task này. | Không sửa prompt/content/mascot behavior ngoài các brand surface cần thiết. |
| Source integrity | Các yêu cầu Supabase/RLS/900/400/transaction/AI approval vẫn là acceptance của Master Build, nhưng không giả mạo là đã đạt trong rename-only patch. | Gate được đánh giá theo phạm vi rename; production-ready toàn hệ thống vẫn NO cho tới khi có implementation/evidence riêng. |

## Gate sau khi chốt

| Điều kiện | Kết quả |
|---|---|
| `UNMAPPED_SOURCE` | `0` |
| Conflict còn thiếu trạng thái | `0` |
| Conflict đã `RESOLVED` hoặc `NEEDS_DECISION` | `8/8`; các conflict thuộc phạm vi rename đều `RESOLVED` |
| Baseline implementation | Đã chốt `e97be6b` |
| Được phép triển khai rename-only | `YES` |
| Được phép tuyên bố Master Build production-ready | `NO` |

## Boundary assertion

Không được dùng kết quả của rename-only patch để tuyên bố đã hoàn thành hệ thống 900 Thành tích, 400 Danh hiệu, Mảnh ghép, Nhân vật lịch sử, Supabase, RLS, QA-01/02/03 hoặc EXTREME-01/02. Các mục đó phải có evidence riêng theo source audit.
