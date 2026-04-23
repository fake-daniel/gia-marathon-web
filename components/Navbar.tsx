'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: '메인' },
  { href: '/mission', label: 'Mission' },
  { href: '/info', label: '정보' },
  { href: '/register', label: '참가 신청' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* 로고 */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-[#C8102E] flex items-center justify-center">
            <span className="text-white font-bold text-xs" style={{ fontFamily: 'var(--font-display)' }}>
              RUN
            </span>
          </div>
          <span
            className="text-white tracking-widest text-sm uppercase group-hover:text-[#C8102E] transition-colors"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.2em' }}
          >
            ○○ Marathon
          </span>
        </Link>

        {/* 데스크탑 메뉴 */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            const isRegister = link.href === '/register'
            return (
              <li key={link.href}>
                {isRegister ? (
                  <Link
                    href={link.href}
                    className="px-5 py-2 bg-[#C8102E] text-white text-sm font-medium hover:bg-[#FF6B35] transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <Link
                    href={link.href}
                    className={`text-sm red-underline transition-colors duration-200 ${
                      isActive ? 'text-[#C8102E]' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            )
          })}
        </ul>

        {/* 모바일 햄버거 */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="메뉴 열기"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* 모바일 메뉴 드롭다운 */}
      {menuOpen && (
        <div className="md:hidden bg-[#0A0A0A]/98 border-t border-white/10">
          <ul className="flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-6 py-3 text-sm transition-colors ${
                    link.href === '/register'
                      ? 'text-[#C8102E] font-semibold'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
