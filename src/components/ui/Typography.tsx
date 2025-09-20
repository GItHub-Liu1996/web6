import React from 'react';
import { cn } from '@/lib/utils';

interface TypographyProps {
  /**
   * 渲染的HTML标签，默认为 'p' (段落)
   * @default 'p'
   */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div' | 'blockquote';
  /**
   * 文本的样式变体，对应设计系统中的排版等级
   * @default 'body-regular'
   */
  variant?: 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'body-large' | 'body-regular' | 'body-small' | 'caption' | 'quote';
  /**
   * 文本内容
   */
  children: React.ReactNode;
  /**
   * 附加的CSS类名
   */
  className?: string;
}

/**
 * 排版组件 (Typography)
 *
 * 统一管理网站所有的文本样式，包括标题、段落、列表、引述等，
 * 确保全局排版的一致性。避免在代码中到处手写 className="text-2xl font-bold..."，
 * 让样式修改和管理变得极其简单。
 *
 * @param {TypographyProps} props - 组件属性
 * @example
 * ```tsx
 * <Typography as="h1" variant="heading1">我们的解决方案</Typography>
 * <Typography as="p" variant="body-large">我们提供一站式的服务...</Typography>
 * <Typography as="blockquote" variant="quote">客户的成功就是我们的成功</Typography>
 * ```
 */
export const Typography: React.FC<TypographyProps> = ({
  as: Component = 'p',
  variant = 'body-regular',
  children,
  className,
}) => {
  const variantStyles = {
    heading1: 'text-4xl font-bold text-gray-900 leading-tight',
    heading2: 'text-3xl font-bold text-gray-900 leading-tight',
    heading3: 'text-2xl font-semibold text-gray-900 leading-tight',
    heading4: 'text-xl font-semibold text-gray-900 leading-tight',
    'body-large': 'text-lg text-gray-700 leading-relaxed',
    'body-regular': 'text-base text-gray-700 leading-relaxed',
    'body-small': 'text-sm text-gray-600 leading-relaxed',
    caption: 'text-xs text-gray-500 leading-normal',
    quote: 'text-lg text-gray-600 italic border-l-4 border-blue-500 pl-4 my-4',
  };

  return (
    <Component className={cn(variantStyles[variant], className)}>
      {children}
    </Component>
  );
};
