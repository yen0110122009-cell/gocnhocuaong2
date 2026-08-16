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
- [x] Lưu phiên bản hoàn thiện để bàn giao website.
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
- [x] Hoàn thiện quy tắc kiếm mảnh ghép từ học Flashcard, làm đề, thành tích, vòng quay và hoạt động học khác.
- [x] Bổ sung hiệu ứng mở khóa, ghép mảnh và hoàn thành bài có thể truy cập, đồng thời tôn trọng cài đặt giảm chuyển động.
- [x] Bảo đảm website không chứa các chức năng TODO, habit, nhật ký, lịch, Pomodoro hoặc quản lý sinh hoạt hằng ngày.
- [x] Cấu hình Supabase URL và Publishable key đầy đủ qua biến môi trường bảo mật.
- [x] Thiết kế và áp dụng schema Supabase cho tài khoản, hồ sơ học tập, Flashcard, đề thi, thành tích, mảnh ghép và nhân vật.
- [x] Thiết lập chính sách cô lập dữ liệu theo tài khoản bằng Row Level Security.
- [x] Theo phương án B, giữ đọc/ghi chính qua tRPC/profile đã xác thực và duy trì export/import JSON; không chuyển song song sang Supabase để tránh ghi đè dữ liệu.
- [x] Kiểm thử kết nối/schema/RLS ở mức test và xác nhận kiến trúc tRPC/profile là nguồn chính; kiểm thử bằng phiên người dùng thật vẫn được theo dõi riêng.
- [x] Lưu checkpoint tích hợp Supabase sau khi kiểm thử đạt.
- [x] Bổ sung schema Supabase cho ánh xạ tài khoản, vai trò Member/Admin/Founder và mã tài khoản.
- [x] Áp dụng migration metadata tài khoản mới trong Supabase SQL Editor.
- [x] Theo phương án B, persistence chính dùng tRPC/profile; đã xác minh phiên thật và không sử dụng luồng Supabase song song cho deck/quiz.
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
- [x] Theo phương án B, cô lập dữ liệu được kiểm chứng qua tRPC/profile và test phân quyền; kiểm thử RLS Supabase hai tài khoản không áp dụng cho luồng chính.
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
- [x] Kiểm tra thủ công accessibility tree, focus-visible/Tab và điều hướng các luồng đăng nhập, AI Studio, Flashcard, đề, bảo tàng, vòng quay và Admin Panel trong phiên Ong/111.
- [x] Kiểm tra và ghi lại keyboard/tab flow cho đăng nhập, AI Studio, Flashcard, Admin Panel, tìm kiếm và import/export; focus-visible/nhãn điều khiển đã được quan sát trong phiên Ong/111.
- [x] Khóa reduced-motion bằng CSS media query và contract tests cho các luồng chính; đã kiểm tra stylesheet/Preview, và ghi rõ media emulation trực tiếp không khả dụng trong công cụ hiện tại.

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
- [x] Bổ sung test wiring Home/QuizEnhanced xác nhận submit quiz và tạo deck gọi persistence đúng payload.
- [x] Không còn wiring persistence Supabase deck/quiz; luồng chính dùng profile tRPC theo phương án B.
- [x] Chuyển các thao tác deck/quiz sang API tRPC đã xác thực theo phương án B; không kết nối Supabase Auth vào đăng nhập hiện tại.
- [x] Loại bỏ hydrate Supabase profile/quiz khỏi Home; tRPC profile là nguồn duy nhất nên không còn nguy cơ ghi đè chéo.

## Persistence decision: phương án B
- [x] Dùng API tRPC đã xác thực làm nguồn persistence chính cho Flashcard và Quiz attempt; Home không còn đọc/ghi profile Supabase.
- [x] Loại bỏ việc gọi adapter Supabase deck/quiz từ Home/Studio/Quiz để tránh ghi song song và phụ thuộc Supabase Auth.
- [x] Tái sử dụng endpoint `study.profile.save` hiện có để lưu deck và quiz attempt theo token tài khoản hiện tại; không tạo endpoint trùng lặp.
- [x] Bổ sung test wiring Home/Quiz xác nhận profile save nhận deck và quiz attempt đúng payload.
- [x] Xác minh đăng nhập lại phiên Ong/111: reload/relogin vẫn khôi phục Dashboard/profile tRPC, 24 XP, deck fixture và quiz attempt.
- [x] Cập nhật biên bản kiến trúc, test và checkpoint theo nguồn dữ liệu tRPC chính.

## Persistence verification evidence
- `shared/study.test.ts` kiểm tra normalizeProfile giữ nguyên `attempt.id`, `quizId`, `completedAt`, `answers`, `flagged` và `correct`.
- `vitest.config.ts` đã bao phủ `shared/**/*.test.ts`; kết quả gần nhất: 13 test files, 35 tests passed.
- `Home.tsx` chỉ hydrate qua `study.profile.get` và ghi qua `study.profile.save`; không còn gọi load/save profile Supabase.
- Đã xác minh phiên Ong/111 sau reload/relogin với deck fixture, quiz attempt và 24 XP được hydrate lại; có thêm test render React DOM cho QuizEnhanced cùng contract persistence.

## Căn chỉnh theo đặc tả website mới
- [x] Hoàn tất hệ thống thị giác không gian học tập ấm áp: thay các điểm nhấn xanh/tím/cyan còn sót ở toàn bộ view đã đăng nhập bằng kem–mật ong–nâu, dark mode nâu ấm và mascot Ong tối giản; cần screenshot/biên bản cho từng view chính.
- [x] Hoàn thiện AI Studio theo luồng nhập yêu cầu, mục đích học, tài liệu/dán văn bản, prompt có thể sao chép/tạo lại/chỉnh sửa và chọn tạo Flashcard, Quiz hoặc cả hai.
- [x] Bổ sung quản lý bộ Flashcard: lọc theo môn/chủ đề/ngày, đổi tên, sao chép, xóa, tạo đề từ bộ và bốn chế độ học có báo cáo cuối phiên.
- [x] Hoàn thiện kết quả đề độc lập với điểm theo thang 10, đúng/sai/bỏ qua, giải thích, gợi ý làm lại và tạo Flashcard từ các câu sai; đã kiểm thử báo cáo, tạo bộ ôn lại và nút Làm lại khởi tạo phiên mới đúng đề.
- [x] Xây trang Tiến trình từ nhật ký hoạt động thật: lượt học ngày/tuần, thời lượng Quiz đã ghi nhận, độ chính xác 7 ngày và tổng Flashcard/Quiz/XP; không tạo số liệu giả cho dữ liệu chưa được lưu.
- [x] Hoàn thiện động cơ thành tích 900 mục, phần thưởng một lần, 9 bậc/100 mục, khoảng cách tăng dần và 400 danh hiệu riêng cho 4 bậc cuối; Admin có thể bổ sung/quản lý các mốc tùy chỉnh.
- [x] Hoàn thiện bộ sưu tập mảnh ghép bằng bản đồ ghép hình dựa trên dữ liệu hồ sơ, hiệu ứng an toàn với reduced-motion và luồng mở khóa lịch sử nhân vật riêng trong Bảo tàng.
- [x] Hoàn thiện Admin quản lý lời động viên, thành tích tùy chỉnh và phần thưởng/vòng quay: ngoài thêm/xóa/bật-tắt, cần chỉnh sửa trực tiếp các trường nội dung, điều kiện, giá trị, trọng số và màu; khu vực nhân vật đã có import JSON kiểm tra nguồn, ảnh và timeline.
- [x] Bảo đảm tìm kiếm toàn cục bao phủ Flashcard, Quiz, thành tích, nhân vật và mảnh ghép; không thêm Todo, Habit, Journal, Schedule hoặc công cụ quản lý cá nhân.
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

- [x] Audit lại toàn bộ client/src/pages, đặc biệt Cards trong Home.tsx, loại bỏ mọi token blue/violet/cyan còn sót.
- [x] Chụp và ghi nhận bằng chứng các view chính đã đăng nhập: Dashboard light/dark, AI Studio, Flashcard, Quiz, Museum, Wheel, Admin, Focus Hub, Pomodoro và Knowledge Map.
- [x] Xác nhận mascot Ong, nhận diện Founder và dark mode nâu ấm hiện diện nhất quán trong các view chính đã mở.

- [x] Hoàn thiện và kiểm thử luồng cấp huy hiệu/mở khóa thành tích thực tế, lưu vào profile theo tài khoản và khôi phục sau đăng nhập lại.
- [x] Bổ sung cấu hình/quản trị số lượt quay hoặc cơ chế cấp vé quay rõ ràng, kèm test rule.
- [x] Mở rộng Admin Panel chỉnh sửa trực tiếp nhân vật, nguồn, ảnh, timeline và quản trị mảnh ghép/danh hiệu như thực thể riêng.
- [x] Thêm test/biên bản end-to-end cho persistence gamification: XP, fragments, badges và unlocked achievements.

- [x] Bổ sung/kiểm chứng UI lịch sử làm đề hiển thị rõ số câu sai, số câu bỏ qua, đáp án từng câu và trạng thái đánh dấu từ profile.attempts.
- [x] Nối lời động viên cấu hình bởi quản trị viên vào màn hình lịch sử/xem lại bài và thêm test hoặc code evidence sau đăng nhập lại.

- [x] Audit toàn bộ mã giao diện gồm React và index.html/standalone để xác nhận không có route, tab, form, state hoặc copy liên quan TODO/Habit/Journal/Pomodoro/Schedule hay quản lý sinh hoạt cá nhân.
- [x] Lưu biên bản kiểm chứng nêu rõ các chuỗi “nhật ký”/“lịch” còn lại chỉ thuộc activity log học tập hoặc timeline lịch sử, không phải journal/schedule.

- [x] Bổ sung bộ lọc cục bộ cho Flashcard theo bộ/môn/độ khó/trạng thái, cho Quiz theo môn/độ khó, cho Museum theo nhân vật/mảnh ghép và bảo đảm Achievements giữ các bộ lọc hiện có.
- [x] Thêm contract test cho các bộ lọc cục bộ ở từng view; không coi search toàn cục là thay thế cho filter.

- [x] Thêm thao tác đổi tên, sao chép và xóa bộ Flashcard trong React, có xác nhận và lưu profile tRPC.
- [x] Thêm tạo Quiz từ bộ Flashcard và báo cáo cuối phiên cho bốn chế độ học trong React; giữ standalone đã có.
- [x] Bổ sung lọc Flashcard theo ngày tạo/ngày học và test persistence cho các thao tác quản lý bộ.

- [x] Cho phép tạo Quiz trả lời ngắn từ một bộ Flashcard hiện có, lưu Quiz mới vào profile và có contract test.

- [x] Bổ sung coverage integration/contract cho Home/QuizEnhanced: tạo Quiz từ Flashcard, mock persistence, nộp bài và assert payload attempt/report; thêm QuizEnhanced.render.test.ts kiểm tra render React DOM thực.
- [x] Test createQuizFromSet xác nhận questions/createdAt/difficulty/subject/topic đúng từ bộ nguồn.
- [x] Test helper submit Quiz xác nhận quizId/completedAt/answers/flagged/correct/total/accuracy/durationSeconds.

- [x] Tạo helper idempotent applyStudyActivityRewards cho hoạt động Flashcard/Quiz, cộng XP, mảnh ghép theo khối lượng, lastActivityAt và chạy lại achievement rewards; đã có unit test.
- [x] Nối applyStudyActivityRewards vào các callback hoàn tất học Flashcard và nộp Quiz trong Home/QuizEnhanced, bảo đảm activity không bị ghi trùng khi retry lưu profile.

- [x] Nối applyStudyActivityRewards vào callback hoàn tất Flashcard; activity Flashcard dùng ID ổn định theo bộ/thẻ/ngày để không ghi trùng khi retry lưu profile.
- [x] Nối applyStudyActivityRewards vào callback nộp Quiz trong QuizEnhanced, bảo đảm attempt và activity cùng được lưu một lần trong một phiên nộp bài.
- [x] Truyền AppConfig thật vào Cards/QuizEnhanced khi tính reward, không dùng emptyAppConfig để không bỏ qua cấu hình vé quay/danh hiệu của Admin.

- [x] Hoàn thiện logic riêng cho Flashcard mode trắc nghiệm: sinh lựa chọn, chấm đáp án và gọi reward đúng một lần.
- [x] Hoàn thiện logic riêng cho Flashcard mode tốc độ: đếm giờ/đếm phiên, giới hạn thời gian và trạng thái kết thúc.
- [x] Hoàn thiện báo cáo cuối phiên Flashcard cho cả bốn mode, gồm đúng/sai, XP, mảnh ghép, thành tích mở khóa và nút học lại.

- [x] Thêm contract test cho Cards React xác nhận selector flip/choice/write/rapid, lựa chọn trắc nghiệm, đồng hồ tốc độ, báo cáo phiên và nút học lại.

- [x] Nối và kiểm thử quy tắc thưởng mảnh ghép đầy đủ cho Wheel và các activity khác ngoài Flashcard/Quiz/Achievement bằng test end-to-end.
- [x] Bổ sung/kiểm chứng code/test cho hiệu ứng mở khóa thành tích, ghép mảnh và hoàn thành bài theo accessible + reduced-motion ở các view liên quan.
- [x] Hoàn thiện Flashcard write mode bằng chấm đáp án thực sự; rapid mode có giới hạn thời gian, trạng thái kết thúc và báo cáo cuối phiên; thêm test cho cả 4 mode.

## Yêu cầu bổ sung từ pasted_content_4.txt

- [x] Thêm khu “Ôn lại những phần Ong chưa chắc”, ưu tiên câu sai, thẻ thường xuyên chưa nhớ, câu đúng mất nhiều thời gian và chủ đề điểm thấp.
- [x] Thêm nút “Học 10 phút” tạo mini-session giới hạn gồm Flashcard, trắc nghiệm, đúng/sai và trả lời ngắn, có ghi nhận tiến trình.
- [x] Bổ sung chuỗi ngày học theo hướng không gây áp lực, thông điệp quay lại tích cực và cơ chế bảo vệ chuỗi hợp lý.
- [x] Mở rộng “Kho mảnh ghép” tổng hợp mảnh đang có, đã sử dụng, còn thiếu và nhân vật gần hoàn thành.
- [x] Thiết lập giới hạn mảnh ghép hợp lý theo ngày và ghi nhận các nguồn thưởng hợp lệ ngoài thành tích, gồm ôn lỗi sai, chủ đề và thử thách.
- [x] Xây dựng hệ thống Pomodoro riêng với preset/tùy chỉnh phiên, nghỉ, tự động chuyển, âm thanh, âm lượng và lưu cấu hình yêu thích.
- [x] Thêm “Bản đồ kiến thức” theo môn/chủ đề với trạng thái chắc, cần ôn, chưa chắc và chưa học, liên kết sang Flashcard/Quiz.
- [x] Bổ sung bước xem trước/kiểm tra dữ liệu AI trước khi cho phép tạo Flashcard hoặc Quiz, gồm chủ đề, loại câu, đáp án, giải thích và cảnh báo không chắc chắn.
- [x] Bổ sung kiểm tra đáp án AI, phát hiện lựa chọn/đáp án không hợp lệ trước khi nhập vào hệ thống.
- [x] Thêm lịch sử học theo tài liệu/nguồn, gồm số Flashcard, số đề, số lần làm, điểm cao nhất/trung bình và câu sai nhiều.
- [x] Thêm chế độ “Tôi sắp kiểm tra” để ưu tiên nội dung yếu, câu sai, thẻ chưa nhớ và nội dung gần đây chưa ôn theo số ngày còn lại.
- [x] Thêm lời chào “Ong hôm nay thế nào?” theo ngày và cho phép Admin quản lý trong kho lời động viên.
- [x] Mở rộng nguồn bắt buộc cho từng mốc lịch sử, hiển thị cảnh báo nội dung quản trị thêm nhưng chưa xác minh.
- [x] Mở rộng animation ghép hình thành ba giai đoạn, có trạng thái hoàn thành, aria-live và reduced-motion.

## Verification follow-up sau phiên Ong/111

- [x] Tạo fixture học tập không nhạy cảm cho tài khoản thử nghiệm, lưu một deck và một quiz attempt qua luồng thật, reload/relogin rồi xác nhận cả hai payload được hydrate nguyên vẹn.
- [x] Viết test render/integration có React DOM cho QuizEnhanced với fixture persistence và assert đề, lịch sử, aria contract; Home/create-Quiz được khóa bởi contract test hiện có.
- [x] Chạy audit keyboard đầy đủ theo từng form và ghi thứ tự focus cụ thể cho login, AI Studio, Flashcard, Admin, search và import/export.
- [x] Kiểm tra trực tiếp stylesheet/Preview: nhánh prefers-reduced-motion tồn tại, các lớp fragment/assembly có rule tương ứng và trạng thái rỗng không chạy animation.

## Follow-up evidence gaps

- [x] Chạy và ghi biên bản Tab order thực tế cho AI Studio và Admin Panel, ít nhất các control chính theo thứ tự focus.
- [x] Sau khi relogin Ong/111, mở lại Flashcard và Đề kiểm tra để xác nhận trực tiếp deck fixture và quiz attempt vẫn tồn tại.
- [x] Cập nhật ghi chú Persistence verification evidence để xác nhận fixture đã hydrate sau reload/relogin.

## Final handoff follow-up

- [x] Lưu checkpoint/final handoff mới sau QuizEnhanced.render.test.ts, import React cho SSR render test, manual notes và todo cập nhật; version handoff: 22c77d0e.
- [x] Giữ minh bạch rằng reduced-motion đã được kiểm tra qua CSS/Preview và contract test; media emulation trực tiếp chưa được thực hiện vì công cụ không hỗ trợ.

## AI Data Import — mô hình AI bên ngoài

- [x] Tạo khu vực riêng “AI Data Import / Nhập dữ liệu bằng AI”, tách rõ vai trò AI ngoài và bộ chuyển đổi học tập của website.
- [x] Tạo bộ sinh prompt AI cho PDF/Word/Excel/ảnh/văn bản/đề cũ/nội dung bài học, cho phép chọn mục tiêu Đề thi, Flashcard, Đề + Flashcard hoặc bộ câu hỏi ôn tập.
- [x] Cho phép cấu hình loại câu trắc nghiệm, đúng/sai, trả lời ngắn, kết hợp; số lượng tự động/10/20/30/tùy chỉnh; yêu cầu giữ nguyên đáp án và cảnh báo mâu thuẫn nguồn.
- [x] Thêm nút sao chép và tạo lại prompt AI theo yêu cầu mới, không tự gửi tài liệu sang AI ngoài từ website.
- [x] Thêm textarea “Dán dữ liệu AI”, parser cho cấu trúc chuẩn QUESTION hoặc JSON tương thích, và không tự suy diễn nội dung ngoài dữ liệu đã dán.
- [x] Validation dữ liệu dán: thiếu câu hỏi/đáp án, loại câu sai, lựa chọn không hợp lệ, đáp án không xác định, câu trùng, giải thích/nguồn tùy chọn và danh sách lỗi có thể sửa/xóa.
- [x] Preview dữ liệu hợp lệ theo tổng số câu, phân bố loại câu, tỷ lệ có đáp án/giải thích và cảnh báo trước khi tạo nội dung.
- [x] Chuyển dữ liệu chuẩn hợp lệ thành Quiz, Flashcard hoặc cả hai; hỗ trợ ánh xạ câu hỏi–đáp án–giải thích và lưu vào profile hiện tại.
- [x] Bảo đảm giới hạn tối đa 27 Flashcard cho mỗi lần AI import nhưng không giới hạn số bộ và tổng số thẻ trong hệ thống.
- [x] Thêm lịch sử nhập AI theo tài liệu/ngày/mục tiêu/số lượng/prompt/dữ liệu/Quiz/Flashcard, có xem/nạp lại, sao chép prompt và xóa.
- [x] Thêm contract/domain tests cho prompt, parser, validation, preview, conversion, giới hạn 27 và không có dữ liệu mẫu mặc định.

## Căn chỉnh giao diện theo pasted_content_2.txt

- [x] Đồng bộ token nền kem, card trắng, mật ong, nâu ấm và các màu semantic xanh lá/xanh dương/tím/cam mà vẫn giữ tương phản light/dark.
- [x] Tinh chỉnh sidebar/header và điều hướng mobile theo tinh thần góc học tập riêng, tránh phong cách app quản lý công việc.
- [x] Làm mới dashboard với lời chào Ong, bốn chỉ số ngày học và card tiến trình hôm nay có CTA học tiếp.
- [x] Chuẩn hóa nhận diện mascot Ong qua logo, trạng thái học và phản hồi tích cực, không dùng emoji cho icon chức năng.
- [x] Tinh chỉnh card Flashcard/Quiz/AI Data Import theo khoảng trắng, bo góc, đổ bóng và animation nhẹ đúng đặc tả.
- [x] Kiểm tra responsive desktop/tablet/mobile cùng focus-visible và reduced-motion sau khi cập nhật giao diện.

## Xuất bản standalone một tệp HTML

- [x] Kiểm kê index.html hiện có và lập ma trận các luồng bắt buộc cho bản HTML độc lập.
- [x] Hợp nhất xác thực cục bộ, hồ sơ theo tài khoản, import/export JSON và localStorage vào một file HTML.
- [x] Bảo đảm Flashcard bốn chế độ, Quiz nhiều loại câu, báo cáo, lịch sử attempt và ôn lại hoạt động thực tế trong file HTML.
- [x] Bảo đảm thành tích, XP, streak, vòng quay, mảnh ghép, bảo tàng nhân vật và lịch sử học hoạt động thực tế trong file HTML.
- [x] Bảo đảm AI Data Import cục bộ có sinh prompt, parser JSON/QUESTION, validation, preview, chuyển đổi và lịch sử import trong file HTML.
- [x] Nhúng toàn bộ CSS/JavaScript, không phụ thuộc CDN/runtime/server và kiểm thử bằng mở trực tiếp tệp qua file://.
- [x] Xuất tệp HTML hoàn chỉnh kèm ghi chú giới hạn rõ ràng: dữ liệu chỉ lưu localStorage của trình duyệt.

## Nhập/tải JSON nhiều nhân vật trong standalone

- [x] Cho phép dán JSON hoặc chọn tệp `.json` chứa một mảng nhiều nhân vật.
- [x] Kiểm tra schema bắt buộc: name, sourceName, sourceUrl, summary và fragmentTotal; kiểm tra URL, số mảnh và timeline tùy chọn.
- [x] Hiển thị preview số bản ghi hợp lệ/lỗi, lỗi theo nhân vật/trường và không tự nhập dữ liệu không hợp lệ.
- [x] Xử lý nhân vật trùng id/tên với lựa chọn bỏ qua hoặc thay thế, không làm mất dữ liệu khác.
- [x] Lưu toàn bộ nhân vật hợp lệ vào localStorage, cập nhật Bảo tàng và hỗ trợ xuất lại JSON.
- [x] Kiểm thử trực tiếp bằng file:// với dữ liệu nhiều nhân vật và bàn giao tệp standalone cập nhật.


## Đổi nhận diện thành Góc nhỏ của Ong
- [x] Đổi tên trang hiển thị thành “Góc nhỏ của Ong” ở website chính và bản standalone.
- [x] Cập nhật title/favicon/logo để dùng icon Ong nhất quán, không phá responsive hoặc dark mode.
- [x] Kiểm tra tiêu đề trình duyệt, logo/header và bản standalone sau reload; lưu checkpoint bàn giao.


## Ẩn mã quản trị khỏi giao diện đăng nhập
- [x] Loại bỏ mọi hướng dẫn hiển thị mã 111 khỏi website chính và bản standalone.
- [x] Thay placeholder và thông báo đăng nhập bằng “Nhập mã thành viên được cấp”.
- [x] Rà soát chuỗi hiển thị, chạy test và lưu checkpoint sau khi xác nhận không còn lộ mã quản trị.


## Nâng Pomodoro thành module chính trong Tiến trình học tập
- [x] Đưa Pomodoro thành mục chính trong khu vực Tiến trình học tập và giữ liên kết điều hướng rõ ràng.
- [x] Bổ sung đồng hồ lớn, chế độ Học/Nghỉ ngắn/Nghỉ dài, preset 25/5, 50/10, 60/15, thời lượng tùy chỉnh và số phiên.
- [x] Bổ sung điều khiển bắt đầu, tạm dừng, bắt đầu lại, bỏ qua phiên, kết thúc và tự động/chuyển thủ công.
- [x] Lưu lịch sử từng phiên gồm ngày, thời gian bắt đầu/kết thúc, thời lượng, môn học, nội dung, số thứ tự và trạng thái hoàn thành.
- [x] Kết nối phiên hoàn thành với XP, tiến trình, điều kiện thành tích và cơ hội nhận mảnh ghép theo ngưỡng xa, không tạo thành tích cho từng phiên.
- [x] Liên kết trực tiếp từ Pomodoro sang Flashcard và Đề kiểm tra nhưng giữ hai module đó độc lập.
- [x] Bổ sung thống kê tổng phiên, tổng phút, hoàn thành/bỏ dở, trung bình, môn học nổi bật, hôm nay/tuần/tháng và chuỗi ngày.
- [x] Bổ sung biểu đồ phút theo ngày và thời gian theo môn học.
- [x] Bổ sung popup hoàn thành phiên/toàn bộ chuỗi với thông tin XP và mảnh ghép nếu có.
- [x] Bổ sung khu vực âm thanh Pomodoro: bật/tắt, âm lượng, nghe thử, đặt mặc định và âm thanh tùy chọn nếu phù hợp persistence hiện tại.
- [x] Viết/cập nhật Vitest cho luật phiên, persistence, phần thưởng theo ngưỡng và các liên kết điều hướng; kiểm tra responsive/accessibility.


## Cách nhận mảnh ghép
- [x] Đối chiếu và chuẩn hóa các nguồn nhận mảnh: Flashcard, Quiz, Pomodoro, Thành tích, chuỗi học, mục tiêu, ôn câu sai, thử thách, vòng quay, chương học, thành tích đặc biệt và sự kiện.
- [x] Hiển thị hướng dẫn Cách nhận mảnh ghép trong khu vực Mảnh ghép, phân biệt mảnh thường/hiếm/đặc biệt/sự kiện và nhấn mạnh các mốc đủ xa.
- [x] Bảo đảm luật không thưởng một mảnh cho mỗi thẻ hoặc mỗi Pomodoro; giữ phần thưởng theo mốc, theo kết quả và theo giới hạn tài khoản.
- [x] Bổ sung/kiểm tra phần thưởng theo chuỗi học, mục tiêu, ôn câu sai, challenge, chapter và các nguồn đặc biệt phù hợp dữ liệu hiện có.
- [x] Hiển thị animation/feedback khi nhận mảnh và liên kết tới Bộ sưu tập → Nhân vật → Tiến trình ghép hình.
- [x] Viết test cho mốc thưởng, độ hiếm, giới hạn tần suất, persistence và cô lập dữ liệu thành viên; cập nhật tài liệu và checkpoint.


## Đặc tả quy trình mảnh ghép và dữ liệu nhân vật có nguồn
- [x] Chuẩn hóa state machine: học → nhận mảnh → mảnh vào kho → chọn nhân vật → dùng mảnh → đủ mảnh → ghép hình → mở khóa nhân vật → đọc lịch sử.
- [x] Phân biệt rõ mảnh đã nhận, mảnh đang sở hữu, mảnh đã dùng để ghép và trạng thái nhân vật theo từng tài khoản.
- [x] Hiển thị tiến trình từng nhân vật: ảnh che mảnh, số đã có/còn thiếu, phần trăm, độ hiếm, cách nhận tiếp theo và nút ghép hình khi đủ mảnh.
- [x] Thêm animation/feedback cho nhận mảnh, dùng mảnh, ghép hoàn chỉnh và mở khóa; hỗ trợ reduced-motion.
- [x] Mở hồ sơ nhân vật độc lập sau khi hoàn thành, gồm thông tin cơ bản, ảnh, tiểu sử, timeline và nguồn kiểm chứng.
- [x] Chuẩn hóa schema nhân vật có characterId, characterName, coverImage, imageSource, biography, timeline, sources, totalPieces, pieces và unlockStatus.
- [x] Chuẩn hóa schema nguồn ảnh và nguồn tư liệu: tên, URL/thông tin sách, loại, tác giả, ngày xuất bản, ngày truy cập, chú thích và trạng thái xác minh.
- [x] Mở rộng Admin thêm/sửa/xóa/ẩn-hiện/sao chép/preview nhân vật, tải ảnh JPG/PNG/WebP và cảnh báo thiếu nguồn.
- [x] Cho phép Admin dán tư liệu, gắn nguồn và đánh dấu đã có nguồn/chưa kiểm chứng/thiếu nguồn; không tự coi nội dung thiếu nguồn là đã xác minh.
- [x] Bảo đảm dữ liệu nhân vật có thể dùng chung nhưng mảnh, tiến trình, trạng thái ghép và mở khóa được cô lập theo từng thành viên.
- [x] Viết đặc tả vận hành và test để AI/lập trình viên sau này không nhầm mảnh là vật trang trí hoặc mở khóa theo nhóm nhân vật.


## Hệ thống Làm đề — 3 chế độ
- [x] Chuẩn hóa ba chế độ độc lập: Làm đề nhanh trên web, Hiểu tận gốc trên web và Tự làm đề–Tập trung trên giấy.
- [x] Làm đề nhanh: câu hỏi, trả lời, đúng/sai, điểm, timer, thống kê và giải thích theo cài đặt.
- [x] Hiểu tận gốc: bổ sung cách tôi suy nghĩ, kiến thức, dữ kiện, công thức, lời giải từng bước, vì sao, lỗi, cách khác, câu hỏi đào sâu và 5 tầng hiểu.
- [x] Tự làm đề–Tập trung: không hiển thị câu hỏi, timer/focus mode, mục tiêu, âm thanh, tạm dừng tùy phiên, đánh dấu chắc chắn/không chắc/sai/bỏ trống, nhập kết quả sau phiên và bản đồ lỗi.
- [x] Lưu lịch sử phiên đề giấy gồm thời gian, kết quả, ghi chú, cách suy nghĩ, câu cần học lại và ảnh bài làm nếu được hỗ trợ an toàn.
- [x] Cập nhật prompt AI hai lớp: bộ câu hỏi + dữ liệu giải thích sâu; thiếu căn cứ phải đánh dấu cần xác minh, không tự bịa.
- [x] Tạo giao diện chọn chế độ và điều hướng riêng, không gộp đề giấy với đề online.
- [x] Viết test cho mode, payload giải thích, timer đề giấy, trạng thái chắc chắn và persistence lịch sử.


## Chuỗi mở rộng sau hệ thống Làm đề: 4 → 3 → 2
- [x] Hoàn thiện các khoảng trống theo đặc tả Làm đề và tài liệu vận hành dành cho AI/lập trình viên.
- [x] Thêm prompt và schema giải thích sâu riêng cho các câu sai sau phiên đề.
- [x] Thêm luồng tạo, xem, lưu và dùng lại giải thích sâu AI từ câu sai.
- [x] Thêm biểu đồ tiến bộ theo chế độ Làm đề và theo chủ đề/môn học dựa trên dữ liệu lịch sử thật.
- [x] Viết test, kiểm tra responsive/accessibility và lưu checkpoint cho chuỗi thay đổi.


## Nâng cấp báo cáo và ôn tập từ giải thích câu sai
- [x] Thêm nút tạo Flashcard trực tiếp từ phần giải thích sâu của từng câu sai, dùng persistence profile hiện tại.
- [x] Thêm bộ lọc biểu đồ tiến bộ theo khoảng thời gian, môn học và chế độ làm đề.
- [x] Thêm nút xuất báo cáo tiến bộ bằng bản in/PDF, chỉ dùng dữ liệu lịch sử thật của thành viên hiện tại.
- [x] Viết test cho tạo Flashcard, bộ lọc và luồng print/PDF; kiểm tra responsive/accessibility và lưu checkpoint.


## Rà soát giao diện theo đặc tả pasted_content_9
- [x] Đối chiếu phạm vi module và điều hướng, loại bỏ nhãn/khối có cảm giác quản lý công việc hoặc dashboard doanh nghiệp nếu còn hiển thị.
- [x] Căn chỉnh palette đỏ–xanh lá–kem; giữ vàng mật ong làm màu nhấn và bảo đảm contrast ở light/dark mode.
- [x] Căn chỉnh sidebar desktop, mobile navigation, header Trang chủ và card tiến trình theo đặc tả Ong.
- [x] Rà soát giao diện AI, Flashcard, Đề web, Đề giấy, Hiểu tận gốc, Tiến trình, Thành tích và Mảnh ghép theo các điều kiện đã ghi nhận.
- [x] Kiểm tra responsive/accessibility bằng test và preview desktop/mobile; cập nhật tài liệu và checkpoint.


## UI audit theo pasted_content_9 — kết quả
- [x] Đã đối chiếu phạm vi module và giữ điều hướng theo học tập lịch sử, không thêm Todo/Habit/Journal/Schedule.
- [x] Đã căn chỉnh palette đỏ–xanh lá–kem, giữ vàng mật ong làm điểm nhấn và cập nhật trạng thái dark mode.
- [x] Đã sửa nền màn hình đăng nhập về kem/trắng; nút hành động dùng đỏ, trạng thái/hướng dẫn dùng xanh lá.
- [x] Đã rà soát sidebar, header, dashboard, AI Studio, Flashcard, ba chế độ Làm đề, Tiến trình, Thành tích và Mảnh ghép theo các component đang được route thực tế sử dụng.
- [x] Đã kiểm tra desktop 1280×720 và mobile 390×844; TypeScript sạch, 32 file với 94 test passed.


## Pomodoro Web 1 — kết quả rà soát
- [x] Đã tái cấu trúc màn hình chính theo hướng tối giản, đặt đồng hồ và trạng thái làm trọng tâm.
- [x] Đã bổ sung trạng thái Sẵn sàng/Đang tập trung/Đang nghỉ/Hoàn thành/Tạm dừng, xác nhận reset và kết thúc sớm.
- [x] Đã chuẩn hóa preset, chu kỳ 4 phiên, nghỉ dài, metadata hoạt động học và liên kết Flashcard/Quiz.
- [x] Đã bổ sung Audio Center, tùy chọn âm báo, thống kê/lịch sử và responsive mobile.
- [x] TypeScript sạch; 32 file với 94 test passed; screenshot mobile không overflow ở màn hình đăng nhập.
- [x] Đã ghi nhận giới hạn: preview hiện không có phiên đăng nhập nên chưa chụp được màn hình Pomodoro sau đăng nhập trong môi trường này.
