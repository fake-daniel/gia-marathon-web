'use client'

import { useState } from 'react'
import Link from 'next/link'

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
  name: '', email: '', phone: '', affiliation: '', course: '', shirt_size: '', agree: false,
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
    setError(''); setLoading(true)
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
      <div className="bg-gradient-to-br from-brand-blue-light via-white to-brand-yellow-light min-h-screen flex items-center justify-center px-6 py-24">
        <div className="text-center max-w-lg bg-white rounded-3xl p-10 md:p-14 shadow-2xl">
          <div className="w-20 h-20 mx-auto mb-6 bg-brand-yellow rounded-full flex items-center justify-center text-5xl">
            🎉
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-ink-900 mb-4 leading-tight">
            신청 완료!
          </h1>
          <p className="text-ink-700 leading-relaxed mb-2 text-lg">
            <span className="font-black text-brand-blue">{form.name}</span>님의 참가 신청이 완료되었습니다.
          </p>
          <p className="text-ink-500 mb-8">
            확인 메일을 <span className="text-ink-900 font-bold">{form.email}</span>로 발송했습니다.
          </p>

          <div className="bg-brand-blue-light rounded-2xl p-6 text-left space-y-2 mb-8">
            <div className="flex justify-between">
              <span className="text-ink-500 text-sm font-semibold">참가 코스</span>
              <span className="text-ink-900 font-black">{form.course}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-ink-500 text-sm font-semibold">티셔츠</span>
              <span className="text-ink-900 font-black">{form.shirt_size}</span>
            </div>
          </div>

          <Link href="/" className="inline-block text-ink-500 text-sm underline hover:text-brand-blue">
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-brand-blue-light via-white to-brand-yellow-light min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-2xl mx-auto">
        {/* 헤더 */}
        <p className="inline-block bg-brand-blue text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
          Registration
        </p>
        <h1 className="text-5xl md:text-7xl font-black text-ink-900 mb-3 leading-tight">참가 신청</h1>
        <p className="text-ink-500 mb-12 text-lg">세 단계만 거치면 신청이 완료됩니다.</p>

        {/* 스텝 인디케이터 */}
        <div className="flex items-center gap-0 mb-10">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-black transition-colors ${
                    i <= step ? 'bg-brand-blue text-white' : 'bg-white border-2 border-ink-300 text-ink-500'
                  }`}
                >
                  {i < step ? '✓' : i + 1}
                </div>
                <span className={`text-xs mt-2 font-semibold whitespace-nowrap ${i <= step ? 'text-ink-900' : 'text-ink-500'}`}>
                  {s}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className={`flex-1 h-1 mx-2 mb-6 rounded-full transition-colors ${i < step ? 'bg-brand-blue' : 'bg-ink-300'}`} />
              )}
            </div>
          ))}
        </div>

        {/* 폼 */}
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl space-y-6">

          {step === 0 && (
            <>
              <div>
                <label className="block text-ink-900 font-bold text-sm mb-2">이름 *</label>
                <input
                  type="text" name="name" value={form.name} onChange={handleChange}
                  placeholder="홍길동"
                  className="w-full bg-ink-100 border-2 border-transparent text-ink-900 px-5 py-4 rounded-2xl focus:outline-none focus:border-brand-blue focus:bg-white transition-all placeholder-ink-500 font-medium"
                />
              </div>
              <div>
                <label className="block text-ink-900 font-bold text-sm mb-2">이메일 *</label>
                <input
                  type="email" name="email" value={form.email} onChange={handleChange}
                  placeholder="example@email.com"
                  className="w-full bg-ink-100 border-2 border-transparent text-ink-900 px-5 py-4 rounded-2xl focus:outline-none focus:border-brand-blue focus:bg-white transition-all placeholder-ink-500 font-medium"
                />
              </div>
              <div>
                <label className="block text-ink-900 font-bold text-sm mb-2">전화번호 *</label>
                <input
                  type="tel" name="phone" value={form.phone} onChange={handleChange}
                  placeholder="010-0000-0000"
                  className="w-full bg-ink-100 border-2 border-transparent text-ink-900 px-5 py-4 rounded-2xl focus:outline-none focus:border-brand-blue focus:bg-white transition-all placeholder-ink-500 font-medium"
                />
              </div>
            </>
          )}

          {step === 1 && (
            <>
              <div>
                <label className="block text-ink-900 font-bold text-sm mb-2">소속 *</label>
                <select
                  name="affiliation" value={form.affiliation} onChange={handleChange}
                  className="w-full bg-ink-100 border-2 border-transparent text-ink-900 px-5 py-4 rounded-2xl focus:outline-none focus:border-brand-blue focus:bg-white transition-all font-medium cursor-pointer"
                >
                  <option value="">선택해주세요</option>
                  <option value="학부생">○○대학교 학부생</option>
                  <option value="대학원생">○○대학교 대학원생</option>
                  <option value="교직원">○○대학교 교직원</option>
                  <option value="외부인">외부 참가자</option>
                </select>
              </div>
              <div>
                <label className="block text-ink-900 font-bold text-sm mb-3">참가 코스 *</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { val: '5km', label: '5', color: 'bg-brand-yellow text-ink-900' },
                    { val: '10km', label: '10', color: 'bg-brand-blue text-white' },
                    { val: '하프 (21.1km)', label: '21.1', color: 'bg-ink-900 text-white' },
                  ].map((c) => (
                    <label key={c.val} className={`cursor-pointer rounded-2xl p-5 text-center transition-all hover:scale-[1.02] ${
                      form.course === c.val
                        ? `${c.color} ring-4 ring-brand-blue ring-offset-2`
                        : 'bg-ink-100 text-ink-700 hover:bg-ink-300'
                    }`}>
                      <input type="radio" name="course" value={c.val} checked={form.course === c.val} onChange={handleChange} className="hidden" />
                      <span className="block font-black text-3xl leading-none mb-1">{c.label}</span>
                      <span className="text-[10px] font-bold tracking-wider uppercase opacity-80">KM</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-ink-900 font-bold text-sm mb-3">티셔츠 사이즈 *</label>
                <div className="grid grid-cols-6 gap-2">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((s) => (
                    <label key={s} className={`cursor-pointer rounded-xl py-3 text-center font-black text-sm transition-all hover:scale-105 ${
                      form.shirt_size === s
                        ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/30'
                        : 'bg-ink-100 text-ink-700 hover:bg-ink-300'
                    }`}>
                      <input type="radio" name="shirt_size" value={s} checked={form.shirt_size === s} onChange={handleChange} className="hidden" />
                      {s}
                    </label>
                  ))}
                </div>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h3 className="text-ink-900 font-black text-xl mb-4">신청 내용 확인</h3>
              <div className="space-y-1 bg-ink-100 rounded-2xl p-6">
                {[
                  { label: '이름', value: form.name },
                  { label: '이메일', value: form.email },
                  { label: '전화번호', value: form.phone },
                  { label: '소속', value: form.affiliation },
                  { label: '코스', value: form.course },
                  { label: '티셔츠', value: form.shirt_size },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between py-2.5 border-b border-white last:border-0">
                    <span className="text-ink-500 font-semibold text-sm">{row.label}</span>
                    <span className="text-ink-900 font-bold">{row.value}</span>
                  </div>
                ))}
              </div>
              <label className="flex items-start gap-3 cursor-pointer group bg-brand-yellow-light p-4 rounded-2xl">
                <input
                  type="checkbox" name="agree" checked={form.agree} onChange={handleChange}
                  className="mt-1 w-5 h-5 accent-brand-blue cursor-pointer shrink-0"
                />
                <span className="text-ink-900 text-sm leading-relaxed font-medium">
                  <span className="font-bold">개인정보 수집 및 이용에 동의합니다.</span><br />
                  수집된 정보는 대회 운영 목적으로만 사용됩니다.
                </span>
              </label>
            </>
          )}

          {error && (
            <p className="text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3 font-semibold text-sm">
              ⚠ {error}
            </p>
          )}
        </div>

        {/* 버튼 */}
        <div className="flex justify-between mt-6 gap-3">
          {step > 0 ? (
            <button
              onClick={() => setStep((s) => s - 1)}
              className="px-8 py-4 bg-white border-2 border-ink-300 text-ink-700 rounded-full font-bold hover:border-ink-900 hover:text-ink-900 transition-colors"
            >
              ← 이전
            </button>
          ) : <div />}

          {step < 2 ? (
            <button
              onClick={handleNext}
              className="btn-primary px-10 py-4 bg-brand-blue text-white rounded-full font-bold shadow-lg shadow-brand-blue/30 hover:bg-brand-blue-dark ml-auto"
            >
              다음 →
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="btn-primary px-10 py-4 bg-brand-yellow text-ink-900 rounded-full font-black shadow-lg hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed ml-auto"
            >
              {loading ? '제출 중...' : '신청 완료 →'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
