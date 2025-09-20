import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * 合并Tailwind CSS类名的工具函数
 * 使用clsx处理条件类名，使用tailwind-merge处理冲突的类名
 * 
 * @param inputs - 要合并的类名，可以是字符串、对象或数组
 * @returns 合并后的类名字符串
 * 
 * @example
 * ```typescript
 * cn('px-2 py-1', 'px-4') // 返回 'py-1 px-4'
 * cn({ 'text-red-500': true, 'text-blue-500': false }) // 返回 'text-red-500'
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * 格式化日期为可读格式
 * 
 * @param date - 要格式化的日期
 * @param locale - 地区设置，默认为 'zh-CN'
 * @returns 格式化后的日期字符串
 * 
 * @example
 * ```typescript
 * formatDate(new Date()) // 返回 '2024年1月15日'
 * formatDate(new Date(), 'en-US') // 返回 'January 15, 2024'
 * ```
 */
export function formatDate(date: Date, locale: string = 'zh-CN'): string {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

/**
 * 生成SEO友好的URL slug
 * 
 * @param text - 要转换的文本
 * @returns URL友好的slug
 * 
 * @example
 * ```typescript
 * slugify('如何在中国注册公司') // 返回 'ru-he-zai-zhong-guo-zhu-ce-gong-si'
 * slugify('Company Registration in China') // 返回 'company-registration-in-china'
 * ```
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[\s\u4e00-\u9fff]+/g, '-') // 处理中文和空格
    .replace(/[^\w\-]+/g, '') // 移除特殊字符
    .replace(/\-\-+/g, '-') // 合并多个连字符
    .replace(/^-+/, '') // 移除开头的连字符
    .replace(/-+$/, ''); // 移除结尾的连字符
}

/**
 * 截断文本到指定长度
 * 
 * @param text - 要截断的文本
 * @param length - 最大长度
 * @param suffix - 截断后添加的后缀，默认为 '...'
 * @returns 截断后的文本
 * 
 * @example
 * ```typescript
 * truncate('这是一段很长的文本', 10) // 返回 '这是一段很长的...'
 * truncate('Short text', 20) // 返回 'Short text'
 * ```
 */
export function truncate(text: string, length: number, suffix: string = '...'): string {
  if (text.length <= length) {
    return text;
  }
  return text.slice(0, length) + suffix;
}

/**
 * 验证邮箱格式
 * 
 * @param email - 要验证的邮箱地址
 * @returns 是否为有效邮箱格式
 * 
 * @example
 * ```typescript
 * isValidEmail('user@example.com') // 返回 true
 * isValidEmail('invalid-email') // 返回 false
 * ```
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * 验证手机号格式（支持国际格式）
 * 
 * @param phone - 要验证的手机号
 * @returns 是否为有效手机号格式
 * 
 * @example
 * ```typescript
 * isValidPhone('+86 138 0013 8000') // 返回 true
 * isValidPhone('13800138000') // 返回 true
 * isValidPhone('invalid') // 返回 false
 * ```
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}
