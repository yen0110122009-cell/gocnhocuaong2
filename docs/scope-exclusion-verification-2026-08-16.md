# Biên bản kiểm chứng phạm vi tính năng

Ngày kiểm tra: 2026-08-16.

## Phạm vi

Đã rà soát mã giao diện React trong `client/src` và bản standalone `index.html`, bao gồm App, Home, các trang Flashcard/Quiz/Museum/Wheel/Admin và các handler render/bind của standalone.

## Kết quả

Không tìm thấy route, tab, form, state hoặc copy dành cho TODO, Habit, Journal, Pomodoro, Schedule hay công cụ quản lý sinh hoạt cá nhân. Các chức năng hiện có chỉ phục vụ học lịch sử: Flashcard, Quiz, AI Studio, tiến trình, achievement, Museum, Wheel và Admin.

Các chuỗi có nghĩa gần với “nhật ký” hoặc “lịch” chỉ thuộc hai ngữ cảnh học tập hợp lệ. `studyActivity`/activity log lưu lượt học, thời lượng, XP và độ chính xác; `timeline` là các mốc lịch sử của nhân vật. Không có lịch cá nhân, nhắc việc, journal hoặc scheduler cho người dùng.

## Bằng chứng kỹ thuật

Audit token trên `client/src` và `index.html` không phát hiện các từ khóa tính năng bị loại trừ. Các kết quả còn lại trong mã nguồn chỉ là `timeline` của nhân vật, cấu hình phần thưởng vòng quay và activity log học tập. Bản standalone cũng chỉ có các handler `addActivity`, `endFlash`, `submitQuiz`, `makeQuizFromSet`, `makeWrongCards`, `characterView` và các luồng học/admin tương ứng.

## Giới hạn

Đây là kiểm chứng tĩnh bằng mã nguồn; không thay thế kiểm thử trình duyệt bằng tài khoản thật. Các mục Supabase RLS và keyboard/reduced-motion thủ công vẫn được theo dõi riêng trong `todo.md`.
