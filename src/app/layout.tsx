import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

// Import fonts from Google Fonts
import { Inter } from "next/font/google";

// Mooli font is loaded via CSS in globals.css
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Evolve Link - Digital Agency",
  description: "Building brands that connect. Growing businesses that last. Evolve Link is a modern digital agency focused on scaling trust.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased font-mooli`}
      >
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
