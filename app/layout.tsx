import type { Metadata } from 'next'
import { Providers } from './providers'
import Header from '@/app/components/layout/Header'
import Footer from '@/app/components/layout/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'LeadGen - Lead Generation Platform',
  description: 'Advanced lead generation web application built with Next.js',
  keywords: ['leads', 'generation', 'crm', 'sales'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-secondary">
        <Providers>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
