import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Evolve Link - scaling trust.",
  description: "Building brands that connect. Growing businesses that last. Strategic brand building and digital marketing services.",
  keywords: ["digital agency", "brand strategy", "marketing", "Kenya", "events management", "influencer marketing"],
  authors: [{ name: "Evolve Link" }],
  creator: "Evolve Link",
  publisher: "Evolve Link",
  openGraph: {
    title: "Evolve Link - scaling trust.",
    description: "Building brands that connect. Growing businesses that last.",
    url: "https://evolve-link.com",
    siteName: "Evolve Link",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Evolve Link - Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evolve Link - scaling trust.",
    description: "Building brands that connect. Growing businesses that last.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('evolve-link-theme') || 'light';
                  var html = document.documentElement;
                  
                  // Completely remove all theme-related classes
                  html.className = '';
                  
                  // Add our theme class
                  html.classList.add(theme);
                  
                  // Force color-scheme immediately
                  html.style.colorScheme = theme;
                  html.style.setProperty('color-scheme', theme, 'important');
                  
                  // Store theme if not already set
                  localStorage.setItem('evolve-link-theme', theme);
                  
                  // Add multiple override attributes
                  html.setAttribute('data-theme', theme);
                  html.setAttribute('data-force-theme', theme);
                  html.setAttribute('data-theme-override', 'true');
                  
                  // Inject aggressive override styles immediately
                  var style = document.createElement('style');
                  style.id = 'force-theme-immediate';
                  style.textContent = '*{color-scheme:' + theme + '!important}html{color-scheme:' + theme + '!important}@media (prefers-color-scheme:dark){html:not(.dark){color-scheme:light!important}}@media (prefers-color-scheme:light){html.dark{color-scheme:dark!important}}';
                  document.head.appendChild(style);
                } catch (e) {
                  console.warn('Theme initialization failed:', e);
                }
              })();
            `,
          }}
        />
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

                  html.style.setProperty('color-scheme', theme, 'important');
                  
                  // Store theme if not already set
                  localStorage.setItem('evolve-link-theme', theme);
                  
                  // Add multiple override attributes
                  html.setAttribute('data-theme', theme);
                  html.setAttribute('data-force-theme', theme);
                  html.setAttribute('data-theme-override', 'true');
                  
                  // Inject aggressive override styles immediately
                  var style = document.createElement('style');
                  style.id = 'force-theme-immediate';
                  style.textContent = '*{color-scheme:' + theme + '!important}html{color-scheme:' + theme + '!important}@media (prefers-color-scheme:dark){html:not(.dark){color-scheme:light!important}}@media (prefers-color-scheme:light){html.dark{color-scheme:dark!important}}';
                  document.head.appendChild(style);
                } catch (e) {
                  console.warn('Theme initialization failed:', e);
                }
              })();
            `,
          }}
        />
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
