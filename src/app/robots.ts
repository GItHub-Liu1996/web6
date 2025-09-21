/**
 * Robots.txt 生成
 * 
 * 根据第八章SEO核心战略要求，生成robots.txt文件
 * 控制搜索引擎爬虫的访问行为
 * 
 * @example
 * 访问 /robots.txt 将生成robots.txt文件
 */

import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // TODO: 实现robots.txt生成
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/_next/',
          '/private/',
          // TODO: 添加其他需要禁止访问的路径
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/private/',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/private/',
        ],
      },
    ],
    sitemap: 'https://china-company-registration.com/sitemap.xml',
    host: 'https://china-company-registration.com',
  };
}
