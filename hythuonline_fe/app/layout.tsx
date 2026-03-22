import type { Metadata } from 'next'
import './globals.css'
import 'primeicons/primeicons.css'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { ConfigProvider, App as AntdApp } from 'antd'
import { antdTheme } from '@/lib/antd-theme'
import ConditionalHeader from '@/components/ConditionalHeader'
import MusicPlayer from '@/components/MusicPlayer'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://hythuonline.com'),
  title: 'Hỷ Thư - Thiệp Cưới Online, Slide Cưới',
  description: 'Hãy để Hỷ Thư giúp bạn kể câu chuyện tình yêu qua từng tấm thiệp – mang đầy cảm xúc như một thước phim lãng mạn',
  icons: {
    icon: '/logo.png',
  },
  openGraph: {
    title: 'Hỷ Thư - Thiệp Cưới Online, Slide Cưới',
    description: 'Nền tảng tạo thiệp cưới online và slide cưới chuyên nghiệp',
    url: 'https://hythuonline.com',
    siteName: 'Hỷ Thư',
    images: [
      {
        url: '/opengraph-image', // Next.js will generate this from opengraph-image.tsx
        width: 1200,
        height: 630,
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className="bg-gray-50">
        <AntdRegistry>
          <ConfigProvider theme={antdTheme}>
            <AntdApp>
                <ConditionalHeader />
                {children}
                <MusicPlayer />
            </AntdApp>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  )
}

