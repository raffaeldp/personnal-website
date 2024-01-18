import type { Metadata } from 'next'
import './globals.css'
import Navbar from '../components/navbar'
import { Lexend } from 'next/font/google'
import styles from './layout.module.css'

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
      className={`${lexend.className} h-full min-h-full`}
      data-theme="nord"
    >
      <body className={styles.bgImage + ' h-full min-h-full'}>
        <div className="min-height-full m-0 flex h-full justify-center bg-base-200">
          <Navbar />
          <div className="box-border h-full min-h-full w-[81rem] px-4 pt-16">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
