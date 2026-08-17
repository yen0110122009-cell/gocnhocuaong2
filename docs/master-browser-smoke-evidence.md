# Master Build Browser Smoke Evidence

## Website React

- URL: `http://localhost:3000/`
- Document title observed: `Góc học tập của Ong`.
- Initial page rendered the canonical lockup `GÓC HỌC TẬP CỦA ONG`, hero copy and login form without a blank state or visible runtime crash.
- Responsive viewport used by the sandbox browser: 893 × 668.
- Fake QA inputs were used only: member name `QA Smoke`, password `999`, member code `999`.
- Client-side validation correctly rejected the short password with `Mật khẩu cần có ít nhất 6 ký tự.`.
- No real account, password or member code was used; no successful login or data mutation was attempted.

## Automated coverage in the same verification pass

- Full Vitest suite: 98 passed, 2 conditionally skipped because Supabase credentials are not present in the environment.
- TypeScript check: passed.
- Production build: passed, with existing non-blocking warnings for analytics placeholders, runtime mascot asset resolution and bundle size.
- Master Build contract suite: 4 tests passed, covering 900 achievements, 400 titles, one-to-one title references and non-negative piece ledger invariants.

## Standalone Founder flow

- URL: `file:///home/ubuntu/gocnhocuaong2/index.html`.
- Document title observed: `Góc học tập của Ong — Hành trình tri thức`.
- The initial setup screen rendered the canonical brand and Founder onboarding copy.
- Fake QA inputs were used only: `QA Founder`, `qa-pass-123`, `QA-001`.
- Creating the fake Founder transitioned to the dashboard successfully and displayed `QA Founder`, role `Founder`, level 1, XP 0 and fragment balance 0.
- The dashboard rendered the expected navigation surfaces: AI Studio, Flashcard, Đề kiểm tra, Tiến trình, Thành tích, Bảo tàng, Vòng quay, Ôn tập thông minh, Pomodoro, Bản đồ kiến thức, AI Data Import, Lịch sử học, Tài khoản and Quản trị.
- A local-only toast confirmed: `Đã tạo Founder. Hãy bắt đầu cấu hình nội dung.`.
- No external account or cloud data was touched; this flow uses the standalone artifact's local storage by design.

## Module smoke checks

Từ dashboard Founder giả lập, module **Bảo tàng Hành trình** mở thành công, hiển thị bản đồ 0 mảnh ghép và trạng thái chưa có nhân vật mà không phát sinh blank screen. Module **Thành tích** cũng mở thành công; UI hiển thị `900 mốc và danh hiệu`, `9 bậc, mỗi bậc 100 mục`, trạng thái `Đang hiển thị 900/900 mục · 400 danh hiệu`, cùng các bộ lọc tìm kiếm, trạng thái, độ khó, danh hiệu, mảnh ghép và bậc. Đây là xác nhận runtime độc lập bổ sung cho contract test 900/400.

## Achievement filter interaction

Trong màn hình Thành tích, nhập truy vấn `Huyền thoại` vào ô tìm kiếm đã cập nhật kết quả từ `900/900 mục · 400 danh hiệu` xuống `894/900 mục · 394 danh hiệu`, cho thấy filter phản ứng và giữ nguyên layout/runtime. Không có thay đổi dữ liệu profile.
