import type {Metadata} from 'next'
import {Nunito} from 'next/font/google'
import './globals.css'

const nunito = Nunito({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Rush Hour',
  description: 'Team Hay Mann',
  icons: '/icons/brand.png',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
