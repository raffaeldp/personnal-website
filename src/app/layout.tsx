import type { Metadata } from 'next'
import './globals.css'
import Navbar from '../components/navbar'
import { Lexend } from 'next/font/google'
import styles from './layout.module.css'

export const metadata: Metadata = {
  title: 'Raffael Di Pietro',
  description: 'An app to split bills between friends',
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
      className={`${lexend.className} h-full min-h-full`}
      data-theme="lemonade"
    >
      <body className={styles.bgImage + ' h-full min-h-full'}>
        <div className="min-height-full m-0 h-full">
          <Navbar />
          <div className="box-border h-full min-h-full px-5 pt-16">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
