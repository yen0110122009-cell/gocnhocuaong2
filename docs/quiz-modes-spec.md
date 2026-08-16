# Đặc tả vận hành Hệ thống Làm đề

## 1. Phạm vi và nguyên tắc

Hệ thống Làm đề có ba chế độ độc lập. **Làm đề nhanh** và **Hiểu tận gốc** hiển thị câu hỏi trên màn hình. **Tự làm đề–Tập trung trên giấy** chỉ dùng website để đặt mục tiêu, chạy thời gian và ghi nhận kết quả sau khi người học làm trên giấy. Không được gộp ba chế độ thành một luồng có trạng thái mơ hồ.

Mỗi phiên phải gắn với `accountId`, `quizId` hoặc mã nguồn đề, `mode`, `startedAt`, `completedAt`, `durationSeconds` và trạng thái kết thúc. Dữ liệu của thành viên chỉ được lưu trong profile của chính tài khoản thông qua persistence hiện hành. Một phiên chưa hoàn thành không được tính là kết quả đúng/sai hoàn chỉnh.

## 2. Ma trận chế độ

| Chế độ | Hiển thị câu hỏi | Nhập đáp án | Timer | Kết quả | Mục tiêu |
|---|---|---|---|---|---|
| Làm đề nhanh | Có | Trực tiếp trên web | Có hoặc không tùy đề | Đúng/sai, điểm, thống kê, giải thích | Kiểm tra nhanh và luyện tốc độ |
| Hiểu tận gốc | Có | Trực tiếp trên web | Tùy chọn | Kết quả kèm lời giải 5 tầng | Hiểu nguyên nhân, dữ kiện và cách suy luận |
| Tự làm đề–Tập trung | Không | Nhập sau phiên | Bắt buộc theo phiên | Tự nhập kết quả, bản đồ lỗi, ghi chú | Mô phỏng thi giấy và rèn tập trung |

## 3. Quy trình Làm đề nhanh

Người học chọn đề, cấu hình timer và tùy chọn hiển thị giải thích. Hệ thống hiển thị từng câu, ghi đáp án, trạng thái đánh dấu và thời gian. Khi nộp, hệ thống chấm theo đáp án chuẩn của câu; câu không trả lời là **bỏ qua**, không được coi là sai do thiếu dữ liệu. Kết quả gồm điểm, số đúng, sai, bỏ qua, độ chính xác, thời gian, câu cần ôn và giải thích theo cài đặt.

## 4. Quy trình Hiểu tận gốc

Chế độ này dùng cùng bộ câu hỏi nhưng mở thêm dữ liệu `deepExplanation`. Sau mỗi câu hoặc sau khi nộp, giao diện có thể hiển thị năm tầng: **cách tôi suy nghĩ**, **kiến thức nền**, **dữ kiện cần nhớ**, **lời giải từng bước**, và **vì sao các lựa chọn khác sai**. Có thể bổ sung lỗi thường gặp, cách giải khác, câu hỏi đào sâu và liên hệ thực tế.

Nếu dữ liệu giải thích thiếu nguồn hoặc có `needsVerification: true`, giao diện phải gắn nhãn **Cần xác minh**. Không được biến nội dung do AI suy luận thành sự thật đã kiểm chứng.

## 5. Quy trình Tự làm đề–Tập trung trên giấy

Trước khi bắt đầu, người học chọn đề, mục tiêu, thời lượng, âm thanh và cho phép hoặc không cho phép tạm dừng. Trong phiên, câu hỏi và đáp án không được render. Khi kết thúc, người học nhập số câu chắc chắn, không chắc, sai và bỏ trống; các nhóm phải không chồng lấn và tổng không vượt quá tổng số câu. Người học có thể ghi chú, cách suy nghĩ, câu cần học lại và bản đồ lỗi.

Phiên giấy chỉ được tính là đã hoàn thành khi người học xác nhận kết quả. Ảnh bài làm, nếu được hỗ trợ, chỉ là tài liệu tham khảo của phiên và phải đi qua quy trình lưu trữ an toàn; không tự động chấm ảnh khi chưa có chức năng OCR/chấm được xác nhận.

## 6. Schema giải thích sâu

Mỗi câu có thể có dữ liệu sau:

```json
{
  "deepExplanation": {
    "myThinking": "Cách suy nghĩ hợp lý để tiếp cận câu hỏi",
    "knowledge": "Kiến thức nền cần biết",
    "facts": ["Dữ kiện 1", "Dữ kiện 2"],
    "formula": "Công thức hoặc quy tắc nếu có",
    "stepByStep": ["Bước 1", "Bước 2"],
    "why": "Vì sao đáp án đúng",
    "mistakes": ["Lỗi thường gặp"],
    "alternative": "Cách tiếp cận khác nếu có",
    "deepQuestions": [{ "question": "Câu hỏi đào sâu", "answer": "Câu trả lời" }],
    "layers": ["Tóm tắt", "Nền tảng", "Phân tích", "Vận dụng", "Mở rộng"],
    "source": "Nguồn tư liệu hoặc căn cứ",
    "needsVerification": false
  }
}
```

Các trường không có dữ liệu phải để trống hoặc bỏ qua, không được tự tạo nội dung giả. `needsVerification` là cờ an toàn nội dung, không phải bằng chứng rằng nội dung sai.

## 7. Prompt AI hai lớp

Lớp một yêu cầu AI tạo bộ câu hỏi theo cấu hình môn học, chủ đề, số câu, độ khó, loại câu và thời lượng. Lớp hai yêu cầu AI tạo `deepExplanation` cho từng câu, giữ nguyên `questionId`, đáp án chuẩn và nguồn được cung cấp. AI phải trả JSON hợp lệ, không đổi đáp án gốc, không thêm câu ngoài yêu cầu và đánh dấu `needsVerification` khi thiếu nguồn hoặc không chắc chắn.

Website chỉ làm nhiệm vụ nhập, kiểm tra schema, xem trước, đánh dấu cảnh báo và lưu dữ liệu hợp lệ. Website không tự gửi tài liệu riêng tư sang AI bên ngoài trong luồng import chuẩn.

## 8. Quy tắc persistence và tương thích

Payload cũ không có `deepExplanation`, `mode` hoặc trường phiên giấy vẫn phải đọc được. Khi normalize, trường mới dùng giá trị mặc định an toàn; không được xóa `answers`, `flagged`, `correct`, `accuracy`, `durationSeconds` hoặc lịch sử attempt hiện có. Mỗi mode phải có test riêng cho khởi tạo, hoàn thành, bỏ dở và khôi phục sau reload.

## 9. Tiêu chí nghiệm thu

Một thay đổi đạt yêu cầu khi người dùng phân biệt được ba mode ngay từ màn hình chọn chế độ; đề nhanh chấm đúng và lưu lịch sử; Hiểu tận gốc hiển thị đúng cờ xác minh; đề giấy không lộ câu hỏi trong phiên; dữ liệu cũ vẫn khôi phục; giao diện có nhãn bàn phím và reduced-motion; và test kiểm chứng payload không phụ thuộc dữ liệu giả.
