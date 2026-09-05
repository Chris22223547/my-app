create table if not exists public.quotes (
  id text primary key,
  quote_number text not null,
  customer_key text,
  title text,
  total numeric default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  created_by text,
  created_by_username text,
  quote_data jsonb not null
);

create index if not exists quotes_updated_at_idx on public.quotes (updated_at desc);
create index if not exists quotes_quote_number_idx on public.quotes (quote_number);
create index if not exists quotes_customer_key_idx on public.quotes (customer_key);

alter table public.quotes enable row level security;

create policy "Allow app to read quotes"
on public.quotes
for select
using (true);

create policy "Allow app to save quotes"
on public.quotes
for insert
with check (true);

create policy "Allow app to update quotes"
on public.quotes
for update
using (true)
with check (true);

create policy "Allow app to delete quotes"
on public.quotes
for delete
using (true);

create table if not exists public.door_orders (
  id text primary key,
  order_number text not null,
  title text not null default '',
  source_quote_id text not null default '',
  source_quote_number text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  created_by text not null default '',
  created_by_username text not null default '',
  order_data jsonb not null default '{}'::jsonb
);

create index if not exists door_orders_updated_at_idx on public.door_orders (updated_at desc);
create index if not exists door_orders_order_number_idx on public.door_orders (order_number);

alter table public.door_orders enable row level security;

create policy "door_orders_select" on public.door_orders for select to anon, authenticated using (true);
create policy "door_orders_insert" on public.door_orders for insert to anon, authenticated with check (true);
create policy "door_orders_update" on public.door_orders for update to anon, authenticated using (true) with check (true);
create policy "door_orders_delete" on public.door_orders for delete to anon, authenticated using (true);

grant select, insert, update, delete on table public.door_orders to anon, authenticated;

create table if not exists public.door_order_po_sequences (
  year_number integer primary key,
  last_number integer not null
);

insert into public.door_order_po_sequences (year_number, last_number)
values (26, 28)
on conflict (year_number) do nothing;

alter table public.door_order_po_sequences enable row level security;
revoke all on table public.door_order_po_sequences from anon, authenticated;

drop function if exists public.next_door_purchase_order();

create or replace function public.next_door_purchase_order(p_order_year integer)
returns text
language plpgsql
security definer
set search_path = ''
as $$
declare
  order_sequence integer;
begin
  if p_order_year < 0 or p_order_year > 99 then
    raise exception 'Invalid purchase order year';
  end if;

  insert into public.door_order_po_sequences (year_number, last_number)
  values (p_order_year, case when p_order_year = 26 then 29 else 1 end)
  on conflict (year_number) do update
  set last_number = public.door_order_po_sequences.last_number + 1
  returning last_number into order_sequence;

  return lpad(p_order_year::text, 2, '0') || '-' || order_sequence::text;
end;
$$;

revoke all on function public.next_door_purchase_order(integer) from public;
grant execute on function public.next_door_purchase_order(integer) to anon, authenticated;
