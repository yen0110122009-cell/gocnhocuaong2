import { ArrowRight, BarChart3, BookOpen, Check, CircleHelp, Clock3, Flame, Pause, Play, RotateCcw, Settings2, Sparkles, Trophy, Volume2, VolumeX } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { applyStudyActivityRewards, computedAchievements, type AppConfig, type PomodoroSession, type ProfileState } from "../../../shared/study";

const KEY = "study_historia_pomodoro_v2";
type Mode = "focus" | "shortBreak" | "longBreak";
type View = "flashcards" | "quizzes" | "achievements" | "museum" | "progress";
type Props = { profile: ProfileState; config: AppConfig; onProfile: (profile: ProfileState, message?: string) => void; onView: (view: View) => void };
const presets = [{ label: "Tập trung", focus: 25, short: 5, long: 15 }, { label: "Ngắn", focus: 10, short: 2, long: 5 }, { label: "Sâu", focus: 50, short: 10, long: 15 }, { label: "Một giờ", focus: 60, short: 15, long: 20 }];
const modeLabels: Record<Mode, string> = { focus: "Tập trung", shortBreak: "Nghỉ ngắn", longBreak: "Nghỉ dài" };
const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
const dayKey = (value: string) => new Date(value).toLocaleDateString("vi-VN");

export default function Pomodoro({ profile, config, onProfile, onView }: Props) {
  const [focus, setFocus] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);
  const [seconds, setSeconds] = useState(25 * 60);
  const [mode, setMode] = useState<Mode>("focus");
  const [running, setRunning] = useState(false);
  const [autoAdvance, setAutoAdvance] = useState(true);
  const [sound, setSound] = useState(profile.soundEnabled);
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");
  const [totalSessions, setTotalSessions] = useState(4);
  const [sessionStartedAt, setSessionStartedAt] = useState<string | null>(null);
  const completionRef = useRef(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY) || "null");
      if (saved) {
        setFocus(clamp(Number(saved.focus) || 25, 1, 120));
        setShortBreak(clamp(Number(saved.shortBreak) || 5, 1, 30));
        setLongBreak(clamp(Number(saved.longBreak) || 15, 1, 45));
        setAutoAdvance(saved.autoAdvance !== false);
        setSound(saved.sound !== false);
      }
    } catch { /* ignore malformed preference */ }
  }, []);
  useEffect(() => { localStorage.setItem(KEY, JSON.stringify({ focus, shortBreak, longBreak, autoAdvance, sound })); }, [focus, shortBreak, longBreak, autoAdvance, sound]);
  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => setSeconds((value) => Math.max(0, value - 1)), 1000);
    return () => window.clearInterval(timer);
  }, [running]);
  useEffect(() => {
    if (seconds !== 0 || completionRef.current) return;
    completionRef.current = true;
    if (mode === "focus") completeFocus();
    else {
      setRunning(false);
      setMode("focus");
      setSeconds(focus * 60);
      toast.success("Đã hết thời gian nghỉ. Sẵn sàng cho phiên tiếp theo.");
    }
  }, [seconds, mode, focus]);

  const todaySessions = profile.pomodoroHistory.filter((item) => dayKey(item.endedAt) === dayKey(new Date().toISOString()));
  const completedSessions = profile.pomodoroHistory.filter((item) => item.status === "completed" && item.mode === "focus");
  const completedToday = todaySessions.filter((item) => item.status === "completed" && item.mode === "focus").length;
  const totalMinutes = completedSessions.reduce((sum, item) => sum + item.durationMinutes, 0);
  const average = completedSessions.length ? Math.round(totalMinutes / completedSessions.length) : 0;
  const streakDays = new Set(completedSessions.map((item) => dayKey(item.endedAt))).size;
  const recentDays = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(); date.setHours(0, 0, 0, 0); date.setDate(date.getDate() - (6 - index));
    const key = dayKey(date.toISOString());
    return { label: date.toLocaleDateString("vi-VN", { weekday: "short" }), minutes: completedSessions.filter((item) => dayKey(item.endedAt) === key).reduce((sum, item) => sum + item.durationMinutes, 0) };
  });
  const maxMinutes = Math.max(1, ...recentDays.map((item) => item.minutes));
  const bySubject = Array.from(new Set(completedSessions.map((item) => item.subject.trim()).filter(Boolean))).map((name) => ({ name, minutes: completedSessions.filter((item) => item.subject.trim() === name).reduce((sum, item) => sum + item.durationMinutes, 0) })).sort((a, b) => b.minutes - a.minutes).slice(0, 5);
  const totalDuration = mode === "focus" ? focus : mode === "shortBreak" ? shortBreak : longBreak;
  const display = `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
  const progress = Math.max(0, Math.min(100, (1 - seconds / (totalDuration * 60)) * 100));

  function start() {
    if (mode === "focus" && !subject.trim()) toast.info("Bạn có thể nhập môn học để thống kê chính xác hơn.");
    if (!sessionStartedAt) setSessionStartedAt(new Date().toISOString());
    completionRef.current = false;
    setRunning(true);
  }
  function reset(record = false) {
    if (record && running && mode === "focus" && sessionStartedAt) {
      const abandoned: PomodoroSession = { id: crypto.randomUUID(), startedAt: sessionStartedAt, endedAt: new Date().toISOString(), durationMinutes: Math.max(1, Math.round((focus * 60 - seconds) / 60)), subject, topic, sessionNumber: completedToday + 1, totalSessions, mode: "focus", status: "abandoned" };
      onProfile({ ...profile, pomodoroHistory: [abandoned, ...profile.pomodoroHistory] });
    }
    setRunning(false); setMode("focus"); setSeconds(focus * 60); setSessionStartedAt(null); completionRef.current = false;
  }
  function choosePreset(preset: typeof presets[number]) {
    reset(); setFocus(preset.focus); setShortBreak(preset.short); setLongBreak(preset.long); setSeconds(preset.focus * 60);
  }
  function completeFocus() {
    const endedAt = new Date().toISOString();
    const session: PomodoroSession = { id: crypto.randomUUID(), startedAt: sessionStartedAt ?? new Date(Date.now() - focus * 60000).toISOString(), endedAt, durationMinutes: focus, subject: subject.trim() || "Tự học", topic: topic.trim(), sessionNumber: completedToday + 1, totalSessions, mode: "focus", status: "completed" };
    const activity = { id: `pomodoro-${session.id}`, occurredAt: endedAt, kind: "pomodoro" as const, quantity: 1, durationSeconds: focus * 60, xpEarned: Math.max(10, focus * 2) };
    const rewarded = applyStudyActivityRewards({ ...profile, pomodoroHistory: [session, ...profile.pomodoroHistory] }, activity, config);
    onProfile(rewarded.profile, rewarded.newlyUnlocked.length ? `Hoàn thành phiên Pomodoro · +${activity.xpEarned} XP · mở khóa ${rewarded.newlyUnlocked.length} thành tích` : `Hoàn thành phiên Pomodoro · +${activity.xpEarned} XP`);
    setRunning(false); setSessionStartedAt(null); setMode(autoAdvance ? (session.sessionNumber % 4 === 0 ? "longBreak" : "shortBreak") : "focus"); setSeconds((autoAdvance ? (session.sessionNumber % 4 === 0 ? longBreak : shortBreak) : focus) * 60);
    if (sound) try { window.navigator.vibrate?.([100, 80, 100]); } catch { /* optional */ }
    toast.success("Ong đã hoàn thành một chặng tập trung.");
  }
  function skipBreak() { setRunning(false); setMode("focus"); setSeconds(focus * 60); completionRef.current = false; }
  function markSkipped() {
    if (mode !== "focus") return skipBreak();
    const now = new Date().toISOString();
    const skipped: PomodoroSession = { id: crypto.randomUUID(), startedAt: sessionStartedAt ?? now, endedAt: now, durationMinutes: 0, subject, topic, sessionNumber: completedToday + 1, totalSessions, mode: "focus", status: "skipped" };
    onProfile({ ...profile, pomodoroHistory: [skipped, ...profile.pomodoroHistory] }, "Đã bỏ qua phiên; lịch sử vẫn được lưu.");
    reset();
  }

  return <div className="space-y-6">
    <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-amber-700 dark:text-amber-300">Tiến trình học tập · Module chính</p><h1 className="mt-2 font-display text-4xl font-bold">Pomodoro lịch sử</h1><p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">Tập trung theo nhịp vừa sức. Mỗi phiên hoàn thành được ghi vào tiến trình, cộng XP và góp vào các mốc thành tích xa; không tạo thành tích cho từng phiên riêng lẻ.</p></div><button className="secondary-button" onClick={() => onView("progress")}><BarChart3 className="h-4 w-4" />Xem Tiến trình học tập</button></div>
    <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4"><Metric icon={Clock3} label="Tổng phiên" value={completedSessions.length} detail={`${completedToday} phiên hôm nay`} /><Metric icon={Flame} label="Tổng thời gian" value={`${Math.floor(totalMinutes / 60)}h ${totalMinutes % 60}p`} detail={`Trung bình ${average || 0} phút/phiên`} /><Metric icon={Sparkles} label="Chuỗi ngày" value={streakDays} detail="Ngày có phiên hoàn thành" /><Metric icon={Trophy} label="Mốc thành tích" value={computedAchievements(profile, config).filter((item) => item.metric === "pomodoroSessions").length || "—"} detail={`${profile.xp.toLocaleString("vi-VN")} XP hiện có`} /></section>
    <section className="grid gap-5 xl:grid-cols-[1.1fr_.9fr]">
      <div className="panel p-6"><div className="flex flex-wrap items-center justify-between gap-3"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-amber-700 dark:text-amber-300">{modeLabels[mode]}</p><h2 className="mt-2 font-display text-2xl font-bold">Phiên {mode === "focus" ? `${completedToday + 1}/${totalSessions}` : "nghỉ phục hồi"}</h2></div><span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-800 dark:bg-amber-400/10 dark:text-amber-200">{running ? "Đang chạy" : "Đang chờ"}</span></div><div className="mx-auto mt-6 grid h-64 w-64 place-items-center rounded-full border-[14px] border-amber-100 bg-amber-50 dark:border-amber-500/10 dark:bg-amber-500/10" style={{ background: `conic-gradient(#d89118 ${progress}%, transparent ${progress}%)` }}><div className="grid h-52 w-52 place-items-center rounded-full bg-white text-center dark:bg-[#241b0c]"><span className="font-mono text-6xl font-bold" aria-live="polite">{display}</span><small className="mt-1 text-xs text-slate-500">{modeLabels[mode]}</small></div></div><div className="mt-6 flex flex-wrap justify-center gap-3"><button className="primary-button px-5 py-3" onClick={() => running ? setRunning(false) : start()}>{running ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}{running ? "Tạm dừng" : "Bắt đầu"}</button><button className="secondary-button px-5 py-3" onClick={() => reset(true)}><RotateCcw className="h-4 w-4" />Bắt đầu lại</button><button className="secondary-button px-5 py-3" onClick={markSkipped}>Bỏ qua phiên</button></div><p className="mt-4 text-center text-sm text-slate-500">Kết thúc phiên sẽ cộng XP, cập nhật chuỗi ngày và kiểm tra các mốc 10/30/100 phiên.</p></div>
      <div className="space-y-5"><section className="panel p-6"><div className="flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-amber-700 dark:text-amber-300">Liên kết học tập</p><h2 className="mt-2 font-display text-2xl font-bold">Học gì trong phiên này?</h2></div><Settings2 className="h-5 w-5 text-amber-600" /></div><div className="mt-5 space-y-3"><label className="block text-sm font-bold">Môn học<input className="field mt-2" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Ví dụ: Lịch sử Việt Nam" /></label><label className="block text-sm font-bold">Nội dung<input className="field mt-2" value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="Ví dụ: Nhà Trần" /></label><label className="block text-sm font-bold">Số phiên mục tiêu<input className="field mt-2" type="number" min="1" max="12" value={totalSessions} onChange={(e) => setTotalSessions(clamp(Number(e.target.value) || 1, 1, 12))} /></label></div><div className="mt-5 grid gap-2 sm:grid-cols-2"><button className="secondary-button justify-between" onClick={() => onView("flashcards")}><span className="flex items-center gap-2"><BookOpen className="h-4 w-4" />Ôn Flashcard</span><ArrowRight className="h-4 w-4" /></button><button className="secondary-button justify-between" onClick={() => onView("quizzes")}><span className="flex items-center gap-2"><CircleHelp className="h-4 w-4" />Làm Đề kiểm tra</span><ArrowRight className="h-4 w-4" /></button></div></section><section className="panel p-6"><h2 className="font-display text-xl font-bold">Chế độ phiên</h2><div className="mt-4 grid gap-2 sm:grid-cols-2"><label className="flex items-center justify-between rounded-xl border border-slate-200 p-3 text-sm dark:border-white/10"><span>Tự chuyển nghỉ</span><input type="checkbox" checked={autoAdvance} onChange={(e) => setAutoAdvance(e.target.checked)} /></label><button className="secondary-button justify-center" onClick={() => setSound((value) => !value)}>{sound ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}{sound ? "Âm thanh bật" : "Âm thanh tắt"}</button></div><div className="mt-4 grid gap-2 sm:grid-cols-2">{presets.map((preset) => <button key={preset.label} className={`rounded-xl border p-3 text-left text-sm ${focus === preset.focus && shortBreak === preset.short && longBreak === preset.long ? "border-amber-500 bg-amber-50 dark:bg-amber-500/10" : "border-slate-200 dark:border-white/10"}`} onClick={() => choosePreset(preset)}><b>{preset.label}</b><span className="mt-1 block text-xs text-slate-500">{preset.focus}/{preset.short}/{preset.long} phút</span></button>)}</div><div className="mt-4 grid gap-3 sm:grid-cols-3"><label className="text-xs font-bold">Học<input className="field mt-1" type="number" min="1" max="120" value={focus} onChange={(e) => { const value = clamp(Number(e.target.value) || 1, 1, 120); setFocus(value); if (mode === "focus") { setRunning(false); setSeconds(value * 60); } }} /></label><label className="text-xs font-bold">Nghỉ ngắn<input className="field mt-1" type="number" min="1" max="30" value={shortBreak} onChange={(e) => setShortBreak(clamp(Number(e.target.value) || 1, 1, 30))} /></label><label className="text-xs font-bold">Nghỉ dài<input className="field mt-1" type="number" min="1" max="45" value={longBreak} onChange={(e) => setLongBreak(clamp(Number(e.target.value) || 1, 1, 45))} /></label></div></section></div>
    </section>
    <section className="grid gap-5 xl:grid-cols-[1.2fr_.8fr]"><section className="panel p-6"><div className="flex items-end justify-between"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-amber-700 dark:text-amber-300">7 ngày gần đây</p><h2 className="mt-2 font-display text-2xl font-bold">Phút tập trung theo ngày</h2></div><BarChart3 className="h-5 w-5 text-amber-600" /></div><div className="mt-7 grid h-48 grid-cols-7 items-end gap-3" role="img" aria-label="Biểu đồ phút Pomodoro trong bảy ngày gần đây">{recentDays.map((day) => <div className="flex h-full flex-col justify-end" key={day.label}><div className="rounded-t-xl bg-gradient-to-t from-amber-500 to-yellow-300" style={{ height: `${Math.max(day.minutes ? 12 : 3, day.minutes / maxMinutes * 100)}%` }} title={`${day.label}: ${day.minutes} phút`} /><span className="mt-2 text-center text-[11px] font-bold text-slate-500">{day.label}</span></div>)}</div></section><section className="panel p-6"><p className="text-xs font-bold uppercase tracking-[.16em] text-amber-700 dark:text-amber-300">Theo môn học</p><h2 className="mt-2 font-display text-2xl font-bold">Nơi bạn đã đặt mật ong</h2><div className="mt-5 space-y-3">{bySubject.length ? bySubject.map((item) => <div key={item.name}><div className="flex justify-between gap-3 text-sm"><b className="truncate">{item.name}</b><span className="text-slate-500">{item.minutes} phút</span></div><div className="mt-1 h-2 rounded-full bg-amber-100 dark:bg-amber-500/10"><div className="h-full rounded-full bg-amber-500" style={{ width: `${Math.min(100, item.minutes / Math.max(1, bySubject[0].minutes) * 100)}%` }} /></div></div>) : <p className="text-sm text-slate-500">Nhập môn học khi bắt đầu để xem phân bổ thời gian.</p>}</div></section></section>
    <section className="panel p-6"><div className="flex flex-wrap items-center justify-between gap-3"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-amber-700 dark:text-amber-300">Lịch sử phiên</p><h2 className="mt-2 font-display text-2xl font-bold">Các chặng gần đây</h2></div><button className="secondary-button" onClick={() => onView("achievements")}><Trophy className="h-4 w-4" />Xem Thành tích</button></div>{profile.pomodoroHistory.length ? <div className="mt-5 grid gap-2 md:grid-cols-2">{profile.pomodoroHistory.slice(0, 8).map((item) => <div key={item.id} className="flex items-center gap-3 rounded-xl border border-slate-100 p-3 dark:border-white/10"><span className={`grid h-9 w-9 place-items-center rounded-xl ${item.status === "completed" ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300" : "bg-slate-100 text-slate-500 dark:bg-white/5"}`}>{item.status === "completed" ? <Check className="h-4 w-4" /> : <Clock3 className="h-4 w-4" />}</span><span className="min-w-0 flex-1"><b className="block truncate text-sm">{item.subject || "Tự học"}</b><small className="text-xs text-slate-500">{item.durationMinutes ? `${item.durationMinutes} phút` : "Chưa hoàn tất"} · {new Date(item.endedAt).toLocaleString("vi-VN")}</small></span><span className="text-xs font-bold text-slate-500">{item.status === "completed" ? "Hoàn thành" : item.status === "abandoned" ? "Bỏ dở" : "Bỏ qua"}</span></div>)}</div> : <p className="mt-5 rounded-xl bg-slate-50 p-4 text-sm text-slate-500 dark:bg-white/5">Chưa có phiên nào. Bắt đầu với 10 phút cũng là một bước tiến.</p>}</section>
  </div>;
}

function Metric({ icon: Icon, label, value, detail }: { icon: typeof Clock3; label: string; value: string | number; detail: string }) { return <div className="study-card p-5"><div className="flex items-center justify-between"><span className="grid h-10 w-10 place-items-center rounded-2xl bg-amber-50 text-amber-700 dark:bg-amber-400/10 dark:text-amber-300"><Icon className="h-5 w-5" /></span><small className="text-right text-slate-400">{detail}</small></div><b className="mt-4 block text-2xl text-slate-950 dark:text-white">{typeof value === "number" ? value.toLocaleString("vi-VN") : value}</b><p className="mt-1 text-sm text-slate-500">{label}</p></div>; }
