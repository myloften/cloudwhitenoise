"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { useState } from 'react';
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isDarkMode, setIsDarkMode] = useState(true);

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
      <body className={`${inter.className} ${isDarkMode ? 'dark' : 'light'}`}>
        <nav className="fixed top-0 left-0 right-0 z-50 bg-opacity-80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <a href="/" className="text-2xl font-bold text-[var(--mint)]">
                  Cloud White Noise
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  {isDarkMode ? '🌞' : '🌜'}
                </button>
              </div>
            </div>
          </div>
        </nav>

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
