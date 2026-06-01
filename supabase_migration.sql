-- ============================================================
-- Bender Exports — Supabase Migration v2.0.0
-- Run this entire file in Supabase → SQL Editor → Run
-- ============================================================

-- ── Enable UUID extension ─────────────────────────────────
create extension if not exists "uuid-ossp";

-- ── Profiles (extends Supabase auth.users) ────────────────
-- auth.users is managed by Supabase Auth.
-- We store app-specific fields here and join on id = auth.users.id
create table if not exists public.profiles (
  id          uuid primary key references auth.users(id) on delete cascade,
  name        text not null,
  email       text not null,
  role        text not null default 'clerk',
  cws_access  text[] default '{}',
  machine_id  text,
  avatar      text,
  active      boolean default true,
  created_at  timestamptz default now(),
  updated_at  timestamptz default now()
);

-- ── CWS Stations ─────────────────────────────────────────
create table if not exists public.cws (
  id         text primary key,
  name       text not null,
  region     text,
  image      text,
  updated_at timestamptz default now()
);

-- ── Farmers ──────────────────────────────────────────────
create table if not exists public.farmers (
  id         text primary key,
  cws_id     text references public.cws(id),
  name       text not null,
  farmer_id  text,
  grp        text,
  balance    bigint default 0,
  phone      text,
  active     boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- ── Seasons ───────────────────────────────────────────────
create table if not exists public.seasons (
  id            text primary key,
  name          text,
  start_date    date,
  end_date      date,
  rate_standard integer,
  rate_flotant  integer,
  status        text default 'active',
  created_by    text,
  notes         text,
  closed_at     timestamptz,
  created_at    timestamptz default now(),
  updated_at    timestamptz default now()
);

-- ── Station Seasons ───────────────────────────────────────
create table if not exists public.station_seasons (
  id         text primary key,
  season_id  text references public.seasons(id),
  cws_id     text references public.cws(id),
  start_date date,
  end_date   date,
  status     text default 'active',
  updated_at timestamptz default now()
);

-- ── Cherry Purchases ──────────────────────────────────────
create table if not exists public.cherry (
  id               text primary key,
  cws_id           text references public.cws(id),
  farmer_id        text references public.farmers(id),
  date             date,
  gnr_number       text unique,
  standard_kg      numeric,
  flotant_kg       numeric,
  total_kg         numeric,
  rate_standard    integer,
  rate_flotant     integer,
  payment_standard bigint,
  payment_flotant  bigint,
  total_paid       bigint,
  avg_rate         numeric,
  payment_method   text,
  status           text default 'pending',
  by_user          text,
  paid_by          text,
  paid_at          timestamptz,
  notes            text,
  created_at       timestamptz default now(),
  updated_at       timestamptz default now()
);

-- ── Cashbook ─────────────────────────────────────────────
create table if not exists public.cashbook (
  id          text primary key,
  cws_id      text references public.cws(id),
  date        date,
  type        text,
  category    text,
  description text,
  amount      bigint,
  balance     bigint,
  ref         text,
  by_user     text,
  created_at  timestamptz default now(),
  updated_at  timestamptz default now()
);

-- ── Bank Transactions ─────────────────────────────────────
create table if not exists public.bank_transactions (
  id          text primary key,
  cws_id      text references public.cws(id),
  date        date,
  type        text,
  description text,
  amount      bigint,
  balance     bigint,
  ref         text,
  by_user     text,
  updated_at  timestamptz default now()
);

-- ── Expenses ─────────────────────────────────────────────
create table if not exists public.expenses (
  id           text primary key,
  cws_id       text references public.cws(id),
  date         date,
  category     text,
  description  text,
  amount       bigint,
  capitalizable boolean default true,   -- renamed from 'exploitable'
  status       text default 'pending',
  by_user      text,
  updated_at   timestamptz default now()
);

-- ── Debts ────────────────────────────────────────────────
create table if not exists public.debts (
  id          text primary key,
  cws_id      text references public.cws(id),
  date        date,
  type        text,
  party       text,
  description text,
  amount      bigint,
  balance     bigint,
  status      text,
  updated_at  timestamptz default now()
);

-- ── Coffee Stock ──────────────────────────────────────────
create table if not exists public.stock (
  id               text primary key,
  cws_id           text references public.cws(id),
  date             date,
  description      text,
  grade            text,
  tonnes_in        numeric,
  tonnes_out       numeric default 0,
  tonnes_balance   numeric,
  unit_cost        bigint,
  total_value      bigint,
  valuation_method text,
  updated_at       timestamptz default now()
);

-- ── Fund Requests ─────────────────────────────────────────
create table if not exists public.fund_requests (
  id              text primary key,
  cws_id          text references public.cws(id),
  requested_by    text,
  amount          bigint,
  reason          text,
  status          text default 'pending_verification',
  requested_at    timestamptz default now(),
  verified_by     text,
  verified_at     timestamptz,
  approved_by     text,
  approved_at     timestamptz,
  transfer_method text,
  transfer_ref    text,
  notes           text,
  updated_at      timestamptz default now()
);

-- ── Warehouse Stock ───────────────────────────────────────
create table if not exists public.warehouse_stock (
  id                text primary key,
  from_cws_id       text references public.cws(id),
  sent_by           text,
  date              date,
  grade             text,
  tonnes            numeric,
  lot_number        text,
  gnr_refs          text,
  transport_details text,
  status            text default 'pending',
  confirmed_by      text,
  confirmed_at      timestamptz,
  notes             text,
  updated_at        timestamptz default now()
);

-- ── Construction Projects ─────────────────────────────────
create table if not exists public.projects (
  id          text primary key,
  name        text,
  client      text,
  budget      bigint,
  start_date  date,
  end_date    date,
  status      text default 'planning',
  description text,
  created_by  text,
  updated_at  timestamptz default now()
);

create table if not exists public.project_costs (
  id          text primary key,
  project_id  text references public.projects(id),
  date        date,
  category    text,
  description text,
  amount      bigint,
  by_user     text,
  updated_at  timestamptz default now()
);

create table if not exists public.milestones (
  id             text primary key,
  project_id     text references public.projects(id),
  title          text,
  target_date    date,
  completed_date date,
  status         text default 'pending',
  updated_at     timestamptz default now()
);

create table if not exists public.contractors (
  id             text primary key,
  project_id     text references public.projects(id),
  name           text,
  role           text,
  phone          text,
  contract_value bigint,
  status         text default 'active',
  updated_at     timestamptz default now()
);

-- ── Machinery ────────────────────────────────────────────
create table if not exists public.machines (
  id           text primary key,
  name         text,
  type         text,
  plate        text,
  status       text default 'available',
  driver_id    text,
  assistant_id text,
  updated_at   timestamptz default now()
);

create table if not exists public.assistants (
  id         text primary key,
  name       text,
  machine_id text references public.machines(id),
  phone      text,
  updated_at timestamptz default now()
);

create table if not exists public.tasks (
  id          text primary key,
  machine_id  text references public.machines(id),
  customer    text,
  province    text,
  district    text,
  sector      text,
  cell        text,
  village     text,
  start_date  date,
  end_date    date,
  hourly_rate bigint,
  status      text default 'active',
  total_hours numeric default 0,
  notes       text,
  updated_at  timestamptz default now()
);

create table if not exists public.mach_tx (
  id         text primary key,
  machine_id text references public.machines(id),
  date       date,
  type       text,
  category   text,
  amount     bigint,
  description text,
  status     text default 'synced',
  updated_at timestamptz default now()
);

create table if not exists public.driver_logs (
  id            text primary key,
  driver_id     text,
  machine_id    text references public.machines(id),
  date          date,
  hours         numeric,
  fuel_received numeric,
  task_location text,
  condition     text,
  comments      text,
  status        text default 'submitted',
  updated_at    timestamptz default now()
);

create table if not exists public.leaves (
  id        text primary key,
  driver_id text,
  type      text,
  date      date,
  reason    text,
  status    text default 'pending',
  updated_at timestamptz default now()
);

-- ── System Config ─────────────────────────────────────────
create table if not exists public.system_config (
  key        text primary key,
  value      text,
  updated_at timestamptz default now()
);

-- ── Audit Log ────────────────────────────────────────────
create table if not exists public.audit_log (
  id         bigint generated always as identity primary key,
  user_id    uuid,
  action     text,
  table_name text,
  record_id  text,
  payload    jsonb,
  created_at timestamptz default now()
);

-- ── updated_at trigger (apply to all tables) ─────────────
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end; $$;

do $$ declare t text;
begin for t in select unnest(array[
  'profiles','cws','farmers','seasons','station_seasons','cherry',
  'cashbook','bank_transactions','expenses','debts','stock',
  'fund_requests','warehouse_stock','projects','project_costs',
  'milestones','contractors','machines','assistants','tasks',
  'mach_tx','driver_logs','leaves','system_config'
]) loop
  execute format($f$
    drop trigger if exists set_updated_at on public.%I;
    create trigger set_updated_at before update on public.%I
    for each row execute procedure public.set_updated_at();
  $f$, t, t);
end loop; end $$;

-- ── Row Level Security ────────────────────────────────────
-- Enable RLS on every table. The server uses the service-role key
-- which bypasses RLS. The frontend uses the anon key with RLS enforced.

alter table public.profiles         enable row level security;
alter table public.cws              enable row level security;
alter table public.farmers          enable row level security;
alter table public.seasons          enable row level security;
alter table public.station_seasons  enable row level security;
alter table public.cherry           enable row level security;
alter table public.cashbook         enable row level security;
alter table public.bank_transactions enable row level security;
alter table public.expenses         enable row level security;
alter table public.debts            enable row level security;
alter table public.stock            enable row level security;
alter table public.fund_requests    enable row level security;
alter table public.warehouse_stock  enable row level security;
alter table public.projects         enable row level security;
alter table public.project_costs    enable row level security;
alter table public.milestones       enable row level security;
alter table public.contractors      enable row level security;
alter table public.machines         enable row level security;
alter table public.assistants       enable row level security;
alter table public.tasks            enable row level security;
alter table public.mach_tx          enable row level security;
alter table public.driver_logs      enable row level security;
alter table public.leaves           enable row level security;
alter table public.system_config    enable row level security;
alter table public.audit_log        enable row level security;

-- Authenticated users can read all operational tables
-- (your server enforces role-based logic on top of this)
create policy "authenticated_read" on public.cws              for select using (auth.role() = 'authenticated');
create policy "authenticated_read" on public.farmers          for select using (auth.role() = 'authenticated');
create policy "authenticated_read" on public.seasons          for select using (auth.role() = 'authenticated');
create policy "authenticated_read" on public.station_seasons  for select using (auth.role() = 'authenticated');
create policy "authenticated_read" on public.cherry           for select using (auth.role() = 'authenticated');
create policy "authenticated_read" on public.cashbook         for select using (auth.role() = 'authenticated');
create policy "authenticated_read" on public.bank_transactions for select using (auth.role() = 'authenticated');
create policy "authenticated_read" on public.expenses         for select using (auth.role() = 'authenticated');
create policy "authenticated_read" on public.debts            for select using (auth.role() = 'authenticated');
create policy "authenticated_read" on public.stock            for select using (auth.role() = 'authenticated');
create policy "authenticated_read" on public.fund_requests    for select using (auth.role() = 'authenticated');
create policy "authenticated_read" on public.warehouse_stock  for select using (auth.role() = 'authenticated');
create policy "authenticated_read" on public.projects         for select using (auth.role() = 'authenticated');
create policy "authenticated_read" on public.project_costs    for select using (auth.role() = 'authenticated');
create policy "authenticated_read" on public.milestones       for select using (auth.role() = 'authenticated');
create policy "authenticated_read" on public.contractors      for select using (auth.role() = 'authenticated');
create policy "authenticated_read" on public.machines         for select using (auth.role() = 'authenticated');
create policy "authenticated_read" on public.assistants       for select using (auth.role() = 'authenticated');
create policy "authenticated_read" on public.tasks            for select using (auth.role() = 'authenticated');
create policy "authenticated_read" on public.mach_tx          for select using (auth.role() = 'authenticated');
create policy "authenticated_read" on public.driver_logs      for select using (auth.role() = 'authenticated');
create policy "authenticated_read" on public.leaves           for select using (auth.role() = 'authenticated');
create policy "authenticated_read" on public.system_config    for select using (auth.role() = 'authenticated');
-- Profiles: users can read their own, admins can read all
create policy "own_profile_read" on public.profiles for select using (auth.uid() = id);

-- ── Realtime ─────────────────────────────────────────────
-- Enable realtime publication for live sync (replaces offline queue polling)
-- Run after creating tables:
begin;
  drop publication if exists supabase_realtime;
  create publication supabase_realtime for table
    public.cherry, public.cashbook, public.fund_requests,
    public.warehouse_stock, public.farmers, public.machines,
    public.driver_logs, public.leaves, public.mach_tx,
    public.expenses, public.debts, public.stock;
commit;

-- ============================================================
-- Migration v2.1.0 — Loans + Chat
-- Run this after v2.0.0 has already been applied
-- ============================================================

-- ── MD Loans ─────────────────────────────────────────────────────────
create table if not exists public.loans (
  id              text primary key,
  -- Borrower
  borrower_name   text not null,
  phone           text,
  email           text,
  address         text,
  category        text default 'individual',   -- individual|company|station|project|other
  affiliation     text,
  -- Loan terms
  amount          bigint not null,
  currency        text default 'RWF',
  interest_rate   numeric default 0,
  interest_type   text default 'flat',          -- flat|compound
  issued_date     date not null,
  due_date        date,
  -- Details
  purpose         text,
  collateral      text,
  witness_name    text,
  witness_phone   text,
  notes           text,
  -- Meta
  created_by      uuid references auth.users(id),
  created_at      timestamptz default now(),
  updated_at      timestamptz default now()
);

create table if not exists public.loan_repayments (
  id           text primary key,
  loan_id      text not null references public.loans(id) on delete cascade,
  amount       bigint not null,
  date         date not null,
  method       text default 'cash',            -- cash|bank_transfer|mobile_money|cheque|other
  reference    text,
  notes        text,
  recorded_by  uuid references auth.users(id),
  created_at   timestamptz default now(),
  updated_at   timestamptz default now()
);

-- ── Chat ─────────────────────────────────────────────────────────────
-- Only custom rooms are stored here.
-- Auto-rooms (per-station, per-driver, HQ) are built client-side.
create table if not exists public.chat_rooms (
  id          text primary key,
  name        text not null,
  icon        text default '💬',
  type        text default 'custom',
  color       text default '#9A5EE0',
  member_ids  text[] default '{}',
  created_by  uuid references auth.users(id),
  created_at  timestamptz default now(),
  updated_at  timestamptz default now()
);

create table if not exists public.chat_messages (
  id          text primary key,
  room_id     text not null references public.chat_rooms(id) on delete cascade,
  sender_id   uuid references auth.users(id),
  sender_name text,
  sender_role text,
  text        text not null,
  created_at  timestamptz default now()
);

create index if not exists chat_messages_room_id_idx on public.chat_messages(room_id, created_at desc);
create index if not exists loan_repayments_loan_id_idx on public.loan_repayments(loan_id);
create index if not exists loans_created_by_idx on public.loans(created_by);

-- ── updated_at triggers for new tables ───────────────────────────────
do $$ declare t text;
begin for t in select unnest(array[
  'loans','loan_repayments','chat_rooms'
]) loop
  execute format($f$
    drop trigger if exists set_updated_at on public.%I;
    create trigger set_updated_at before update on public.%I
    for each row execute procedure public.set_updated_at();
  $f$, t, t);
end loop; end $$;

-- ── RLS for new tables ────────────────────────────────────────────────
alter table public.loans             enable row level security;
alter table public.loan_repayments   enable row level security;
alter table public.chat_rooms        enable row level security;
alter table public.chat_messages     enable row level security;

-- Loans: only md + sudo (server uses service-role key so these only
-- protect direct anon/authenticated client access)
create policy "loans_md_only" on public.loans
  for all using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role in ('md','sudo')
    )
  );

create policy "loan_repayments_md_only" on public.loan_repayments
  for all using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role in ('md','sudo')
    )
  );

-- Chat rooms: visible to members
create policy "chat_rooms_member_read" on public.chat_rooms
  for select using (auth.uid()::text = any(member_ids) or
    exists (select 1 from public.profiles where id = auth.uid() and role in ('sudo','md','admin'))
  );

create policy "chat_rooms_admin_write" on public.chat_rooms
  for all using (
    exists (select 1 from public.profiles where id = auth.uid() and role in ('sudo','md','admin'))
  );

-- Chat messages: readable by room members
create policy "chat_messages_read" on public.chat_messages
  for select using (
    exists (
      select 1 from public.chat_rooms
      where id = room_id
        and (auth.uid()::text = any(member_ids) or
             exists (select 1 from public.profiles where id = auth.uid() and role in ('sudo','md','admin')))
    )
  );

create policy "chat_messages_insert" on public.chat_messages
  for insert with check (auth.uid() = sender_id);

create policy "chat_messages_delete" on public.chat_messages
  for delete using (
    auth.uid() = sender_id or
    exists (select 1 from public.profiles where id = auth.uid() and role in ('sudo','md','admin'))
  );

-- ── Add new tables to Realtime publication ───────────────────────────
-- Run this block separately if the publication already exists:
alter publication supabase_realtime add table public.chat_messages;
alter publication supabase_realtime add table public.chat_rooms;
-- (loans are private — no realtime needed)

-- ============================================================
-- Migration v2.2.0 — HQ Field Requisition columns
-- Adds missing columns to fund_requests for hq_field_req type.
-- Run in Supabase → SQL Editor → Run
-- ============================================================

-- New columns for HQ field requisitions (type = 'hq_field_req')
-- All are nullable so existing station fund requests are unaffected.
alter table public.fund_requests
  add column if not exists type                 text default 'station',
  add column if not exists dept                 text,
  add column if not exists requested_by_name    text,
  add column if not exists activity             text,
  add column if not exists destination          text,
  add column if not exists travel_dates         text,
  add column if not exists items                jsonb,
  add column if not exists finance_approved_by  text,
  add column if not exists finance_approved_at  text,
  add column if not exists finance_notes        text,
  add column if not exists cheque_released_by   text,
  add column if not exists cheque_released_at   text,
  add column if not exists cheque_no            text,
  add column if not exists release_method       text,
  add column if not exists release_notes        text;

-- Back-fill type for all existing station requests
update public.fund_requests
  set type = 'station'
  where type is null;

-- Index for filtering by type (station vs hq_field_req)
create index if not exists fund_requests_type_idx on public.fund_requests(type);

-- Index for filtering by status (pending_finance_approval, pending_md_release, etc.)
create index if not exists fund_requests_status_idx on public.fund_requests(status);

-- ============================================================
-- Migration v2.3.0 — Warehouse Stock Movements
-- ============================================================

create table if not exists public.warehouse_movements (
  id               text primary key,
  direction        text not null check (direction in ('in','out')),
  kg               numeric not null,
  grade            text default 'Parchment',
  location         text not null,        -- coming-from or going-to
  lot_number       text,
  gnr_refs         text,
  driver_id        text,                 -- optional ref to profiles.id
  driver_name      text,
  plate_number     text,
  notes            text,
  date             date not null,
  recorded_by      text,                 -- profiles.id of who recorded
  recorded_by_name text,
  created_at       timestamptz default now(),
  updated_at       timestamptz default now()
);

create index if not exists warehouse_movements_date_idx      on public.warehouse_movements(date desc);
create index if not exists warehouse_movements_direction_idx on public.warehouse_movements(direction);
create index if not exists warehouse_movements_driver_idx    on public.warehouse_movements(driver_id);

-- updated_at trigger
drop trigger if exists set_updated_at on public.warehouse_movements;
create trigger set_updated_at before update on public.warehouse_movements
  for each row execute procedure public.set_updated_at();

-- RLS
alter table public.warehouse_movements enable row level security;

create policy "authenticated_read" on public.warehouse_movements
  for select using (auth.role() = 'authenticated');

-- Add to Realtime publication
alter publication supabase_realtime add table public.warehouse_movements;

-- ============================================================
-- Migration v2.4.0 — CWS Stock: sent_to_warehouse flag
-- Adds columns to stock table to track warehouse dispatches.
-- ============================================================

alter table public.stock
  add column if not exists sent_to_warehouse boolean default false,
  add column if not exists warehouse_ref     text;

-- Index for quick filtering of warehouse-sent movements
create index if not exists stock_sent_to_warehouse_idx on public.stock(sent_to_warehouse) where sent_to_warehouse = true;

-- Also add from_cws_id to warehouse_movements so we know which station sent stock
alter table public.warehouse_movements
  add column if not exists from_cws_id text references public.cws(id);

create index if not exists warehouse_movements_from_cws_idx on public.warehouse_movements(from_cws_id);

-- ============================================================
-- Migration v2.5.0 — Export Contracts
-- ============================================================

create table if not exists public.contracts (
  id               text primary key,
  -- Buyer
  contract_ref     text,
  company_name     text not null,
  company_country  text,
  contact_person   text,
  contact_email    text,
  contact_phone    text,
  -- Terms
  grade            text,
  agreed_tonnes    numeric not null,
  rate_per_kg      numeric not null,
  currency         text default 'USD',
  total_value      numeric,
  -- Dates & logistics
  contract_date    date not null,
  delivery_date    date,
  delivery_port    text,
  payment_terms    text,
  status           text default 'active',
  notes            text,
  -- Meta
  created_by       uuid references auth.users(id),
  created_at       timestamptz default now(),
  updated_at       timestamptz default now()
);

create table if not exists public.contract_deliveries (
  id                text primary key,
  contract_id       text not null references public.contracts(id) on delete cascade,
  delivered_tonnes  numeric not null,
  grade             text,
  shipment_ref      text,
  bl_number         text,
  date              date not null,
  notes             text,
  recorded_by       uuid references auth.users(id),
  recorded_at       timestamptz,
  created_at        timestamptz default now(),
  updated_at        timestamptz default now()
);

create index if not exists contracts_status_idx          on public.contracts(status);
create index if not exists contracts_delivery_date_idx   on public.contracts(delivery_date);
create index if not exists contracts_company_country_idx on public.contracts(company_country);
create index if not exists contract_deliveries_contract_idx on public.contract_deliveries(contract_id);

-- updated_at triggers
do $$ declare t text;
begin for t in select unnest(array['contracts','contract_deliveries']) loop
  execute format($f$
    drop trigger if exists set_updated_at on public.%I;
    create trigger set_updated_at before update on public.%I
    for each row execute procedure public.set_updated_at();
  $f$, t, t);
end loop; end $$;

-- RLS
alter table public.contracts            enable row level security;
alter table public.contract_deliveries  enable row level security;

create policy "contracts_md_only" on public.contracts
  for all using (
    exists (select 1 from public.profiles where id = auth.uid() and role in ('md','sudo'))
  );

create policy "contract_deliveries_md_only" on public.contract_deliveries
  for all using (
    exists (select 1 from public.profiles where id = auth.uid() and role in ('md','sudo'))
  );
