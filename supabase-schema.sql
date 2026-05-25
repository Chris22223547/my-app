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
