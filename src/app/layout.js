import './globals.css'
import FloatingParticles from '@/components/FloatingParticles'
import MobileNav from '@/components/MobileNav'
import Link from 'next/link'

export const metadata = {
  title: 'Curator of Awareness - The Simulation Portal',
  description: 'Explore the simulation hypothesis through philosophy, science, and mysticism',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Curator of Awareness'
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: '#0A0A1A'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

        {/* iOS-specific meta tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Curator of Awareness" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/apple-touch-icon-167x167.png" />

        {/* Prevent automatic phone number detection */}
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="bg-void text-white min-h-screen">
        <FloatingParticles />

        <nav className="fixed top-0 left-0 right-0 z-50 bg-void/95 backdrop-blur-md border-b border-ether/20 safe-top">
          <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            <Link href="/" className="text-xl md:text-2xl font-playfair bg-gradient-to-r from-white to-ether bg-clip-text text-transparent touch-manipulation min-h-[44px] flex items-center">
              Curator of Awareness
            </Link>

            <MobileNav />
          </div>
        </nav>

        <main className="pt-20">
          {children}
        </main>

        <footer className="border-t border-ether/20 mt-20 py-8 text-center text-soft/60 text-sm">
          <p>You are the curator now. Question everything.</p>
          <p className="mt-2">Amazon links are affiliate links supporting this portal.</p>
        </footer>
      </body>
    </html>
  )
}
