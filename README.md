# 🏃 ○○대학교 마라톤 웹사이트

Next.js 14 + Supabase + Vercel 기반 마라톤 홍보 및 참가 신청 웹사이트

---

## 📁 프로젝트 구조

```
marathon-web/
├── app/
│   ├── layout.tsx              # 공통 레이아웃 (Navbar, Footer 포함)
│   ├── globals.css             # 전역 스타일 + 구글 폰트
│   ├── page.tsx                # 메인 페이지 (마라톤/학교 소개)
│   ├── mission/page.tsx        # Mission 페이지 (참여 이유)
│   ├── info/page.tsx           # 정보 페이지 (코스/일정/혜택/QnA)
│   ├── register/page.tsx       # 참가 신청 페이지 (3단계 폼)
│   └── api/register/route.ts   # 신청 API (Supabase 저장)
├── components/
│   ├── Navbar.tsx              # 상단 네비게이션 바
│   ├── Footer.tsx              # 하단 푸터
│   └── QnaAccordion.tsx        # QnA 아코디언
├── lib/
│   └── supabase.ts             # Supabase 클라이언트
├── supabase-setup.sql          # DB 테이블 초기 설정 SQL
├── .env.local.example          # 환경변수 템플릿
└── README.md
```

---

## 🚀 시작하기 (로컬 개발)

### 1단계 — Node.js 설치 확인

```bash
node -v   # v18 이상이어야 합니다
npm -v
```

없으면 https://nodejs.org 에서 LTS 버전 설치

---

### 2단계 — 프로젝트 의존성 설치

```bash
cd marathon-web
npm install
```

---

### 3단계 — Supabase 프로젝트 생성

1. https://supabase.com 접속 → **Start your project**
2. 새 프로젝트 생성 (이름: `marathon`, 비밀번호 저장해두기)
3. 프로젝트 생성 완료 후 **SQL Editor** 클릭
4. `supabase-setup.sql` 파일 내용 전체 복사 → 붙여넣기 → **Run**
5. 왼쪽 **Table Editor** 에서 `participants` 테이블 생성 확인

---

### 4단계 — 환경변수 설정

```bash
# .env.local.example 을 복사해서 .env.local 생성
cp .env.local.example .env.local
```

Supabase 대시보드 → **Project Settings** → **API** 에서 값 확인:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

`.env.local` 파일을 열어서 위 값을 붙여넣으세요.

---

### 5단계 — 로컬 실행

```bash
npm run dev
```

브라우저에서 http://localhost:3000 열기 ✅

---

## ☁️ Vercel 배포

### 방법 A: GitHub 연동 (추천)

1. 이 프로젝트를 GitHub에 올리기
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/본인아이디/marathon-web.git
   git push -u origin main
   ```

2. https://vercel.com 접속 → **New Project**
3. GitHub 저장소 연결
4. **Environment Variables** 탭에서 환경변수 추가:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. **Deploy** 클릭

→ 배포 완료! `https://marathon-web-xxx.vercel.app` 주소 생성 🎉

### 방법 B: Vercel CLI

```bash
npm i -g vercel
vercel
# 안내에 따라 환경변수 입력
```

---

## 🗄 Supabase — 신청자 데이터 확인

Supabase 대시보드 → **Table Editor** → `participants` 테이블

| 컬럼 | 설명 |
|---|---|
| id | 고유 ID (자동) |
| name | 이름 |
| email | 이메일 (중복 불가) |
| phone | 전화번호 |
| affiliation | 소속 (학부생 / 외부인 등) |
| course | 코스 (5km / 10km / 하프) |
| shirt_size | 티셔츠 사이즈 |
| status | 상태 (대기 / 확정 / 취소) |
| created_at | 신청 일시 |

CSV로 내보내기: 오른쪽 상단 **Export** 버튼

---

## ✏️ 나중에 채워야 할 빈칸 목록

아래 항목들을 세부 정보가 확정되면 코드에서 찾아 교체하세요.

| 항목 | 파일 위치 | 현재 값 |
|---|---|---|
| 대회 날짜 | `app/page.tsx`, `app/layout.tsx` | `XXXX년 XX월 XX일` |
| 대회 장소 | `app/page.tsx` | `○○대학교` |
| 학교 이름 | 모든 파일 | `○○대학교` |
| 예상 참가 인원 | `app/page.tsx` | `XXX명` |
| 문의 이메일 | `components/Footer.tsx` | `marathon@university.ac.kr` |
| 코스 지도 | `app/info/page.tsx` | 지도 이미지 미삽입 |
| 참가비 안내 | `components/QnaAccordion.tsx` | 추후 업데이트 예정 |
| 학교 설립연도 | `app/page.tsx` | `XXXX년` |

---

## 🎨 커스터마이즈

### 색상 변경

`tailwind.config.js` 에서:

```js
colors: {
  primary: '#C8102E',   // 메인 빨간색 → 학교 컬러로 변경
  accent: '#FF6B35',    // 강조색
  dark: '#0A0A0A',      // 배경색
  sand: '#F5F0E8',      // 밝은 텍스트
}
```

### 폰트 변경

`app/globals.css` 상단 Google Fonts import 수정:

```css
@import url('https://fonts.googleapis.com/css2?family=원하는폰트&display=swap');
```

---

## 📝 나중에 추가할 수 있는 기능

- [ ] 결제 시스템 (Toss Payments)
- [ ] 확인 이메일 자동 발송 (Resend)
- [ ] 관리자 대시보드 (신청자 목록 조회/관리)
- [ ] SNS 공유 버튼
- [ ] 코스 지도 (카카오맵 API)
- [ ] 참가 인원 실시간 카운터
- [ ] OG 이미지 (SNS 공유 시 미리보기)
