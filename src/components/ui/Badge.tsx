/**
 * 徽章组件
 * 
 * 用于显示标签、状态或分类信息的小型组件
 * 
 * @example
 * ```tsx
 * <Badge variant="default">默认</Badge>
 * <Badge variant="secondary">次要</Badge>
 * <Badge variant="destructive">错误</Badge>
 * <Badge variant="outline">轮廓</Badge>
 * ```
 */

import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  /**
   * 徽章变体样式
   * @default 'default'
   */
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
  
  /**
   * 徽章尺寸
   * @default 'default'
   */
  size?: 'sm' | 'default' | 'lg';
  
  /**
   * 徽章内容
   */
  children: React.ReactNode;
  
  /**
   * 自定义CSS类名
   */
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ 
  variant = 'default',
  size = 'default',
  children,
  className 
}) => {
  const baseClasses = 'inline-flex items-center rounded-full font-medium';
  
  const variantClasses = {
    default: 'bg-blue-100 text-blue-800',
    secondary: 'bg-gray-100 text-gray-800',
    destructive: 'bg-red-100 text-red-800',
    outline: 'border border-gray-300 text-gray-700 bg-white',
  };
  
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    default: 'px-2.5 py-0.5 text-sm',
    lg: 'px-3 py-1 text-base',
  };

  return (
    <span
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </span>
  );
};
