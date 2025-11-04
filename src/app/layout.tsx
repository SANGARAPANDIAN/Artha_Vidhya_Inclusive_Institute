import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageWrapper from '@/components/PageWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: "Artha Vidhya Inclusive Institute for Skill Development and Sustainable Livelihoods",
    template: "%s - Artha Vidhya Inclusive Institute"
  },
  description: "Inclusive skill-based training institute ensuring independent, sustained living for physically and mentally disabled students. Offering comprehensive skill development programs.",
  keywords: ["inclusive education", "skill development", "disability training", "sustainable livelihoods", "vocational training"],
  authors: [{ name: "Artha Vidhya Inclusive Institute" }],
  creator: "Artha Vidhya Inclusive Institute",
  publisher: "Artha Vidhya Inclusive Institute",
  metadataBase: new URL('https://arthavidhya.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://arthavidhya.org',
    siteName: 'Artha Vidhya Inclusive Institute',
    title: 'Artha Vidhya Inclusive Institute for Skill Development and Sustainable Livelihoods',
    description: 'Inclusive skill-based training institute ensuring independent, sustained living for physically and mentally disabled students.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Artha Vidhya Inclusive Institute - Empowering Through Education',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Artha Vidhya Inclusive Institute',
    description: 'Inclusive skill-based training institute ensuring independent, sustained living for physically and mentally disabled students.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: 'verification_token_here',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-gradient-to-br from-gray-50 via-white to-primary-50/30 min-h-screen flex flex-col relative overflow-x-hidden`}>
        <div className="fixed top-0 left-0 right-0 z-[9999]">
          <Header />
        </div>
        <main className="flex-1 relative z-10">
          <PageWrapper>
            {children}
          </PageWrapper>
        </main>
        <div className="relative z-20">
          <Footer />
        </div>
      </body>
    </html>
  );
}
