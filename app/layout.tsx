import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Welid Bouazizi - Développeur Frontend Senior',
  description:
    '14 ans d\'expérience dans la conception, l\'intégration et la maintenance d\'applications web performantes et accessibles. Expertise React, Angular, TypeScript.',
  keywords: [
    'Welid Bouazizi',
    'Développeur Frontend',
    'React',
    'Angular',
    'TypeScript',
    'Next.js',
    'Freelance',
    'Paris',
    'SPA',
    'SSR',
  ],
  authors: [{ name: 'Welid Bouazizi', url: 'https://www.linkedin.com/in/welid-bouazizi' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    title: 'Welid Bouazizi - Développeur Frontend Senior',
    description:
      '14 ans d\'expérience en développement web. Expert React, Angular, TypeScript.',
    siteName: 'Welid Bouazizi Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Welid Bouazizi - Développeur Frontend Senior',
    description:
      '14 ans d\'expérience en développement web. Expert React, Angular, TypeScript.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
