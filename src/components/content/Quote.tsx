/**
 * Quote 内容组件
 * 
 * 用于在MDX内容中显示引用块
 * 
 * @param {React.ReactNode} children - 引用内容
 * @param {string} [author] - 引用作者
 * @param {string} [source] - 引用来源
 * @param {string} [type] - 引用类型 (default, highlight, testimonial)
 * @param {string} [className] - 额外的CSS类名
 * 
 * @example
 * ```mdx
 * <Quote 
 *   author="张三" 
 *   source="《中国投资指南》"
 *   type="highlight"
 * >
 *   这是一个重要的引用内容。
 * </Quote>
 * ```
 */

import React from 'react';
import { cn } from '@/lib/utils';

interface QuoteProps {
  children: React.ReactNode;
  author?: string;
  source?: string;
  type?: 'default' | 'highlight' | 'testimonial';
  className?: string;
}

export const Quote: React.FC<QuoteProps> = ({
  children,
  author,
  source,
  type = 'default',
  className,
}) => {
  // TODO: 实现 Quote 组件
  const baseClasses = "border-l-4 pl-4 py-2 my-4";
  
  const typeClasses = {
    default: "border-gray-300 bg-gray-50 text-gray-800",
    highlight: "border-blue-500 bg-blue-50 text-blue-900",
    testimonial: "border-green-500 bg-green-50 text-green-900",
  };

  return (
    <blockquote className={cn(baseClasses, typeClasses[type], className)}>
      <div className="text-lg italic mb-2">
        "{children}"
      </div>
      {(author || source) && (
        <footer className="text-sm text-gray-600">
          {author && <cite className="font-semibold">— {author}</cite>}
          {source && (
            <span className="ml-2">
              {author ? ', ' : '— '}
              <cite>{source}</cite>
            </span>
          )}
        </footer>
      )}
    </blockquote>
  );
};
