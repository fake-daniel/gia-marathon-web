-- =====================================================
-- Supabase 테이블 설정 SQL
-- Supabase 대시보드 > SQL Editor 에 붙여넣고 실행하세요
-- =====================================================

-- 참가자 테이블 생성
create table if not exists participants (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null unique,
  phone text not null,
  affiliation text not null,   -- '학부생' | '대학원생' | '교직원' | '외부인'
  course text not null,        -- '5km' | '10km' | '하프 (21.1km)'
  shirt_size text not null,    -- 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL'
  status text default '대기',  -- '대기' | '확정' | '취소'
  created_at timestamp with time zone default now()
);

-- Row Level Security 활성화
alter table participants enable row level security;

-- 누구나 INSERT 가능 (신청 폼)
create policy "Anyone can insert" on participants
  for insert with check (true);

-- SELECT는 서비스 키(관리자)만 가능하게 (보안)
-- anon 사용자는 읽기 불가
create policy "No public select" on participants
  for select using (false);

-- 확인용: 테이블 조회 (실행 후 아래로 확인)
-- select * from participants order by created_at desc;
