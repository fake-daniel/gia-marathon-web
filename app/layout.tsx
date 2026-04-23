import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Run for 독거노인 · 한강 자선 마라톤',
  description: '함께 달려서 따뜻한 세상을 만듭니다. 독거노인을 위한 자선 마라톤에 참여하세요.',
  openGraph: {
    title: 'Run for 독거노인',
    description: '한강에서 함께 달리며 따뜻한 세상을 만드는 자선 마라톤',
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
