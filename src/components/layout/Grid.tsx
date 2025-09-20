/**
 * 网格布局组件
 * 
 * 提供响应式网格布局，支持不同列数和间距
 * 
 * @example
 * ```tsx
 * <Grid cols={3} gap="md">
 *   <div>项目1</div>
 *   <div>项目2</div>
 *   <div>项目3</div>
 * </Grid>
 * ```
 */

import React from 'react';
import { cn } from '@/lib/utils';

interface GridProps {
  /**
   * 网格列数
   * @default 3
   */
  cols?: 1 | 2 | 3 | 4 | 5 | 6;
  
  /**
   * 网格间距
   * @default 'md'
   */
  gap?: 'sm' | 'md' | 'lg';
  
  /**
   * 网格内容
   */
  children: React.ReactNode;
  
  /**
   * 自定义CSS类名
   */
  className?: string;
}

export const Grid: React.FC<GridProps> = ({ 
  cols = 3,
  gap = 'md',
  children,
  className 
}) => {
  const baseClasses = 'grid';
  
  const colsClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
    6: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6',
  };
  
  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
  };

  return (
    <div
      className={cn(
        baseClasses,
        colsClasses[cols],
        gapClasses[gap],
        className
      )}
    >
      {children}
    </div>
  );
};
