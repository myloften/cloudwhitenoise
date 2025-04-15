"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';
import Header from './components/Header';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Cloud White Noise - Ambient Sounds for Focus & Relaxation',
  description: 'Free online white noise player featuring natural, urban, and meditation sounds to help you focus, relax, and sleep better.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-R9EZBW4TDR`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-R9EZBW4TDR');
            `
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <div className="pt-16">
          <main className="relative z-10">
            {children}
          </main>
          <div className="cityscape"></div>
        </div>
      </body>
    </html>
  );
}
