import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardFooter } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { CalendarDays, Clock, ArrowRight } from 'lucide-react';

/**
 * BlogCard 博客卡片组件
 * 
 * 展示博客文章的基本信息，组合Card、Typography、Badge、Button原子组件
 * 
 * @param title - 文章标题
 * @param excerpt - 文章摘要
 * @param category - 文章分类
 * @param slug - 文章URL slug
 * @param date - 发布日期
 * @param readingTime - 阅读时间（分钟）
 * @param featured - 是否为推荐文章
 * @param className - 额外的CSS类名
 * @param onClick - 点击回调
 */
interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  slug: string;
  date: string;
  readingTime?: number;
  featured?: boolean;
  className?: string;
  onClick?: () => void;
}

export function BlogCard({
  title,
  excerpt,
  category,
  slug,
  date,
  readingTime,
  featured = false,
  className,
  onClick
}: BlogCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Card 
      className={cn(
        'group cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1',
        featured && 'ring-2 ring-primary/20',
        className
      )}
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div className="space-y-3">
          {/* 分类和特色标识 */}
          <div className="flex items-center justify-between">
            <Badge variant={featured ? 'default' : 'secondary'}>
              {category}
            </Badge>
            {featured && (
              <Badge variant="outline" className="text-primary border-primary">
                推荐
              </Badge>
            )}
          </div>

          {/* 标题 */}
          <h3 className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
            {title}
          </h3>

          {/* 摘要 */}
          <p className="text-sm text-gray-600 line-clamp-3">
            {excerpt}
          </p>

          {/* 元信息 */}
          <div className="flex items-center space-x-4 text-xs text-gray-500">
            <div className="flex items-center space-x-1">
              <CalendarDays className="h-3 w-3" />
              <span>{formatDate(date)}</span>
            </div>
            {readingTime && (
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>{readingTime}分钟阅读</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button 
          variant="ghost" 
          size="sm" 
          className="group-hover:text-primary transition-colors"
        >
          阅读更多
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardFooter>
    </Card>
  );
}

export default BlogCard;