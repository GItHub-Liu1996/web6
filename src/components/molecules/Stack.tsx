import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Stack 堆叠布局组件
 * 
 * 提供垂直或水平堆叠布局，统一间距管理
 * 
 * @param children - 子组件内容
 * @param className - 额外的CSS类名
 * @param direction - 堆叠方向
 * @param spacing - 间距大小
 * @param align - 对齐方式
 * @param justify - 分布方式
 */
interface StackProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'row' | 'column';
  spacing?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
}

const spacingClasses = {
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

const justifyClasses = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly'
};

export function Stack({ 
  children, 
  className,
  direction = 'column',
  spacing = 'md',
  align = 'stretch',
  justify = 'start'
}: StackProps) {
  return (
    <div 
      className={cn(
        'flex',
        direction === 'row' ? 'flex-row' : 'flex-col',
        spacingClasses[spacing],
        alignClasses[align],
        justifyClasses[justify],
        className
      )}
    >
      {children}
    </div>
  );
}

export default Stack;