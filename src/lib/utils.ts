/**
 * 通用工具函数
 * 
 * 最基础结构，等待详细设计
 */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * 合并CSS类名
 * 
 * @param inputs - CSS类名数组
 * @returns 合并后的类名字符串
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}