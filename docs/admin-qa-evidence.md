# Admin QA Evidence

## React login boundary

Website local tại `http://localhost:3000/` hiển thị đúng document title `Góc học tập của Ong` và canonical lockup. Một bộ dữ liệu giả lập gồm `QA Admin Smoke`, `qa-pass-123` và `QA-ADMIN-001` đã được gửi qua form đăng nhập. Backend trả về thông báo `Cơ sở dữ liệu chưa sẵn sàng.`; ứng dụng giữ nguyên màn hình đăng nhập và không mở Admin surface. Kết quả này xác nhận error boundary hoạt động trong môi trường không có database credentials, nhưng chưa thể kết luận wrong-password, lockout hoặc role boundary qua browser cho tới khi database runtime được cấu hình.

Không có tài khoản thật, mật khẩu thật, mã thành viên thật hoặc mutation production nào được sử dụng.

## Standalone Admin content form

Founder session `QA Founder` mở được mục `Quản trị`, hiển thị các tab `Nội dung`, `Nhân vật`, `Vòng quay` và `Thành viên`. Form `Lời động viên` nhận dữ liệu giả lập `QA smoke: tiếp tục học từng bước.`; form `Thêm thành tích` nhận `QA Smoke Achievement`, chỉ số `XP`, mốc `1`, XP thưởng `5`. Trước khi submit, không có lỗi validation hiển thị.

Sau khi submit, hệ thống hiển thị `Đã thêm lời động viên.` và thêm item `QA smoke: tiếp tục học từng bước.` vào danh sách nội dung. Sau khi submit achievement, hệ thống hiển thị `Đã thêm thành tích tùy chỉnh.` và reset form về trạng thái rỗng/default. Đây là mutation local-only trong standalone Founder session.

## Admin character CRUD and import validation

Tab `Nhân vật` mở ổn định. Một nhân vật giả lập `QA Nhân vật` với vai trò, năm sinh/mất, nguồn `Nguồn QA`, URL HTTPS, tóm tắt và timeline JSON hợp lệ đã được lưu thành công; UI hiển thị `Đã lưu nhân vật có nguồn.` và item trong danh sách có nút Sửa/Xóa.

Bulk import với JSON `[{"name":"QA Invalid"}]` không được ghi vào state. UI hiển thị preview `0 bản ghi hợp lệ · 4 lỗi`, bao gồm thiếu `sourceName`, `sourceUrl` không hợp lệ và thiếu `summary/biography`; toast chặn nhập với `Chưa thể nhập: Nhân vật #1: thiếu sourceName.`

## Member role management

Tab `Thành viên` mở ổn định và nêu rõ boundary: Admin chỉ cấp Member; Founder có thể cấp Member/Admin/Founder. Founder session đã tạo tài khoản giả lập `QA Member`, mã `QA-MEMBER-001`, role mặc định `Member`; UI hiển thị `Đã tạo tài khoản Member.` và danh sách chỉ hiển thị tên, role, mã cùng nút Xóa, không hiển thị mật khẩu.

Thử nghiệm nút Xóa tài khoản Member giả lập bị timeout ở lớp browser confirmation; phiên browser sau đó trở về `about:blank`. Vì vậy destructive delete chưa được đánh dấu pass và không có kết luận rằng tài khoản đã bị xóa. Đây là nhánh cần chạy lại bằng cơ chế xác nhận phù hợp.

Đã chạy lại destructive delete với `window.confirm` được override chỉ trong phiên QA giả lập. Tài khoản `QA Member` biến mất khỏi danh sách, form trở về rỗng và không còn nút Xóa cho Member; thao tác xóa đã hoàn tất ở local-only state. Lần timeout trước được phân loại là lỗi harness/confirmation, không phải product failure.

## Vòng quay Admin

Tab `Vòng quay` mở ổn định, hiển thị tổng trọng số 100 và ba phần thưởng hiện có với trọng số 55/30/15. Form nhận phần thưởng giả lập `QA Reward`, loại `XP`, giá trị `10`, trọng số `5`; chưa submit ở thời điểm ghi nhận này.

Founder đã thêm `QA Reward` loại XP, giá trị 10, trọng số 5 thành công; tổng trọng số tăng từ 100 lên 105 và toast `Đã thêm phần thưởng.` xuất hiện. Submit form rỗng ngay sau đó bị chặn bởi browser required validation tại trường Tên; danh sách vẫn giữ nguyên 4 phần thưởng và tổng 105.

## AI Studio / Flashcard regression

Flashcard empty state mở ổn định. AI Studio nhận dữ liệu giả lập, tạo prompt thành công mà không gọi model. JSON Flashcard hợp lệ gồm 2 thẻ được parse và lưu thành công; thư viện hiển thị `QA Lịch sử`, 2 thẻ, trạng thái đã nhớ 0/2 và các action Học/Tạo đề/Đổi tên/Sao chép/Xóa.

Phiên học `QA Lịch sử` mở thành công. Thẻ 1/2 lật từ mặt trước `Năm 1945` sang đáp án; chọn `Đã nhớ` chuyển đúng sang thẻ 2/2 (`Năm 1954`). Không thấy crash hoặc trạng thái UI bất thường.

## Regression phát hiện: Quiz import

Quiz JSON hợp lệ `QA Quiz Lịch sử` được báo lưu thành công nhưng xuất hiện trong thư viện Flashcard với `0 thẻ`, thay vì xuất hiện trong màn hình Đề kiểm tra dưới dạng quiz có 2 câu hỏi. Đây là **FAIL**, cần sửa parser/storage routing trước khi kết luận QA pass. Không xóa dữ liệu QA trước khi tái hiện và viết regression test.

## Quiz regression clarification

Kiểm tra lại xác nhận Quiz **không bị lỗi routing**: sau khi import, màn hình Flashcard hiển thị một container `0 thẻ` vì thư viện dùng chung; màn hình Đề kiểm tra hiển thị đúng `QA Quiz Lịch sử`, `2 câu · 15 phút`. Luồng `Làm đề` mở câu 1/2, chọn A. 1945 đổi trạng thái selected và nút `Tiếp` chuyển đúng sang câu 2/2. Phát hiện trước đó được phân loại lại thành **PASS / expected shared-library representation**, không cần code fix.

Quiz success path: chọn A. 1945 và B. 1954, nộp bài thành công, kết quả `10.0/10`, `2/2 câu đúng`, `0 bỏ qua`, `0 câu từng đánh dấu`; phần giải thích từng câu hiển thị đúng. Đây là **PASS**.

Tiến trình: sau Quiz hiển thị `Tổng XP 12`, `Điểm TB 100%`, `Chuỗi hôm nay 1 ngày` và nhật ký `Đã làm đề kiểm tra · 2 đơn vị · 1 phút` — PASS.

Pomodoro: mở modal, đổi cấu hình focus/break từ 25/5 thành 1/1, lưu thành công với toast `Đã lưu cấu hình Pomodoro`, bấm `Bắt đầu` chuyển timer sang `00:59` và trạng thái `Đang tập trung…` — PASS.

Bản đồ kiến thức: modal render đúng trạng thái thực, bộ `Tự tạo từ AI` hiển thị `1/2 thẻ đã học · 50% tiến trình` và nút `Học Flashcard` — PASS.

Lịch sử học: hiển thị riêng `QA Lịch sử` với `2 Flashcard · 0 lượt làm đề · cao nhất 0% · trung bình 0%` và `QA Quiz Lịch sử` với `0 Flashcard · 1 lượt làm đề · cao nhất 100% · trung bình 100%` — PASS.

Tài khoản: profile `QA Founder`, role `Founder`, mã `QA-001` hiển thị đúng; giao diện mô tả dữ liệu tách theo account và backup chỉ gồm dữ liệu học tập, không gồm mật khẩu/member data — PASS.

Export JSON: nút `Xuất JSON` thực hiện được trên hồ sơ QA; chưa đọc file download trực tiếp trong browser session, nên đánh dấu **PASS—UI trigger**, còn schema-level exclusion cần xác nhận bằng fixture/parser test riêng nếu cần.

Export JSON artifact `study-historia-backup.json`: tải xuống thành công, kích thước 2.895 bytes; top-level keys chỉ gồm `profile` và `exportedAt`; kiểm tra trực tiếp `hasPassword=false`, `hasMembers=false` — PASS.

Logout: từ Tài khoản bấm `Đăng xuất`, ứng dụng trở về màn hình đăng nhập với tên/mật khẩu/mã thành viên rỗng — PASS.

## Final automated verification

- Full Vitest: **98 passed, 2 skipped** trên 34 test files; hai Supabase integration tests skipped vì thiếu credentials.
- Typecheck: **PASS** bằng `pnpm check` (`tsc --noEmit`); lệnh `pnpm typecheck` không tồn tại trong package scripts và không được dùng làm kết luận lỗi sản phẩm.
- Production build: **PASS** bằng `pnpm build`. Chỉ còn cảnh báo analytics env chưa khai báo, asset `/manus-storage/...` sẽ resolve runtime, và bundle size lớn; không có build error.
- Git diff trước commit: chỉ còn `docs/admin-qa-evidence.md` là artifact QA mới.
