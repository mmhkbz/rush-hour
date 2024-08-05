import type {Metadata} from 'next'
import {Nunito} from 'next/font/google'
import './globals.css'
import {QueryClientProvider} from '@/providers'
import {cn} from '@/libs/utils'
import {Toaster} from '@/components/ui/toaster'

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
    <QueryClientProvider>
      <html lang="en">
        <body className={cn(nunito.className, 'bg-neutral-100')}>
          {children}
          <Toaster />
        </body>
      </html>
    </QueryClientProvider>
  )
}
