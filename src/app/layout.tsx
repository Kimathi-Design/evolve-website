import type { Metadata } from 'next';
import ClientLayout from '@/components/ClientLayout';

export const metadata: Metadata = {
  title: {
    default: 'Evolve Link - Digital Agency',
    template: '%s | Evolve Link'
  },
  description: 'Transform your brand with our comprehensive digital marketing solutions. From strategy to execution, we help businesses evolve and scale trust in the digital landscape.',
  keywords: 'digital marketing, brand strategy, web development, social media marketing, SEO, content marketing, digital transformation',
  authors: [{ name: 'Evolve Link Team' }],
  creator: 'Evolve Link',
  publisher: 'Evolve Link',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://evolve-link-agency.surge.sh'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://evolve-link-agency.surge.sh',
    title: 'Evolve Link - Digital Agency',
    description: 'Transform your brand with our comprehensive digital marketing solutions.',
    siteName: 'Evolve Link',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evolve Link - Digital Agency',
    description: 'Transform your brand with our comprehensive digital marketing solutions.',
    creator: '@evolvelink',
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
    google: 'your-google-site-verification',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#4DA18D" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Evolve Link" />
      </head>
      <body className="font-mooli antialiased">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}