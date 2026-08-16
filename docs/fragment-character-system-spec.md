# Đặc tả chuẩn: Mảnh ghép và Nhân vật lịch sử

## Mục tiêu

Mảnh ghép là **phần thưởng học tập dùng để mở khóa nội dung lịch sử**, không phải vật phẩm trang trí. Vòng lặp chính của hệ thống là:

> Học → đạt điều kiện → nhận mảnh → mảnh vào kho thành viên → chọn nhân vật → dùng mảnh để ghép → hoàn thành hình → mở khóa đúng nhân vật → đọc hồ sơ và nguồn lịch sử → tiếp tục học.

Mỗi nhân vật là một hồ sơ độc lập. Hoàn thành Nguyễn Thị Bình chỉ mở Nguyễn Thị Bình; không mở cả nhóm nhân vật.

## State machine bắt buộc

| Trạng thái | Ý nghĩa | Điều kiện chuyển tiếp |
|---|---|---|
| `locked` | Thành viên chưa có mảnh của nhân vật | Nhận mảnh đầu tiên chuyển sang `assembling` |
| `assembling` | Đã sở hữu một phần mảnh; mảnh vẫn còn trong kho | Nhận đủ tổng số mảnh chuyển sang `ready` |
| `ready` | Đủ mảnh và có thể ghép hình | Bấm “Ghép hình hoàn chỉnh” chuyển sang `unlocked` |
| `unlocked` | Mảnh đã được dùng để hoàn thành hình; hồ sơ nhân vật mở | Có thể đọc tiểu sử, timeline và nguồn |

`collectedPieceIds` là các mảnh thành viên đã nhận. `usedPieceIds` là các mảnh đã dùng cho lần ghép. Không được suy diễn `unlocked` chỉ vì một nguồn học vừa hoàn thành; phải có đủ mảnh và thao tác ghép thành công.

## Phân tách dữ liệu

`AppConfig.characters` là dữ liệu nhân vật dùng chung. `ProfileState.characterProgress` và `ProfileState.fragments` là dữ liệu riêng của từng thành viên. Khi thành viên mới đăng nhập, tiến trình nhân vật phải bắt đầu ở `locked`, không dùng tiến trình của thành viên khác.

```ts
characterProgress[characterId] = {
  characterId,
  collectedPieceIds: string[],
  usedPieceIds: string[],
  status: "locked" | "assembling" | "ready" | "unlocked",
  assembledAt: string | null,
  unlockedAt: string | null
}
```

## Schema nhân vật chuẩn

Mọi nhân vật mới phải có `id` dạng slug, `name`, `fragmentTotal`, `timeline`, `biography`, thông tin cơ bản, ảnh và nguồn. `pieces` nếu được cung cấp phải có đúng `characterId`, vị trí duy nhất và độ hiếm `common | rare | special | legendary`. Khi chưa có danh sách mảnh chi tiết, hệ thống tạo ID ổn định theo mẫu `{characterId}-piece-{position}`; không tạo ngẫu nhiên mỗi lần render.

```ts
{
  id, name, aliases, birthYear, deathYear, hometown, role,
  categories, summary, biography, sourceName, sourceUrl,
  imageUrl, imageSource, coverImage, images, sources,
  timeline, fragmentTotal, pieces, unlockContent,
  verificationStatus: "verified" | "unverified" | "missing",
  visibility: "visible" | "hidden", updatedAt
}
```

## Nguồn ảnh và nguồn tư liệu

Nguồn ảnh phải có tên nguồn và URL hoặc ghi chú xác định. Nguồn tư liệu có `name`, `type`, URL hoặc thông tin sách, tác giả, ngày xuất bản, ngày truy cập, ghi chú và trạng thái xác minh. Nội dung được dán nhưng không có nguồn phải hiển thị cảnh báo `missing` hoặc `unverified`; không được tự gắn nhãn đã xác minh và không được tự lấy ảnh trên Internet khi Admin chưa cung cấp nguồn.

Các loại nguồn hợp lệ gồm `encyclopedia`, `press`, `government`, `book`, `archive` và `other`. Timeline phải gắn được `sourceIds` khi có nguồn tương ứng.

## Quy tắc trao mảnh

Nguồn trao mảnh gồm Flashcard, Quiz, Pomodoro, Thành tích, chuỗi học, mục tiêu, ôn câu sai, thử thách, vòng quay, chương học, thành tích đặc biệt và sự kiện. Mỗi nguồn phải dùng mốc cấu hình cách xa nhau; không dùng quy tắc một Flashcard bằng một mảnh hoặc một phiên Pomodoro bằng một mảnh. Phần thưởng phải đi qua luật chống trùng, giới hạn theo ngày/tài khoản và ghi nhận vào đúng profile thành viên.

## Quy tắc giao diện

Bộ sưu tập phải hiển thị ảnh đang che bởi mảnh, số đã có/còn thiếu, phần trăm, độ hiếm, mảnh đã dùng, cách nhận tiếp theo và trạng thái nguồn. Chỉ khi `status === "ready"` mới hiển thị nút “Ghép hình hoàn chỉnh”. Sau khi ghép thành công phải hiển thị animation/feedback, nút “Xem nhân vật” và hồ sơ độc lập gồm thông tin cơ bản, ảnh, tiểu sử, timeline và nguồn có thể mở trực tiếp. Mọi animation phải có nhánh `prefers-reduced-motion`.

## Hợp đồng cho AI/lập trình viên

Không đổi tên `characterId`, không dùng tên hiển thị làm khóa, không dùng bộ đếm mảnh chung cho mọi thành viên, không mở khóa theo nhóm, không coi mảnh là vật trang trí, không đánh dấu nguồn thiếu là đã xác minh và không tạo mảnh mới trong render. Mọi thay đổi schema phải cập nhật type, normalize, test cô lập dữ liệu và tài liệu này cùng một lần.
