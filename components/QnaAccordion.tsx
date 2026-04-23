'use client'

import { useState } from 'react'

const qnaList = [
  {
    q: '외부인도 참가할 수 있나요?',
    a: '네, 이 대회는 ○○대학교 구성원뿐 아니라 외부인 누구나 참가 가능합니다. 신청 폼에서 소속을 선택하시면 됩니다.',
  },
  {
    q: '참가비가 있나요?',
    a: '참가비 관련 안내는 추후 업데이트될 예정입니다.',
  },
  {
    q: '코스는 몇 가지인가요?',
    a: '5km, 10km, 하프마라톤(21.1km) 총 3가지 코스로 운영됩니다. 신청 시 희망 코스를 선택하실 수 있습니다.',
  },
  {
    q: '완주 기념품이 있나요?',
    a: '완주자 전원에게 완주 메달이 수여됩니다. 또한 사전 신청자에게는 공식 대회 티셔츠가 제공됩니다.',
  },
  {
    q: '신청 마감일은 언제인가요?',
    a: '신청 마감 날짜는 추후 공지될 예정입니다. 조기 마감될 수 있으니 빠른 신청을 권장합니다.',
  },
  {
    q: '당일 주차가 가능한가요?',
    a: '주차 관련 안내는 추후 업데이트될 예정입니다.',
  },
  {
    q: '신청 취소 및 환불은 가능한가요?',
    a: '취소 및 환불 정책은 추후 안내드릴 예정입니다.',
  },
]

export default function QnaAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-0">
      {qnaList.map((item, i) => (
        <div key={i} className="border-t border-white/10 last:border-b">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full text-left py-5 flex items-start justify-between gap-4 group hover:text-[#FF6B35] transition-colors"
          >
            <div className="flex gap-4 items-start">
              <span className="text-[#C8102E] font-bold text-sm mt-0.5 shrink-0">Q.</span>
              <span className="text-white/90 group-hover:text-white transition-colors font-medium">
                {item.q}
              </span>
            </div>
            <span
              className={`shrink-0 text-white/40 text-xl transition-transform duration-200 ${
                openIndex === i ? 'rotate-45' : ''
              }`}
            >
              +
            </span>
          </button>

          {openIndex === i && (
            <div className="pb-5 pl-8 pr-8">
              <div className="flex gap-4">
                <span className="text-[#FF6B35] font-bold text-sm mt-0.5 shrink-0">A.</span>
                <p className="text-white/50 leading-relaxed">{item.a}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
