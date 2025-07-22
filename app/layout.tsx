import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Crimson_Pro } from 'next/font/google';
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const crimson = Crimson_Pro({ 
  subsets: ['latin'], 
  variable: '--font-crimson' 
});


const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ['latin'],
  display: 'swap',
});

// app/layout.tsx
export const metadata: Metadata = {
  title: {
    default: 'Winston & Co. | Canadian Law Firm',
    template: '%s | Winston & Co.',
  },
  description:
    'Winston & Co. is a national law firm in Canada specializing in employment law and comprehensive legal services for businesses and individuals.',
  keywords: [
    'Winston and Co',
    'Winston & Co',
    'Winston & Co Law Firm',
    'Winston & Co Law Firm in Canada',
    'Law Firm in Canada',
    'Canadian Law Firm',
    'Employment Law Canada',
    'Business lawyer Canada',
    'Legal Services',
    'Toronto Law firm',
    'Law Firm Canada',
    'Corporate Legal Advice',
    'Litigation Services',
    'Legal Consultation',
    'Lawyers in Canada',
    'Legal Representation',
    'Corporate Law',
    'Employment Rights',
    'Workplace Compliance',
    'Legal Expertise',
    'Business Law',
    'Legal Solutions',
    'Law Firm Services',
    'Legal Counsel',

  ],
  metadataBase: new URL('https://winstoncofirm.com'),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon-16x16.png",
      },
    ],
  },
  openGraph: {
    title: 'Winston & Co. | Canadian Law Firm',
    description:
      'Winston & Co. offers expert legal services across Canada, specializing in employment law and corporate legal counsel.',
    url: 'https://winstoncofirm.com',
    siteName: 'Winston & Co.',
    images: [
      {
        url: '/images/og-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Winston & Co. Law Firm',
      },
    ],
    type: 'website',
    locale: 'en_CA',
  },
  authors: [
    { name: "Winston & Co.", url: "https://www.winstoncofirm.com" },
  ],
  creator: "Winston & Co.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${crimson.variable} ${montserrat.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
