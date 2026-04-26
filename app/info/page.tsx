import Link from 'next/link'
import Image from 'next/image'
import QnaAccordion from '@/components/QnaAccordion'

const courses = [
  {
    name: '5KM',
    distance: '5',
    level: 'FUN RUN',
    levelKo: '입문자',
    color: 'bg-brand-yellow text-ink-900',
    accent: 'text-brand-blue',
    desc: '처음 도전하는 러너를 위한 친근한 코스. 한강의 풍경을 여유롭게 즐길 수 있습니다.',
    time: '약 30~60분',
  },
  {
    name: '10KM',
    distance: '10',
    level: 'CHALLENGE',
    levelKo: '중급자 이상',
    color: 'bg-brand-blue text-white',
    accent: 'text-brand-yellow',
    desc: '꾸준히 달려온 러너에게 적합한 코스. 한강공원 일대를 여유롭게 관통합니다.',
    time: '약 50~90분',
  },
]

const benefits = [
  { icon: '🥇', title: '완주 메달', desc: '모든 완주자에게 특별 제작 메달 증정' },
  { icon: '👕', title: '공식 티셔츠', desc: '사전 신청자 전원 기념 티셔츠 제공' },
  { icon: '🎁', title: '러너 키트', desc: '간식, 음료, 굿즈 포함 특별 키트' },
  { icon: '🍌', title: '보급 물품', desc: '코스 중 에너지 바 · 물 · 전해질 음료' },
  { icon: '📸', title: '완주 사진', desc: '전문 사진작가의 공식 완주 사진 무료 제공' },
  { icon: '💙', title: '기부 증서', desc: '독거노인 기부 참여 증서 발급' },
]

const schedule = [
  { time: '07:00', event: '현장 등록 및 번호표 배부 시작', active: false },
  { time: '08:00', event: '대회 개회식 및 준비 운동', active: false },
  { time: '08:30', event: '10km 코스 출발', active: true },
  { time: '09:00', event: '5km 코스 출발', active: true },
  { time: '10:30', event: '5km 코스 종료 예정', active: false },
  { time: '11:30', event: '10km 코스 종료 예정', active: false },
  { time: '12:30', event: '시상식 및 폐회식', active: false },
]

export default function InfoPage() {
  return (
    <div className="bg-white">

      {/* 히어로 */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-br from-brand-yellow-light via-white to-brand-blue-light">
        <div className="absolute top-0 right-0 w-96 h-96 dot-pattern opacity-40" />
        <div className="relative max-w-5xl mx-auto">
          <p className="inline-block bg-ink-900 text-brand-yellow px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            Race Information
          </p>
          <h1 className="text-5xl md:text-8xl font-black text-ink-900 leading-[0.95] mb-8 text-balance">
            대회<br />
            <span className="text-brand-blue">모든 정보</span>
          </h1>
          <p className="text-xl md:text-2xl text-ink-700 leading-relaxed max-w-2xl font-medium">
            코스, 일정, 혜택까지. 참가 전에 꼭 확인해 보세요.
          </p>
        </div>
      </section>

      {/* 코스 */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="inline-block bg-brand-blue-light text-brand-blue px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                Courses
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-ink-900 leading-tight">
                코스 안내
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {courses.map((course) => (
              <div key={course.name} className={`${course.color} rounded-3xl p-10 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500 cursor-pointer`}>
                <div className="relative z-10">
                  <span className={`${course.accent} font-black text-xs tracking-[0.2em] block mb-4`}>
                    {course.level}
                  </span>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-9xl font-black leading-none">{course.distance}</span>
                    <span className="text-3xl font-black">km</span>
                  </div>
                  <p className="text-base font-medium opacity-90 leading-relaxed mb-6">{course.desc}</p>
                  <div className="flex items-center gap-2 text-sm font-bold pt-4 border-t border-current/20">
                    <span>⏱</span>
                    <span>{course.time}</span>
                    <span className="ml-auto">{course.levelKo}</span>
                  </div>
                </div>
                <div className="absolute -bottom-12 -right-8 text-[16rem] font-black opacity-[0.06] leading-none pointer-events-none">
                  {course.distance}
                </div>
              </div>
            ))}
          </div>

          {/* 코스 맵 */}
          <div className="mt-8 relative rounded-3xl overflow-hidden bg-ink-100 h-72 md:h-96">
            <Image
              src="https://images.unsplash.com/photo-1560457079-9a6532ccb118?w=2000&auto=format&fit=crop&q=80"
              alt="한강 코스 지도"
              fill
              className="img-cover opacity-60"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center bg-white/95 backdrop-blur-md rounded-2xl px-8 py-6 shadow-2xl">
                <p className="text-4xl mb-2">🗺</p>
                <p className="text-ink-900 font-bold">상세 코스 지도는 준비 중입니다</p>
                <p className="text-ink-500 text-sm mt-1">대회 확정 후 공개 예정</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 일정 */}
      <section className="py-24 px-6 bg-ink-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12">
            <div>
              <p className="inline-block bg-brand-yellow text-ink-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                Schedule
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-ink-900 leading-tight mb-6">
                당일<br />일정
              </h2>
              <p className="text-ink-500 leading-relaxed">
                오전 7시 등록 시작, 12시 30분 폐회식까지.<br />
                모든 타임라인을 확인하세요.
              </p>
              <p className="text-xs text-ink-500 mt-6 italic">
                * 일정은 변경될 수 있습니다.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-10">
              <div className="space-y-0">
                {schedule.map((item, i) => (
                  <div key={i} className="flex gap-5 group">
                    <div className="flex flex-col items-center shrink-0">
                      <div className={`w-4 h-4 rounded-full border-4 shrink-0 transition-all ${
                        item.active
                          ? 'bg-brand-yellow border-brand-blue scale-110'
                          : 'bg-white border-ink-300'
                      }`} />
                      {i < schedule.length - 1 && (
                        <div className="w-0.5 flex-1 bg-ink-100 mt-1" />
                      )}
                    </div>
                    <div className={`pb-6 ${item.active ? '' : 'opacity-70'}`}>
                      <span className={`font-black text-lg ${item.active ? 'text-brand-blue' : 'text-ink-500'}`}>
                        {item.time}
                      </span>
                      <p className={`${item.active ? 'text-ink-900 font-bold' : 'text-ink-700'} mt-0.5`}>
                        {item.event}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 혜택 */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="inline-block bg-brand-yellow text-ink-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              Benefits
            </p>
            <h2 className="text-4xl md:text-6xl font-black text-ink-900 leading-tight">
              참가자를 위한<br />풍성한 혜택
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-ink-100 rounded-2xl p-6 md:p-8 hover:bg-brand-blue-light transition-colors group cursor-default"
              >
                <div className="text-5xl mb-4">{b.icon}</div>
                <h3 className="text-ink-900 font-black text-lg mb-2">{b.title}</h3>
                <p className="text-ink-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QnA */}
      <section className="py-24 px-6 bg-ink-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="inline-block bg-brand-blue text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              FAQ
            </p>
            <h2 className="text-4xl md:text-6xl font-black text-ink-900 leading-tight">
              자주 묻는 질문
            </h2>
          </div>
          <QnaAccordion />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-brand-blue text-center text-white">
        <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">준비되셨나요?</h2>
        <Link
          href="/register"
          className="btn-primary inline-flex items-center gap-2 px-10 py-5 bg-brand-yellow text-ink-900 rounded-full font-black text-lg shadow-2xl hover:scale-105 transition-transform"
        >
          참가 신청하기 →
        </Link>
      </section>
    </div>
  )
}
