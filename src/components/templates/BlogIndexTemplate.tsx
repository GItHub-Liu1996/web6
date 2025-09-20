import React from 'react';
import { Container } from '@/components/layout/Container';
import { Grid } from '@/components/layout/Grid';
import { Stack } from '@/components/layout/Stack';
import { BlogCard } from '@/components/content/BlogCard';
import { SearchBox } from '@/components/molecules/SearchBox';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  href: string;
  image?: string;
}

interface BlogIndexTemplateProps {
  /**
   * 博客文章列表
   */
  posts: BlogPost[];
  /**
   * 搜索查询
   */
  searchQuery?: string;
  /**
   * 搜索回调函数
   */
  onSearch?: (query: string) => void;
  /**
   * 当前选中的分类
   */
  selectedCategory?: string;
  /**
   * 分类列表
   */
  categories?: string[];
  /**
   * 分类选择回调
   */
  onCategorySelect?: (category: string) => void;
  /**
   * 页面标题
   * @default '资源中心'
   */
  title?: string;
  /**
   * 页面描述
   */
  description?: string;
  /**
   * 额外的CSS类名
   */
  className?: string;
}

/**
 * 博客列表页模板组件 (BlogIndexTemplate)
 *
 * 提供博客列表页的完整布局结构，包括搜索、分类筛选和文章列表。
 * 这是一个模板组件，只负责布局，不包含具体的数据获取逻辑。
 *
 * @param {BlogIndexTemplateProps} props - 组件属性
 * @example
 * ```tsx
 * <BlogIndexTemplate
 *   posts={blogPosts}
 *   searchQuery={searchQuery}
 *   onSearch={handleSearch}
 *   categories={['政策解读', '案例分析', '行业动态']}
 *   onCategorySelect={handleCategorySelect}
 *   title="资源中心"
 *   description="为您提供最新的政策解读和行业动态"
 * />
 * ```
 */
export const BlogIndexTemplate: React.FC<BlogIndexTemplateProps> = ({
  posts,
  searchQuery,
  onSearch,
  selectedCategory,
  categories = [],
  onCategorySelect,
  title = '资源中心',
  description,
  className,
}) => {
  return (
    <Container className={cn('py-8', className)}>
      <Stack space="lg">
        {/* 页面标题和描述 */}
        <Stack space="sm" alignCenter={false}>
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          {description && (
            <p className="text-lg text-gray-600">{description}</p>
          )}
        </Stack>

        {/* 搜索和筛选区域 */}
        <div className="space-y-4">
          {/* 搜索框 */}
          {onSearch && (
            <div className="max-w-md">
              <SearchBox
                value={searchQuery}
                onChange={(value) => onSearch?.(value)}
                placeholder="搜索博客文章..."
                searchText="搜索"
              />
            </div>
          )}

          {/* 分类筛选 */}
          {categories.length > 0 && onCategorySelect && (
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={selectedCategory === 'all' ? 'default' : 'secondary'}
                className="cursor-pointer"
                onClick={() => onCategorySelect('all')}
              >
                全部
              </Badge>
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'secondary'}
                  className="cursor-pointer"
                  onClick={() => onCategorySelect(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* 博客文章列表 */}
        {posts.length > 0 ? (
          <Grid cols={1} mdCols={2} lgCols={3} gap="lg">
            {posts.map((post) => (
              <BlogCard
                key={post.id}
                title={post.title}
                excerpt={post.excerpt}
                category={post.category}
                readTime={post.readTime}
                href={post.href}
                className="h-full"
              />
            ))}
          </Grid>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">暂无博客文章</p>
            {searchQuery && (
              <p className="text-gray-400 mt-2">
                没有找到包含 "{searchQuery}" 的文章
              </p>
            )}
          </div>
        )}
      </Stack>
    </Container>
  );
};
