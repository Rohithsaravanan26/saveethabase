import './globals.css'
import Script from 'next/script'

export const metadata = {
  title: 'SaveethaBase - Academic Resource Platform',
  description: 'Access CIA papers, study materials, lab records, and more',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || ''}`}
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>{children}</body>
    </html>
  )
}