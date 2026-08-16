-- Study Historia / Supabase foundation schema
-- Run in Supabase SQL Editor after enabling the required Auth providers.

create table if not exists public.study_accounts (
  user_id uuid primary key references auth.users(id) on delete cascade,
  account_code text not null unique,
  display_name text not null default '',
  role text not null default 'Member' check (role in ('Member', 'Admin', 'Founder')),
  locked boolean not null default false,
  legacy_account_id text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.study_accounts enable row level security;
drop policy if exists "study_accounts_owner_read" on public.study_accounts;
create policy "study_accounts_owner_read" on public.study_accounts for select to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "study_accounts_owner_update_name" on public.study_accounts;
create policy "study_accounts_owner_update_name" on public.study_accounts for update to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

create table if not exists public.study_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null default '',
  xp integer not null default 0 check (xp >= 0),
  level integer not null default 1 check (level >= 1),
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create table if not exists public.flashcard_decks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  subject text not null default '',
  description text not null default '',
  cards jsonb not null default '[]'::jsonb,
  study_count integer not null default 0 check (study_count >= 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.quiz_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  subject text not null default '',
  score integer not null default 0 check (score >= 0),
  total_questions integer not null default 0 check (total_questions >= 0),
  duration_seconds integer not null default 0 check (duration_seconds >= 0),
  answers jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.history_characters (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  aliases text not null default '',
  birth_year text not null default '',
  death_year text not null default '',
  hometown text not null default '',
  role text not null default '',
  summary text not null default '',
  biography text not null default '',
  image_url text not null default '',
  image_source text not null default '',
  information_source text not null default '',
  source_url text not null default '',
  fragment_total integer not null default 12 check (fragment_total > 0),
  timeline jsonb not null default '[]'::jsonb,
  categories text[] not null default '{}',
  created_by uuid references auth.users(id) on delete set null,
  updated_at timestamptz not null default now()
);

create table if not exists public.user_character_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  character_id uuid not null references public.history_characters(id) on delete cascade,
  fragments integer not null default 0 check (fragments >= 0),
  assembled_at timestamptz,
  unlocked_at timestamptz,
  primary key (user_id, character_id)
);

create table if not exists public.user_achievements (
  user_id uuid not null references auth.users(id) on delete cascade,
  achievement_key text not null,
  unlocked_at timestamptz not null default now(),
  reward_claimed boolean not null default false,
  primary key (user_id, achievement_key)
);

create table if not exists public.user_fragments (
  user_id uuid not null references auth.users(id) on delete cascade,
  fragment_key text not null,
  quantity integer not null default 0 check (quantity >= 0),
  rarity text not null default 'common',
  updated_at timestamptz not null default now(),
  primary key (user_id, fragment_key)
);

alter table public.study_profiles enable row level security;
alter table public.flashcard_decks enable row level security;
alter table public.quiz_attempts enable row level security;
alter table public.history_characters enable row level security;
alter table public.user_character_progress enable row level security;
alter table public.user_achievements enable row level security;
alter table public.user_fragments enable row level security;

-- Re-runnable policies for user-owned data.
drop policy if exists "study_profiles_owner" on public.study_profiles;
create policy "study_profiles_owner" on public.study_profiles for all to authenticated
  using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

drop policy if exists "flashcard_decks_owner" on public.flashcard_decks;
create policy "flashcard_decks_owner" on public.flashcard_decks for all to authenticated
  using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

drop policy if exists "quiz_attempts_owner" on public.quiz_attempts;
create policy "quiz_attempts_owner" on public.quiz_attempts for all to authenticated
  using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

drop policy if exists "character_progress_owner" on public.user_character_progress;
create policy "character_progress_owner" on public.user_character_progress for all to authenticated
  using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

drop policy if exists "achievements_owner" on public.user_achievements;
create policy "achievements_owner" on public.user_achievements for all to authenticated
  using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

drop policy if exists "fragments_owner" on public.user_fragments;
create policy "fragments_owner" on public.user_fragments for all to authenticated
  using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

-- The catalog is readable only after authentication; writes must be performed by a protected backend/admin path.
drop policy if exists "characters_authenticated_read" on public.history_characters;
create policy "characters_authenticated_read" on public.history_characters for select to authenticated using (true);

create index if not exists flashcard_decks_user_id_idx on public.flashcard_decks(user_id);
create index if not exists quiz_attempts_user_id_idx on public.quiz_attempts(user_id);
create index if not exists character_progress_user_id_idx on public.user_character_progress(user_id);
