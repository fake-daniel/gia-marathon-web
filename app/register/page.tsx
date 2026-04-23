'use client'

import { useState } from 'react'

type FormData = {
  name: string
  email: string
  phone: string
  affiliation: string
  course: string
  shirt_size: string
  agree: boolean
}

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  affiliation: '',
  course: '',
  shirt_size: '',
  agree: false,
}

const steps = ['개인 정보', '참가 정보', '확인 및 제출']

export default function RegisterPage() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState<FormData>(initialForm)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const validateStep = () => {
    if (step === 0) {
      if (!form.name.trim()) return '이름을 입력해주세요.'
      if (!form.email.includes('@')) return '올바른 이메일을 입력해주세요.'
      if (form.phone.length < 10) return '올바른 전화번호를 입력해주세요.'
    }
    if (step === 1) {
      if (!form.affiliation) return '소속을 선택해주세요.'
      if (!form.course) return '코스를 선택해주세요.'
      if (!form.shirt_size) return '티셔츠 사이즈를 선택해주세요.'
    }
    if (step === 2) {
      if (!form.agree) return '개인정보 수집에 동의해주세요.'
    }
    return null
  }

  const handleNext = () => {
    const err = validateStep()
    if (err) { setError(err); return }
    setError('')
    setStep((s) => s + 1)
  }

  const handleSubmit = async () => {
    const err = validateStep()
    if (err) { setError(err); return }
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || '오류가 발생했습니다.')
      setSubmitted(true)
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : '오류가 발생했습니다.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-[#0A0A0A] min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-lg">
          <div className="text-7xl mb-6">🎉</div>
          <h1
            className="text-5xl text-white mb-4"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.1em' }}
          >
            신청 완료!
          </h1>
          <p className="text-white/60 leading-relaxed mb-2">
            <span className="text-white font-semibold">{form.name}</span>님의 참가 신청이 완료되었습니다.
          </p>
          <p className="text-white/60 mb-8">
            확인 메일을 <span className="text-[#FF6B35]">{form.email}</span>로 발송했습니다.
          </p>
          <div className="border border-[#C8102E]/30 bg-[#C8102E]/5 p-6 text-sm text-white/50 mb-8">
            <p className="mb-1">코스: <span className="text-white">{form.course}</span></p>
            <p>티셔츠: <span className="text-white">{form.shirt_size}</span></p>
          </div>
          <button
            onClick={() => { setSubmitted(false); setForm(initialForm); setStep(0) }}
            className="text-white/40 text-sm underline"
          >
            처음으로 돌아가기
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-[#0A0A0A] min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-2xl mx-auto">
        {/* 헤더 */}
        <p className="text-[#C8102E] text-xs tracking-widest uppercase mb-4">Registration</p>
        <h1
          className="text-5xl md:text-7xl text-white mb-12"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}
        >
          참가 신청
        </h1>

        {/* 스텝 인디케이터 */}
        <div className="flex items-center gap-0 mb-12">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 flex items-center justify-center text-xs font-bold transition-colors ${
                    i <= step
                      ? 'bg-[#C8102E] text-white'
                      : 'border border-white/20 text-white/30'
                  }`}
                >
                  {i < step ? '✓' : i + 1}
                </div>
                <span className={`text-xs mt-1 whitespace-nowrap ${i <= step ? 'text-white/70' : 'text-white/20'}`}>
                  {s}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className={`flex-1 h-px mx-2 mb-4 transition-colors ${i < step ? 'bg-[#C8102E]' : 'bg-white/10'}`} />
              )}
            </div>
          ))}
        </div>

        {/* 폼 영역 */}
        <div className="border border-white/10 p-8 space-y-6">

          {/* Step 0: 개인 정보 */}
          {step === 0 && (
            <>
              <div>
                <label className="block text-white/60 text-xs uppercase tracking-wider mb-2">이름 *</label>
                <input
                  type="text" name="name" value={form.name} onChange={handleChange}
                  placeholder="홍길동"
                  className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#C8102E] transition-colors placeholder-white/20"
                />
              </div>
              <div>
                <label className="block text-white/60 text-xs uppercase tracking-wider mb-2">이메일 *</label>
                <input
                  type="email" name="email" value={form.email} onChange={handleChange}
                  placeholder="example@email.com"
                  className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#C8102E] transition-colors placeholder-white/20"
                />
              </div>
              <div>
                <label className="block text-white/60 text-xs uppercase tracking-wider mb-2">전화번호 *</label>
                <input
                  type="tel" name="phone" value={form.phone} onChange={handleChange}
                  placeholder="010-0000-0000"
                  className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#C8102E] transition-colors placeholder-white/20"
                />
              </div>
            </>
          )}

          {/* Step 1: 참가 정보 */}
          {step === 1 && (
            <>
              <div>
                <label className="block text-white/60 text-xs uppercase tracking-wider mb-2">소속 *</label>
                <select
                  name="affiliation" value={form.affiliation} onChange={handleChange}
                  className="w-full bg-[#0A0A0A] border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#C8102E] transition-colors"
                >
                  <option value="">선택해주세요</option>
                  <option value="학부생">○○대학교 학부생</option>
                  <option value="대학원생">○○대학교 대학원생</option>
                  <option value="교직원">○○대학교 교직원</option>
                  <option value="외부인">외부 참가자</option>
                </select>
              </div>
              <div>
                <label className="block text-white/60 text-xs uppercase tracking-wider mb-3">참가 코스 *</label>
                <div className="grid grid-cols-3 gap-3">
                  {['5km', '10km', '하프 (21.1km)'].map((c) => (
                    <label key={c} className={`cursor-pointer border p-4 text-center text-sm transition-colors ${
                      form.course === c
                        ? 'border-[#C8102E] bg-[#C8102E]/10 text-white'
                        : 'border-white/10 text-white/50 hover:border-white/30'
                    }`}>
                      <input type="radio" name="course" value={c} checked={form.course === c} onChange={handleChange} className="hidden" />
                      <span className="block font-bold mb-1" style={{ fontFamily: 'var(--font-display)' }}>{c.split(' ')[0]}</span>
                      <span className="text-xs opacity-70">{c.includes('하프') ? '하프' : ''}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-white/60 text-xs uppercase tracking-wider mb-2">티셔츠 사이즈 *</label>
                <select
                  name="shirt_size" value={form.shirt_size} onChange={handleChange}
                  className="w-full bg-[#0A0A0A] border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#C8102E] transition-colors"
                >
                  <option value="">선택해주세요</option>
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </>
          )}

          {/* Step 2: 확인 */}
          {step === 2 && (
            <>
              <div className="space-y-3 bg-white/5 p-6 text-sm">
                <h3 className="text-white font-semibold mb-4">신청 내용 확인</h3>
                {[
                  { label: '이름', value: form.name },
                  { label: '이메일', value: form.email },
                  { label: '전화번호', value: form.phone },
                  { label: '소속', value: form.affiliation },
                  { label: '코스', value: form.course },
                  { label: '티셔츠', value: form.shirt_size },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between">
                    <span className="text-white/40">{row.label}</span>
                    <span className="text-white">{row.value}</span>
                  </div>
                ))}
              </div>
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox" name="agree" checked={form.agree} onChange={handleChange}
                  className="mt-1 accent-[#C8102E]"
                />
                <span className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors">
                  개인정보 수집 및 이용에 동의합니다. 수집된 정보는 대회 운영 목적으로만 사용됩니다.
                </span>
              </label>
            </>
          )}

          {/* 에러 */}
          {error && (
            <p className="text-[#FF6B35] text-sm border border-[#FF6B35]/30 bg-[#FF6B35]/5 px-4 py-2">
              ⚠ {error}
            </p>
          )}
        </div>

        {/* 버튼 */}
        <div className="flex justify-between mt-6">
          {step > 0 ? (
            <button
              onClick={() => setStep((s) => s - 1)}
              className="px-6 py-3 border border-white/20 text-white/60 hover:border-white/40 hover:text-white transition-colors text-sm"
            >
              ← 이전
            </button>
          ) : <div />}

          {step < 2 ? (
            <button
              onClick={handleNext}
              className="px-10 py-3 bg-[#C8102E] text-white font-semibold hover:bg-[#FF6B35] transition-colors text-sm"
            >
              다음 →
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="px-10 py-3 bg-[#C8102E] text-white font-semibold hover:bg-[#FF6B35] transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? '제출 중...' : '신청 완료 →'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
