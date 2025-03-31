import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: 'Corlican Pet Motel - Pet Boarding in Wexford',
  description: 'Premium pet boarding services in Wexford. Providing a safe, comfortable, and loving environment for your pets while you are away.',
  keywords: 'pet motel, pet boarding, dog boarding, cat boarding, pet hotel, Wexford, Killurin, Corlican, Enniscorthy, Wexford, Ireland, dog daycare, cat daycare, pet care, pet sitting',
  metadataBase: new URL('https://dave-146.github.io/corlican_pet_motel_typescript'),
  openGraph: {
    title: 'Corlican Pet Motel - Pet Boarding in Wexford',
    description: 'Premium pet boarding services in Wexford',
    images: ['/images/og-image.jpg'],
    type: 'website',
    locale: 'en_IE',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} bg-white min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 