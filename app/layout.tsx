import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Run for Peace · 한강 자선 마라톤',
  description: '평화를 위한 달리기. 제3회 Run for Peace는 독거노인을 위한 자선 마라톤입니다.',
  openGraph: {
    title: 'Run for Peace',
    description: '평화를 위해 달립니다. 한강에서 함께하는 자선 마라톤.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
