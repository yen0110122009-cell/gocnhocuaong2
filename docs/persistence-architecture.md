# Study Historia — Kiến trúc persistence hiện tại

## Quyết định

Study Historia sử dụng **API tRPC đã xác thực bằng token tài khoản Study Historia** làm nguồn dữ liệu chính cho hồ sơ học tập. Hồ sơ này bao gồm bộ Flashcard, Quiz, lịch sử làm bài, XP, thành tích, mảnh ghép, giao diện và các thiết lập riêng theo tài khoản.

`Home.tsx` gọi `study.profile.get` để khôi phục hồ sơ và `study.profile.save` để ghi thay đổi. Vì vậy, deck và quiz attempt được cô lập theo `accountId` thông qua `studyStore` và không phụ thuộc vào Supabase Auth.

## Phạm vi Supabase

Supabase vẫn được giữ trong dự án cho các schema/RLS và kiểm thử tích hợp đã có, nhưng UI chính không còn gọi adapter Supabase để đọc/ghi profile, Flashcard deck hoặc Quiz attempt. Điều này tránh tình trạng tài khoản tRPC không có `supabase.auth.uid()` nhưng vẫn cố ghi các bảng yêu cầu Supabase Auth.

> Khi cần bật lại persistence trực tiếp lên Supabase, phải nối Supabase Auth vào cùng luồng đăng nhập hoặc xây một server-side bridge có kiểm tra token Study Historia; không được ghi song song từ trình duyệt bằng publishable key khi chưa có phiên Supabase Auth tương ứng.

## Kiểm thử hiện tại

`pnpm check` đạt. `pnpm test` đạt với **10 test files và 24 tests**, bao gồm permissions, business logic, character import, Supabase connection/RLS baseline và hành vi adapter Supabase khi chưa có phiên. Các test wiring UI end-to-end với phiên người dùng thật vẫn cần kiểm tra thủ công trong trình duyệt.

## Hạng mục còn chờ

Cần một phiên người dùng thật để xác nhận đăng nhập lại qua tRPC khôi phục đúng deck và quiz attempts, đồng thời kiểm tra rằng không có nguồn dữ liệu khác ghi đè. Cũng cần bổ sung test wiring chuyên biệt nếu muốn kiểm tra trực tiếp callback tạo deck và submit quiz ở cấp component.
