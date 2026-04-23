# 🏃 Run for 독거노인 — Han-gang Charity Marathon

**V2 업데이트** — 밝고 활기찬 디자인 + 한강 자선 마라톤 컨셉

---

## ✨ 이번 업데이트 주요 변경

- 🎨 **디자인 전면 리뉴얼** — 다크 → 라이트 / 깔끔 + 친근
- 💙💛 **컬러**: Blue #0066FF + Yellow #FFD500 + White
- 🌉 **한강 배경 사진** 메인 히어로 + 곳곳에 삽입 (Unsplash 자동)
- ✍️ **Pretendard 폰트** — 한국어 최적화 모던 서체
- 🎯 **"Run for 독거노인"** 컨셉으로 따뜻한 메시지 강화
- ♾️ **무한 슬라이드 배너** (Marquee)
- 🔵 **새로운 Navbar** — 스크롤에 따라 자연스럽게 변화

---

## 🚀 기존 프로젝트에 덮어쓰기 (간단!)

### Supabase / GitHub / Vercel 재설정 필요 없음 ✅

1. 이 zip 파일 압축 풀기
2. **기존 `marathon-web` 폴더의 파일들을 모두 이 새 파일로 교체**
   - `app/` 폴더 전체 교체
   - `components/` 폴더 전체 교체
   - `tailwind.config.js`, `next.config.js` 교체
   - `.env.local` 파일은 **절대 교체하지 말고 그대로 두세요!** ⚠️
3. VSCode 터미널에서:
   ```bash
   npm install     # 혹시 변경된 패키지 설치
   npm run dev     # 로컬에서 확인
   ```
4. 이상 없으면 GitHub에 push:
   ```bash
   git add .
   git commit -m "디자인 리뉴얼 v2"
   git push
   ```
5. Vercel이 자동으로 재배포! 🎉

---

## 📁 파일 구조

```
marathon-web/
├── app/
│   ├── layout.tsx
│   ├── globals.css           ← Pretendard, 새 컬러 시스템
│   ├── page.tsx              ← 새 메인 (한강 히어로)
│   ├── mission/page.tsx      ← 5개 이유 섹션
│   ├── info/page.tsx         ← 코스/일정/혜택/QnA
│   ├── register/page.tsx     ← 3단계 폼
│   └── api/register/route.ts
├── components/
│   ├── Navbar.tsx            ← 투명→흰색 전환
│   ├── Footer.tsx
│   └── QnaAccordion.tsx
├── lib/supabase.ts
├── tailwind.config.js
├── next.config.js            ← Unsplash 이미지 허용
└── ...
```

---

## ✏️ 나중에 채울 빈칸

| 항목 | 위치 | 현재 |
|---|---|---|
| 대회 날짜 | `app/page.tsx`, `app/layout.tsx` | `XXXX년 XX월 XX일` |
| 한강 정확한 장소 | `app/page.tsx`, `app/info/page.tsx` | `한강공원` (일반) |
| 예상 참가자 수 | `app/page.tsx` | `XXX+` |
| 문의 이메일 | `components/Footer.tsx` | `marathon@university.ac.kr` |
| 전화번호 | `components/Footer.tsx` | `02-XXX-XXXX` |
| 학교명 | 전체 | `○○대학교` |
| 코스 지도 | `app/info/page.tsx` | 플레이스홀더 |

---

## 🎨 컬러 팔레트

CSS 변수 (`app/globals.css`):

```css
--brand-blue: #0066FF;       /* 메인 블루 */
--brand-blue-dark: #0047B3;  /* 호버 */
--brand-yellow: #FFD500;     /* 포인트 노랑 */
--ink-900: #0A0E27;          /* 본문 검정 */
--ink-500: #6B7194;          /* 보조 텍스트 */
--ink-100: #F1F3FA;          /* 배경 회색 */
```

색상을 바꾸고 싶으면 `tailwind.config.js`의 `colors.brand` 섹션만 수정하면 전체에 반영됩니다.

---

## 📸 이미지 출처

- Unsplash에서 자동 로드 (`images.unsplash.com`)
- Next.js `next.config.js`에 도메인 허용 설정됨
- 원하면 자체 이미지로 교체 가능 (각 페이지의 `<Image src="..." />` 수정)
