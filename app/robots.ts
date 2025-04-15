import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/*.json$',  // 阻止爬取 JSON 文件
          '/*?*',      // 阻止爬取带查询参数的 URL
          '/private*'  // 阻止爬取私有内容
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 1
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 1
      },
      {
        userAgent: 'Baiduspider',
        allow: '/',
        crawlDelay: 1
      }
    ],
    sitemap: 'https://cloudwhitenoise.space/sitemap.xml',
    host: 'https://cloudwhitenoise.space'
  };
} 