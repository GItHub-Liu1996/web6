import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Container 容器组件
 * 
 * 提供页面内容的最大宽度限制和居中布局，响应式容器
 * 
 * @param children - 子组件内容
 * @param className - 额外的CSS类名
 * @param maxWidth - 最大宽度变体
 * @param padding - 内边距变体
 */
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const maxWidthClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md', 
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  full: 'max-w-full'
};

const paddingClasses = {
  none: '',
  sm: 'px-4',
  md: 'px-6',
  lg: 'px-8'
};

export function Container({ 
  children, 
  className,
  maxWidth = 'xl',
  padding = 'md'
}: ContainerProps) {
  return (
    <div 
      className={cn(
        'mx-auto w-full',
        maxWidthClasses[maxWidth],
        paddingClasses[padding],
        className
      )}
    >
      {children}
    </div>
  );
}

export default Container;