import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { cn } from '@/lib/utils'
import { SiteHeader } from '@/components/site-header'
import { ShoppingCartProvider } from '@/components/shopping-cart'
import { Toaster } from '@/components/ui/toaster'

import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Boost Your Developer Potential with React Server Components',
  description:
    'Gain an in-depth understanding of React Server Components, and master the usage of React Server Actions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable,
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <ShoppingCartProvider>
            <SiteHeader />
            <div className="mt-6 flex-1">{children}</div>
            <Toaster />
          </ShoppingCartProvider>
        </div>
      </body>
    </html>
  )
}
