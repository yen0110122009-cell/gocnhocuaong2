import AdminEnhanced from "./AdminEnhanced";
import { cn } from "@/lib/utils";
import { Award, CirclePlus, Gift, MessageCircle, Trash2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import type { AppConfig, CustomAchievement, Encouragement, StudyAccount, WheelReward } from "../../../shared/study";

type Props = { account: StudyAccount; config: AppConfig; onConfig: (config: AppConfig, message?: string) => void };
type AchievementMetric = CustomAchievement["metric"];
type RewardKind = WheelReward["kind"];

const uid = () => crypto.randomUUID();

export default function AdminContentHub({ account, config, onConfig }: Props) {
  const [encouragementText, setEncouragementText] = useState("");
  const [encouragementType, setEncouragementType] = useState<Encouragement["type"]>("correct");
  const [achievement, setAchievement] = useState({ name: "", description: "", metric: "xp" as AchievementMetric, threshold: "100", rewardXp: "30", rewardFragments: "0" });
  const [reward, setReward] = useState({ label: "", kind: "xp" as RewardKind, value: "20", probability: "10", color: "#d99a28" });
  const allowed = account.role === "Admin" || account.role === "Founder";
  const save = (patch: Partial<AppConfig>, message: string) => onConfig({ ...config, ...patch, updatedAt: new Date().toISOString() }, message);

  if (!allowed) return <AdminEnhanced account={account} config={config} onConfig={onConfig} />;

  const addEncouragement = () => {
    const text = encouragementText.trim();
    if (!text) return toast.error("Nhập nội dung lời động viên.");
    const entry: Encouragement = { id: uid(), type: encouragementType, text, enabled: true };
    save({ encouragements: [...config.encouragements, entry] }, "Đã thêm lời động viên.");
    setEncouragementText("");
  };
  const addAchievement = () => {
    const name = achievement.name.trim();
    const threshold = Math.max(1, Number(achievement.threshold) || 0);
    if (!name || !threshold) return toast.error("Nhập tên và mốc điều kiện hợp lệ.");
    const entry: CustomAchievement = {
      id: uid(), name, description: achievement.description.trim() || `Đạt ${threshold} ${achievement.metric}.`, metric: achievement.metric,
      threshold, rewardXp: Math.max(0, Number(achievement.rewardXp) || 0), rewardFragments: Math.max(0, Number(achievement.rewardFragments) || 0), enabled: true,
    };
    save({ customAchievements: [...config.customAchievements, entry] }, "Đã thêm thành tích tùy chỉnh.");
    setAchievement({ name: "", description: "", metric: "xp", threshold: "100", rewardXp: "30", rewardFragments: "0" });
  };
  const addReward = () => {
    const label = reward.label.trim();
    if (!label) return toast.error("Nhập tên phần thưởng.");
    const entry: WheelReward = { id: uid(), label, kind: reward.kind, value: Math.max(0, Number(reward.value) || 0), probability: Math.max(0, Number(reward.probability) || 0), color: reward.color };
    save({ wheelRewards: [...config.wheelRewards, entry] }, "Đã thêm phần thưởng vòng quay.");
    setReward({ label: "", kind: "xp", value: "20", probability: "10", color: "#d99a28" });
  };

  return <>
    <AdminEnhanced account={account} config={config} onConfig={onConfig} />
    <section className="mt-7 grid gap-5 xl:grid-cols-3" aria-label="Quản lý động cơ học tập">
      <EditorCard icon={MessageCircle} eyebrow="Phản hồi học tập" title="Lời động viên" text="Dùng cho kết quả đúng hoặc chưa đúng; chỉ nội dung được quản trị mới xuất hiện cho người học.">
        <div className="space-y-3"><select aria-label="Loại lời động viên" value={encouragementType} onChange={(event) => setEncouragementType(event.target.value as Encouragement["type"])} className="input"><option value="correct">Khi trả lời đúng</option><option value="incorrect">Khi trả lời chưa đúng</option></select><textarea aria-label="Nội dung lời động viên" value={encouragementText} onChange={(event) => setEncouragementText(event.target.value)} className="input min-h-20" placeholder="Viết lời khích lệ ngắn, cụ thể và tôn trọng người học." /><button className="primary-button w-full" onClick={addEncouragement}><CirclePlus className="h-4 w-4" />Thêm lời động viên</button></div>
        <ConfigRows rows={config.encouragements.map((entry) => ({ id: entry.id, title: entry.text, meta: entry.type === "correct" ? "Trả lời đúng" : "Trả lời chưa đúng", enabled: entry.enabled }))} onToggle={(id) => save({ encouragements: config.encouragements.map((entry) => entry.id === id ? { ...entry, enabled: !entry.enabled } : entry) }, "Đã cập nhật trạng thái lời động viên.")} onDelete={(id) => save({ encouragements: config.encouragements.filter((entry) => entry.id !== id) }, "Đã xóa lời động viên.")} />
      </EditorCard>
      <EditorCard icon={Award} eyebrow="Thành tích và phần thưởng" title="Mốc tùy chỉnh" text="Hệ 900 thành tích giữ quy tắc chuẩn; thêm mốc riêng cho chương trình hoặc thử thách do bạn biên tập.">
        <div className="grid gap-3"><input aria-label="Tên thành tích tùy chỉnh" value={achievement.name} onChange={(event) => setAchievement({ ...achievement, name: event.target.value })} className="input" placeholder="Tên thành tích" /><input aria-label="Mô tả thành tích tùy chỉnh" value={achievement.description} onChange={(event) => setAchievement({ ...achievement, description: event.target.value })} className="input" placeholder="Mô tả ngắn" /><div className="grid grid-cols-2 gap-3"><select aria-label="Chỉ số thành tích tùy chỉnh" value={achievement.metric} onChange={(event) => setAchievement({ ...achievement, metric: event.target.value as AchievementMetric })} className="input"><option value="xp">XP</option><option value="learnedCards">Thẻ đã nhớ</option><option value="completedQuizzes">Đề hoàn thành</option><option value="completedSets">Bộ hoàn tất</option></select><input aria-label="Mốc điều kiện thành tích" value={achievement.threshold} onChange={(event) => setAchievement({ ...achievement, threshold: event.target.value })} type="number" min="1" className="input" placeholder="Mốc" /></div><div className="grid grid-cols-2 gap-3"><input aria-label="XP phần thưởng thành tích" value={achievement.rewardXp} onChange={(event) => setAchievement({ ...achievement, rewardXp: event.target.value })} type="number" min="0" className="input" placeholder="XP" /><input aria-label="Mảnh ghép phần thưởng thành tích" value={achievement.rewardFragments} onChange={(event) => setAchievement({ ...achievement, rewardFragments: event.target.value })} type="number" min="0" className="input" placeholder="Mảnh ghép" /></div><button className="primary-button w-full" onClick={addAchievement}><CirclePlus className="h-4 w-4" />Thêm mốc tùy chỉnh</button></div>
        <ConfigRows rows={config.customAchievements.map((entry) => ({ id: entry.id, title: entry.name, meta: `${entry.threshold} ${entry.metric} · ${entry.rewardXp} XP · ${entry.rewardFragments} mảnh`, enabled: entry.enabled }))} onToggle={(id) => save({ customAchievements: config.customAchievements.map((entry) => entry.id === id ? { ...entry, enabled: !entry.enabled } : entry) }, "Đã cập nhật trạng thái thành tích.")} onDelete={(id) => save({ customAchievements: config.customAchievements.filter((entry) => entry.id !== id) }, "Đã xóa thành tích tùy chỉnh.")} />
      </EditorCard>
      <EditorCard icon={Gift} eyebrow="Xác suất có trọng số" title="Cấu hình phần thưởng" text="Mỗi phần thưởng có loại, giá trị, tỷ lệ và màu nhận diện. Tổng tỷ lệ được cân đối theo trọng số khi quay.">
        <div className="grid gap-3"><input aria-label="Tên phần thưởng vòng quay" value={reward.label} onChange={(event) => setReward({ ...reward, label: event.target.value })} className="input" placeholder="Tên phần thưởng" /><div className="grid grid-cols-2 gap-3"><select aria-label="Loại phần thưởng vòng quay" value={reward.kind} onChange={(event) => setReward({ ...reward, kind: event.target.value as RewardKind })} className="input"><option value="xp">XP</option><option value="fragment">Mảnh ghép</option><option value="badge">Huy hiệu</option><option value="ticket">Vé quay</option><option value="item">Vật phẩm</option></select><input aria-label="Giá trị phần thưởng" value={reward.value} onChange={(event) => setReward({ ...reward, value: event.target.value })} type="number" min="0" className="input" placeholder="Giá trị" /></div><div className="grid grid-cols-[1fr_auto] gap-3"><input aria-label="Trọng số xác suất phần thưởng" value={reward.probability} onChange={(event) => setReward({ ...reward, probability: event.target.value })} type="number" min="0" className="input" placeholder="Trọng số" /><input aria-label="Màu phần thưởng" value={reward.color} onChange={(event) => setReward({ ...reward, color: event.target.value })} type="color" className="h-11 w-12 rounded-xl border border-amber-200 bg-transparent p-1 dark:border-amber-400/30" /></div><button className="primary-button w-full" onClick={addReward}><CirclePlus className="h-4 w-4" />Thêm phần thưởng</button></div>
        <ConfigRows rows={config.wheelRewards.map((entry) => ({ id: entry.id, title: entry.label, meta: `${entry.kind} · ${entry.value} · trọng số ${entry.probability}`, enabled: true, color: entry.color }))} onDelete={(id) => save({ wheelRewards: config.wheelRewards.filter((entry) => entry.id !== id) }, "Đã xóa phần thưởng vòng quay.")} />
      </EditorCard>
    </section>
    <AdminInlineEditors config={config} onConfig={onConfig} />
  </>;
}

function EditorCard({ icon: Icon, eyebrow, title, text, children }: { icon: typeof Award; eyebrow: string; title: string; text: string; children: React.ReactNode }) {
  return <section className="panel p-5"><div className="flex gap-3"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-200"><Icon className="h-5 w-5" /></span><div><p className="text-xs font-bold uppercase tracking-[.14em] text-amber-700 dark:text-amber-300">{eyebrow}</p><h2 className="mt-1 font-display text-xl font-bold">{title}</h2><p className="mt-2 text-sm leading-6 text-slate-500">{text}</p></div></div><div className="mt-5">{children}</div></section>;
}

function ConfigRows({ rows, onToggle, onDelete }: { rows: { id: string; title: string; meta: string; enabled: boolean; color?: string }[]; onToggle?: (id: string) => void; onDelete: (id: string) => void }) {
  if (!rows.length) return <p className="mt-5 rounded-2xl bg-amber-50 p-4 text-sm leading-6 text-amber-900 dark:bg-amber-500/10 dark:text-amber-100">Chưa có nội dung do quản trị viên tạo.</p>;
  return <div className="mt-5 max-h-72 space-y-2 overflow-auto pr-1">{rows.map((row) => <article className="flex items-center gap-3 rounded-2xl border border-amber-100 p-3 dark:border-amber-400/15" key={row.id}><span className="h-3 w-3 shrink-0 rounded-full" style={{ backgroundColor: row.color ?? (row.enabled ? "#d99a28" : "#9a8c78") }} /><div className="min-w-0 flex-1"><b className="block truncate text-sm">{row.title}</b><small className="block truncate text-xs text-slate-500">{row.meta}</small></div>{onToggle && <button aria-label={`${row.enabled ? "Tắt" : "Bật"} ${row.title}`} onClick={() => onToggle(row.id)} className={cn("rounded-lg px-2 py-1 text-xs font-bold", row.enabled ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-400/15 dark:text-emerald-200" : "bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-slate-300")}>{row.enabled ? "Bật" : "Tắt"}</button>}<button aria-label={`Xóa ${row.title}`} onClick={() => onDelete(row.id)} className="icon-button h-8 w-8 text-rose-600"><Trash2 className="h-4 w-4" /></button></article>)}</div>;
}

function AdminInlineEditors({ config, onConfig }: Pick<Props, "config" | "onConfig">) {
  const save = (patch: Partial<AppConfig>, message: string) => onConfig({ ...config, ...patch, updatedAt: new Date().toISOString() }, message);
  const updateEncouragement = (event: FormEvent<HTMLFormElement>, id: string) => {
    event.preventDefault(); const form = new FormData(event.currentTarget); const text = String(form.get("text") || "").trim();
    if (!text) return toast.error("Nội dung lời động viên không được để trống.");
    save({ encouragements: config.encouragements.map((entry) => entry.id === id ? { ...entry, text, type: String(form.get("type")) as Encouragement["type"], enabled: form.get("enabled") === "on" } : entry) }, "Đã lưu lời động viên.");
  };
  const updateAchievement = (event: FormEvent<HTMLFormElement>, id: string) => {
    event.preventDefault(); const form = new FormData(event.currentTarget); const name = String(form.get("name") || "").trim(); const threshold = Math.max(1, Number(form.get("threshold")) || 0);
    if (!name || !threshold) return toast.error("Tên và mốc điều kiện phải hợp lệ.");
    save({ customAchievements: config.customAchievements.map((entry) => entry.id === id ? { ...entry, name, description: String(form.get("description") || "").trim(), metric: String(form.get("metric")) as AchievementMetric, threshold, rewardXp: Math.max(0, Number(form.get("rewardXp")) || 0), rewardFragments: Math.max(0, Number(form.get("rewardFragments")) || 0), enabled: form.get("enabled") === "on" } : entry) }, "Đã lưu mốc thành tích.");
  };
  const updateReward = (event: FormEvent<HTMLFormElement>, id: string) => {
    event.preventDefault(); const form = new FormData(event.currentTarget); const label = String(form.get("label") || "").trim();
    if (!label) return toast.error("Tên phần thưởng không được để trống.");
    save({ wheelRewards: config.wheelRewards.map((entry) => entry.id === id ? { ...entry, label, kind: String(form.get("kind")) as RewardKind, value: Math.max(0, Number(form.get("value")) || 0), probability: Math.max(0, Number(form.get("probability")) || 0), color: String(form.get("color") || entry.color) } : entry) }, "Đã lưu phần thưởng vòng quay.");
  };
  const Group = ({ title, description, children }: { title: string; description: string; children: React.ReactNode }) => <details className="panel mt-5 p-5"><summary className="cursor-pointer list-none"><p className="text-xs font-bold uppercase tracking-[.14em] text-amber-700 dark:text-amber-300">Biên tập trực tiếp</p><h2 className="mt-1 font-display text-xl font-bold">{title}</h2><p className="mt-2 text-sm leading-6 text-slate-500">{description}</p></summary><div className="mt-5 space-y-3">{children}</div></details>;
  return <section className="mt-7" aria-labelledby="admin-edit-title"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-amber-700 dark:text-amber-300">Cập nhật cấu hình</p><h2 id="admin-edit-title" className="mt-2 font-display text-2xl font-bold">Chỉnh sửa nội dung đã tạo</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">Mở từng mục để điều chỉnh nội dung và tham số thay vì phải xóa rồi tạo lại. Lưu từng biểu mẫu để cập nhật cấu hình chung.</p></div>
    <Group title="Lời động viên" description="Chỉnh sửa câu chữ, bối cảnh phản hồi và trạng thái hiển thị.">{config.encouragements.length ? config.encouragements.map((entry) => <form key={entry.id} onSubmit={(event) => updateEncouragement(event, entry.id)} className="rounded-2xl border border-amber-100 p-4 dark:border-amber-400/15"><div className="grid gap-3 sm:grid-cols-[1fr_auto_auto]"><textarea aria-label={`Nội dung lời động viên ${entry.text}`} name="text" defaultValue={entry.text} className="input mt-0 min-h-20" /><select aria-label={`Loại lời động viên ${entry.text}`} name="type" defaultValue={entry.type} className="input mt-0"><option value="correct">Trả lời đúng</option><option value="incorrect">Trả lời chưa đúng</option></select><label className="inline-flex items-center gap-2 text-sm font-bold"><input aria-label={`Trạng thái lời động viên ${entry.text}`} name="enabled" type="checkbox" defaultChecked={entry.enabled} />Hiển thị</label></div><button className="secondary-button mt-3" type="submit">Lưu chỉnh sửa</button></form>) : <p className="text-sm text-slate-500">Chưa có lời động viên để chỉnh sửa.</p>}</Group>
    <Group title="Thành tích tùy chỉnh" description="Điều chỉnh điều kiện, phần thưởng XP/mảnh ghép và trạng thái công bố.">{config.customAchievements.length ? config.customAchievements.map((entry) => <form key={entry.id} onSubmit={(event) => updateAchievement(event, entry.id)} className="rounded-2xl border border-amber-100 p-4 dark:border-amber-400/15"><div className="grid gap-3 md:grid-cols-2"><input aria-label={`Tên thành tích ${entry.name}`} name="name" defaultValue={entry.name} className="input mt-0" /><input aria-label={`Mô tả thành tích ${entry.name}`} name="description" defaultValue={entry.description} className="input mt-0" /><select aria-label={`Chỉ số thành tích ${entry.name}`} name="metric" defaultValue={entry.metric} className="input mt-0"><option value="xp">XP</option><option value="learnedCards">Thẻ đã nhớ</option><option value="completedQuizzes">Đề hoàn thành</option><option value="completedSets">Bộ hoàn tất</option></select><input aria-label={`Mốc điều kiện ${entry.name}`} name="threshold" defaultValue={entry.threshold} type="number" min="1" className="input mt-0" /><input aria-label={`XP phần thưởng ${entry.name}`} name="rewardXp" defaultValue={entry.rewardXp} type="number" min="0" className="input mt-0" /><input aria-label={`Mảnh ghép phần thưởng ${entry.name}`} name="rewardFragments" defaultValue={entry.rewardFragments} type="number" min="0" className="input mt-0" /></div><label className="mt-3 inline-flex items-center gap-2 text-sm font-bold"><input aria-label={`Trạng thái thành tích ${entry.name}`} name="enabled" type="checkbox" defaultChecked={entry.enabled} />Công bố thành tích này</label><button className="secondary-button ml-3 mt-3" type="submit">Lưu chỉnh sửa</button></form>) : <p className="text-sm text-slate-500">Chưa có mốc tùy chỉnh để chỉnh sửa.</p>}</Group>
    <Group title="Phần thưởng vòng quay" description="Điều chỉnh tên, loại, giá trị, trọng số và màu của từng phần thưởng.">{config.wheelRewards.length ? config.wheelRewards.map((entry) => <form key={entry.id} onSubmit={(event) => updateReward(event, entry.id)} className="rounded-2xl border border-amber-100 p-4 dark:border-amber-400/15"><div className="grid gap-3 md:grid-cols-5"><input aria-label={`Tên phần thưởng ${entry.label}`} name="label" defaultValue={entry.label} className="input mt-0 md:col-span-2" /><select aria-label={`Loại phần thưởng ${entry.label}`} name="kind" defaultValue={entry.kind} className="input mt-0"><option value="xp">XP</option><option value="fragment">Mảnh ghép</option><option value="badge">Huy hiệu</option><option value="ticket">Vé quay</option><option value="item">Vật phẩm</option></select><input aria-label={`Giá trị phần thưởng ${entry.label}`} name="value" defaultValue={entry.value} type="number" min="0" className="input mt-0" /><input aria-label={`Trọng số phần thưởng ${entry.label}`} name="probability" defaultValue={entry.probability} type="number" min="0" className="input mt-0" /></div><div className="mt-3 flex items-center gap-3"><label className="text-sm font-bold" htmlFor={`color-${entry.id}`}>Màu hiển thị</label><input id={`color-${entry.id}`} aria-label={`Màu phần thưởng ${entry.label}`} name="color" defaultValue={entry.color} type="color" className="h-10 w-12 rounded-xl border border-amber-200 bg-transparent p-1 dark:border-amber-400/30" /><button className="secondary-button" type="submit">Lưu chỉnh sửa</button></div></form>) : <p className="text-sm text-slate-500">Chưa có phần thưởng để chỉnh sửa.</p>}</Group>
  </section>;
}
