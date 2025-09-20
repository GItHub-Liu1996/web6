/**
 * 博客卡片组件
 * 
 * 用于展示博客文章的卡片组件，基于UI轮子组件构建
 * 
 * @example
 * ```tsx
 * <BlogCard 
 *   title="文章标题"
 *   excerpt="文章摘要"
 *   category="分类"
 *   readTime="5分钟"
 *   href="/blog/slug"
 * />
 * ```
 */

import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

interface BlogCardProps {
  /**
   * 文章标题
   */
  title: string;
  
  /**
   * 文章摘要
   */
  excerpt: string;
  
  /**
   * 文章分类
   */
  category: string;
  
  /**
   * 阅读时间
   */
  readTime: string;
  
  /**
   * 文章链接
   */
  href: string;
  
  /**
   * 文章图片（可选）
   */
  image?: string;
  
  /**
   * 卡片变体
   * @default 'default'
   */
  variant?: 'default' | 'featured';
  
  /**
   * 自定义CSS类名
   */
  className?: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({ 
  title,
  excerpt,
  category,
  readTime,
  href,
  image,
  variant = 'default',
  className 
}) => {
  return (
    <Card 
      className={cn(
        'hover:shadow-lg transition-shadow',
        variant === 'featured' && 'border-blue-200 bg-blue-50',
        className
      )}
    >
      <div className="p-6">
        {/* 分类标签 */}
        <div className="mb-3">
          <Badge variant="secondary" size="sm">
            {category}
          </Badge>
        </div>
        
        {/* 文章标题 */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>
        
        {/* 文章摘要 */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        {/* 底部信息 */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{readTime}</span>
          <Link
            href={href}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            阅读更多 →
          </Link>
        </div>
      </div>
    </Card>
  );
};
