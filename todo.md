# Project TODO

- [x] Thống nhất hướng thiết kế trực quan, bảng màu và phong cách tương tác của Study Historia.
- [x] Thiết kế dữ liệu tài khoản với ba vai trò Member, Admin và Founder; cô lập hoàn toàn dữ liệu cá nhân theo từng tài khoản.
- [x] Triển khai màn hình đăng nhập tên, mật khẩu và mã tài khoản, đồng thời lưu phiên đăng nhập theo phiên trình duyệt.
- [x] Xây dựng dashboard hiển thị lời chào, XP, cấp độ, hoạt động học, thành tích và mảnh ghép của thành viên hiện tại.
- [x] Xây dựng AI Studio tạo prompt chuẩn, nhập phản hồi AI và phân tích tối đa 27 Flashcard cho mỗi lần tạo.
- [x] Triển khai quản lý bộ Flashcard, chế độ học lật thẻ, đánh dấu nhớ/chưa nhớ và thống kê tiến độ.
- [x] Triển khai trình tạo đề, làm đề, đếm ngược, đánh dấu câu, chấm điểm và xem lại kết quả.
- [x] Tạo hệ thống thành tích 900 mục gồm 9 bậc, điều kiện cập nhật động, phần thưởng và 400 danh hiệu riêng.
- [x] Tạo hệ thống XP, cấp độ, huy hiệu, mảnh ghép, mở khóa thành tích và hiệu ứng phản hồi nhẹ.
- [x] Xây dựng Bảo tàng Hành trình, không có nhân vật mẫu mặc định, cho phép khóa/mở nhân vật và hiển thị tiến độ mảnh ghép.
- [x] Tạo trang chi tiết nhân vật với ảnh, tiểu sử, mốc lịch sử, nguồn nội dung, nguồn ảnh và liên kết tham khảo do Admin/Founder nhập.
- [x] Xây dựng Vòng quay Tri thức có thể cấu hình phần thưởng, tỷ lệ, màu sắc và số lượt quay.
- [x] Tạo Admin Panel giới hạn cho Admin/Founder để quản lý thành viên, mã tài khoản, cấp bậc, thành tích, nhân vật, mảnh ghép, danh hiệu, lời động viên và vòng quay.
- [x] Triển khai tìm kiếm toàn cục, chế độ sáng/tối, công tắc âm thanh và xuất/nhập sao lưu JSON.
- [x] Viết kiểm thử đơn vị cho quy tắc phân quyền, cô lập dữ liệu, giới hạn 27 thẻ AI và tính toán XP/cấp độ.
- [x] Kiểm tra luồng trên giao diện máy tính và thiết bị di động, rà soát lỗi TypeScript và hoàn thiện khả năng tiếp cận.
- [ ] Lưu phiên bản hoàn thiện để bàn giao website.
- [x] Hoàn thiện timer đếm ngược, trạng thái đánh dấu câu và lưu kết quả làm đề đầy đủ.
- [x] Bổ sung logic huy hiệu, mảnh ghép và mở khóa thành tích có lưu trạng thái theo từng tài khoản.
- [x] Mở rộng dữ liệu và Admin Panel để biên tập đầy đủ nhân vật, nguồn nội dung, nguồn ảnh, timeline, thành tích, mảnh ghép, danh hiệu và lời động viên.
- [x] Sử dụng xác suất vòng quay thực tế và cấu hình chi tiết phần thưởng, tỷ lệ, màu sắc và số lượt quay.
- [x] Bổ sung test phân quyền, giới hạn 27 Flashcard AI, cô lập dữ liệu theo tài khoản và các quy tắc gamification.
- [x] Rà soát khả năng tiếp cận: bàn phím, nhãn điều khiển, trạng thái focus và phản hồi tương tác.
- [x] Bổ sung cấu hình AI Studio cho số câu, mức độ, thời gian và loại câu hỏi trước khi tạo đề.
- [x] Lưu đáp án theo câu và trạng thái đánh dấu trong lịch sử làm đề để xem lại sau khi đăng nhập lại.
- [x] Bổ sung quy trình nhập nhân vật hàng loạt: dán JSON hoặc tải tệp JSON, kiểm tra schema, xem trước lỗi và xác nhận nhập.
- [x] Hoàn thiện AI Studio Flashcard với môn học, lớp, tài liệu, yêu cầu, mức độ khó và prompt chuẩn để dùng với AI bên ngoài.
- [x] Bổ sung cấu hình tạo đề AI: môn học, chủ đề, số câu, mức độ, thời gian, tỷ lệ loại câu và tùy chọn đáp án.
- [x] Mở rộng lịch sử làm đề với số câu sai, bỏ qua, đáp án từng câu, trạng thái đánh dấu và lời động viên do quản trị viên cấu hình.
- [x] Hoàn thiện hệ thống 900 thành tích với khoảng cách mốc tăng dần, phần thưởng đa dạng và 400 danh hiệu riêng ở bậc 6–9.
- [ ] Hoàn thiện quy tắc kiếm mảnh ghép từ học Flashcard, làm đề, thành tích, vòng quay và hoạt động học khác.
- [ ] Bổ sung hiệu ứng mở khóa, ghép mảnh và hoàn thành bài có thể truy cập, đồng thời tôn trọng cài đặt giảm chuyển động.
- [ ] Bảo đảm website không chứa các chức năng TODO, habit, nhật ký, lịch, Pomodoro hoặc quản lý sinh hoạt hằng ngày.
- [x] Cấu hình Supabase URL và Publishable key đầy đủ qua biến môi trường bảo mật.
- [x] Thiết kế và áp dụng schema Supabase cho tài khoản, hồ sơ học tập, Flashcard, đề thi, thành tích, mảnh ghép và nhân vật.
- [x] Thiết lập chính sách cô lập dữ liệu theo tài khoản bằng Row Level Security.
- [ ] Chuyển các luồng đọc/ghi dữ liệu chính sang Supabase và giữ cơ chế export/import JSON.
- [ ] Kiểm thử kết nối Supabase, phân quyền và không chia sẻ dữ liệu giữa các tài khoản.
- [x] Lưu checkpoint tích hợp Supabase sau khi kiểm thử đạt.
- [x] Bổ sung schema Supabase cho ánh xạ tài khoản, vai trò Member/Admin/Founder và mã tài khoản.
- [x] Áp dụng migration metadata tài khoản mới trong Supabase SQL Editor.
- [ ] Kiểm thử đọc/ghi thực tế bằng user Supabase đã đăng nhập để xác nhận RLS.
- [x] Tăng cường validator schema import nhân vật cho đầy đủ trường, timeline, nguồn, ảnh, fragmentTotal và categories.
- [x] Hiển thị xem trước riêng danh sách hợp lệ và lỗi chi tiết theo từng nhân vật/trường.
- [x] Xử lý trùng id hoặc tên nhân vật khi nhập, có lựa chọn bỏ qua hoặc thay thế an toàn.
- [x] Hoàn thiện validator import cho sourceName/sourceUrl/imageUrl/imageSource và các ràng buộc URL tương ứng.
- [x] Sửa chế độ thay thế import để loại xung đột theo cả id và tên, kèm kiểm thử tên trùng khác id.
- [x] Tách hàm thay thế xung đột nhân vật thành module thuần và kiểm thử trùng tên khác id.
- [x] Thêm trường lớp học, mức độ khó và yêu cầu chi tiết vào prompt Flashcard AI.
- [x] Thêm số câu, thời gian, mức độ và tỷ lệ loại câu vào prompt đề kiểm tra AI.
- [x] Giới hạn cứng 27 Flashcard mỗi lần phân tích JSON và thêm test cho giới hạn này.
- [x] Viết test phân quyền rõ ràng cho Member/Admin/Founder và xác nhận thao tác quản trị bị chặn đúng theo vai trò.
- [ ] Bổ sung kiểm thử RLS đọc/ghi bằng user Supabase đã đăng nhập để xác nhận cô lập thực tế giữa hai tài khoản.
- [x] Rà soát accessibility: tab order, focus visible, label/aria, keyboard interaction và reduced motion; sửa lỗi phát hiện được.
- [x] Bổ sung cấu hình số lựa chọn đáp án và tùy chọn đáp án mẫu cho AI quiz generator.
- [x] Bổ sung test tích hợp/store-level cho Member/Admin/Founder để gọi trực tiếp thao tác quản trị chính và xác nhận chặn quyền đúng.
- [x] Gọi trực tiếp các hàm saveAppConfig/listAccounts/createAccount/updateAccount/deleteAccount trong test với DB giả lập, xác nhận Member bị từ chối và rule Founder/Admin hoạt động đúng.
- [x] Mở rộng integration test cho deleteAccountForToken với Admin/Founder, gồm trường hợp không được xóa Founder khác.
- [x] Bổ sung assertions rõ ràng cho saveAppConfigForToken và listAccountsForToken ở cả Admin và Founder.
- [x] Bổ sung test Founder cố xóa Founder khác với id khác actor và xác nhận bị từ chối đúng rule.
- [x] Rà soát aria-label/keyboard flow cho toàn bộ QuizEnhanced, MuseumEnhanced, WheelEnhanced và các form tương tác còn lại.
- [x] Bổ sung style focus-visible nhất quán ở index.css cho button, input, select, textarea và link.
- [x] Bổ sung prefers-reduced-motion cho transition/animation không thiết yếu và kiểm tra không ảnh hưởng layout.
- [ ] Kiểm tra thủ công tab order và keyboard flow các luồng đăng nhập, AI Studio, Flashcard, đề, bảo tàng, vòng quay và Admin Panel.
- [ ] Kiểm tra và hoàn thiện keyboard/tab flow cho toàn bộ form tương tác còn lại (đăng nhập, AI Studio, Flashcard, Admin Panel, tìm kiếm, import/export), rồi ghi lại kết quả xác minh.
- [ ] Kiểm thử thủ công prefers-reduced-motion trong trình duyệt cho các luồng chính và xác nhận không phát sinh lệch layout/hỏng tương tác trước khi đánh dấu hoàn tất.

## Accessibility verification notes
- QuizEnhanced: đã thêm nhãn cho chọn đề, câu trả lời, nút trước/tiếp/nộp, chuyển câu và đánh dấu.
- MuseumEnhanced: đã thêm nhãn cho thẻ nhân vật, quay lại và liên kết nguồn.
- WheelEnhanced: đã thêm nhãn cho vé, vùng vòng quay, trạng thái bận, nút quay và phần thưởng.
- index.css: đã thêm focus-visible cho button/input/select/textarea/link và token prefers-reduced-motion.

## Persistence follow-up
- [x] Đối chiếu luồng tạo Flashcard; theo phương án B, dữ liệu được lưu trong profile qua tRPC thay vì bảng Supabase flashcard_decks.
- [x] Nối luồng nộp Quiz vào profile qua tRPC; không sử dụng bảng Supabase quiz_attempts trong luồng đăng nhập hiện tại.
- [x] Bổ sung test adapter ở trạng thái chưa có phiên Supabase; test payload Supabase hợp lệ không còn thuộc phạm vi phương án B.
- [x] Đồng bộ answers/flagged vào profile.attempts qua tRPC và hiển thị trong lịch sử Quiz; không hydrate từ quiz_attempts Supabase.
- [x] Bổ sung xử lý lỗi hoặc feedback khi ghi flashcard_decks/quiz_attempts lên Supabase thất bại.
- [x] Không còn hydrate quiz_attempts Supabase; profile.attempts dùng attemptId/quizId ổn định do tRPC lưu nguyên payload.
- [x] Xây UI xem lại answers và trạng thái flagged từ profile.attempts được khôi phục qua tRPC.
- [x] Không áp dụng test payload Supabase hợp lệ cho deck/quiz vì phương án B không gọi adapter này; adapter chưa đăng nhập vẫn có test bảo vệ.
- [ ] Bổ sung test wiring Home/QuizEnhanced xác nhận submit quiz và tạo deck gọi persistence đúng payload.
- [x] Không còn wiring persistence Supabase deck/quiz; luồng chính dùng profile tRPC theo phương án B.
- [x] Chuyển các thao tác deck/quiz sang API tRPC đã xác thực theo phương án B; không kết nối Supabase Auth vào đăng nhập hiện tại.
- [x] Loại bỏ hydrate Supabase profile/quiz khỏi Home; tRPC profile là nguồn duy nhất nên không còn nguy cơ ghi đè chéo.

## Persistence decision: phương án B
- [x] Dùng API tRPC đã xác thực làm nguồn persistence chính cho Flashcard và Quiz attempt; Home không còn đọc/ghi profile Supabase.
- [x] Loại bỏ việc gọi adapter Supabase deck/quiz từ Home/Studio/Quiz để tránh ghi song song và phụ thuộc Supabase Auth.
- [x] Tái sử dụng endpoint `study.profile.save` hiện có để lưu deck và quiz attempt theo token tài khoản hiện tại; không tạo endpoint trùng lặp.
- [ ] Bổ sung test wiring Home/Quiz xác nhận profile save nhận deck và quiz attempt đúng payload.
- [ ] Xác minh đăng nhập lại bằng phiên người dùng thật rằng profile tRPC khôi phục deck và quiz attempts không bị nguồn khác ghi đè.
- [x] Cập nhật biên bản kiến trúc, test và checkpoint theo nguồn dữ liệu tRPC chính.

## Persistence verification evidence
- `shared/study.test.ts` kiểm tra normalizeProfile giữ nguyên `attempt.id`, `quizId`, `completedAt`, `answers`, `flagged` và `correct`.
- `vitest.config.ts` đã bao phủ `shared/**/*.test.ts`; kết quả gần nhất: 13 test files, 35 tests passed.
- `Home.tsx` chỉ hydrate qua `study.profile.get` và ghi qua `study.profile.save`; không còn gọi load/save profile Supabase.
- Chưa có xác minh phiên đăng nhập lại thật hoặc test component wiring trực tiếp; hai mục này vẫn chờ.

## Căn chỉnh theo đặc tả website mới
- [x] Hoàn tất hệ thống thị giác không gian học tập ấm áp: thay các điểm nhấn xanh/tím/cyan còn sót ở toàn bộ view đã đăng nhập bằng kem–mật ong–nâu, dark mode nâu ấm và mascot Ong tối giản; cần screenshot/biên bản cho từng view chính.
- [x] Hoàn thiện AI Studio theo luồng nhập yêu cầu, mục đích học, tài liệu/dán văn bản, prompt có thể sao chép/tạo lại/chỉnh sửa và chọn tạo Flashcard, Quiz hoặc cả hai.
- [ ] Bổ sung quản lý bộ Flashcard: lọc theo môn/chủ đề/ngày, đổi tên, sao chép, xóa, tạo đề từ bộ và bốn chế độ học có báo cáo cuối phiên.
- [x] Hoàn thiện kết quả đề độc lập với điểm theo thang 10, đúng/sai/bỏ qua, giải thích, gợi ý làm lại và tạo Flashcard từ các câu sai; đã kiểm thử báo cáo, tạo bộ ôn lại và nút Làm lại khởi tạo phiên mới đúng đề.
- [x] Xây trang Tiến trình từ nhật ký hoạt động thật: lượt học ngày/tuần, thời lượng Quiz đã ghi nhận, độ chính xác 7 ngày và tổng Flashcard/Quiz/XP; không tạo số liệu giả cho dữ liệu chưa được lưu.
- [x] Hoàn thiện động cơ thành tích 900 mục, phần thưởng một lần, 9 bậc/100 mục, khoảng cách tăng dần và 400 danh hiệu riêng cho 4 bậc cuối; Admin có thể bổ sung/quản lý các mốc tùy chỉnh.
- [x] Hoàn thiện bộ sưu tập mảnh ghép bằng bản đồ ghép hình dựa trên dữ liệu hồ sơ, hiệu ứng an toàn với reduced-motion và luồng mở khóa lịch sử nhân vật riêng trong Bảo tàng.
- [x] Hoàn thiện Admin quản lý lời động viên, thành tích tùy chỉnh và phần thưởng/vòng quay: ngoài thêm/xóa/bật-tắt, cần chỉnh sửa trực tiếp các trường nội dung, điều kiện, giá trị, trọng số và màu; khu vực nhân vật đã có import JSON kiểm tra nguồn, ảnh và timeline.
- [ ] Bảo đảm tìm kiếm và lọc bao phủ Flashcard, Quiz, thành tích, nhân vật và mảnh ghép; không thêm Todo, Habit, Journal, Schedule hoặc công cụ quản lý cá nhân.
- [x] Xuất bản phiên bản `index.html` tự chứa HTML/CSS/JavaScript, dùng Web Crypto SHA-256 và localStorage ở trình duyệt, có các luồng học cốt lõi và nêu rõ giới hạn không đồng bộ máy chủ.

## Hồi quy phát hiện khi kiểm thử index.html
- [x] Sửa luồng nộp Quiz trong index.html để render báo cáo kết quả sau khi ghi attempt; đã xác minh từ nhập JSON Flashcard, tạo đề, chọn đáp án đến báo cáo 5.0/10 và giải thích từng câu.
- [x] Hoàn tất kiểm chứng hành vi hai nút Làm lại và Tạo Flashcard từ câu sai trong báo cáo Quiz của index.html bằng thao tác trực tiếp.
- [x] Bổ sung test hồi quy cho index.html xác nhận event binding của cả hai nút báo cáo Quiz, không chỉ sự tồn tại của helper.
- [x] Thêm kiểm thử hồi quy hợp đồng cho index.html: Quiz render kết quả, học lại câu sai, bốn chế độ Flashcard và thông báo lưu trữ cục bộ (4 kiểm thử).
- [x] Thêm kiểm thử hồi quy hợp đồng cho index.html: Quiz render kết quả, học lại câu sai, bốn chế độ Flashcard và thông báo lưu trữ cục bộ (mục trùng, đã hoàn thành tại dòng trên).

- [x] Đối chiếu đặc tả pasted_content_3.txt với mô hình achievement hiện tại và giữ nguyên profile cũ.
- [x] Bổ sung metadata đầy đủ cho 900 thành tích: biểu tượng, mô tả, điều kiện, độ khó, tiến trình, phần thưởng, mảnh ghép, danh hiệu, lời động viên, ngày mở khóa và animation.
- [x] Bảo đảm 400 thành tích từ #501 đến #900 có 400 danh hiệu riêng biệt, ý nghĩa riêng và điều kiện tăng dần; #900 là danh hiệu tối thượng.
- [x] Bổ sung bộ lọc/tìm kiếm thành tích theo trạng thái, độ khó, có danh hiệu và có mảnh ghép; hiển thị thẻ danh hiệu khi đã mở khóa.
- [x] Bổ sung kiểm thử catalog 900 mục, 400 danh hiệu duy nhất, phần thưởng và khả năng normalize không làm mất profile cũ.

- [x] Bổ sung metadata tiến trình theo từng thành tích, ngày mở khóa và animation mở khóa; hiển thị an toàn mà không thay đổi profile cũ.
- [x] Tạo ý nghĩa thực sự khác nhau cho 400 danh hiệu và kiểm thử uniqueness của ý nghĩa cùng điều kiện tăng dần.
- [x] Đưa bộ lọc độ khó và có mảnh ghép vào standalone, đồng bộ với React.

- [x] Bổ sung chọn tệp TXT/MD/PDF trong AI Studio React và standalone; TXT/MD được đọc trực tiếp, PDF được gửi server qua storage/file_url để LLM trích xuất và có contract test.
- [x] Nâng cấp xử lý PDF phía server/LLM để trích xuất nội dung PDF thật sự thay vì chỉ truyền tên tệp trong prompt.

- [x] Bổ sung lựa chọn AI Studio tạo đồng thời Flashcard và Quiz, với kết quả JSON tách biệt và lưu cả hai loại dữ liệu vào cùng hồ sơ.

- [x] Thêm trường Mục đích học riêng trong AI Studio React/standalone và đưa vào prompt gửi LLM.
- [x] Cho phép chỉnh sửa trực tiếp prompt trước khi sao chép hoặc tạo tài liệu, kèm nút tạo lại prompt từ các trường biểu mẫu.
- [x] Bổ sung contract test xác nhận mode both, mục đích học và prompt editing/regeneration không hồi quy.

- [ ] Audit lại toàn bộ client/src/pages, đặc biệt Cards trong Home.tsx, loại bỏ mọi token blue/violet/cyan còn sót.
- [ ] Chụp bằng chứng riêng cho các view chính đã đăng nhập ở light/dark mode: dashboard, AI Studio, Flashcard, Quiz, Achievements, Museum, Wheel và Admin.
- [ ] Xác nhận mascot Ong và dark mode nâu ấm hiện diện nhất quán trong các view chính trước checkpoint giao diện.

- [x] Hoàn thiện và kiểm thử luồng cấp huy hiệu/mở khóa thành tích thực tế, lưu vào profile theo tài khoản và khôi phục sau đăng nhập lại.
- [x] Bổ sung cấu hình/quản trị số lượt quay hoặc cơ chế cấp vé quay rõ ràng, kèm test rule.
- [x] Mở rộng Admin Panel chỉnh sửa trực tiếp nhân vật, nguồn, ảnh, timeline và quản trị mảnh ghép/danh hiệu như thực thể riêng.
- [x] Thêm test/biên bản end-to-end cho persistence gamification: XP, fragments, badges và unlocked achievements.

- [x] Bổ sung/kiểm chứng UI lịch sử làm đề hiển thị rõ số câu sai, số câu bỏ qua, đáp án từng câu và trạng thái đánh dấu từ profile.attempts.
- [x] Nối lời động viên cấu hình bởi quản trị viên vào màn hình lịch sử/xem lại bài và thêm test hoặc code evidence sau đăng nhập lại.
