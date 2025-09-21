/**
 * 结构化数据工具函数
 * 
 * 根据第八章SEO核心战略要求，生成符合Schema.org规范的JSON-LD结构化数据
 * 支持博客文章、服务、FAQ等内容类型
 * 
 * @example
 * ```typescript
 * const blogStructuredData = generateBlogStructuredData({
 *   title: "文章标题",
 *   description: "文章描述",
 *   author: "作者",
 *   datePublished: "2025-01-21",
 *   url: "https://example.com/blog/article"
 * });
 * ```
 */

export interface BlogStructuredData {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  url: string;
  image?: string;
  category?: string;
}

export interface ServiceStructuredData {
  name: string;
  description: string;
  provider: string;
  url: string;
  price?: string;
  serviceType?: string;
}

export interface FAQStructuredData {
  question: string;
  answer: string;
}

/**
 * 生成博客文章的结构化数据
 * @param data - 博客文章数据
 * @returns JSON-LD格式的结构化数据
 */
export function generateBlogStructuredData(data: BlogStructuredData): object {
  // TODO: 实现博客文章结构化数据生成
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: data.title,
    description: data.description,
    author: {
      "@type": "Person",
      name: data.author,
    },
    datePublished: data.datePublished,
    dateModified: data.dateModified || data.datePublished,
    url: data.url,
    image: data.image,
    articleSection: data.category,
    publisher: {
      "@type": "Organization",
      name: "Go China Advisors",
      url: "https://china-company-registration.com",
    },
  };
}

/**
 * 生成服务的结构化数据
 * @param data - 服务数据
 * @returns JSON-LD格式的结构化数据
 */
export function generateServiceStructuredData(data: ServiceStructuredData): object {
  // TODO: 实现服务结构化数据生成
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.name,
    description: data.description,
    provider: {
      "@type": "Organization",
      name: data.provider,
    },
    url: data.url,
    offers: data.price ? {
      "@type": "Offer",
      price: data.price,
      priceCurrency: "CNY",
    } : undefined,
    serviceType: data.serviceType,
  };
}

/**
 * 生成FAQ的结构化数据
 * @param faqs - FAQ数据数组
 * @returns JSON-LD格式的结构化数据
 */
export function generateFAQStructuredData(faqs: FAQStructuredData[]): object {
  // TODO: 实现FAQ结构化数据生成
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * 生成组织的结构化数据
 * @returns JSON-LD格式的组织数据
 */
export function generateOrganizationStructuredData(): object {
  // TODO: 实现组织结构化数据生成
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Go China Advisors",
    url: "https://china-company-registration.com",
    logo: "https://china-company-registration.com/logo.png",
    description: "为外国用户在中国注册和运营公司提供一站式专业服务",
    address: {
      "@type": "PostalAddress",
      addressCountry: "CN",
      addressLocality: "上海",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+86-400-123-4567",
      contactType: "customer service",
      email: "info@china-company-registration.com",
    },
    sameAs: [
      // TODO: 添加社交媒体链接
    ],
  };
}
