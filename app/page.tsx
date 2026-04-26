import Link from 'next/link'
import Image from 'next/image'
import HeroSlideshow from '@/components/HeroSlideshow'

export default function HomePage() {
  return (
    <div className="bg-white">

      {/* ═══════════════════════════════════════════
          HERO — 5장 슬라이드쇼 + Run for Peace 컨셉
          ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* 슬라이드쇼 배경 */}
        <HeroSlideshow />

        {/* 콘텐츠 */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 pb-20 pt-32">
            {/* 시리즈 뱃지 */}
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="bg-brand-yellow text-ink-900 px-4 py-2 rounded-full font-black text-xs tracking-widest shadow-lg">
                3RD EDITION
              </span>
              <span className="text-white/90 text-xs font-bold tracking-widest uppercase">
                XXXX년 XX월 XX일 · 한강공원
              </span>
            </div>

            <h1 className="text-white font-black leading-[0.9] mb-8 tracking-tight">
              <span className="block text-[clamp(2.5rem,8vw,6rem)] text-balance text-white/90">
                평화를 위해 달립니다
              </span>
              <span className="block text-[clamp(4rem,13vw,11rem)] text-balance mt-2">
                Run for <span className="text-brand-yellow">Peace</span>
              </span>
            </h1>

            <p className="text-white/90 text-xl md:text-2xl max-w-2xl leading-relaxed mb-10 font-medium">
              세 번째 평화의 달리기. 이번 주제는 <span className="highlight-yellow text-ink-900">독거노인</span>입니다.<br />
              당신의 한 걸음이 우리 이웃의 따뜻한 하루를 만듭니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/register"
                className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-5 bg-brand-blue text-white rounded-full font-bold text-base shadow-2xl shadow-brand-blue/40 hover:bg-brand-blue-dark"
              >
                지금 참가 신청하기
                <span className="text-xl">→</span>
              </Link>
              <Link
                href="/mission"
                className="inline-flex items-center justify-center gap-2 px-8 py-5 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-semibold text-base hover:bg-white/20"
              >
                우리의 미션 보기
              </Link>
            </div>

            {/* 하단 주요 정보 */}
            <div className="mt-20 grid grid-cols-3 gap-6 max-w-2xl">
              {[
                { label: '에디션', value: '3RD' },
                { label: '이번 주제', value: '독거노인' },
                { label: '코스', value: '2종' },
              ].map((item) => (
                <div key={item.label} className="border-l-2 border-brand-yellow pl-4">
                  <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-white text-2xl md:text-3xl font-black">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 하단 무한 스크롤 배너 */}
        <div className="relative z-10 w-full bg-brand-yellow py-3 overflow-hidden border-y-4 border-ink-900">
          <div className="marquee">
            <div className="marquee-inner">
              {Array.from({ length: 8 }).map((_, i) => (
                <span key={i} className="flex items-center gap-6 px-6 text-ink-900 font-black text-sm tracking-wide">
                  RUN FOR PEACE
                  <span className="text-xl">●</span>
                  3RD · FOR SINGLE ELDERLY
                  <span className="text-xl">●</span>
                  XXXX.XX.XX
                  <span className="text-xl">●</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          시리즈 소개 — Run for Peace 시리즈
          ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 dot-pattern opacity-50" />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="inline-block bg-brand-blue-light text-brand-blue px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                About the Series
              </p>
              <h2 className="text-4xl md:text-6xl font-black text-ink-900 leading-tight mb-8 text-balance">
                〈Run for Peace〉는<br />
                <span className="highlight-yellow">계속됩니다</span>
              </h2>
            </div>
            <div className="pt-4">
              <p className="text-ink-700 text-lg leading-relaxed mb-6">
                〈Run for Peace〉는 ○○대학교가 주최하는 자선 마라톤 시리즈입니다.
                매 회차마다 우리 사회의 다른 이웃을 주제로 삼아,
                참가비 전액을 해당 단체에 기부합니다.
              </p>
              <p className="text-ink-500 leading-relaxed mb-6">
                제3회는 <span className="font-bold text-ink-900">독거노인</span>을 위한 달리기.
                혼자 보내는 시간이 많은 어르신들에게 따뜻한 손길이 닿을 수 있도록,
                여러분의 참여가 큰 힘이 됩니다.
              </p>
            </div>
          </div>

          {/* 시리즈 타임라인 */}
          <div className="mt-16 grid md:grid-cols-3 gap-4">
            {[
              { num: '1ST', topic: '아동 복지', status: '종료' },
              { num: '2ND', topic: '환경 보호', status: '종료' },
              { num: '3RD', topic: '독거노인', status: '진행 중', current: true },
            ].map((edition) => (
              <div
                key={edition.num}
                className={`rounded-2xl p-6 border-2 ${
                  edition.current
                    ? 'bg-brand-blue text-white border-brand-blue shadow-xl shadow-brand-blue/20'
                    : 'bg-ink-100 border-transparent text-ink-700'
                }`}
              >
                <div className="flex items-baseline justify-between mb-3">
                  <span className={`font-black text-2xl ${edition.current ? 'text-brand-yellow' : 'text-ink-500'}`}>
                    {edition.num}
                  </span>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                    edition.current ? 'bg-brand-yellow text-ink-900' : 'bg-white text-ink-500'
                  }`}>
                    {edition.status}
                  </span>
                </div>
                <p className={`font-bold text-lg ${edition.current ? 'text-white' : 'text-ink-900'}`}>
                  {edition.topic}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3개 카드 — 한강 / 누구나 / 기부
          ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 bg-ink-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="inline-block bg-brand-yellow text-ink-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              Why This Marathon
            </p>
            <h2 className="text-4xl md:text-6xl font-black text-ink-900 leading-tight">
              단순한 달리기가 아닌,<br />
              <span className="highlight-yellow">나눔의 여정</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: '한강에서 달린다',
                desc: '서울 한강공원의 아름다운 강변 코스에서 진행됩니다.',
                bg: 'https://images.unsplash.com/photo-1684847413986-940679c536ce?q=80&w=1200&auto=format&fit=crop',
              },
              {
                num: '02',
                title: '누구나 참여 가능',
                desc: '5km, 10km 두 코스로 초보자부터 러너까지 환영합니다.',
                bg: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1200&auto=format&fit=crop&q=80',
              },
              {
                num: '03',
                title: '참가비 전액 기부',
                desc: '여러분의 참가비가 독거노인을 위한 따뜻한 지원금이 됩니다.',
                bg: 'https://images.unsplash.com/photo-1607582544954-1ab7e3b6d62d?w=1200&auto=format&fit=crop&q=80',
              },
            ].map((card) => (
              <div key={card.num} className="group relative overflow-hidden rounded-3xl aspect-[4/5] cursor-pointer">
                <Image
                  src={card.bg}
                  alt={card.title}
                  fill
                  className="img-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/95 via-ink-900/40 to-transparent" />
                <div className="absolute inset-0 p-7 flex flex-col justify-between">
                  <span className="text-brand-yellow font-black text-5xl">{card.num}</span>
                  <div>
                    <h3 className="text-white font-black text-2xl mb-2">{card.title}</h3>
                    <p className="text-white/85 text-sm leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          숫자로 보는 마라톤
          ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 bg-brand-blue text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, #FFD500 0%, transparent 40%), radial-gradient(circle at 80% 20%, #FFFFFF 0%, transparent 40%)`,
          }}
        />

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="inline-block bg-brand-yellow text-ink-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              By the Numbers
            </p>
            <h2 className="text-4xl md:text-6xl font-black leading-tight text-balance">
              숫자로 보는<br />우리의 약속
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: '100%', label: '참가비 전액 기부' },
              { num: 'XXX+', label: '예상 참가 인원' },
              { num: '2', label: '선택 가능 코스' },
              { num: '3RD', label: 'Run for Peace' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-5xl md:text-7xl font-black text-brand-yellow mb-3 counter">{stat.num}</p>
                <p className="text-white/80 text-sm font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          코스 프리뷰 — 5km, 10km 두 종류
          ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="inline-block bg-brand-yellow-light text-ink-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                Courses
              </p>
              <h2 className="text-4xl md:text-6xl font-black text-ink-900 leading-tight">
                나에게 맞는<br />코스 선택하기
              </h2>
            </div>
            <Link href="/info" className="inline-flex items-center gap-2 text-brand-blue font-bold hover:gap-3 transition-all">
              전체 정보 보기 →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              { km: '5', label: 'FUN RUN', desc: '처음 달리는 분들을 위한 친근한 코스. 한강의 풍경을 여유롭게 즐기며 완주할 수 있습니다.', color: 'bg-brand-yellow text-ink-900' },
              { km: '10', label: 'CHALLENGE', desc: '꾸준히 달려온 러너를 위한 도전 코스. 한강공원 일대를 여유롭게 관통합니다.', color: 'bg-brand-blue text-white' },
            ].map((course) => (
              <div key={course.km} className={`${course.color} rounded-3xl p-10 relative overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform duration-500`}>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-7xl md:text-9xl font-black leading-none">{course.km}</span>
                  <span className="text-3xl font-bold">km</span>
                </div>
                <p className="text-xs font-black tracking-widest uppercase opacity-80 mb-3">{course.label}</p>
                <p className="text-base font-medium opacity-90 leading-relaxed max-w-md">{course.desc}</p>
                <div className="absolute -bottom-12 -right-8 text-[16rem] font-black opacity-5 leading-none pointer-events-none">{course.km}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          최종 CTA
          ═══════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=2000&auto=format&fit=crop&q=80"
            alt="함께 달리기"
            fill
            className="img-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/95 to-brand-blue-dark/80" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-8">
            <span className="pulse-ring w-2 h-2 bg-brand-yellow rounded-full" />
            <span className="text-sm font-semibold">신청 접수 중</span>
          </div>

          <h2 className="text-4xl md:text-7xl font-black mb-6 leading-tight text-balance">
            당신의 한 걸음이<br />
            <span className="text-brand-yellow">평화</span>가 됩니다.
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-xl mx-auto">
            함께 달려요. 지금 바로 참가 신청하세요.
          </p>
          <Link
            href="/register"
            className="btn-primary inline-flex items-center gap-2 px-10 py-5 bg-brand-yellow text-ink-900 rounded-full font-black text-lg shadow-2xl hover:scale-105 transition-transform"
          >
            참가 신청하기
            <span className="text-2xl">→</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
