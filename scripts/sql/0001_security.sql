-- Migration 0001 — tables de soumissions et déduplication votes/signalements + RPC atomiques.
-- À exécuter dans l'éditeur SQL Supabase.
-- Prérequis : table `commentaires` déjà existante (id uuid, votes_*, sig_*).

-- ── Soumissions citoyennes (modération hors-ligne, pas d'IP) ──────────────────
create table if not exists soumissions (
  id          uuid primary key,
  categorie   varchar(50)  not null,
  contenu     text         not null,
  sources     text,
  contact     varchar(255),
  anonyme     boolean      default false,
  created_at  timestamptz  default now()
);

-- ── Déduplication des votes ───────────────────────────────────────────────────
create table if not exists comment_votes (
  id          serial primary key,
  comment_id  uuid         not null,
  voter_id    varchar(64)  not null,
  type        varchar(16)  not null,
  created_at  timestamptz  default now(),
  unique (comment_id, voter_id, type)
);

-- ── Déduplication des signalements ────────────────────────────────────────────
create table if not exists comment_reports (
  id          serial primary key,
  comment_id  uuid         not null,
  voter_id    varchar(64)  not null,
  motif       varchar(16)  not null,
  created_at  timestamptz  default now(),
  unique (comment_id, voter_id, motif)
);

-- ── RPC : vote atomique avec déduplication ────────────────────────────────────
-- Insère la trace de vote ; n'incrémente le compteur que si la trace est nouvelle.
create or replace function vote_comment(
  p_comment_id uuid,
  p_type       text,
  p_voter_id   text
) returns void
language plpgsql
as $$
declare
  inserted boolean;
begin
  if p_type not in ('utile', 'inutile') then
    raise exception 'type invalide';
  end if;

  insert into comment_votes (comment_id, voter_id, type)
  values (p_comment_id, p_voter_id, p_type)
  on conflict (comment_id, voter_id, type) do nothing;

  get diagnostics inserted = row_count;
  if inserted then
    if p_type = 'utile' then
      update commentaires set votes_utile = coalesce(votes_utile, 0) + 1 where id = p_comment_id;
    else
      update commentaires set votes_inutile = coalesce(votes_inutile, 0) + 1 where id = p_comment_id;
    end if;
  end if;
end;
$$;

-- ── RPC : signalement atomique avec déduplication ─────────────────────────────
create or replace function report_comment(
  p_comment_id uuid,
  p_motif      text,
  p_voter_id   text
) returns void
language plpgsql
as $$
declare
  inserted boolean;
begin
  if p_motif not in ('insulte', 'desinformation', 'spam') then
    raise exception 'motif invalide';
  end if;

  insert into comment_reports (comment_id, voter_id, motif)
  values (p_comment_id, p_voter_id, p_motif)
  on conflict (comment_id, voter_id, motif) do nothing;

  get diagnostics inserted = row_count;
  if inserted then
    if p_motif = 'insulte' then
      update commentaires set sig_insulte = coalesce(sig_insulte, 0) + 1 where id = p_comment_id;
    elsif p_motif = 'desinformation' then
      update commentaires set sig_desinfo = coalesce(sig_desinfo, 0) + 1 where id = p_comment_id;
    else
      update commentaires set sig_spam = coalesce(sig_spam, 0) + 1 where id = p_comment_id;
    end if;
  end if;
end;
$$;
