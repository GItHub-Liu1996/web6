/**
 * 容器组件
 * 
 * 提供响应式容器布局，确保内容在不同屏幕尺寸下的最佳显示
 * 
 * @example
 * ```tsx
 * <Container size="lg">
 *   <h1>页面标题</h1>
 * </Container>
 * ```
 */

import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  /**
   * 容器尺寸
   * @default 'lg'
   */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  
  /**
   * 容器内容
   */
  children: React.ReactNode;
  
  /**
   * 自定义CSS类名
   */
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ 
  size = 'lg',
  children,
  className 
}) => {
  const baseClasses = 'mx-auto px-4 sm:px-6 lg:px-8';
  
  const sizeClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-7xl',
    xl: 'max-w-8xl',
    full: 'max-w-none',
  };

  return (
    <div
      className={cn(
        baseClasses,
        sizeClasses[size],
        className
      )}
    >
      {children}
    </div>
  );
};
