
import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Providers } from './providers';
import { branding } from '@/lib/branding';

export const metadata: Metadata = {
  title: 'VWEB.DEV',
  description: 'Futuristic Software House',
  icons: {
    icon: branding.faviconUrl || '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@500;700&family=Roboto:wght@400;500;700&family=Open+Sans:wght@400;500;700&family=Lato:wght@400;700&family=Montserrat:wght@400;500;700&family=Poppins:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body antialiased", "min-h-screen bg-background")}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
