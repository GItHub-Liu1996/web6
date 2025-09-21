/**
 * 动态站点地图生成
 * 
 * 根据第八章SEO核心战略要求，为所有公开页面动态生成sitemap.xml
 * 支持多语言版本的站点地图生成
 * 
 * @example
 * 访问 /sitemap.xml 将生成完整的站点地图
 */

import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // TODO: 实现动态站点地图生成
  return [
    {
      url: 'https://china-company-registration.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://china-company-registration.com/solutions/startup',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://china-company-registration.com/solutions/operation',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://china-company-registration.com/services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://china-company-registration.com/blog',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: 'https://china-company-registration.com/case-studies',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: 'https://china-company-registration.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://china-company-registration.com/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // TODO: 添加多语言版本 (en, zh, es, de, fr, ja, pt, ru, ar, ko)
    // TODO: 动态添加博客文章页面
    // TODO: 动态添加案例研究页面
    // TODO: 动态添加服务详情页面
    // TODO: 动态添加行业解决方案页面
  ];
}
