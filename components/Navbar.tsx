'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: '메인' },
  { href: '/mission', label: 'Mission' },
  { href: '/info', label: '정보' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 홈이 아니거나 스크롤되면 흰 배경
  const solid = !isHome || scrolled

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? 'bg-white/90 backdrop-blur-lg border-b border-ink-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* 로고 */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-9 h-9">
            <div className="absolute inset-0 bg-brand-blue rounded-full" />
            <div className="absolute inset-[3px] bg-brand-yellow rounded-full flex items-center justify-center">
              <span className="text-brand-blue font-black text-[11px] tracking-tighter">RUN</span>
            </div>
          </div>
          <div className="flex flex-col leading-none">
            <span className={`font-bold text-sm tracking-tight transition-colors ${solid ? 'text-ink-900' : 'text-white'}`}>
              Run for 독거노인
            </span>
            <span className={`text-[10px] font-medium tracking-wide transition-colors ${solid ? 'text-ink-500' : 'text-white/80'}`}>
              HAN-GANG CHARITY MARATHON
            </span>
          </div>
        </Link>

        {/* 데스크탑 메뉴 */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
                    isActive
                      ? solid ? 'text-brand-blue bg-brand-blue-light' : 'text-brand-yellow bg-white/15'
                      : solid ? 'text-ink-700 hover:text-brand-blue' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
          <li className="ml-3">
            <Link
              href="/register"
              className="btn-primary inline-flex items-center gap-1.5 px-5 py-2.5 bg-brand-blue text-white text-sm font-bold rounded-full hover:bg-brand-blue-dark shadow-lg shadow-brand-blue/25"
            >
              참가 신청
              <span className="text-base leading-none">→</span>
            </Link>
          </li>
        </ul>

        {/* 모바일 햄버거 */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="메뉴"
        >
          <span className={`block w-6 h-0.5 transition-all ${solid ? 'bg-ink-900' : 'bg-white'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 transition-all ${solid ? 'bg-ink-900' : 'bg-white'} ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 transition-all ${solid ? 'bg-ink-900' : 'bg-white'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* 모바일 메뉴 */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-ink-100 shadow-xl">
          <ul className="flex flex-col py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-6 py-3.5 text-base font-semibold ${
                    pathname === link.href ? 'text-brand-blue bg-brand-blue-light' : 'text-ink-900'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="px-4 py-3">
              <Link
                href="/register"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center px-5 py-3 bg-brand-blue text-white font-bold rounded-full"
              >
                참가 신청하기 →
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
