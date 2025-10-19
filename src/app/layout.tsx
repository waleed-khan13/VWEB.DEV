

import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Providers } from './providers';
import { branding } from '@/lib/branding';
import { Inter, Space_Grotesk } from 'next/font/google';

// Optimized font loading
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vweb.dev';
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'VWEB.DEV';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} - Futuristic Software House`,
    template: `%s | ${siteName}`,
  },
  description: 'Professional software development services. We build innovative web and mobile applications with cutting-edge technologies.',
  keywords: [
    'software development',
    'web development',
    'mobile apps',
    'nextjs',
    'react',
    'typescript',
    'software house',
    'custom software',
    'UI/UX design',
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: siteName,
    title: `${siteName} - Futuristic Software House`,
    description: 'Professional software development services. We build innovative web and mobile applications.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${siteName} - Futuristic Software House`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} - Futuristic Software House`,
    description: 'Professional software development services. We build innovative web and mobile applications.',
    images: ['/twitter-image.png'],
    creator: '@vwebdev', // Add your Twitter handle
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
  icons: {
    icon: branding.faviconUrl || '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("dark", inter.variable, spaceGrotesk.variable)} suppressHydrationWarning>
      <body className={cn("font-inter antialiased", "min-h-screen bg-background")}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
