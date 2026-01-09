import './globals.css'
import './mobile.css'
import Script from 'next/script'
import { Outfit, Inter } from 'next/font/google'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-heading' })
const inter = Inter({ subsets: ['latin'], variable: '--font-body' })

export const metadata = {
  title: 'SaveethaBase - Academic Resource Platform',
  description: 'Access CIA papers, study materials, lab records, and more',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: '#3b82f6',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        {process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
            crossOrigin="anonymous"
          ></script>
        )}
      </head>
      <body>{children}</body>
    </html>
  )
}