import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://cloudwhitenoise.space'),
  title: 'Cloud White Noise - Ambient Sounds for Focus & Relaxation',
  description: 'Free online white noise player featuring natural, urban, and meditation sounds to help you focus, relax, and sleep better.',
  keywords: 'white noise, ambient sounds, focus, relaxation, sleep aid, productivity, meditation sounds',
  authors: [{ name: 'Cloud White Noise Team' }],
  creator: 'Cloud White Noise Team',
  publisher: 'Cloud White Noise',
  openGraph: {
    title: 'Cloud White Noise - Ambient Sounds for Focus & Relaxation',
    description: 'Free online white noise player for better focus, relaxation and sleep.',
    url: 'https://cloudwhitenoise.space',
    siteName: 'Cloud White Noise',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Cloud White Noise - Ambient Sounds for Focus & Relaxation'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cloud White Noise',
    description: 'Free online white noise player for better focus, relaxation and sleep.',
    images: ['/twitter-image.png']
  },
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Cloud White Noise",
    "description": "Free online white noise player featuring natural, urban, and meditation sounds to help you focus, relax, and sleep better.",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Natural Sounds",
      "White Noise",
      "Meditation Music",
      "Sound Mixer",
      "Timer",
      "Scene Presets"
    ]
  },
  verification: {
    google: 'your-google-site-verification-code', // 这里需要替换成你的验证码
  }
}; 