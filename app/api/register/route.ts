import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, affiliation, course, shirt_size } = body

    if (!name || !email || !phone || !affiliation || !course || !shirt_size) {
      return NextResponse.json({ error: '모든 필드를 입력해주세요.' }, { status: 400 })
    }

    const { data: existing } = await supabase
      .from('participants')
      .select('id')
      .eq('email', email)
      .single()

    if (existing) {
      return NextResponse.json({ error: '이미 신청된 이메일입니다.' }, { status: 409 })
    }

    const { error } = await supabase.from('participants').insert([
      { name, email, phone, affiliation, course, shirt_size }
    ])

    if (error) throw error

    return NextResponse.json({ success: true, message: '신청이 완료되었습니다.' })
  } catch (e: unknown) {
    console.error('Register API error:', e)
    return NextResponse.json({ error: '서버 오류가 발생했습니다.' }, { status: 500 })
  }
}