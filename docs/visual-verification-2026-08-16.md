# Xác minh trực quan — 2026-08-16

Màn hình đăng nhập đã được kiểm tra tại viewport desktop 1280×720 sau khi chuyển sang palette sepia, kem và vàng mật ong. CTA, viền trường nhập, nhãn phân khu và mascot Ong đều hiển thị theo ngôn ngữ màu mới; không thấy tràn ngang hoặc lỗi phân cấp trực quan.

Định hướng giữ lại cho các trang tiếp theo là **hành trình khám phá lịch sử Việt Nam**: nền sepia ấm, điểm nhấn vàng cổ, bề mặt như tư liệu lưu trữ và ngôn ngữ khám phá. Các motif bản đồ, timeline hoặc tư liệu chỉ được thêm khi hỗ trợ phân cấp nội dung, không dùng như trang trí dày đặc.

## Audit bổ sung sau vòng rà soát cuối

Đã rà soát `client/src/pages/**/*.tsx` bằng tìm kiếm các token `blue`, `purple`, `violet`, `cyan`, `from-cyan`, `to-violet`, `to-blue` và các gradient lạnh tương đương. Không còn kết quả trong các trang đang dùng; `NotFound.tsx` được loại khỏi phạm vi vì không thuộc không gian học tập chính. Các view Home/Cards/Quiz/Achievements/Wheel/Museum/AdminEnhanced đã được chuyển sang nhóm màu nâu ấm, amber, vàng giấy và kem.

`pnpm check` đạt. Toàn bộ Vitest đạt **15 test files / 41 tests**. Screenshot đăng nhập desktop 1280×720 xác nhận nền espresso, quầng sáng vàng, panel tương phản rõ, CTA amber và không tràn ngang. Screenshot riêng cho các view sau đăng nhập vẫn cần phiên hợp lệ; tài liệu này không dùng screenshot đăng nhập để thay thế bằng chứng đó.

Các mục kiểm thử thủ công tab order, reduced-motion và screenshot riêng cho Dashboard, AI Studio, Flashcard, Quiz, Achievements, Museum, Wheel và Admin vẫn giữ trạng thái chờ trong `todo.md`.
