/**
 * 网站常量配置
 */

/**
 * 支持的语言列表
 */
export const SUPPORTED_LOCALES = [
  { code: 'zh', name: '中文', flag: '🇨🇳', isDefault: true },
  { code: 'en', name: 'English', flag: '🇺🇸', isDefault: false },
] as const;

/**
 * 博客文章分类
 */
export const BLOG_CATEGORIES = [
  '公司注册',
  '税务服务',
  '法律咨询',
  '银行开户',
  '商标注册',
  '行业资讯',
  '政策解读',
  '成功案例',
] as const;

/**
 * 服务类型
 */
export const SERVICE_TYPES = [
  '公司注册',
  '银行开户',
  '税务登记',
  '商标注册',
  '法律咨询',
  '会计服务',
  '人力资源',
  '其他服务',
] as const;

/**
 * 国家列表（主要目标市场）
 */
export const COUNTRIES = [
  '美国',
  '英国',
  '德国',
  '法国',
  '日本',
  '韩国',
  '新加坡',
  '澳大利亚',
  '加拿大',
  '其他',
] as const;

/**
 * 预算范围选项
 */
export const BUDGET_RANGES = [
  '5,000 - 10,000 RMB',
  '10,000 - 20,000 RMB',
  '20,000 - 50,000 RMB',
  '50,000 - 100,000 RMB',
  '100,000+ RMB',
  '需要详细报价',
] as const;

/**
 * 时间线选项
 */
export const TIMELINE_OPTIONS = [
  '1个月内',
  '1-3个月',
  '3-6个月',
  '6个月以上',
  '不紧急',
] as const;

/**
 * 网站配置
 */
export const SITE_CONFIG = {
  name: '中国公司注册服务',
  description: '为外国用户在中国注册公司提供专业、高效的一站式服务',
  url: 'https://china-company-registration.com',
  logo: '/logo.png',
  favicon: '/favicon.ico',
  contact: {
    email: 'info@china-company-registration.com',
    phone: '+86 400-123-4567',
    address: '上海市浦东新区陆家嘴金融贸易区',
    wechat: 'ChinaCompanyReg',
  },
  social: {
    linkedin: 'https://linkedin.com/company/china-company-registration',
    twitter: 'https://twitter.com/chinacompanyreg',
    facebook: 'https://facebook.com/china.company.registration',
    youtube: 'https://youtube.com/channel/china-company-registration',
  },
  seo: {
    title: '中国公司注册服务 - 专业外国投资咨询',
    description: '为外国用户在中国注册公司提供专业服务，包括公司注册、银行开户、税务登记等一站式解决方案',
    keywords: [
      '中国公司注册',
      '外国投资',
      '公司设立',
      '银行开户',
      '税务登记',
      '商标注册',
      '法律咨询',
      '外商投资',
    ],
    ogImage: '/og-image.jpg',
  },
} as const;

/**
 * 分页配置
 */
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  MAX_PAGE_SIZE: 50,
  BLOG_POSTS_PER_PAGE: 6,
  SERVICES_PER_PAGE: 8,
} as const;

/**
 * 表单验证规则
 */
export const VALIDATION_RULES = {
  name: {
    minLength: 2,
    maxLength: 50,
    pattern: /^[a-zA-Z\u4e00-\u9fff\s]+$/,
  },
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  phone: {
    pattern: /^[\+]?[1-9][\d]{0,15}$/,
  },
  company: {
    minLength: 2,
    maxLength: 100,
  },
  message: {
    minLength: 10,
    maxLength: 1000,
  },
} as const;

/**
 * 文件上传配置
 */
export const UPLOAD_CONFIG = {
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/webp'],
  ALLOWED_DOCUMENT_TYPES: [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ],
} as const;

/**
 * 缓存配置
 */
export const CACHE_CONFIG = {
  STATIC_PAGES_TTL: 60 * 60 * 24, // 24小时
  BLOG_POSTS_TTL: 60 * 60 * 12, // 12小时
  API_RESPONSE_TTL: 60 * 60 * 6, // 6小时
} as const;

/**
 * 错误消息
 */
export const ERROR_MESSAGES = {
  REQUIRED_FIELD: '此字段为必填项',
  INVALID_EMAIL: '请输入有效的邮箱地址',
  INVALID_PHONE: '请输入有效的手机号码',
  MIN_LENGTH: (min: number) => `至少需要${min}个字符`,
  MAX_LENGTH: (max: number) => `最多允许${max}个字符`,
  FILE_TOO_LARGE: '文件大小超过限制',
  INVALID_FILE_TYPE: '不支持的文件类型',
  NETWORK_ERROR: '网络连接错误，请稍后重试',
  SERVER_ERROR: '服务器错误，请稍后重试',
} as const;

/**
 * 成功消息
 */
export const SUCCESS_MESSAGES = {
  FORM_SUBMITTED: '表单提交成功，我们会尽快与您联系',
  EMAIL_SENT: '邮件发送成功',
  DATA_SAVED: '数据保存成功',
  OPERATION_SUCCESS: '操作成功',
} as const;
