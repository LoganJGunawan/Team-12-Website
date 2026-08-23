import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Providers } from '@/providers'
import './globals.css'
import Header from '@/components/shared/Header'
import { DashboardShell } from '@/components/layout/DashboardShell'

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    template: `%s | ${process.env.NEXT_PUBLIC_APP_NAME ?? 'App'}`,
    default: process.env.NEXT_PUBLIC_APP_NAME ?? 'App',
  },
  description: 'Built on garage-boilerplate',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${roboto.variable} ${roboto.variable} h-full antialiased`}>
      <body className="min-h-screen flex flex-col max-h-screen">
        <Header />
        <Providers><DashboardShell>{children}</DashboardShell></Providers>
      </body>
    </html>
  )
}
