# Ma trận căn chỉnh đặc tả Study Historia

## Quyết định triển khai

Đặc tả mới xác nhận **Study Historia là không gian học tập cá nhân có game hóa nhẹ**, không phải công cụ quản lý sinh hoạt hoặc năng suất. Phạm vi tuyệt đối không bao gồm Todo, Habit, Journal, lịch, lịch biểu hoặc Daily Planner. Bản web hiện tại đã có xác thực ba vai trò, hồ sơ cô lập theo tài khoản, AI Studio theo mô hình sao chép prompt, Flashcard, Quiz, 900 thành tích, mảnh ghép, Bảo tàng, Vòng quay và quản trị cơ bản. Tuy nhiên, hệ thống giao diện đang dùng ngôn ngữ xanh/tím lạnh; một số luồng học tập mới chỉ ở mức nền tảng.

Nguồn dữ liệu sản phẩm chính tiếp tục là **`study.profile.get/save` qua tRPC theo token phiên**. Điều này phù hợp với đăng nhập tên/mật khẩu/mã tài khoản của ứng dụng và tránh phụ thuộc Supabase Auth cho Flashcard/Quiz. Supabase schema và adapter hiện có được giữ để phục vụ các luồng đã tích hợp, nhưng UI học tập không ghi song song vào profile Supabase.

| Nhóm yêu cầu | Hiện trạng | Phần cần hoàn thiện | Ưu tiên |
|---|---|---|---|
| Không gian học tập ấm áp | Có light/dark mode, nhưng dùng xanh/tím đậm | Chuyển token màu sang kem, mật ong, nâu ấm và dark mode than ấm; dùng Ong có chừng mực | Cao |
| AI Studio | Có prompt và nhập JSON, giới hạn 27 thẻ | Bổ sung mục đích học, thao tác tạo lại/chỉnh prompt, tài liệu/dán văn bản và lựa chọn tạo một hoặc cả hai loại nội dung | Cao |
| Flashcard | Có bộ thẻ, lật thẻ, đánh dấu nhớ/cần ôn | Thêm quản lý bộ, lọc, chế độ học, báo cáo phiên và kết nối tạo đề từ bộ | Cao |
| Quiz | Có ba dạng câu, timer, đánh dấu, chấm điểm và lịch sử | Bổ sung kết quả thang 10, đúng/sai/bỏ qua, động viên, gợi ý ôn lại và tạo thẻ từ câu sai | Cao |
| Tiến trình học | Dashboard có số liệu tổng quan | Thêm màn hình theo ngày/tuần/tháng/tổng và chỉ số trực tiếp phục vụ học | Cao |
| Thành tích | Đã tạo 9 bậc × 100, thưởng một lần | Bổ sung giao diện theo 9 tab, củng cố độ khó tăng dần và danh hiệu riêng cho 400 mục cuối | Trung bình |
| Mảnh ghép và bảo tàng | Có khóa/mở theo fragment total và trang chi tiết | Thêm bộ sưu tập riêng, hành động ghép hình cùng animation tôn trọng reduced motion | Cao |
| Vòng quay | Có phần thưởng theo xác suất và tiêu vé | Thêm lịch sử phần thưởng, kiểm soát nhịp game hóa và cấu hình quản trị đầy đủ | Trung bình |
| Quản trị | Có thành viên, import nhân vật, quản lý vòng quay căn bản | Bổ sung lời động viên, cấu hình thành tích/phần thưởng, ảnh/timeline/source biên tập chi tiết | Trung bình |
| Tìm kiếm/lọc | Có tìm kiếm toàn cục cơ bản | Bổ sung nguồn tìm kiếm thành tích/mảnh ghép và bộ lọc theo thực thể | Trung bình |
| Xuất HTML một tệp | Dự án hiện là React/tRPC full-stack | Tạo `index.html` client-side riêng, mô tả rõ đây là bản cục bộ và không đồng bộ tài khoản nhiều thiết bị | Cao |

## Các nguyên tắc dữ liệu bắt buộc

Mỗi tài khoản mới phải bắt đầu từ **0 tiến độ**, không có Flashcard, đề, thành tích đã nhận, mảnh ghép, danh hiệu hoặc nhân vật đã mở. Danh sách achievement và danh sách nhân vật hệ thống chỉ là định nghĩa có thể mở khóa; chúng không phải dữ liệu người dùng đã sở hữu. Dữ liệu hồ sơ được chuẩn hóa trước khi lưu để giữ nguyên `attemptId`, `quizId`, đáp án, trạng thái đánh dấu, XP, mảnh ghép và phần thưởng đã nhận theo từng tài khoản.

Con số **27** chỉ giới hạn số Flashcard được phân tích/tạo từ một phản hồi AI. Nó không giới hạn số bộ Flashcard của tài khoản, tổng số thẻ của tài khoản hoặc số thẻ mà một bộ có thể chứa qua những lần mở rộng hợp lệ.

## Lộ trình kỹ thuật

Đợt thay đổi đầu tiên tập trung vào token giao diện ấm áp, một điểm truy cập Tiến trình và phần kết quả Quiz vì các phần này tác động trực tiếp đến vòng lặp học. Đợt tiếp theo sẽ hoàn thiện quản lý Flashcard, chuyển câu sai thành thẻ ôn và collection/ghép hình. Cuối cùng, phần Admin, accessibility, kiểm thử và bản `index.html` tự chứa sẽ được hoàn thiện. Bất kỳ animation nào cũng phải dùng transform/opacity, có giới hạn thời lượng, và tắt/giảm theo `prefers-reduced-motion`.
