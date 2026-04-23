import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="bg-[#0A0A0A]">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
        {/* 배경 대형 텍스트 */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          aria-hidden
        >
          <span
            className="text-[20vw] font-bold text-white/[0.03] leading-none"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            RUN
          </span>
        </div>

        {/* 붉은 대각선 강조선 */}
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#C8102E]/40 to-transparent" />
        <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8102E]/20 to-transparent" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          {/* 날짜 뱃지 */}
          <div className="inline-flex items-center gap-2 border border-[#C8102E]/60 px-4 py-1.5 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-[#C8102E] rounded-full animate-pulse" />
            <span className="text-[#C8102E] text-xs tracking-widest uppercase">
              XXXX년 XX월 XX일 · ○○대학교
            </span>
          </div>

          <h1
            className="text-[clamp(4rem,14vw,12rem)] leading-none text-white mb-6 animate-fade-up opacity-0-init"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.05em', animationFillMode: 'forwards' }}
          >
            MARATHON
          </h1>

          <p className="text-white/60 text-lg md:text-xl mb-10 max-w-xl mx-auto animate-fade-up opacity-0-init delay-200"
            style={{ animationFillMode: 'forwards' }}>
            달리는 것 이상의 경험. 모든 이를 위한 레이스가 시작됩니다.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0-init delay-300"
            style={{ animationFillMode: 'forwards' }}>
            <Link
              href="/register"
              className="px-10 py-4 bg-[#C8102E] text-white font-semibold hover:bg-[#FF6B35] transition-colors duration-200 tracking-wider text-sm"
            >
              지금 신청하기 →
            </Link>
            <Link
              href="/info"
              className="px-10 py-4 border border-white/30 text-white/80 hover:border-white hover:text-white transition-colors duration-200 text-sm"
            >
              대회 정보 보기
            </Link>
          </div>
        </div>

        {/* 스크롤 인디케이터 */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in opacity-0-init delay-500"
          style={{ animationFillMode: 'forwards' }}>
          <span className="text-white/30 text-xs tracking-widest">SCROLL</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* ─── 마라톤 소개 ─── */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#C8102E] text-xs tracking-widest uppercase mb-4">About the Race</p>
            <h2
              className="text-5xl md:text-7xl text-white mb-6 leading-none"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}
            >
              마라톤<br />소개
            </h2>
            <p className="text-white/60 leading-relaxed mb-4">
              ○○대학교가 주최하는 이 마라톤 대회는 교내 구성원은 물론
              지역 주민 누구나 함께할 수 있는 열린 레이스입니다.
            </p>
            <p className="text-white/60 leading-relaxed">
              5km, 10km, 하프(21.1km) 세 가지 코스로 운영되어
              초보자부터 숙련된 러너까지 모두 자신의 페이스로 완주할 수 있습니다.
            </p>
          </div>

          {/* 통계 그리드 */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: '3', unit: '코스', desc: '5km / 10km / 하프' },
              { num: 'XX', unit: 'km', desc: '최장 코스 거리' },
              { num: 'XXX', unit: '명', desc: '예상 참가 인원' },
              { num: 'XX', unit: '개', desc: '혜택 및 상품' },
            ].map((stat) => (
              <div key={stat.unit} className="border border-white/10 p-6 hover:border-[#C8102E]/50 transition-colors">
                <div className="flex items-baseline gap-1 mb-1">
                  <span
                    className="text-4xl text-white"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {stat.num}
                  </span>
                  <span className="text-[#C8102E] font-semibold text-sm">{stat.unit}</span>
                </div>
                <p className="text-white/40 text-xs">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 학교 소개 ─── */}
      <section className="py-24 bg-white/[0.02] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#C8102E] text-xs tracking-widest uppercase mb-4 text-center">About the University</p>
          <h2
            className="text-4xl md:text-6xl text-white mb-12 text-center"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}
          >
            학교 소개
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: '🏛', title: '설립 연도', desc: 'XXXX년 설립된 ○○대학교는\n지역과 함께 성장해왔습니다.' },
              { icon: '👥', title: '재학생', desc: '약 XXXX명의 학생이\n다양한 분야에서 공부하고 있습니다.' },
              { icon: '📍', title: '위치', desc: '○○시 ○○구에 위치하여\n접근성이 뛰어납니다.' },
            ].map((item) => (
              <div key={item.title} className="p-8 border border-white/10 hover:border-[#C8102E]/30 transition-colors">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-white font-semibold mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm whitespace-pre-line leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA 배너 ─── */}
      <section className="py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[#C8102E]/5" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p
            className="text-7xl md:text-9xl text-white/5 absolute -top-8 left-1/2 -translate-x-1/2 pointer-events-none select-none"
            style={{ fontFamily: 'var(--font-display)' }}
            aria-hidden
          >
            GO
          </p>
          <h2
            className="text-4xl md:text-5xl text-white mb-4"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.1em' }}
          >
            함께 달릴 준비가 됐나요?
          </h2>
          <p className="text-white/50 mb-8">마감 전 지금 신청하세요.</p>
          <Link
            href="/register"
            className="inline-block px-12 py-4 bg-[#C8102E] text-white font-semibold hover:bg-[#FF6B35] transition-colors tracking-wider"
          >
            참가 신청 →
          </Link>
        </div>
      </section>
    </div>
  )
}
