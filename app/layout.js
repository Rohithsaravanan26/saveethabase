import './globals.css'
import { Inter } from 'next/font/google'
import CookieConsent from '@/components/CookieConsent'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'SaveethaBase - Academic Resource Platform for Saveetha Engineering College',
    template: '%s | SaveethaBase',
  },
  description: 'SaveethaBase is a free academic resource sharing platform for Saveetha Engineering College students. Access CIA papers, previous year questions (PYQ), study materials, lab records, and project files. Upload, share, and discover quality study resources.',
  keywords: [
    'SaveethaBase', 'Saveetha Engineering College', 'academic resources', 'study materials',
    'CIA papers', 'previous year questions', 'PYQ', 'lab records', 'project files',
    'engineering notes', 'CSE', 'ECE', 'MECH', 'CIVIL', 'EEE', 'IT',
    'free study materials', 'college resources', 'exam preparation'
  ],
  authors: [{ name: 'SaveethaBase Team' }],
  creator: 'SaveethaBase',
  publisher: 'SaveethaBase',
  metadataBase: new URL('https://saveethabase.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://saveethabase.app',
    siteName: 'SaveethaBase',
    title: 'SaveethaBase - Academic Resource Platform for Saveetha Engineering College',
    description: 'Free academic resource sharing platform. Access CIA papers, PYQs, study materials, lab records and more. Built by students, for students.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaveethaBase - Academic Resource Platform',
    description: 'Free academic resource sharing platform for Saveetha Engineering College students.',
  },
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
  verification: {
    // Add your Google Search Console verification code here after setting it up
    // google: 'your-verification-code',
  },
}

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SaveethaBase',
    url: 'https://saveethabase.app',
    description: 'Free academic resource sharing platform for Saveetha Engineering College students.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://saveethabase.app/?search={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SaveethaBase',
    url: 'https://saveethabase.app',
    description: 'Academic resource sharing platform for Saveetha Engineering College.',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'codez.ai.contact@gmail.com',
      contactType: 'customer support',
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
            crossOrigin="anonymous"
          ></script>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}