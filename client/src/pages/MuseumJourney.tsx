import MuseumEnhanced from "./MuseumEnhanced";
import { LockKeyhole, Puzzle } from "lucide-react";
import type { AppConfig, ProfileState, StudyAccount } from "../../../shared/study";

export default function MuseumJourney({ account, profile, config }: { account: StudyAccount; profile: ProfileState; config: AppConfig }) {
  return <>
    <MuseumEnhanced account={account} profile={profile} config={config} />
    {config.characters.length > 0 && <section className="panel mt-7 p-6" aria-labelledby="fragment-map-title">
      <div className="flex flex-wrap items-start justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-amber-700 dark:text-amber-300">Bộ sưu tập mảnh ghép</p><h2 id="fragment-map-title" className="mt-2 font-display text-2xl font-bold">Ghép từng mảnh, mở từng câu chuyện</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">Mỗi ô đại diện cho mảnh ghép đã có hoặc còn thiếu của một nhân vật. Khi số mảnh đạt mốc do quản trị viên đặt, tiểu sử và timeline được mở trong Bảo tàng.</p></div><span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-2 text-sm font-bold text-amber-900 dark:bg-amber-500/15 dark:text-amber-100"><Puzzle className="h-4 w-4" />{Object.values(profile.fragments).reduce((sum, value) => sum + Math.max(0, value), 0)} mảnh đang giữ</span></div>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">{config.characters.map((character) => {
        const held = Math.min(character.fragmentTotal, Math.max(0, profile.fragments[character.id] ?? 0));
        const unlocked = held >= character.fragmentTotal;
        const tiles = Array.from({ length: character.fragmentTotal }, (_, index) => index);
        return <article className="rounded-3xl border border-amber-100 bg-amber-50/50 p-4 dark:border-amber-400/15 dark:bg-amber-500/[.04]" key={character.id}><div className="flex items-start justify-between gap-4"><div><h3 className="font-display text-lg font-bold">{character.name}</h3><p className="mt-1 text-sm text-slate-500">{unlocked ? "Đã mở khóa — xem chi tiết trong Bảo tàng." : `Còn ${character.fragmentTotal - held} mảnh để mở khóa.`}</p></div>{!unlocked && <LockKeyhole className="h-5 w-5 shrink-0 text-amber-700 dark:text-amber-300" aria-label="Nhân vật chưa mở khóa" />}</div><div className="mt-4 grid grid-cols-6 gap-1.5" role="img" aria-label={`${character.name}: ${held} trên ${character.fragmentTotal} mảnh ghép đã thu thập`}>{tiles.map((tile) => <span key={tile} className={`fragment-tile ${tile < held ? "fragment-tile--held" : "fragment-tile--missing"}`} aria-hidden="true" />)}</div><p className="mt-3 text-right text-xs font-bold text-amber-800 dark:text-amber-200">{held}/{character.fragmentTotal} mảnh ghép</p></article>;
      })}</div>
    </section>}
  </>;
}
