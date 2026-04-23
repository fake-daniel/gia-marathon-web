export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0A0A0A] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6">
        <div>
          <p
            className="text-2xl text-white mb-1"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.15em' }}
          >
            ○○ MARATHON XXXX
          </p>
          <p className="text-white/40 text-sm">○○대학교 주최 마라톤 대회</p>
        </div>
        <div className="text-sm text-white/40 space-y-1">
          <p>문의: marathon@university.ac.kr</p>
          <p>주관: ○○대학교 체육부</p>
          <p className="mt-4">© XXXX ○○ University Marathon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
