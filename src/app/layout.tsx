import type {Metadata} from 'next'
import {Nunito, Poppins, Roboto_Flex} from 'next/font/google'
import './globals.css'

const poppins = Roboto_Flex({subsets: ['latin'], weight: '500'})

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
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
