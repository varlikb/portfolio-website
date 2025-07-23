import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://talhabilalvarlik.dev'),
  title: 'Talha Bilal Varlık - AI/ML Software Engineer',
  description: 'Portfolio of Talha Bilal Varlık - AI/ML-focused software engineer with expertise in embedded systems, full-stack development, and algorithm design. Recent Software Engineering graduate with proven experience in leading cross-functional teams.',
  keywords: ['AI/ML Engineer', 'Software Engineer', 'Embedded Systems', 'Full Stack Developer', 'Machine Learning', 'IoT', 'Algorithm Design', 'React Native', 'Flutter'],
  authors: [{ name: 'Talha Bilal Varlık' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://talhabilalvarlik.dev',
    title: 'Talha Bilal Varlık - AI/ML Software Engineer',
    description: 'Professional portfolio showcasing expertise in AI/ML, embedded systems, IoT applications, and full-stack development.',
    siteName: 'Talha Bilal Varlık Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Talha Bilal Varlık - AI/ML Software Engineer',
    description: 'Professional portfolio showcasing expertise in AI/ML, embedded systems, IoT applications, and full-stack development.',
  },
  other: {
    'security-policy': 'https://talhabilalvarlik.dev/security-policy',
    'referrer': 'strict-origin-when-cross-origin',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#667eea" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="canonical" href="https://talhabilalvarlik.dev" />
        <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
      </head>
      <body className={`${inter.className} bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 min-h-screen`}>
        <div className="relative">
          {/* Background decoration */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl"></div>
          </div>
          
          {/* Main content */}
          <main className="relative z-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
} 