/**
 * 堆叠布局组件
 * 
 * 提供垂直或水平的堆叠布局，支持不同间距和对齐方式
 * 
 * @example
 * ```tsx
 * <Stack direction="vertical" spacing="md" align="center">
 *   <div>项目1</div>
 *   <div>项目2</div>
 * </Stack>
 * ```
 */

import React from 'react';
import { cn } from '@/lib/utils';

interface StackProps {
  /**
   * 堆叠方向
   * @default 'vertical'
   */
  direction?: 'horizontal' | 'vertical';
  
  /**
   * 间距大小
   * @default 'md'
   */
  spacing?: 'sm' | 'md' | 'lg';
  
  /**
   * 对齐方式
   * @default 'start'
   */
  align?: 'start' | 'center' | 'end' | 'stretch';
  
  /**
   * 堆叠内容
   */
  children: React.ReactNode;
  
  /**
   * 自定义CSS类名
   */
  className?: string;
}

export const Stack: React.FC<StackProps> = ({ 
  direction = 'vertical',
  spacing = 'md',
  align = 'start',
  children,
  className 
}) => {
  const baseClasses = 'flex';
  
  const directionClasses = {
    horizontal: 'flex-row',
    vertical: 'flex-col',
  };
  
  const spacingClasses = {
    sm: direction === 'horizontal' ? 'space-x-2' : 'space-y-2',
    md: direction === 'horizontal' ? 'space-x-4' : 'space-y-4',
    lg: direction === 'horizontal' ? 'space-x-6' : 'space-y-6',
  };
  
  const alignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
  };

  return (
    <div
      className={cn(
        baseClasses,
        directionClasses[direction],
        spacingClasses[spacing],
        alignClasses[align],
        className
      )}
    >
      {children}
    </div>
  );
};
