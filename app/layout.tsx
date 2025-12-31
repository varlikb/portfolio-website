import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import LetterGlitch from '@/components/ui/letter-glitch'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.talhabvarlik.com'),
  title: {
    default: 'Talha Bilal Varlık - Freelance Web Developer & Software Engineer',
    template: '%s | Talha Bilal Varlık'
  },
  description: 'Freelance web developer & software engineer in Istanbul. I build modern websites, web applications, and custom software solutions for businesses. Next.js, React, Full-Stack Development. Available for hire.',
  keywords: [
    'freelance web developer',
    'freelance software engineer', 
    'web developer Istanbul',
    'website development Turkey',
    'React developer',
    'Next.js developer',
    'full stack developer',
    'custom website development',
    'web application development',
    'mobile app developer',
    'Flutter developer',
    'AI/ML engineer',
    'hire web developer',
    'freelance developer Turkey',
    'Talha Bilal Varlık'
  ],
  authors: [{ name: 'Talha Bilal Varlık', url: 'https://www.talhabvarlik.com' }],
  creator: 'Talha Bilal Varlık',
  publisher: 'Talha Bilal Varlık',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'tr_TR',
    url: 'https://www.talhabvarlik.com',
    title: 'Talha Bilal Varlık - Freelance Web Developer & Software Engineer',
    description: 'Freelance web developer in Istanbul. I build modern websites and web applications for businesses. Available for hire.',
    siteName: 'Talha Bilal Varlık - Portfolio',
    images: [
      {
        url: '/profile/profile-picture.jpeg',
        width: 800,
        height: 800,
        alt: 'Talha Bilal Varlık - Freelance Web Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Talha Bilal Varlık - Freelance Web Developer',
    description: 'Freelance web developer in Istanbul. Modern websites & web applications. Available for hire.',
    images: ['/profile/profile-picture.jpeg'],
  },
  alternates: {
    canonical: 'https://www.talhabvarlik.com',
  },
  category: 'technology',
  verification: {
    // Google Search Console verification - add your code here
    // google: 'your-google-verification-code',
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
        <meta name="theme-color" content="#000000" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="canonical" href="https://www.talhabvarlik.com" />
        <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
        
        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Talha Bilal Varlık",
              "url": "https://www.talhabvarlik.com",
              "image": "https://www.talhabvarlik.com/profile/profile-picture.jpeg",
              "jobTitle": "Freelance Web Developer & Software Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Istanbul",
                "addressCountry": "Turkey"
              },
              "sameAs": [
                "https://github.com/varlikb",
                "https://linkedin.com/in/talha-bilal-varlık"
              ],
              "knowsAbout": [
                "Web Development",
                "React",
                "Next.js",
                "TypeScript",
                "Full Stack Development",
                "Mobile App Development",
                "Flutter",
                "AI/ML",
                "Software Engineering"
              ],
              "offers": {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Web Development Services",
                  "description": "Custom website and web application development"
                }
              }
            })
          }}
        />
        
        {/* LocalBusiness Schema for local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Talha Bilal Varlık - Web Development",
              "description": "Freelance web development and software engineering services",
              "url": "https://www.talhabvarlik.com",
              "telephone": "",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Istanbul",
                "addressCountry": "TR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "41.0082",
                "longitude": "28.9784"
              },
              "priceRange": "$$",
              "openingHours": "Mo-Fr 09:00-18:00",
              "areaServed": ["Turkey", "Europe", "Worldwide"]
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-black min-h-screen`}>
        <div className="relative min-h-screen">
          {/* LetterGlitch Background */}
          <div className="fixed inset-0 z-0">
            <LetterGlitch
              glitchColors={['#1a1a1a', '#333333', '#4a4a4a']}
              glitchSpeed={50}
              centerVignette={true}
              outerVignette={false}
              smooth={true}
            />
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