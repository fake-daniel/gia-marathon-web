import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="bg-white">

      {/* ═══════════════════════════════════════════
          HERO — 한강 배경 + 따뜻한 카피
          ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* 배경 이미지 (한강) */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1548013146-72479768bada?w=2000&auto=format&fit=crop&q=80"
            alt="한강 러닝"
            fill
            priority
            className="img-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        {/* 콘텐츠 */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 pb-20 pt-32">
            {/* 상단 날짜 뱃지 */}
            <div className="inline-flex items-center gap-2.5 bg-brand-yellow text-ink-900 px-4 py-2 rounded-full mb-8 font-bold text-sm shadow-lg">
              <span className="w-2 h-2 bg-ink-900 rounded-full" />
              XXXX년 XX월 XX일 (토) · 한강공원
            </div>

            <h1 className="text-white font-black leading-[0.95] mb-8 tracking-tight">
              <span className="block text-[clamp(3rem,9vw,7rem)] text-balance">
                함께 달리는
              </span>
              <span className="block text-[clamp(3rem,9vw,7rem)] text-balance">
                <span className="text-brand-yellow">따뜻한 한 걸음</span>
              </span>
            </h1>

            <p className="text-white/90 text-xl md:text-2xl max-w-2xl leading-relaxed mb-10 font-medium">
              당신의 달리기가 독거노인을 위한 희망이 됩니다.<br />
              한강에서 시작되는 특별한 자선 마라톤.
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
                { label: '코스', value: '3종' },
                { label: '예상 참가자', value: 'XXX+' },
                { label: '기부처', value: '독거노인' },
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
                  RUN FOR 독거노인
                  <span className="text-xl">●</span>
                  HAN-GANG CHARITY MARATHON
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
          마라톤 소개
          ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 dot-pattern opacity-50" />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="inline-block bg-brand-blue-light text-brand-blue px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                About the Marathon
              </p>
              <h2 className="text-4xl md:text-6xl font-black text-ink-900 leading-tight mb-8 text-balance">
                단순한 달리기가<br />
                아닌, <span className="highlight-yellow">나눔의 여정</span>
              </h2>
            </div>
            <div className="pt-4">
              <p className="text-ink-700 text-lg leading-relaxed mb-6">
                〈Run for 독거노인〉은 ○○대학교가 주최하는 자선 마라톤 대회입니다.
                참가자들의 참가비 전액이 독거노인 지원 사업에 기부되며,
                학내 구성원뿐 아니라 지역 주민 누구나 함께할 수 있습니다.
              </p>
              <p className="text-ink-500 leading-relaxed">
                서울 한강공원의 아름다운 코스를 달리며,
                우리 이웃의 따뜻한 하루를 만드는 일에 함께해 주세요.
              </p>
            </div>
          </div>

          {/* 3개 카드 */}
          <div className="mt-20 grid md:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: '한강에서 달린다',
                desc: '서울 한강공원의 아름다운 강변 코스에서 진행됩니다.',
                bg: 'https://images.unsplash.com/photo-1502104034360-73176bb1e92e?w=800&auto=format&fit=crop&q=80',
              },
              {
                num: '02',
                title: '누구나 참여 가능',
                desc: '5km, 10km, 하프 세 코스로 초보자부터 러너까지 환영합니다.',
                bg: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&auto=format&fit=crop&q=80',
              },
              {
                num: '03',
                title: '참가비 전액 기부',
                desc: '여러분이 내는 참가비가 독거노인을 위한 따뜻한 지원금이 됩니다.',
                bg: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop&q=80',
              },
            ].map((card) => (
              <div key={card.num} className="group relative overflow-hidden rounded-3xl aspect-[4/5] cursor-pointer">
                <Image
                  src={card.bg}
                  alt={card.title}
                  fill
                  className="img-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/40 to-transparent" />
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
        {/* 배경 장식 */}
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
              { num: '3', label: '선택 가능 코스' },
              { num: '1st', label: '제1회 자선 대회' },
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
          코스 프리뷰
          ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 bg-ink-100 relative overflow-hidden">
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

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { km: '5', label: 'FUN RUN', desc: '처음 달리는 분들을 위한 친근한 코스', color: 'bg-brand-yellow text-ink-900' },
              { km: '10', label: 'CHALLENGE', desc: '꾸준히 달려온 러너를 위한 도전 코스', color: 'bg-brand-blue text-white' },
              { km: '21.1', label: 'HALF', desc: '진정한 러너를 위한 하프 풀 코스', color: 'bg-ink-900 text-white' },
            ].map((course) => (
              <div key={course.km} className={`${course.color} rounded-3xl p-8 relative overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform duration-500`}>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-7xl md:text-8xl font-black leading-none">{course.km}</span>
                  <span className="text-2xl font-bold">km</span>
                </div>
                <p className="text-xs font-black tracking-widest uppercase opacity-80 mb-3">{course.label}</p>
                <p className="text-sm font-medium opacity-90 leading-relaxed">{course.desc}</p>
                <div className="absolute -bottom-6 -right-6 text-[12rem] font-black opacity-5 leading-none">{course.km}</div>
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
            <span className="text-brand-yellow">희망</span>이 됩니다.
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
