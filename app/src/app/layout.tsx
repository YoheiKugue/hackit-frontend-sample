import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'
import '@/styles/global.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hackit Sample',
  description: 'Hackitのためのサンプルです。',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Theme>{children}</Theme>
      </body>
    </html>
  )
}
