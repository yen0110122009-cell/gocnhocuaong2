# Biên bản kiểm tra thủ công — phiên Ong

- Preview đăng nhập thành công với tên `Ong` và mã `111`; tài khoản hiển thị vai trò Founder.
- Sau khi tải lại URL Preview, phiên vẫn được khôi phục và Dashboard vẫn hiển thị `Chào mừng trở lại, Ong!`, xác nhận cookie/session hoạt động.
- Nút chuyển dark mode hoạt động; giao diện chuyển sang nền nâu ấm, mascot và các điều khiển vẫn hiện diện.
- Sau thao tác Tab, phần tử focus được console xác định là nút `Tắt âm thanh` có class `icon-button`; điều khiển có thể tiếp cận bằng bàn phím.
- Focus Hub mở được; hiển thị Smart Review, chuỗi học và Kho mảnh ghép.
- Nút Học 10 phút mở checklist bốn chặng: Flashcard, trắc nghiệm, đúng/sai và trả lời ngắn. Khi bắt đầu chặng đầu trong tài khoản chưa có bộ học, hệ thống điều hướng tới Flashcard và hiển thị trạng thái chưa có bộ.
- RLS giữa hai tài khoản, khôi phục deck/quiz có dữ liệu thật, audit toàn bộ keyboard flow và mô phỏng prefers-reduced-motion vẫn cần xác minh bổ sung.
- Các mục trên được ghi nhận là bằng chứng phiên thật, không thay thế các mục manual còn pending trong todo.md.

AI Studio cũng đã được mở trong cùng phiên. Accessibility tree hiển thị đầy đủ selector Flashcard/Đề kiểm tra/Cả hai, các trường tên bộ, môn, mục đích, chủ đề, lớp, mức độ, yêu cầu, tài liệu, file input, prompt, JSON kết quả và các nút tạo lại/sao chép/tạo từ tài liệu/tạo Flashcard. Thao tác Tab vẫn giữ focus-visible trên điều hướng và form.

Trong phiên Ong, Pomodoro hiển thị đồng hồ 25:00, nút Bắt đầu/Đặt lại, âm thanh bật, ba preset Tập trung/Ngắn/Sâu và hai trường tùy chỉnh phút tập trung/nghỉ. Bản đồ kiến thức hiển thị đủ bốn trạng thái Chắc/Cần ôn/Chưa chắc/Chưa học và trạng thái rỗng hướng dẫn tạo Flashcard trước.

Bảo tàng hành trình trong phiên thật hiển thị trạng thái rỗng rõ ràng và hướng dẫn Admin thêm nhân vật, nguồn trích dẫn và ảnh có ghi nhận nguồn. Admin Panel mở được ở vai trò Founder; accessibility tree hiển thị các tab Thành viên/Nhân vật/Vòng quay, form cấp tài khoản, danh sách thành viên, lời động viên, mốc thành tích, cấu hình vé/mảnh, phần thưởng vòng quay và các vùng chỉnh sửa trực tiếp đều có nhãn hoặc hint.

Đề kiểm tra mở được trong phiên thật và hiển thị trạng thái chưa có đề với hướng dẫn tạo từ AI Studio. Vòng quay tri thức mở được, hiển thị 0 vé quay, tổng tỷ lệ 0%, bảng phần thưởng rỗng và nút Quay ngay có hint `Quay vòng quay tri thức`; trạng thái rỗng không cho phát thưởng ngoài cấu hình.

Đã mở trực tiếp Flashcard trong phiên Ong/111. View hiển thị đúng trạng thái chưa có bộ và hướng dẫn tạo từ AI Studio. Sau một lần Tab, focus-visible chuyển từ mục Flashcard sang mục Đề kiểm tra trong sidebar, xác nhận thứ tự điều hướng và viền focus hoạt động.
