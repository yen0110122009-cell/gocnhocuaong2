# 1. SOURCE COVERAGE REPORT

## 1.1. Phạm vi và phương pháp

Báo cáo này kiểm tra ba nguồn liên quan trực tiếp: **`111.txt`** với 1.350 dòng, **`study-quest-standalone.html`** với 5.363 dòng, và trạng thái repository GitHub đã được chọn. File HTML đính kèm thực tế là một đặc tả dạng Markdown có đuôi `.html`, không chứa thẻ HTML; vì vậy toàn bộ nội dung văn bản, ví dụ, flow, field, bảng, checklist và đoạn hội thoại đều được xem là source có giá trị, không loại trừ theo hình thức file.

Tổng số dòng vật lý được kiểm kê là **6.713 dòng**. Các dòng trắng, dấu phân cách, sơ đồ ASCII và ví dụ được gắn vào yêu cầu liền kề hoặc requirement tổng hợp của cùng đoạn; không coi chúng là “chỉ minh họa” khi chúng mô tả hành vi, dữ liệu hoặc giao diện cụ thể.

| Chỉ số | Kết quả | Bằng chứng |
|---|---:|---|
| SOURCE_TOTAL | 6.713 dòng | `111.txt`: 1.350; `study-quest-standalone.html`: 5.363 |
| MAPPED | 6.713 dòng | Ma trận bao phủ theo các đoạn liên tục bên dưới |
| UNMAPPED_SOURCE | **0** | Không có khoảng dòng nào nằm ngoài một mapping |
| Requirement catalog | REQ-0001 đến REQ-0050 | Không bỏ số |
| Decision catalog | DEC-0001 đến DEC-0008 | Quyết định và điểm cần người dùng chốt |
| Conflict catalog | CONFLICT-0001 đến CONFLICT-0008 | Mỗi conflict có `RESOLVED` hoặc `NEEDS_DECISION` |
| Implementation được phép bắt đầu | **NO** | Còn các điểm `NEEDS_DECISION` và repository HEAD hiện rỗng |

## 1.2. SOURCE_COVERAGE_MATRIX — `111.txt`

Các khoảng dưới đây **liền nhau và phủ từ dòng 1 đến dòng 1.350**. Do đó, mọi dòng trong file, kể cả dòng phân cách và ví dụ nằm trong section, đều nhận ít nhất một REQ-ID, DECISION-ID hoặc CONFLICT-ID.

| Dòng source | Section | Mapping |
|---:|---|---|
| 1–22 | Preamble, mục tiêu và source authority | REQ-0004, REQ-0005, REQ-0006, DEC-0008 |
| 23–81 | A–B: đọc toàn bộ source và source-line coverage | REQ-0004, REQ-0005 |
| 82–157 | C–D: requirement ID, catalog fields và loại requirement | REQ-0006 |
| 158–217 | E–F: merge detail và conflict engine | REQ-0007, REQ-0008 |
| 218–261 | G–H: conflict bắt buộc rà soát và final decision rule | REQ-0008, CONFLICT-0001 đến CONFLICT-0007 |
| 262–397 | I–M: 900 achievements, source detail, 400 titles và achievement experience | REQ-0009 đến REQ-0014 |
| 398–493 | N–Q: piece resource, tier conflict, use case và transaction | REQ-0015, REQ-0016, REQ-0017 |
| 494–522 | R: historical character và image integrity | REQ-0018 |
| 523–590 | S–U: source integrity, event và special quest | REQ-0019, REQ-0020 |
| 591–615 | V–W: comeback và study milestones | REQ-0020, REQ-0033 |
| 616–662 | X–Y: Admin UI và AI approval | REQ-0021, REQ-0022 |
| 663–741 | Z–AC: content repository, content fields, module context và AI content | REQ-0023, REQ-0024, REQ-0025, REQ-0026 |
| 742–758 | AD: mascot states và reaction | REQ-0027 |
| 759–779 | AE: anti-procrastination | REQ-0028 |
| 780–802 | AF: Pomodoro, combo, critical moment và reward integration | REQ-0029 |
| 803–820 | AG: Audio Center và mixer | REQ-0030 |
| 821–840 | AH: mini player và pin | REQ-0031 |
| 841–868 | AI: background, animation, time-of-day và brand palette | REQ-0032 |
| 869–887 | AJ–AK: XP và level | REQ-0033 |
| 888–903 | AL: comeback UX | REQ-0033 |
| 904–930 | AM–AN: analytics và daily reflection | REQ-0034 |
| 931–946 | AO: Supabase source of truth | REQ-0035 |
| 947–962 | AP: RLS | REQ-0036 |
| 963–974 | AQ: multi-device sync | REQ-0037 |
| 975–993 | AR: GitHub deliverables và secrets | REQ-0038 |
| 994–1007 | AS: soft delete và trash | REQ-0021 |
| 1008–1022 | AT: transparency, không hidden mechanics | REQ-0039, REQ-0011 |
| 1023–1037 | AU: UI traceability | REQ-0040 |
| 1038–1045 | AV: logic traceability | REQ-0041 |
| 1046–1058 | AW: database traceability | REQ-0042 |
| 1059–1070 | AX: security traceability | REQ-0043 |
| 1071–1085 | AY: acceptance test | REQ-0044 |
| 1086–1100 | AZ: QA-01 | REQ-0045 |
| 1101–1122 | BA: QA-02 | REQ-0046 |
| 1123–1147 | BB: QA-03 | REQ-0047 |
| 1148–1164 | BC: concurrency/extreme test 1 | REQ-0047 |
| 1165–1181 | BD: malicious input/extreme test 2 | REQ-0047 |
| 1182–1203 | BE: final source audit | REQ-0048 |
| 1204–1226 | BF: zero-missing gate | REQ-0048, REQ-0049 |
| 1227–1240 | BG: evidence | REQ-0049 |
| 1241–1252 | BH: không tự đánh giá PASS | REQ-0049 |
| 1253–1296 | BI: final report fields | REQ-0049 |
| 1297–1317 | BJ: blocked report nếu chưa đạt | REQ-0049 |
| 1318–1347 | BK: quy trình 23 bước | REQ-0050 |
| 1348–1350 | End marker | REQ-0004, REQ-0050 |

## 1.3. SOURCE_COVERAGE_MATRIX — `study-quest-standalone.html`

Các khoảng dưới đây **liền nhau và phủ từ dòng 1 đến dòng 5.363**.

| Dòng source | Khối nội dung | Mapping |
|---:|---|---|
| 1–511 | Content Repository: loại nội dung, context, mascot, priority, pin, note, CRUD, trash, import/export, search/filter, statistics, Bloomy approval và self-writing | REQ-0023 đến REQ-0026 |
| 512–1367 | Anti-procrastination, mascot, start flow, 5-minute mode, random task, micro-task, comeback, animation, audio, mini player, background, brand palette, analytics, reflection và module QA | REQ-0027 đến REQ-0034 |
| 1368–2008 | Achievement journey: map, tree, story, unlock moment, why achieved, human/emotional/mistake/comeback progress, mascot reaction, reward box, collection, next/near/not-achieved, multi-level, self-created, seasonal, lab, prediction, museum, private recognition | REQ-0012, REQ-0013, REQ-0039 |
| 2009–2047 | Câu chốt không có hidden achievement/title, 900 + 400, piece use và visible detail | REQ-0008, REQ-0009, REQ-0011, REQ-0013, REQ-0015, CONFLICT-0001, CONFLICT-0003 |
| 2048–2607 | Cấu trúc 900 achievements, 9 nhóm × 100, full fields, progress, multi-condition, 400 titles, title source/explanation, reward, historical character và piece tier I–VI | REQ-0009 đến REQ-0018, CONFLICT-0002, CONFLICT-0003, CONFLICT-0004 |
| 2608–3400 | Piece use, exchange, shop, earning sources, event, special quest, comeback, milestones, reward admin, transaction history, negative balance, admin grant/revoke, database và reward deduplication | REQ-0016 đến REQ-0022, REQ-0042, REQ-0043 |
| 3401–3412 | Checklist và đoạn tổng hợp chốt hệ thống | REQ-0007, REQ-0008, REQ-0009, REQ-0011, REQ-0015, REQ-0017 |
| 3413–4006 | Phiên bản đặc tả chốt sau: no hidden, 9 difficulty levels, 9 theme categories, full achievement fields, automatic progress/reward, 400 special achievements, 8 × 50 title view, title source, reward rules | REQ-0008 đến REQ-0014, CONFLICT-0001, CONFLICT-0002, CONFLICT-0003 |
| 4007–4609 | Piece labels/configuration, historical character source/image, AI draft approval, events, admin reward, admin achievement/title forms | REQ-0015 đến REQ-0022, REQ-0035, REQ-0036 |
| 4610–5363 | Admin/user screens, filters, title selection, piece inventory/history/exchange, character unlock, AI no-publish, command center, configurable piece type/use/recipe, badge/title distinction, data model, soft delete, checks và final acceptance flows | REQ-0013, REQ-0015 đến REQ-0022, REQ-0035 đến REQ-0049 |

**Kết luận coverage:** `SOURCE_TOTAL = MAPPED = 6.713`; `UNMAPPED_SOURCE = 0`. Đây là kết quả của việc lập bản đồ source, **không phải** tuyên bố implementation đã hoàn thành.

# 2. REQUIREMENT CATALOG

## 2.1. Quy ước trạng thái

`ANALYSIS_READY` nghĩa là requirement đã được chuẩn hóa để truy vết nhưng chưa triển khai. `BLOCKED_DECISION` nghĩa là không được code trước khi người dùng chốt điểm nêu trong Conflict Report. Các trường UI, Interaction, Logic, Data, Database, Supabase, Security, Admin, AI, Animation, Audio, Responsive, Dependencies và Acceptance được nén trong cột “Contract” để không làm mất chi tiết bắt buộc của source.

| REQ-ID | Source line | Module / title | Requirement và contract chính | Type / priority | Test | Status |
|---|---|---|---|---|---|---|
| REQ-0001 | HTML 512, 1937–1939, 3413–3416; repo e97be6b | Canonical rename | Tên hiển thị chính thức là **GÓC HỌC TẬP CỦA ONG**; giữ biến thể văn xuôi “Góc học tập của Ong” khi câu cần tự nhiên. Áp dụng cho brand lockup, login, header, document title, standalone, metadata và thông báo. | UI, CONTENT; P0 | T-REN-01..05 | ANALYSIS_READY |
| REQ-0002 | Repo e97be6b; 111.txt 1023–1068 | Brand single source | Không hard-code nhiều tên; một brand manifest/branding source phải cấp tên cho mọi surface. Mapping UI phải chỉ rõ component/page/modal/interaction. | UI, UX, ACCESSIBILITY; P0 | T-REN-06..08 | ANALYSIS_READY |
| REQ-0003 | Repo HEAD 374b7ab; lịch sử e97be6b | Naming boundary | Không tự đổi slug repository `gocnhocuaong2`, tên thư mục, migration ID hoặc storage key nếu người dùng chưa chốt. Cần compatibility alias khi có dữ liệu cũ. | OTHER; P0 | T-REN-09 | BLOCKED_DECISION |
| REQ-0004 | 111.txt 1–81, 1182–1226 | Source audit | Đọc toàn bộ source, giữ ví dụ/flow/field/edge case, re-audit cuối cùng và chỉ production-ready khi zero-missing. | AUDIT; P0 | T-AUD-01 | ANALYSIS_READY |
| REQ-0005 | 111.txt 54–81 | Line coverage | Mỗi đoạn source gắn REQ/DECISION/CONFLICT/REFERENCE; `UNMAPPED_SOURCE = 0`. | AUDIT; P0 | T-AUD-02 | PASS_ANALYSIS_ONLY |
| REQ-0006 | 111.txt 82–157 | Requirement schema | Mỗi REQ có ID liên tục, source range, section, module, title, requirement, type, priority, UI, interaction, logic, data, database, Supabase, security, admin, AI, animation, audio, responsive, dependencies, acceptance, test và status. | AUDIT; P0 | T-AUD-03 | ANALYSIS_READY |
| REQ-0007 | 111.txt 158–186 | Merge integrity | Khi gộp ý trùng, giữ UI, interaction, context, condition, field, animation, audio, reward và edge case độc nhất. | AUDIT; P0 | T-AUD-04 | ANALYSIS_READY |
| REQ-0008 | 111.txt 187–261; HTML 2009–2047, 3413–3480 | Conflict engine | Không chọn âm thầm; ghi Source A/B, line, impact, interpretation, decision, reason và REQ liên quan. Ưu tiên câu chốt sau; nếu chưa đủ căn cứ thì `NEEDS_DECISION`. | AUDIT; P0 | T-CON-01..08 | BLOCKED_DECISION |
| REQ-0009 | HTML 2051–2239, 3484–3603 | 900 achievements | Có đúng **900**, chia **9 cấp độ khó × 100**; category/theme là chiều phân loại độc lập, không thay thế difficulty level. | FUNCTIONAL, GAMIFICATION; P0 | T-ACH-01..03 | ANALYSIS_READY |
| REQ-0010 | HTML 2215–2323, 3607–3743 | Achievement detail | Mỗi achievement có id/code, name, group/category, description, difficulty, icon/color, condition type/parameters, current/target/progress/unit, reward, piece reward/tier, completion, timestamps; hỗ trợ nhiều điều kiện. | DATA, DATABASE; P0 | T-ACH-04..07 | ANALYSIS_READY |
| REQ-0011 | HTML 946–958, 2009–2047, 2345–2360, 3441–3480, 3766–3798; 111.txt 1008–1022 | No hidden | Không hidden/mystery/secret/“???”; toàn bộ 900 achievement và 400 title hiển thị tên, condition, progress, reward, trạng thái từ đầu. | BUSINESS_RULE, UX; P0 | T-ACH-08, T-SEC-07 | RESOLVED_BY_SOURCE_DECISION |
| REQ-0012 | HTML 1368–2008 | Achievement experience | Có map, tree, story, unlock moment, why achieved, human/emotional/mistake/comeback, self-progress, mascot reaction, reward box, collection, hardest/next/near/not-achieved, multi-level, personal/self-assessed, seasonal, lab, prediction, museum và private recognition. | UX, GAMIFICATION; P1 | T-ACH-09..18 | ANALYSIS_READY |
| REQ-0013 | HTML 2325–2457, 3746–3827, 3868–3962, 5048–5081 | 400 titles và badge/title | Có đúng **400 Danh hiệu**; model chính là 400 achievement đặc biệt trong 900, có view 8 × 50 khi phù hợp. Badge là visual entity khác title; chỉ title đã đạt mới chọn trên profile. | DATA, UX; P0 | T-TIT-01..06 | RESOLVED_WITH_VIEW_RULE |
| REQ-0014 | HTML 2410–2457, 3868–3933 | Title semantics | Mỗi title có name, meaning, condition, progress/target, source/inspiration, explanation, relationship, reward, rarity/status; không bịa ca dao, tục ngữ, biography hoặc quote. | CONTENT, HISTORICAL_DATA; P0 | T-TIT-07..09 | ANALYSIS_READY |
| REQ-0015 | HTML 2556–2605, 4009–4065, 4970–5024; 111.txt 398–439 | Piece resource | Piece là resource, có ordered rarity/tier, value, exchange_value, usage_power, source_methods, balance và transaction history; tên hiển thị/config không hard-code. | ECONOMIC_RULE, DATA; P0 | T-PC-01..04 | BLOCKED_DECISION_FOR_SEED |
| REQ-0016 | HTML 2609–2845, 4068–4179; 111.txt 440–461 | Piece use cases | Hỗ trợ mở/nâng cấp historical character, ảnh, biography, timeline, events, achievements, verified quotes, map, learning material, exchange, ticket, shop, benefit và collectible. | FUNCTIONAL, ECONOMIC_RULE; P0 | T-PC-05..10 | ANALYSIS_READY |
| REQ-0017 | HTML 3080–3365, 4818–4877; 111.txt 462–493 | Atomic piece/reward transaction | Flow: balance → type → requirement → item/event → atomic transaction → subtract → grant → history; không âm, không duplicate, không subtract-without-grant, reward claim idempotent. | DATABASE, SECURITY, ECONOMIC_RULE; P0 | T-PC-11..17 | ANALYSIS_READY |
| REQ-0018 | HTML 2501–2553, 4181–4301; 111.txt 494–542 | Historical character integrity | Character có metadata, image status, source URL/text/note, soft delete; ảnh chưa có phải nói rõ “Chưa có ảnh”, không fake; AI draft không tự publish. | HISTORICAL_DATA, STORAGE; P0 | T-HIS-01..06 | ANALYSIS_READY |
| REQ-0019 | HTML 2847–3000, 4360–4453; 111.txt 543–576 | Event entity | Event là database entity có name, description, banner, start/end/status/difficulty/goal/tasks/conditions/rewards/pieces/limits/participation, progress, milestones và anti-farm. | FUNCTIONAL, DATABASE; P0 | T-EVT-01..07 | ANALYSIS_READY |
| REQ-0020 | HTML 3002–3052; 111.txt 577–615 | Special quest/comeback/milestone | Admin tạo Special Quest; comeback chỉ sau không học ≥7 ngày và hoàn thành comeback session; hỗ trợ mốc 10h/50h/100h/500h và mốc cấu hình. | BUSINESS_RULE, REWARD_RULE; P1 | T-EVT-08..11 | ANALYSIS_READY |
| REQ-0021 | HTML 3054–3076, 3139–3179, 4519–4549, 4613–4645; 111.txt 616–635, 994–1007 | Admin CRUD/soft delete | Admin có UI cho achievements, titles, pieces, uses, recipes, rewards, events, characters, content, mascot, drafts; active/inactive/soft-deleted/restored/permanent delete và trash. | ADMIN, SOFT_DELETE; P0 | T-ADM-01..08 | ANALYSIS_READY |
| REQ-0022 | HTML 4295–4356, 4456–4490, 4551–4609, 4908–4966; 111.txt 636–660, 724–740 | AI admin approval | AI chỉ generate draft; Admin xem, sửa, duyệt; AI không publish/delete/edit official/grant reward. Có prompt mẫu cho character/event/achievement/title. | AI, SECURITY; P0 | T-AI-01..06 | ANALYSIS_READY |
| REQ-0023 | HTML 1–506; 111.txt 663–681 | Content Repository | Mọi comfort, encouragement, learning tip, anti-procrastination, micro-task, reminder, choice và contextual feedback đi qua repository chung; module được phép có context riêng. | CONTENT, DATA; P0 | T-CNT-01..05 | ANALYSIS_READY |
| REQ-0024 | HTML 112–439; 111.txt 682–708 | Content management | Có type, context, mascot, tone, priority 1–5, pinned, admin note, active; search/filter/statistics/import/export/soft delete/trash/restore/permanent delete. | ADMIN, IMPORT_EXPORT; P0 | T-CNT-06..11 | ANALYSIS_READY |
| REQ-0025 | HTML 197–262; 111.txt 709–723 | Module content contexts | Pomodoro, Exam, Deep Understanding, Achievement, Journal và Anti-Procrastination có context riêng, không dùng một câu chung vô điều kiện. | CONTENT, UX; P1 | T-CNT-12 | ANALYSIS_READY |
| REQ-0026 | HTML 364–498; 111.txt 724–740 | AI content variants | AI có thể tạo 5 biến thể gentle/empathetic/strong/humorous/soft; User/Admin chọn “Add to repository”; không tự publish. | AI, CONTENT; P1 | T-CNT-13..14 | ANALYSIS_READY |
| REQ-0027 | HTML 663–694, 1648–1697; 111.txt 742–758 | Mascot state/context | Hỗ trợ toàn bộ mascot states; mỗi state có image/name/description/condition; reaction dựa event/context thật, không random vô nghĩa. | UI, DATA; P1 | T-MAS-01..03 | ANALYSIS_READY |
| REQ-0028 | HTML 522–635, 780–920, 1192–1248; 111.txt 759–779 | Anti-procrastination suite | Các tính năng riêng: Bắt đầu nhé, countdown 3-2-1, 5 phút, Lumi chọn giúp, micro-task, Hôm nay tôi lười, 2-minute challenge, Boss, Ong vs Trì Hoãn, decision-fatigue reduction, random box và combo task. | FUNCTIONAL, UX, ANIMATION; P0 | T-ANTI-01..12 | ANALYSIS_READY |
| REQ-0029 | HTML 698–778; 111.txt 780–802 | Pomodoro | start/pause/resume/cancel/complete/break/history/combo 1→5, critical moment 5 phút cuối, unlock/reward integration; animation/audio có bật tắt. | FUNCTIONAL, AUDIO, ANIMATION; P0 | T-POM-01..08 | ANALYSIS_READY |
| REQ-0030 | HTML 962–1017; 111.txt 803–820 | Audio Center/mixer | Có category thiên nhiên/không gian/thư giãn/tập trung; track play/pause/stop/mute/volume; mixer volume độc lập từng track. | AUDIO; P1 | T-AUD-01..04 | ANALYSIS_READY |
| REQ-0031 | HTML 1021–1059; 111.txt 821–840 | Mini player | Mini player có drag/resize/minimize/close/audio/timer/mascot; pin chỉ khi browser hỗ trợ, không giả OS always-on-top. | UI, UX, RESPONSIVE; P1 | T-MIN-01..05 | ANALYSIS_READY |
| REQ-0032 | HTML 1063–1117; 111.txt 841–868 | Background/brand motion | Cloud/light/tree/particles/blink, ON/OFF, reduced distraction, morning/afternoon/night; giữ cảm giác màu đỏ sáng + xanh lá, không để tím/xanh dương chiếm giao diện. | UI, ANIMATION, ACCESSIBILITY; P0 | T-VIS-01..06 | ANALYSIS_READY |
| REQ-0033 | HTML 1120–1336; 111.txt 869–903 | XP/level/comeback UX | XP chỉ tăng, không phạt khi không học; deep understanding thưởng cao hơn correctness; level là progress representation; comeback không punishment và có 5-minute restart. | BUSINESS_RULE, UX; P0 | T-PRO-01..06 | ANALYSIS_READY |
| REQ-0034 | HTML 1142–1188, 1321–1336; 111.txt 904–930 | Analytics/reflection | Theo dõi time, start delay, post-break delay, large-task friction, reasons; không phán xét; daily reflection hiển thị started/learned/fixed/didn't give up. | ANALYTICS, UX; P1 | T-ANA-01..04 | ANALYSIS_READY |
| REQ-0035 | 111.txt 931–946; HTML 3284–3365, 5105–5147 | Supabase source of truth | Supabase Auth/Database/Storage là nguồn chính; localStorage chỉ cache/preferences/temporary, không lưu main data local-only. | AUTH, DATABASE, STORAGE; P0 | T-SUP-01..06 | BLOCKED_BY_BASELINE |
| REQ-0036 | 111.txt 947–962 | RLS | User chỉ own data; Admin chỉ admin management; AI không bypass authorization. | SECURITY, AUTH; P0 | T-SEC-01..05 | ANALYSIS_READY |
| REQ-0037 | 111.txt 963–974 | Multi-device | Device A tạo dữ liệu, Device B đăng nhập cùng user và đồng bộ hai chiều; phải test cả hai hướng. | MULTI_DEVICE, DATA; P0 | T-SUP-07..09 | ANALYSIS_READY |
| REQ-0038 | 111.txt 975–993 | GitHub deliverables | Repo phải có source, migrations, tests, README, `.env.example`, deployment docs; không commit secrets; không tuyên bố push khi không có quyền. | AUDIT, SECURITY; P0 | T-REL-01..04 | BLOCKED_BY_EMPTY_HEAD |
| REQ-0039 | 111.txt 1008–1022; HTML 3260–3282 | Transparency | User hiểu achievement/title/piece/event/shop/reward; không hidden mechanics, cách nhận và cách tiêu phải nhìn thấy. | UX, ACCESSIBILITY; P0 | T-TRN-01..06 | ANALYSIS_READY |
| REQ-0040 | 111.txt 1023–1037 | UI traceability | Mỗi UI requirement map tới component/page/modal/popup/interaction; một table đơn lẻ không đủ. | AUDIT; P0 | T-TRC-01 | ANALYSIS_READY |
| REQ-0041 | 111.txt 1038–1045 | Logic traceability | Mỗi logic requirement map tới function/service/edge function/database function. | AUDIT; P0 | T-TRC-02 | ANALYSIS_READY |
| REQ-0042 | 111.txt 1046–1058; HTML 3284–3365, 5105–5147 | DB traceability | Mỗi data requirement map tới table/column/constraint/FK/index/trigger/function khi cần. | DATABASE, AUDIT; P0 | T-TRC-03 | ANALYSIS_READY |
| REQ-0043 | 111.txt 1059–1070 | Security traceability | Mỗi protected action map tới role, authorization và RLS/policy/function. | SECURITY, AUDIT; P0 | T-TRC-04 | ANALYSIS_READY |
| REQ-0044 | 111.txt 1071–1085 | Acceptance | Mỗi REQ có ít nhất một test; requirement quan trọng có unit/integration; financial/economic/reward/security có integration + abuse test. | TEST; P0 | T-TRC-05 | ANALYSIS_READY |
| REQ-0045 | 111.txt 1086–1100 | QA-01 | Functional completeness; mỗi REQ chỉ được PASS/PARTIAL/FAIL/MISSING dựa trên evidence, không sửa trong lúc audit. | TEST, AUDIT; P0 | T-QA-01 | NOT_RUN |
| REQ-0046 | 111.txt 1102–1122 | QA-02 | Auth, RLS, multi-device, Storage, reward, piece, event, achievement, admin, AI và soft delete. | TEST, SECURITY; P0 | T-QA-02 | NOT_RUN |
| REQ-0047 | 111.txt 1123–1181 | QA-03/extreme | Double/triple/rapid click, refresh, network failure, timeout, retry, race, invalid IDs, negative/huge values, fake reward/achievement, expired event, unauthorized admin, concurrency và malicious input. | TEST, SECURITY; P0 | T-QA-03, T-EXT-01..02 | NOT_RUN |
| REQ-0048 | 111.txt 1182–1226 | Final zero-missing | Sau implementation đọc lại source và đối chiếu Source ↔ Catalog ↔ Code ↔ Database ↔ Tests; production-ready chỉ khi UNMAPPED/MISSING/PARTIAL/FAIL/UNTESTED đều 0, 900/900 và 400/400. | AUDIT; P0 | T-FINAL-01..03 | BLOCKED |
| REQ-0049 | 111.txt 1227–1317 | Evidence/final report | Mỗi PASS có file/component/function/database object/test/screenshot/runtime evidence; báo cáo phải có source totals, implementation, tests, conflicts, QA, Supabase, GitHub, security, build và production-ready. | AUDIT; P0 | T-FINAL-04..05 | BLOCKED |
| REQ-0050 | 111.txt 1318–1347 | Process order | Không đảo 23 bước: read source → coverage → catalog → duplicate → conflict → decision → traceability → architecture → database → implementation → integration → QA/extreme → re-check → fix → retest → build → GitHub → verify → final audit. | PROCESS; P0 | T-PROC-01 | BLOCKED |

# 3. DUPLICATE REPORT

Duplicate được hiểu là cùng ý hoặc cùng domain lặp lại ở nhiều khối source. Không xóa bản lặp; logic được hợp nhất nhưng giữ detail độc nhất.

| DUP-ID | Các vùng lặp | Logic hợp nhất | Chi tiết phải giữ riêng | Kết quả |
|---|---|---|---|---|
| DUP-0001 | Content Repository: HTML 1–511; 111.txt 663–740 | Một content repository dùng chung | Context theo module, tone, mascot, priority, pin, AI 5 biến thể và import/export | MERGED → REQ-0023–0026 |
| DUP-0002 | Anti-procrastination: HTML 512–1367; 111.txt 759–779 | Một nhóm domain anti-procrastination | Mỗi nút/flow riêng, countdown, timer, task generation, mascot, animation và audio | MERGED_WITH_DETAIL |
| DUP-0003 | Achievement experience: HTML 1368–2008; 111.txt 364–397 | Achievement engine + experience layer | Map, tree, story, why achieved, near/next, museum, private recognition và self-assessment | MERGED_WITH_DETAIL |
| DUP-0004 | 900 achievements: HTML 2051–2323, 3413–3743; 111.txt 262–317 | Một catalog 900 record, 9 × 100 | Hai tên nhóm/level, condition types, progress fields, reward/piece fields và auto-claim | MERGED; conflict xử lý tại CONFLICT-0002 |
| DUP-0005 | 400 titles: HTML 2325–2457, 3746–3962; 111.txt 318–363 | Một title entity độc lập liên kết achievement | Source/inspiration, meaning, explanation, relationship, rarity/status, profile selection | MERGED; conflict xử lý tại CONFLICT-0003 |
| DUP-0006 | Piece system: HTML 2501–3400, 4009–4179, 4743–4877; 111.txt 398–493 | Piece ledger + configurable tier/rule engine | Tier names, value, usage power, sources, exchange, shop, character unlock, history, admin grant/revoke | MERGED; conflict xử lý tại CONFLICT-0004 |
| DUP-0007 | Historical character: HTML 2535–2553, 4181–4356, 4854–4906; 111.txt 494–542 | Character catalog + source/image verification | Sections, timeline, map, image status, source URL/text, no fake image, soft delete | MERGED |
| DUP-0008 | Event: HTML 2847–3000, 4360–4490; 111.txt 543–590 | Event/task/claim/reward entity | Milestones, limits, account cap, daily cap, anti-farm, AI draft approval | MERGED |
| DUP-0009 | Admin/AI: HTML 3054–3076, 4295–4609, 4908–5024; 111.txt 616–660 | Admin CRUD and AI draft pipeline | Per-entity forms, command center, prompt templates, audit, no auto-publish | MERGED |
| DUP-0010 | QA/traceability: 111.txt 1023–1347; HTML 3369–3400, 5169–5363 | One evidence-driven release gate | UI/logic/DB/security mappings, QA-01/02/03, extreme tests, final audit | MERGED |
| DUP-0011 | Branding: source target HTML 512, 1937–1939, 3415; historical implementation e97be6b | One canonical display name | Uppercase lockup, natural-language copy, document title, login, standalone, tests and metadata | MERGED → REQ-0001/0002 |

# 4. CONFLICT REPORT

| Conflict-ID | Source A | Source B | Conflict | Impact | Possible interpretations | Final decision | Status |
|---|---|---|---|---|---|---|---|
| CONFLICT-0001 | HTML 946–958: “Thành tích bí mật”, `???` | HTML 2009–2047, 3413–3480, 3766–3798; 111.txt 1008–1022: không hidden | Hidden achievement/title trái với câu chốt sau | Ảnh hưởng visibility, schema, UI, tests | Giữ hidden; hoặc bỏ hidden | Ưu tiên câu chốt sau: **không hidden, không mystery, hiển thị đủ từ đầu** | RESOLVED |
| CONFLICT-0002 | HTML 2015–2017: 9 nhóm × 100 | HTML 3421–3425, 3484–3603: 9 cấp độ × 100 và 9 nhóm chủ đề | “Nhóm” có thể bị hiểu là cùng một trục | Sai count/filter/report nếu gộp | 9 group; 9 level; hoặc hai chiều | Dùng **difficulty_level = 9 × 100** và **theme/category = phân loại độc lập**, có tag phụ | RESOLVED |
| CONFLICT-0003 | HTML 2017: 400 titles là 400 mốc khó nhất | HTML 3425, 3746–3762: 400 achievement đặc biệt trong 900; HTML 3800–3819: 8 × 50 title view | 400 title là entity riêng, subset achievement hay view group? | Ảnh hưởng count, FK, reward, UI | 400 entity ngoài 900; 400 subset; 8 × 50 là level | Quyết định: **900 achievement tổng cộng; đúng 400 achievement đặc biệt liên kết 400 title; 8 × 50 là catalog view**, không tạo thêm 400 record | RESOLVED |
| CONFLICT-0004 | HTML 2556–2605: 6 tier Cấp I–VI | HTML 4009–4065: 7 display labels Đồng/Bạc/Vàng/Tinh Anh/Hiếm/Sử Thi/Huyền Diệu; 4970–5024: Admin có thể tạo loại mới | Số lượng và tên tier seed khác nhau | Ảnh hưởng reward, exchange, migration, balance | Seed 6; seed 7; hoặc dynamic | Core là **ordered configurable piece_types**; rename-only không thay seed tiers hoặc migration | RESOLVED |
| CONFLICT-0005 | HTML 441–473: **Bloomy đề xuất — Ong duyệt** | HTML 585–607, 1192–1204, 1978: **Lumi** chọn/gợi ý | Không rõ Bloomy và Lumi là một persona hay hai persona | Ảnh hưởng mascot, content context, AI prompt, brand copy | Một persona đổi tên; hai persona; Bloomy là AI còn Lumi là mascot | Giữ **Lumi** là persona runtime; **Bloomy** chỉ là legacy/spec alias; rename-only không đổi mascot | RESOLVED |
| CONFLICT-0006 | User request và HTML 3415: GÓC HỌC TẬP CỦA ONG | Historical implementation e97be6b: GÓC NHỎ CỦA ONG trong `index.html`, standalone, client pages, tests và docs | Tên đích khác tên đang có trong implementation lịch sử | Ảnh hưởng UI, title, tests, snapshot, docs | Chỉ đổi display; đổi cả slug; giữ alias | Đổi **mọi user-facing display** sang tên mới; giữ repository slug và technical identifiers hiện tại | RESOLVED |
| CONFLICT-0007 | `HEAD 374b7ab` hiện có tree rỗng | Commit nền e97be6b còn implementation và đã dùng tên cũ | Không có working implementation trong HEAD để sửa trực tiếp | Không thể chứng minh rename/build/test trên HEAD | Restore e97be6b; rebuild; hoặc người dùng cung cấp branch mới | Đã restore baseline `e97be6b` trên branch implementation riêng | RESOLVED |
| CONFLICT-0008 | 111.txt 931–945: Supabase là source of truth, localStorage chỉ cache | Standalone historical baseline có trạng thái local-only theo commit e97be6b | Implementation lịch sử chưa phù hợp yêu cầu production cloud | Ảnh hưởng data integrity, auth, sync, RLS | Giữ standalone demo; nâng cấp Supabase; loại standalone | Giữ standalone local-only như demo/fixture; không tuyên bố Master Build production-ready trong rename-only | RESOLVED |

# 5. FINAL DECISION REPORT

| DECISION-ID | Quyết định | Căn cứ | Trạng thái |
|---|---|---|---|
| DEC-0001 | Canonical display name: **GÓC HỌC TẬP CỦA ONG** | User request; HTML 512, 1937–1939, 3415–3416 | RESOLVED |
| DEC-0002 | Văn bản tự nhiên được phép dùng “Góc học tập của Ong”; lockup, document title và metadata ưu tiên uppercase theo yêu cầu | Nhất quán thương hiệu và khả năng đọc | RESOLVED |
| DEC-0003 | Thay tên cũ “GÓC NHỎ CỦA ONG” ở mọi user-facing surface, test expectation, standalone và docs liên quan | Historical baseline e97be6b | RESOLVED |
| DEC-0004 | Không đổi repository slug `gocnhocuaong2`, migration IDs, storage keys hoặc internal identifiers trong rename-only | Phạm vi đã chốt | RESOLVED |
| DEC-0005 | Không hidden achievement/title; 900 là tổng; 400 special achievements liên kết 400 titles; 8 × 50 chỉ là catalog grouping view | Các câu chốt sau trong HTML và 111.txt | RESOLVED |
| DEC-0006 | Piece types giữ nguyên trong rename-only; không thay seed tier hoặc migration | CONFLICT-0004 | RESOLVED |
| DEC-0007 | Giữ Lumi là persona runtime; Bloomy là legacy/spec alias; không đổi mascot trong rename-only | CONFLICT-0005 | RESOLVED |
| DEC-0008 | Restore baseline từ commit e97be6b trên branch implementation riêng; không triển khai trên HEAD rỗng | GitHub HEAD 374b7ab | RESOLVED |

**Final gate sau khi người dùng chốt:** `UNMAPPED_SOURCE = 0`; toàn bộ conflict có trạng thái `RESOLVED` hoặc `NEEDS_DECISION` và năm nhóm quyết định rename đã được ghi nhận. **Implementation gate = APPROVED cho rename-only.** Master Build toàn hệ thống vẫn không được tuyên bố production-ready theo boundary đã giữ nguyên.

# 6. TRACEABILITY MATRIX

| REQ-ID | Source mapping | Architecture target | Database target | Security / role | Acceptance test |
|---|---|---|---|---|---|
| REQ-0001 | HTML 512, 1937–1939, 3415; e97be6b | A-01 Brand Manifest, A-02 App Shell | Không đổi schema | Public read | T-REN-01..05 |
| REQ-0002 | 111.txt 1023–1037; e97be6b surfaces | A-01/A-02 | Không đổi schema | Public read | T-REN-06..08 |
| REQ-0003 | Repo HEAD/history | A-00 Baseline/compatibility | Migration IDs/storage keys giữ nguyên | Release control | T-REN-09 |
| REQ-0004–0008 | 111.txt 1–261 | A-07 Audit artifacts | audit_report metadata | Admin/release | T-AUD-01..04, T-CON-01..08 |
| REQ-0009–0011 | HTML 2009–2323, 3413–3798 | A-03 Achievement Engine | `achievements`, `achievement_conditions`, `achievement_progress`, `achievement_rewards` | User read, engine write | T-ACH-01..08 |
| REQ-0012 | HTML 1368–2008 | A-03 Achievement Experience | `achievement_stories`, `achievement_moments`, `achievement_predictions` | User own data | T-ACH-09..18 |
| REQ-0013–0014 | HTML 2325–2457, 3746–3962 | A-03 Title/Badge layer | `titles`, `title_requirements`, `title_sources`, `user_titles`, `badges` | User selects earned title; Admin CRUD | T-TIT-01..09 |
| REQ-0015–0017 | HTML 2556–2605, 4009–4179, 4818–4877 | A-04 Piece Ledger/Exchange | `piece_types`, `user_pieces`, `piece_transactions`, `piece_exchange_rules` | Transaction function + RLS | T-PC-01..17 |
| REQ-0018 | HTML 2501–2553, 4181–4356 | A-03 Character Catalog | `historical_characters`, `historical_character_sections`, `historical_character_sources`, `user_historical_characters` | Admin source/image controls | T-HIS-01..06 |
| REQ-0019–0020 | HTML 2847–3052 | A-03 Event/Quest engine | `events`, `event_tasks`, `event_conditions`, `event_rewards`, `event_participants`, `event_claims` | Claim limits, RLS | T-EVT-01..11 |
| REQ-0021 | HTML 3054–3076, 4519–4645; 111.txt 616–635, 994–1007 | A-05 Admin Console | All admin-managed tables + `audit_logs` | Admin-only policies | T-ADM-01..08 |
| REQ-0022 | HTML 4295–4609, 4908–4966 | A-05 AI Draft Workflow | `ai_admin_drafts`, `ai_admin_commands` | AI no publish/delete/grant | T-AI-01..06 |
| REQ-0023–0026 | HTML 1–511; 111.txt 663–740 | A-03 Content Repository | `content_items`, `content_contexts`, `content_usage`, `content_drafts` | User read, Admin approve | T-CNT-01..14 |
| REQ-0027 | HTML 663–694, 1648–1697 | A-03 Mascot State Engine | `mascots`, `mascot_states`, `mascot_reactions` | Owner/Admin | T-MAS-01..03 |
| REQ-0028–0029 | HTML 522–920; 111.txt 759–802 | A-03 Focus/Anti-Procrastination | `study_sessions`, `pomodoro_sessions`, `tasks`, `task_combos`, `anti_procrastination_events` | Owner-only writes | T-ANTI-01..12, T-POM-01..08 |
| REQ-0030–0032 | HTML 962–1117; 111.txt 803–868 | A-02 Visual/Audio shell | `audio_preferences`, `user_preferences`; media in Storage | User own preferences | T-AUD-01..04, T-MIN-01..05, T-VIS-01..06 |
| REQ-0033–0034 | HTML 1120–1336; 111.txt 869–930 | A-03 Progress/Analytics | `xp_ledger`, `levels`, `analytics_events`, `daily_reflections` | Own data; no punitive write | T-PRO-01..06, T-ANA-01..04 |
| REQ-0035–0037 | 111.txt 931–974 | A-04 Supabase data layer | Auth, Database, Storage; sync metadata | RLS/policies/functions | T-SUP-01..09, T-SEC-01..05 |
| REQ-0038 | 111.txt 975–993 | A-07 Release/GitHub | migrations, tests, docs, `.env.example` | Secret scanning | T-REL-01..04 |
| REQ-0039 | 111.txt 1008–1022; HTML 3260–3282 | A-02 Transparency pages | no special table beyond domain tables | Public read of configuration | T-TRN-01..06 |
| REQ-0040–0043 | 111.txt 1023–1070 | A-07 Traceability registry | Evidence references to tables/columns/policies | Role/action mapping | T-TRC-01..04 |
| REQ-0044–0047 | 111.txt 1071–1181 | A-07 QA pipeline | Test fixtures and transaction fixtures | Abuse/concurrency test roles | T-TRC-05, T-QA-01..03, T-EXT-01..02 |
| REQ-0048–0050 | 111.txt 1182–1347 | A-07 Final audit/release gate | Audit evidence index | Release approval | T-FINAL-01..05, T-PROC-01 |

# 7. ARCHITECTURE PLAN

## 7.1. Điều kiện trước implementation

Không triển khai trực tiếp trên `HEAD 374b7ab` vì tree hiện tại rỗng. Baseline cần được người dùng chốt là **restore commit e97be6b**, một branch khác, hoặc một implementation mới. Báo cáo này chỉ xác nhận rằng commit e97be6b là historical reference có các touchpoint branding; không coi nó là production-ready vì source yêu cầu Supabase, RLS, multi-device và evidence đầy đủ.

## 7.2. Kiến trúc logic dự kiến

| Mã kiến trúc | Thành phần | Trách nhiệm | Ràng buộc |
|---|---|---|---|
| A-00 | Baseline/compatibility | Chọn commit/branch; giữ slug và data identifiers khi chưa được phép đổi | Không code trước DEC-0008 |
| A-01 | Brand Manifest | Cấp canonical name, natural copy, document title, accessibility label và legacy alias | Một nguồn tên duy nhất; không hard-code rải rác |
| A-02 | App Shell | Sidebar, header, login, standalone, responsive, theme, audio toggle và document metadata | Tất cả user-facing brand lấy từ A-01 |
| A-03 | Domain Modules | Content, mascot, focus, Pomodoro, achievement, title/badge, piece, characters, events, shop, analytics | Mỗi module có UI/interaction/data riêng |
| A-04 | Data/Transaction Services | Supabase data access, progress engine, reward claim, piece exchange, character unlock, event claim | Atomicity, idempotency, server-side validation |
| A-05 | Admin/AI Approval | CRUD, trash, restore, AI draft, edit, approve, audit | AI không publish/delete/edit official/grant |
| A-06 | Security/Observability | Auth, RLS, audit log, evidence, telemetry, error states | User own data; Admin management; no bypass |
| A-07 | Verification/Release | Source coverage, duplicate/conflict, traceability, QA-01/02/03, extreme tests, final audit | Không tự gắn PASS khi thiếu evidence |

## 7.3. Rename-specific change boundary

Phạm vi đổi tên được giới hạn ở **presentation identity**: brand lockup, login, header, document title, metadata, standalone, user-facing copy, accessibility labels, test expectations và tài liệu hiển thị. Không tự ý đổi domain semantics, mascot/persona, database identifiers, repository slug, migration IDs hoặc storage keys. Legacy alias chỉ dùng để đọc dữ liệu cũ, không hiển thị như tên chính.

# 8. DATABASE PLAN

## 8.1. Nguyên tắc dữ liệu

Supabase Auth, Database và Storage là source of truth; `localStorage` chỉ giữ cache, preferences và temporary state. Các bảng domain phải có `created_at`, `updated_at`, trạng thái active/inactive khi phù hợp, và `deleted_at` cho dữ liệu cần khôi phục. Mọi protected action phải đi qua RLS hoặc database function có kiểm tra quyền.

## 8.2. Nhóm bảng bắt buộc

| Nhóm | Bảng/đối tượng chính | Khóa và ràng buộc quan trọng |
|---|---|---|
| Identity | `profiles`, `user_roles`, Supabase Auth | `user_id` FK auth; role check; user chỉ own rows |
| Brand/config | Không bắt buộc migration cho rename; nếu cần cấu hình runtime thì `app_settings` sau khi được chốt | Không tạo bảng chỉ để đổi tên tĩnh nếu không có yêu cầu Admin |
| Content | `content_items`, `content_contexts`, `content_usage`, `content_drafts` | context/type/status index; AI draft tách official content |
| Mascot | `mascots`, `mascot_states`, `mascot_reactions` | state/context uniqueness; source asset in Storage |
| Learning/focus | `study_sessions`, `pomodoro_sessions`, `tasks`, `task_combos`, `deep_understanding_records`, `exam_attempts`, `journals` | owner FK; progress/event indexes |
| Achievement | `achievements`, `achievement_conditions`, `achievement_progress`, `achievement_rewards`, `achievement_stories`, `achievement_moments` | unique achievement code; 9 × 100 validation; condition order; one completion per user |
| Title/badge | `titles`, `title_requirements`, `title_sources`, `title_rewards`, `user_titles`, `badges`, `badge_rewards` | title FK to special achievement; earned-only profile selection |
| Piece/economy | `piece_types`, `user_pieces`, `piece_transactions`, `piece_exchange_rules`, `rewards`, `reward_catalog` | ordered tier; value monotonic validation; non-negative balance; idempotency key |
| Character/history | `historical_characters`, `historical_character_sections`, `historical_character_sources`, `user_historical_characters` | verified source fields; image status; unlock uniqueness |
| Event/quest | `events`, `event_tasks`, `event_conditions`, `event_rewards`, `event_participants`, `event_claims`, `special_quests` | start/end; daily/account/claim caps; unique claim per user/event/reward |
| Shop | `shops`, `shop_items`, `shop_item_costs`, `shop_transactions` | item active/expiry; atomic exchange; cost validation |
| Admin/audit | `admin_rewards`, `admin_piece_transactions`, `audit_logs`, `ai_admin_drafts`, `ai_admin_commands` | actor, recipient, reason, before/after, approval state, timestamps |
| Analytics/reflection | `analytics_events`, `procrastination_patterns`, `daily_reflections`, `xp_ledger`, `level_definitions` | user ownership; append-only event history where required |

## 8.3. Database functions and transaction requirements

`claim_achievement_reward`, `claim_event_reward`, `exchange_piece`, `unlock_historical_character`, `grant_admin_reward`, `revoke_admin_piece` và progress/reward functions phải kiểm tra quyền ở server/database boundary. Các flow trừ piece và cấp item phải cùng một transaction hoặc cơ chế atomic tương đương; unique idempotency key chống double click, refresh, retry và race. Không cho phép số lượng âm, quantity overflow, fake IDs, expired event claim hoặc replay request.

## 8.4. Rename migration policy

Nếu đổi tên chỉ là static presentation, **không cần database migration**. Nếu người dùng yêu cầu đổi slug hoặc key kỹ thuật, phải tạo migration riêng có alias/redirect, kiểm tra foreign key, Storage path, OAuth callback, test fixture và rollback plan; quyết định này đang `NEEDS_DECISION`.

# 9. TEST PLAN

## 9.1. Trạng thái hiện tại

Chưa chạy test implementation và không được tuyên bố PASS. Repository HEAD rỗng; các test dưới đây là **test contract** phải thực hiện sau khi baseline được chốt. `UNMAPPED_SOURCE = 0` chỉ là PASS của source mapping.

## 9.2. Rename regression suite

| Test-ID | Phạm vi | Tiêu chí đạt |
|---|---|---|
| T-REN-01 | Brand lockup | Sidebar/header/login hiển thị đúng **GÓC HỌC TẬP CỦA ONG** |
| T-REN-02 | Document title/meta | `document.title`, metadata và accessibility label dùng tên mới |
| T-REN-03 | Historical baseline surfaces | Standalone, client pages, app title test và docs user-facing không còn tên cũ |
| T-REN-04 | Natural copy | Câu văn dùng “Góc học tập của Ong” hợp ngữ cảnh, không biến dạng thành tên khác |
| T-REN-05 | Negative scan | Không còn `GÓC NHỎ CỦA ONG`/`Góc nhỏ của Ong` trên user-facing surface, trừ legacy alias/test fixture được đánh dấu |
| T-REN-06 | Single source | Thay brand manifest cập nhật toàn bộ surface, không có hard-coded duplicate |
| T-REN-07 | Accessibility | Screen reader label, focus order, contrast và responsive header đúng |
| T-REN-08 | Visual | Desktop/mobile không tràn chữ, không che mascot hoặc navigation |
| T-REN-09 | Technical boundary | Repository slug, migration IDs và storage keys không đổi nếu chưa có DEC-0004 |

## 9.3. Functional, data và security suite

| Nhóm test | Nội dung bắt buộc |
|---|---|
| T-ACH-01..18 | Count 900; 9 × 100; full fields; multi-condition progress; no hidden; auto-completion; 400 titles; badge/title separation; stories, moments, predictions và collections |
| T-TIT-01..09 | Title source/explanation; no fabricated proverb/quote; earned-only selection; title reward và status |
| T-PC-01..17 | Ordered tier/value; configured exchange; all piece use cases; non-negative balance; atomic subtract/grant; deduplication; audit history; concurrency |
| T-HIS-01..06 | Historical source, image status, Storage upload, no fake image, unlock flow, soft delete/restore |
| T-EVT-01..11 | Event CRUD, task progress, milestones, caps, anti-farm, special quest, comeback threshold và reward claim |
| T-ADM-01..08 | Admin forms, CRUD, trash, restore, permanent delete, grant/revoke, audit log và permissions |
| T-AI-01..06 | Draft-only, admin edit/approve, no auto-publish/delete/edit official/grant, prompt schema |
| T-CNT-01..14 | Repository CRUD, context selection, pin/priority, search/filter/statistics, import/export, five AI variants, approval |
| T-MAS-01..03 | State conditions, event-driven reaction, no meaningless random |
| T-ANTI-01..12 | Từng tính năng anti-procrastination là interaction riêng, không gộp thành một nút |
| T-POM-01..08 | Timer lifecycle, combo 1–5, critical five-minute moment, reward integration, sound/animation toggles |
| T-AUD-01..04, T-MIN-01..05, T-VIS-01..06 | Audio mixer, mini-player drag/resize/pin limitation, reduced motion, time-of-day và red/green identity |
| T-PRO-01..06, T-ANA-01..04 | XP no penalty, level semantics, comeback UX, procrastination analytics và daily reflection |
| T-SUP-01..09 | Auth, Supabase source of truth, RLS, Storage, two-device sync hai chiều |
| T-SEC-01..05 | User own data, Admin-only, AI no bypass, secret scanning, protected actions |
| T-TRN-01..06 | User xem rõ cơ chế achievement/title/piece/event/shop/reward và cách nhận/tiêu |

## 9.4. QA gates

**QA-01 — Functional completeness:** mọi REQ nhận một trong bốn trạng thái `PASS`, `PARTIAL`, `FAIL`, `MISSING`; không sửa implementation trong lúc audit. Mỗi PASS phải có evidence.

**QA-02 — Supabase/security/data integrity:** auth, RLS, multi-device, Storage, reward, piece, event, achievement, Admin, AI và soft delete phải được kiểm thử với dữ liệu thật hoặc fixture có kiểm soát.

**QA-03 — Extreme destruction:** double/triple/rapid click, refresh, network fail, timeout, retry, race, invalid IDs, negative/huge values, fake reward/achievement, expired event và unauthorized admin.

**EXTREME-01 — Concurrency:** nhiều device/request đồng thời không làm trùng reward, âm piece, duplicate title, duplicate event claim hoặc duplicate character unlock.

**EXTREME-02 — Malicious input:** fake IDs/users, negative quantities, replay attack, duplicate request, unauthorized endpoint và malformed payload đều bị từ chối, không làm thay đổi dữ liệu chính thức.

## 9.5. Final release gate

Chỉ được đánh dấu production-ready khi có evidence cho từng REQ và đồng thời đạt: `UNMAPPED_SOURCE = 0`, `MISSING = 0`, `PARTIAL = 0`, `FAIL = 0`, `UNTESTED = 0`, `900/900 achievements`, `400/400 titles`, QA-01/02/03, EXTREME-01/02, Supabase, GitHub, security và build. Ở thời điểm báo cáo này, điều kiện cuối **chưa đạt** vì implementation chưa được chọn và các điểm `NEEDS_DECISION` chưa được chốt.

## References

[1] `111.txt`, file đặc tả và quy trình audit do người dùng cung cấp, đặc biệt các phần A–BK, dòng 1–1.350.

[2] `study-quest-standalone.html`, source đặc tả do người dùng cung cấp, dòng 1–5.363.

[3] [Repository GitHub `yen0110122009-cell/gocnhocuaong2`](https://github.com/yen0110122009-cell/gocnhocuaong2), trạng thái `HEAD 374b7ab` hiện không còn file tracked.

[4] [Historical baseline commit `e97be6b`](https://github.com/yen0110122009-cell/gocnhocuaong2/commit/e97be6b), implementation lịch sử có các touchpoint tên “Góc nhỏ của Ong” và là ứng viên baseline cần người dùng chốt.
