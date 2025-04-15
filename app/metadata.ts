import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cloud White Noise - Ambient Sounds for Focus & Relaxation',
  description: 'Free online white noise player featuring natural, urban, and meditation sounds to help you focus, relax, and sleep better.',
  keywords: 'white noise, ambient sounds, relaxation, meditation, sleep sounds, focus music, nature sounds, urban sounds, background noise, sleep aid',
  authors: [{ name: 'Cloud White Noise Team' }],
  creator: 'Cloud White Noise',
  publisher: 'Cloud White Noise',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Cloud White Noise - Ambient Sounds for Focus & Relaxation',
    description: 'Free online white noise player featuring natural, urban, and meditation sounds to help you focus, relax, and sleep better.',
    type: 'website',
    locale: 'en_US',
    url: 'https://cloudwhitenoise.space',
    siteName: 'Cloud White Noise',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cloud White Noise - Your Personal Ambient Sound Player',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cloud White Noise - Ambient Sounds for Focus & Relaxation',
    description: 'Free online white noise player featuring natural, urban, and meditation sounds to help you focus, relax, and sleep better.',
    images: ['/og-image.jpg'],
    creator: '@cloudwhitenoise',
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
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#1a1a1a',
  alternates: {
    canonical: 'https://cloudwhitenoise.space',
  },
}; 