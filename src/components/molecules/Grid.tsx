import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Grid 网格布局组件
 * 
 * 提供灵活的网格布局系统，支持响应式列数调整
 * 
 * @param children - 子组件内容
 * @param className - 额外的CSS类名
 * @param cols - 列数配置
 * @param gap - 网格间距
 * @param align - 对齐方式
 */
interface GridProps {
  children: React.ReactNode;
  className?: string;
  cols?: {
    default?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  align?: 'start' | 'center' | 'end' | 'stretch';
}

const gapClasses = {
  none: '',
  xs: 'gap-1',
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
  xl: 'gap-8'
};

const alignClasses = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch'
};

const getGridCols = (cols: GridProps['cols']) => {
  if (!cols) return 'grid-cols-1';
  
  const classes = [];
  
  if (cols.default) {
    classes.push(`grid-cols-${cols.default}`);
  }
  if (cols.sm) {
    classes.push(`sm:grid-cols-${cols.sm}`);
  }
  if (cols.md) {
    classes.push(`md:grid-cols-${cols.md}`);
  }
  if (cols.lg) {
    classes.push(`lg:grid-cols-${cols.lg}`);
  }
  if (cols.xl) {
    classes.push(`xl:grid-cols-${cols.xl}`);
  }
  
  return classes.length > 0 ? classes.join(' ') : 'grid-cols-1';
};

export function Grid({ 
  children, 
  className,
  cols = { default: 1, sm: 2, md: 3 },
  gap = 'md',
  align = 'stretch'
}: GridProps) {
  return (
    <div 
      className={cn(
        'grid',
        getGridCols(cols),
        gapClasses[gap],
        alignClasses[align],
        className
      )}
    >
      {children}
    </div>
  );
}

export default Grid;