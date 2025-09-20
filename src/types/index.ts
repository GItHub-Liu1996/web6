/**
 * 博客文章类型定义
 */
export interface BlogPost {
  /** 文章唯一标识符 */
  id: string;
  /** 文章标题 */
  title: string;
  /** 文章摘要 */
  excerpt: string;
  /** 文章内容（Markdown格式） */
  content: string;
  /** 文章封面图片URL */
  coverImage?: string;
  /** 文章发布日期 */
  publishedAt: string;
  /** 文章最后更新时间 */
  updatedAt?: string;
  /** 文章作者 */
  author: string;
  /** 文章标签 */
  tags: string[];
  /** 文章分类 */
  category: string;
  /** 文章阅读时间（分钟） */
  readingTime: number;
  /** 文章SEO元数据 */
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  /** 文章状态 */
  status: 'draft' | 'published' | 'archived';
}

/**
 * 服务类型定义
 */
export interface Service {
  /** 服务唯一标识符 */
  id: string;
  /** 服务名称 */
  name: string;
  /** 服务描述 */
  description: string;
  /** 服务详细内容 */
  content: string;
  /** 服务价格 */
  price: {
    /** 基础价格 */
    base: number;
    /** 货币单位 */
    currency: string;
    /** 价格说明 */
    note?: string;
  };
  /** 服务时长（天） */
  duration: number;
  /** 服务特点 */
  features: string[];
  /** 服务流程 */
  process: string[];
  /** 服务图标 */
  icon?: string;
  /** 服务状态 */
  status: 'active' | 'inactive';
}

/**
 * 联系表单数据类型
 */
export interface ContactFormData {
  /** 姓名 */
  name: string;
  /** 邮箱 */
  email: string;
  /** 手机号 */
  phone?: string;
  /** 公司名称 */
  company?: string;
  /** 国家 */
  country: string;
  /** 服务类型 */
  serviceType: string;
  /** 消息内容 */
  message: string;
  /** 预算范围 */
  budget?: string;
  /** 期望时间 */
  timeline?: string;
}

/**
 * 用户反馈类型
 */
export interface Testimonial {
  /** 反馈唯一标识符 */
  id: string;
  /** 客户姓名 */
  name: string;
  /** 客户公司 */
  company: string;
  /** 客户职位 */
  position?: string;
  /** 客户头像 */
  avatar?: string;
  /** 反馈内容 */
  content: string;
  /** 评分（1-5星） */
  rating: number;
  /** 服务类型 */
  serviceType: string;
  /** 反馈日期 */
  date: string;
  /** 是否显示 */
  isVisible: boolean;
}

/**
 * 常见问题类型
 */
export interface FAQ {
  /** 问题唯一标识符 */
  id: string;
  /** 问题标题 */
  question: string;
  /** 问题答案 */
  answer: string;
  /** 问题分类 */
  category: string;
  /** 问题排序 */
  order: number;
  /** 是否显示 */
  isVisible: boolean;
}

/**
 * 网站配置类型
 */
export interface SiteConfig {
  /** 网站名称 */
  name: string;
  /** 网站描述 */
  description: string;
  /** 网站URL */
  url: string;
  /** 网站logo */
  logo: string;
  /** 网站图标 */
  favicon: string;
  /** 联系信息 */
  contact: {
    email: string;
    phone: string;
    address: string;
    wechat?: string;
  };
  /** 社交媒体链接 */
  social: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    youtube?: string;
  };
  /** SEO配置 */
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
  };
}

/**
 * 多语言支持类型
 */
export interface Locale {
  /** 语言代码 */
  code: string;
  /** 语言名称 */
  name: string;
  /** 语言标志 */
  flag: string;
  /** 是否为默认语言 */
  isDefault: boolean;
}

/**
 * API响应类型
 */
export interface ApiResponse<T = any> {
  /** 响应状态 */
  success: boolean;
  /** 响应数据 */
  data?: T;
  /** 错误信息 */
  error?: string;
  /** 响应消息 */
  message?: string;
}

/**
 * 分页参数类型
 */
export interface PaginationParams {
  /** 页码 */
  page: number;
  /** 每页数量 */
  limit: number;
  /** 排序字段 */
  sortBy?: string;
  /** 排序方向 */
  sortOrder?: 'asc' | 'desc';
}

/**
 * 分页响应类型
 */
export interface PaginatedResponse<T> {
  /** 数据列表 */
  data: T[];
  /** 分页信息 */
  pagination: {
    /** 当前页码 */
    page: number;
    /** 每页数量 */
    limit: number;
    /** 总数量 */
    total: number;
    /** 总页数 */
    totalPages: number;
    /** 是否有下一页 */
    hasNext: boolean;
    /** 是否有上一页 */
    hasPrev: boolean;
  };
}
