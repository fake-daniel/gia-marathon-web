import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 pb-10 border-b border-white/10">
          {/* 로고 + 소개 */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-brand-blue rounded-full" />
                <div className="absolute inset-[3px] bg-brand-yellow rounded-full flex items-center justify-center">
                  <span className="text-brand-blue font-black text-xs">RUN</span>
                </div>
              </div>
              <div>
                <p className="font-bold text-base">Run for 독거노인</p>
                <p className="text-xs text-white/60">Han-gang Charity Marathon</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-md">
              한 걸음 한 걸음이 누군가의 하루를 따뜻하게 만듭니다.
              당신의 달리기가 독거노인을 위한 희망이 됩니다.
            </p>
          </div>

          {/* 메뉴 */}
          <div>
            <h4 className="font-bold text-sm mb-4">바로가기</h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li><Link href="/" className="hover:text-brand-yellow">메인</Link></li>
              <li><Link href="/mission" className="hover:text-brand-yellow">Mission</Link></li>
              <li><Link href="/info" className="hover:text-brand-yellow">대회 정보</Link></li>
              <li><Link href="/register" className="hover:text-brand-yellow">참가 신청</Link></li>
            </ul>
          </div>

          {/* 문의 */}
          <div>
            <h4 className="font-bold text-sm mb-4">문의</h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>📧 marathon@university.ac.kr</li>
              <li>📞 02-XXX-XXXX</li>
              <li>📍 ○○대학교 체육부</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-xs text-white/50">
          <p>© XXXX Run for 독거노인. All rights reserved.</p>
          <p>주최 · ○○대학교  |  주관 · ○○대학교 체육부</p>
        </div>
      </div>
    </footer>
  )
}
