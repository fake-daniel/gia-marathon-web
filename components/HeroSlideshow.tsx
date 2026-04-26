'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const slides = [
  'https://images.unsplash.com/photo-1646906975349-eebfad38ee3b?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1614346950571-ddda7fc206af?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1636625716229-0e72a641e3c5?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1576974482518-794e9b337c38?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1556513584-fc549ffb7577?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1630207711470-6d16f93e5fdd?q=80&w=2000&auto=format&fit=crop',
]

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000) // 5초마다 전환
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="absolute inset-0">
      {slides.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={src}
            alt={`히어로 이미지 ${i + 1}`}
            fill
            priority={i === 0}
            className="img-cover"
            sizes="100vw"
          />
        </div>
      ))}
      <div className="absolute inset-0 hero-overlay" />

      {/* 슬라이드 인디케이터 */}
      <div className="absolute bottom-32 left-6 md:left-12 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`슬라이드 ${i + 1}`}
            className={`h-1 transition-all duration-500 ${
              i === current ? 'w-12 bg-brand-yellow' : 'w-6 bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
