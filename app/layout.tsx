import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Дамелина ЕООД | 3D принтинг и персонализирани рамки',
    template: '%s | Дамелина ЕООД',
  },
  description: 'Открийте 3D принтирани рамки за снимки, подаръци за Свети Валентин и GTA VI вдъхновени колекционерски дизайни от Дамелина ЕООД. Създадени с Bambu Lab и внимание към детайла.',
  keywords: ['3D принтирани рамки', 'GTA 6 подаръци', 'GTA VI колекция', 'подарък Свети Валентин', 'Bambu Lab', 'Дамелина ЕООД'],
  openGraph: {
    title: 'Дамелина ЕООД | От Vice City с любов',
    description: '3D принтирани рамки и колекционерски находки, създадени с грижа и внимание към детайла.',
    locale: 'bg_BG',
    type: 'website',
    siteName: 'Дамелина ЕООД',
  },
  alternates: { canonical: '/' },
  generator: 'Next.js',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#fff8f2',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
