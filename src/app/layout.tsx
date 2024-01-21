import type { Metadata } from 'next'
import './globals.css'
import { Lexend } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Raffael Di Pietro',
  description: 'Raffael Di Pietro, french developper',
}

const lexend = Lexend({ subsets: ['latin'], weight: ['400', '600'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="fr"
      className={`${lexend.className} h-full min-h-full bg-base-200`}
      data-theme="nord"
    >
      <body>{children}</body>
    </html>
  )
}
