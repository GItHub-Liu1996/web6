/**
 * 分割线组件
 * 
 * 用于分隔内容区域的简单分割线
 * 
 * @example
 * ```tsx
 * <Separator orientation="horizontal" />
 * <Separator orientation="vertical" />
 * ```
 */

import React from 'react';
import { cn } from '@/lib/utils';

interface SeparatorProps {
  /**
   * 分割线方向
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  
  /**
   * 自定义CSS类名
   */
  className?: string;
}

export const Separator: React.FC<SeparatorProps> = ({ 
  orientation = 'horizontal',
  className 
}) => {
  const baseClasses = 'bg-gray-200';
  
  const orientationClasses = {
    horizontal: 'h-px w-full',
    vertical: 'w-px h-full',
  };

  return (
    <div
      className={cn(
        baseClasses,
        orientationClasses[orientation],
        className
      )}
      role="separator"
    />
  );
};
