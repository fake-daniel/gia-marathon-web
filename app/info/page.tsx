import Link from 'next/link'
import QnaAccordion from '@/components/QnaAccordion'

const courses = [
  {
    name: '5KM',
    distance: '5km',
    level: '입문자',
    color: '#4CAF50',
    desc: '처음 마라톤에 도전하는 분들을 위한 코스입니다. 캠퍼스 주변을 한 바퀴 도는 친숙한 루트.',
    time: '약 30분~60분',
  },
  {
    name: '10KM',
    distance: '10km',
    level: '중급자',
    color: '#FF6B35',
    desc: '어느 정도 달리기 경험이 있는 분들께 추천하는 코스입니다. 캠퍼스와 인근 공원을 통과합니다.',
    time: '약 50분~90분',
  },
  {
    name: 'HALF',
    distance: '21.1km',
    level: '숙련자',
    color: '#C8102E',
    desc: '하프마라톤 풀 코스. 도심과 자연이 어우러진 도전적인 루트로 진정한 러너를 위한 코스.',
    time: '약 90분~150분',
  },
]

const benefits = [
  { icon: '🥇', title: '완주 메달', desc: '모든 완주자에게 대회 공식 메달 증정' },
  { icon: '👕', title: '공식 티셔츠', desc: '사전 신청자 전원 대회 기념 티셔츠 제공' },
  { icon: '🎁', title: '참가 기념품', desc: '특별 굿즈 및 협찬 기업 제품 포함 가방' },
  { icon: '🍌', title: '보급 물품', desc: '코스 중 에너지 바, 물, 전해질 음료 제공' },
  { icon: '📸', title: '공식 포토존', desc: '전문 사진작가 배치, 완주 사진 무료 공유' },
  { icon: '🏆', title: '시상식', desc: '코스별 상위 입상자 시상 및 특별 상품' },
]

const schedule = [
  { time: '07:00', event: '현장 등록 및 번호표 배부 시작' },
  { time: '08:00', event: '대회 개회식 및 준비 운동' },
  { time: '08:30', event: '하프마라톤(21.1km) 출발' },
  { time: '09:00', event: '10km 코스 출발' },
  { time: '09:30', event: '5km 코스 출발' },
  { time: '11:00', event: '5km 코스 종료 예정' },
  { time: '12:00', event: '10km 코스 종료 예정' },
  { time: '13:00', event: '하프마라톤 종료 예정' },
  { time: '14:00', event: '시상식 및 폐회식' },
]

export default function InfoPage() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      {/* 헤더 */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-50" />
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-[#C8102E] text-xs tracking-widest uppercase mb-4">Race Information</p>
          <h1
            className="text-6xl md:text-9xl text-white leading-none mb-6"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}
          >
            정보
          </h1>
          <p className="text-white/60 text-lg max-w-xl leading-relaxed">
            코스, 일정, 혜택 및 자주 묻는 질문을 확인하세요.
          </p>
        </div>
      </section>

      {/* ─── 코스 안내 ─── */}
      <section className="pb-24 px-6 max-w-7xl mx-auto">
        <h2
          className="text-4xl text-white mb-12"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}
        >
          코스 안내
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.name}
              className="border border-white/10 p-8 hover:border-white/30 transition-colors group"
            >
              <div className="flex items-start justify-between mb-6">
                <span
                  className="text-6xl"
                  style={{ fontFamily: 'var(--font-display)', color: course.color }}
                >
                  {course.name}
                </span>
                <span
                  className="text-xs px-2 py-1 border text-white/60"
                  style={{ borderColor: course.color + '60' }}
                >
                  {course.level}
                </span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-4">{course.desc}</p>
              <div className="flex items-center gap-2 text-white/40 text-xs">
                <span>⏱</span>
                <span>{course.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 코스 맵 안내 */}
        <div className="mt-6 border border-white/10 p-8 flex items-center justify-center h-48 text-white/30 text-sm">
          🗺 코스 지도는 확정 후 업데이트 예정입니다.
        </div>
      </section>

      {/* ─── 일정 ─── */}
      <section className="py-24 px-6 border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl text-white mb-12"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}
          >
            당일 일정
          </h2>
          <div className="max-w-2xl">
            {schedule.map((item, i) => (
              <div key={i} className="flex gap-6 group">
                {/* 타임라인 선 */}
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full border-2 border-[#C8102E] bg-[#0A0A0A] shrink-0 mt-1.5 group-hover:bg-[#C8102E] transition-colors" />
                  {i < schedule.length - 1 && (
                    <div className="w-px flex-1 bg-white/10 mt-1" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-[#C8102E] text-sm font-mono font-semibold">{item.time}</span>
                  <p className="text-white/70 mt-0.5">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-white/30 text-sm mt-4">* 일정은 변경될 수 있습니다. 최종 일정은 대회 전 공지됩니다.</p>
        </div>
      </section>

      {/* ─── 혜택 ─── */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2
          className="text-4xl text-white mb-12"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}
        >
          참가 혜택
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="border border-white/10 p-6 hover:border-[#C8102E]/40 transition-colors"
            >
              <div className="text-3xl mb-3">{b.icon}</div>
              <h3 className="text-white font-semibold mb-1">{b.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── QnA ─── */}
      <section className="py-24 px-6 border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#C8102E] text-xs tracking-widest uppercase mb-4">FAQ</p>
          <h2
            className="text-4xl text-white mb-12"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}
          >
            자주 묻는 질문
          </h2>
          <QnaAccordion />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-6">
        <Link
          href="/register"
          className="inline-block px-12 py-4 bg-[#C8102E] text-white font-semibold hover:bg-[#FF6B35] transition-colors tracking-wider"
        >
          지금 참가 신청하기 →
        </Link>
      </section>
    </div>
  )
}
