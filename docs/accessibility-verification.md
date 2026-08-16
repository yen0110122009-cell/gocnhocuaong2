# Accessibility verification

Ngày kiểm tra: 2026-08-16.

## Đã kiểm tra bằng mã nguồn

`QuizEnhanced.tsx`, `MuseumEnhanced.tsx` và `WheelEnhanced.tsx` có nhãn cho các điều khiển chính, trạng thái bận và trạng thái lựa chọn. `Home.tsx` có nhãn cho form đăng nhập, kết quả tìm kiếm, điều hướng, nút đổi theme/âm thanh và trạng thái đăng nhập. `AdminEnhanced.tsx` có nhãn cho trường tài khoản, import JSON, thao tác thành viên, nhóm tab và tabpanel; nhóm tab hỗ trợ phím mũi tên trái/phải.

## CSS

`index.css` có focus-visible cho button, input, select, textarea và link; có fallback forced-colors. Media query `prefers-reduced-motion: reduce` vô hiệu hóa animation/transition không thiết yếu, tắt spin và đặt scroll-behavior về auto. Các token motion được đặt về 0ms trong chế độ giảm chuyển động.

## Kết quả chạy tự động

`pnpm check` đạt. `pnpm test` đạt với 9 test files và 20 tests. Preview trang đăng nhập tải đúng layout desktop. Log trình duyệt chỉ ghi nhận lỗi nghiệp vụ do lần thử đăng nhập với mật khẩu không đúng; không ghi nhận lỗi render hoặc lỗi TypeScript.

## Còn cần xác minh thủ công

Cần một phiên đăng nhập thật để kiểm tra tab order end-to-end trên AI Studio, Flashcard, Quiz, Museum, Wheel và Admin Panel; đồng thời cần bật `prefers-reduced-motion` trong trình duyệt để xác nhận trực quan không lệch layout. Cần user Supabase thật để kiểm tra đọc/ghi và RLS giữa hai tài khoản.
