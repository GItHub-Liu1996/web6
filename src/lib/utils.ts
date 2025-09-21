import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * 通用工具函数
 * 
 * 提供常用的工具函数，包括类名合并等
 */

/**
 * 合并类名的工具函数
 * 结合 clsx 和 tailwind-merge 的功能
 * 
 * @param inputs - 类名输入
 * @returns 合并后的类名字符串
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// TODO: 其他工具函数
export const utils = {
  cn,
};