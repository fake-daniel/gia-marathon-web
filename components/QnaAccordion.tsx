'use client'

import { useState } from 'react'

const qnaList = [
  {
    q: '〈Run for Peace〉가 무엇인가요?',
    a: '〈Run for Peace〉는 ○○대학교가 주최하는 자선 마라톤 시리즈입니다. 매 회차마다 우리 사회의 다른 이웃을 주제로 삼아 참가비 전액을 해당 단체에 기부합니다. 제3회는 독거노인을 위한 마라톤입니다.',
  },
  {
    q: '외부인도 참가할 수 있나요?',
    a: '네, 이 대회는 ○○대학교 구성원뿐 아니라 외부인 누구나 참가 가능합니다. 신청 폼에서 소속을 선택하시면 됩니다.',
  },
  {
    q: '참가비는 어떻게 사용되나요?',
    a: '참가비 전액은 독거노인 지원 사업에 기부됩니다. 식사 지원, 생필품 키트 제공, 정서 지원 프로그램 등에 직접 사용됩니다. 정확한 내역은 대회 후 홈페이지에 공개됩니다.',
  },
  {
    q: '코스는 몇 가지인가요?',
    a: '5km, 10km 두 가지 코스로 운영됩니다. 신청 시 희망 코스를 선택하실 수 있습니다.',
  },
  {
    q: '완주 기념품이 있나요?',
    a: '완주자 전원에게 완주 메달이 수여됩니다. 또한 사전 신청자에게는 공식 대회 티셔츠와 참가자 키트가 제공됩니다.',
  },
  {
    q: '신청 마감일은 언제인가요?',
    a: '신청 마감 날짜는 추후 공지될 예정입니다. 조기 마감될 수 있으니 빠른 신청을 권장합니다.',
  },
  {
    q: '대회 장소는 정확히 어디인가요?',
    a: '한강공원에서 진행됩니다. 정확한 출발 지점 및 집결 장소는 대회 공지와 함께 상세 안내드릴 예정입니다.',
  },
  {
    q: '당일 준비물은 무엇인가요?',
    a: '러닝에 편한 복장과 운동화, 물, 개인 소지품 보관을 위한 작은 가방 정도면 충분합니다. 번호표와 티셔츠는 현장에서 배부됩니다.',
  },
  {
    q: '신청 취소 및 환불이 가능한가요?',
    a: '취소 및 환불 정책은 추후 안내드릴 예정입니다.',
  },
]

export default function QnaAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-3">
      {qnaList.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div
            key={i}
            className={`rounded-2xl overflow-hidden transition-all ${
              isOpen
                ? 'bg-brand-blue text-white shadow-xl shadow-brand-blue/20'
                : 'bg-white border border-ink-100 hover:border-brand-blue/30'
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
            >
              <div className="flex gap-4 items-center flex-1">
                <span className={`font-black text-lg shrink-0 ${isOpen ? 'text-brand-yellow' : 'text-brand-blue'}`}>
                  Q
                </span>
                <span className={`font-bold text-base md:text-lg ${isOpen ? 'text-white' : 'text-ink-900'}`}>
                  {item.q}
                </span>
              </div>
              <span
                className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xl font-bold transition-all ${
                  isOpen
                    ? 'bg-brand-yellow text-ink-900 rotate-45'
                    : 'bg-ink-100 text-ink-900'
                }`}
              >
                +
              </span>
            </button>

            {isOpen && (
              <div className="px-6 pb-5">
                <div className="flex gap-4 items-start pl-9">
                  <p className="text-white/90 leading-relaxed">{item.a}</p>
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
