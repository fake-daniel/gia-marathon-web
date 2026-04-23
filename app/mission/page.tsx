import Link from 'next/link'
import Image from 'next/image'

export default function MissionPage() {
  return (
    <div className="bg-white">

      {/* 히어로 */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-br from-brand-blue-light via-white to-brand-yellow-light">
        <div className="absolute top-0 right-0 w-96 h-96 dot-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto">
          <p className="inline-block bg-brand-blue text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            Our Mission
          </p>
          <h1 className="text-5xl md:text-8xl font-black text-ink-900 leading-[0.95] mb-8 text-balance">
            왜 우리가<br />
            <span className="highlight-yellow">함께 달리는가</span>
          </h1>
          <p className="text-xl md:text-2xl text-ink-700 leading-relaxed max-w-2xl font-medium">
            단순한 스포츠 이벤트가 아닙니다.<br />
            달리기로 만들어가는 따뜻한 연대의 이야기입니다.
          </p>
        </div>
      </section>

      {/* 큰 인용 문구 */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-blue font-black text-5xl md:text-7xl leading-none mb-6">"</p>
          <blockquote className="text-2xl md:text-4xl font-bold text-ink-900 leading-snug text-balance mb-8">
            우리나라의 65세 이상 독거노인은 <span className="text-brand-blue">약 200만 명</span>.
            이들 중 많은 분이 사회적 고립 속에 하루를 보냅니다.
          </blockquote>
          <p className="text-ink-500">
            우리는 달리기로 이 이야기를 바꾸고 싶습니다.
          </p>
        </div>
      </section>

      {/* 5가지 미션 */}
      <section className="py-24 px-6 bg-ink-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="inline-block bg-brand-yellow text-ink-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              Why Participate
            </p>
            <h2 className="text-4xl md:text-6xl font-black text-ink-900 leading-tight">
              이 마라톤이 특별한<br />5가지 이유
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                num: '01',
                title: '참가비 전액이 기부됩니다',
                desc: '여러분이 내신 참가비 100%는 지역 독거노인 지원 사업에 직접 전달됩니다. 식사 지원, 생필품 키트, 주거 개선 등 실질적인 도움으로 이어집니다.',
                color: 'bg-brand-blue text-white',
                accent: 'text-brand-yellow',
              },
              {
                num: '02',
                title: '누구나 완주할 수 있습니다',
                desc: '5km, 10km, 하프(21.1km) 세 가지 코스로 운영되어 초보자부터 숙련된 러너까지 자신의 페이스로 도전하고 완주할 수 있습니다.',
                color: 'bg-white text-ink-900 border-2 border-ink-900',
                accent: 'text-brand-blue',
              },
              {
                num: '03',
                title: '한강의 아름다움을 만나다',
                desc: '서울의 대표 러닝 스팟인 한강공원에서 펼쳐집니다. 강변 풍경과 함께 달리며 도심 속 힐링을 경험하세요.',
                color: 'bg-brand-yellow text-ink-900',
                accent: 'text-brand-blue',
              },
              {
                num: '04',
                title: '풍성한 참가자 혜택',
                desc: '완주 메달, 공식 티셔츠, 러너 키트, 그리고 전문 사진작가의 완주 사진까지 모든 참가자에게 제공됩니다.',
                color: 'bg-white text-ink-900 border-2 border-ink-900',
                accent: 'text-brand-blue',
              },
              {
                num: '05',
                title: '의미 있는 하루의 시작',
                desc: '이 마라톤은 일회성 이벤트가 아닙니다. 건강한 습관과 사회적 나눔, 두 가지 모두를 시작할 수 있는 특별한 계기입니다.',
                color: 'bg-ink-900 text-white',
                accent: 'text-brand-yellow',
              },
            ].map((reason) => (
              <div
                key={reason.num}
                className={`${reason.color} rounded-3xl p-8 md:p-12 grid md:grid-cols-[120px_1fr] gap-6 md:gap-10 items-start`}
              >
                <span className={`${reason.accent} font-black text-6xl md:text-7xl leading-none`}>
                  {reason.num}
                </span>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black mb-3 leading-tight">{reason.title}</h3>
                  <p className="opacity-90 leading-relaxed text-base md:text-lg max-w-2xl">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 이미지 섹션 */}
      <section className="relative h-[500px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=2000&auto=format&fit=crop&q=80"
          alt="한강에서 달리는 러너들"
          fill
          className="img-cover"
        />
        <div className="absolute inset-0 bg-ink-900/50" />
        <div className="relative h-full flex items-center justify-center px-6">
          <p className="text-white text-3xl md:text-5xl font-black text-center max-w-3xl leading-tight text-balance">
            혼자 달리면 빠르지만,<br />
            <span className="text-brand-yellow">함께 달리면 멀리 갑니다.</span>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white text-center">
        <h2 className="text-4xl md:text-6xl font-black text-ink-900 mb-6 leading-tight">
          당신의 한 걸음을<br />
          <span className="text-brand-blue">기다립니다.</span>
        </h2>
        <p className="text-ink-500 mb-10 text-lg">지금 바로 참가 신청하세요.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/register"
            className="btn-primary inline-flex items-center gap-2 px-10 py-5 bg-brand-blue text-white rounded-full font-bold shadow-xl shadow-brand-blue/30 hover:bg-brand-blue-dark"
          >
            참가 신청하기 →
          </Link>
          <Link
            href="/info"
            className="inline-flex items-center gap-2 px-10 py-5 bg-white border-2 border-ink-900 text-ink-900 rounded-full font-bold hover:bg-ink-900 hover:text-white transition-colors"
          >
            대회 정보 보기
          </Link>
        </div>
      </section>
    </div>
  )
}
