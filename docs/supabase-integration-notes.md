# Ghi chú tích hợp Supabase

Nguồn tham khảo chính thức:

- https://supabase.com/docs/guides/getting-started/api-keys — Publishable key có dạng `sb_publishable_...`, an toàn để nhúng trong ứng dụng web; secret key chỉ dùng ở backend và có thể bỏ qua RLS.
- https://supabase.com/docs/guides/database/postgres/row-level-security — Bảng trong schema public phải bật Row Level Security; các policy cần giới hạn theo `auth.uid()` và vai trò `anon`/`authenticated`.
- https://supabase.com/docs/guides/api — Data REST API nằm tại `https://<project_ref>.supabase.co/rest/v1/`, được sinh từ schema và tuân theo Postgres grants/RLS.

Áp dụng cho Study Historia: chỉ đưa Publishable key vào client; không yêu cầu service-role/secret key. Dữ liệu cá nhân phải có khóa chủ sở hữu và policy RLS theo người dùng; dữ liệu quản trị cần kiểm tra role ở backend hoặc policy an toàn, không dựa vào giá trị do client tự gửi.
