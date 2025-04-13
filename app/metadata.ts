export const siteMetadata = {
  title: 'Cloud White Noise - 专注白噪音',
  description: '免费的在线白噪音播放器，帮助您专注工作、学习和放松。包含自然、城市、冥想等多种环境音效。',
  keywords: '白噪音,环境音,专注力,放松,睡眠,工作效率,学习辅助',
  authors: [{ name: 'Cloud White Noise Team' }],
  creator: 'Cloud White Noise Team',
  publisher: 'Cloud White Noise',
  openGraph: {
    images: [{
      url: '/images/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Cloud White Noise - 专注白噪音'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cloud White Noise - 专注白噪音',
    description: '免费的在线白噪音播放器，帮助您专注工作、学习和放松。',
    images: ['/images/twitter-image.png']
  },
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Cloud White Noise",
    "description": "免费的在线白噪音播放器，帮助您专注工作、学习和放松。包含自然、城市、冥想等多种环境音效。",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "CNY"
    },
    "featureList": [
      "自然音效",
      "白噪音",
      "冥想音乐",
      "混音功能",
      "定时器",
      "场景预设"
    ]
  }
}; 