import Link from 'next/link'

const reasons = [
  {
    num: '01',
    title: '누구나 완주할 수 있습니다',
    desc: '5km 코스부터 하프마라톤까지, 초보 러너도 부담 없이 도전할 수 있도록 코스를 설계했습니다. 목표는 순위가 아닌 완주입니다.',
    icon: '🏃',
  },
  {
    num: '02',
    title: '지역 커뮤니티와의 연결',
    desc: '대학과 지역사회가 함께 만드는 이 대회는 단순한 스포츠 행사를 넘어, 서로 연결되는 축제의 장입니다.',
    icon: '🤝',
  },
  {
    num: '03',
    title: '건강한 라이프스타일의 시작',
    desc: '마라톤은 단 하루의 이벤트가 아닙니다. 이 경험을 통해 꾸준한 운동 습관과 건강한 삶의 방식을 시작할 수 있습니다.',
    icon: '💪',
  },
  {
    num: '04',
    title: '풍성한 혜택과 기념품',
    desc: '완주 메달, 공식 티셔츠, 참가 기념품 등 특별한 혜택이 모든 참가자를 기다립니다.',
    icon: '🥇',
  },
  {
    num: '05',
    title: '기억에 남는 캠퍼스 코스',
    desc: '○○대학교의 아름다운 캠퍼스와 주변 자연 환경을 달리며 색다른 시각으로 경험해보세요.',
    icon: '🌿',
  },
]

export default function MissionPage() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      {/* 헤더 */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-50" />
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-[#C8102E] text-xs tracking-widest uppercase mb-4">Why Participate</p>
          <h1
            className="text-6xl md:text-9xl text-white leading-none mb-6"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}
          >
            MISSION
          </h1>
          <p className="text-white/60 text-lg max-w-xl leading-relaxed">
            왜 달려야 하는가. 우리가 이 마라톤을 개최하는 이유, 그리고 당신이 참여해야 할 이유를 말씀드립니다.
          </p>
        </div>
      </section>

      {/* 이유 목록 */}
      <section className="pb-32 px-6 max-w-7xl mx-auto">
        <div className="space-y-0">
          {reasons.map((reason, i) => (
            <div
              key={reason.num}
              className="group border-t border-white/10 py-12 grid md:grid-cols-[120px_1fr_60px] gap-8 items-start hover:border-[#C8102E]/40 transition-colors"
            >
              <span
                className="text-5xl text-white/10 group-hover:text-[#C8102E]/30 transition-colors"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {reason.num}
              </span>
              <div>
                <h2 className="text-2xl text-white font-semibold mb-3 group-hover:text-[#FF6B35] transition-colors">
                  {reason.title}
                </h2>
                <p className="text-white/50 leading-relaxed max-w-2xl">{reason.desc}</p>
              </div>
              <div className="text-4xl opacity-60 group-hover:opacity-100 transition-opacity">
                {reason.icon}
              </div>
            </div>
          ))}
          <div className="border-t border-white/10" />
        </div>

        {/* 인용구 */}
        <div className="mt-24 py-16 px-8 border border-[#C8102E]/30 bg-[#C8102E]/5 text-center">
          <p
            className="text-3xl md:text-5xl text-white leading-tight mb-6"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}
          >
            "달리는 것은 자신과의 대화다."
          </p>
          <p className="text-white/40 text-sm">XXXX ○○ University Marathon</p>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/register"
            className="inline-block px-12 py-4 bg-[#C8102E] text-white font-semibold hover:bg-[#FF6B35] transition-colors tracking-wider mr-4"
          >
            지금 신청하기 →
          </Link>
          <Link
            href="/info"
            className="inline-block px-12 py-4 border border-white/30 text-white/80 hover:border-white hover:text-white transition-colors"
          >
            대회 정보 보기
          </Link>
        </div>
      </section>
    </div>
  )
}
