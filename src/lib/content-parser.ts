/**
 * 内容解析器
 * 文件路径: src/lib/content-parser.ts
 * 描述: 用于解析和处理MDX内容文件的核心工具函数
 * 
 * 基于ADR-002: 内容管理策略 (v2.0 深化版)
 * 
 * @example
 * ```typescript
 * import { parseContent, getAllPosts, getPostBySlug } from '@/lib/content-parser';
 * 
 * // 获取所有博客文章
 * const posts = await getAllPosts('blog');
 * 
 * // 根据slug获取特定文章
 * const post = await getPostBySlug('blog', 'china-foreign-investment-guide-2024');
 * ```
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import remarkPrism from 'remark-prism';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// TODO: 定义内容类型接口
export interface ContentMetadata {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  tags: string[];
  slug?: string;
  category?: string;
  featured?: boolean;
  draft?: boolean;
  language?: string;
  readingTime?: number;
  coverImage?: string;
  seoTitle?: string;
  seoDescription?: string;
}

export interface ContentPost {
  metadata: ContentMetadata;
  content: MDXRemoteSerializeResult;
  slug: string;
  filePath: string;
}

// TODO: 定义内容目录路径
const CONTENT_DIR = path.join(process.cwd(), 'content');

/**
 * 解析单个MDX文件
 * @param filePath - MDX文件路径
 * @returns 解析后的内容对象
 */
export async function parseContent(filePath: string): Promise<ContentPost> {
  try {
    // TODO: 读取文件内容
    const fileContents = fs.readFileSync(filePath, 'utf8');
    
    // TODO: 解析frontmatter和内容
    const { data, content } = matter(fileContents);
    
    // TODO: 验证必选字段
    validateMetadata(data);
    
    // TODO: 序列化MDX内容
    const mdxSource = await serialize(content, {
      mdxOptions: {
        remarkPlugins: [
          remarkGfm, // GitHub Flavored Markdown
          remarkPrism, // 代码高亮
        ],
        rehypePlugins: [
          rehypeSlug, // 为标题添加ID
          rehypeAutolinkHeadings, // 为标题添加链接
        ],
      },
    });
    
    // TODO: 生成slug
    const slug = data.slug || path.basename(filePath, '.mdx');
    
    return {
      metadata: data as ContentMetadata,
      content: mdxSource,
      slug,
      filePath,
    };
  } catch (error) {
    console.error(`Error parsing content file ${filePath}:`, error);
    throw new Error(`Failed to parse content file: ${filePath}`);
  }
}

/**
 * 验证frontmatter元数据
 * @param metadata - 元数据对象
 */
function validateMetadata(metadata: any): void {
  const requiredFields = ['title', 'date', 'author', 'excerpt', 'tags'];
  
  for (const field of requiredFields) {
    if (!metadata[field]) {
      throw new Error(`Missing required field: ${field}`);
    }
  }
  
  // TODO: 验证日期格式
  if (!isValidDate(metadata.date)) {
    throw new Error(`Invalid date format: ${metadata.date}. Expected YYYY-MM-DD`);
  }
  
  // TODO: 验证标签数组
  if (!Array.isArray(metadata.tags)) {
    throw new Error('Tags must be an array');
  }
}

/**
 * 验证日期格式
 * @param dateString - 日期字符串
 * @returns 是否为有效日期
 */
function isValidDate(dateString: string): boolean {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(dateString)) return false;
  
  const date = new Date(dateString);
  return date instanceof Date && !isNaN(date.getTime());
}

/**
 * 获取指定目录下的所有内容文件
 * @param contentType - 内容类型 (blog, case-studies, pages)
 * @returns 所有内容文件的元数据列表
 */
export async function getAllPosts(contentType: string): Promise<ContentPost[]> {
  try {
    const contentPath = path.join(CONTENT_DIR, contentType);
    
    // TODO: 检查目录是否存在
    if (!fs.existsSync(contentPath)) {
      console.warn(`Content directory does not exist: ${contentPath}`);
      return [];
    }
    
    // TODO: 递归获取所有MDX文件
    const files = getAllMdxFiles(contentPath);
    
    // TODO: 解析所有文件
    const posts = await Promise.all(
      files.map(file => parseContent(file))
    );
    
    // TODO: 过滤草稿文件
    const publishedPosts = posts.filter(post => !post.metadata.draft);
    
    // TODO: 按日期排序
    return publishedPosts.sort((a, b) => 
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
    );
  } catch (error) {
    console.error(`Error getting posts from ${contentType}:`, error);
    return [];
  }
}

/**
 * 递归获取所有MDX文件
 * @param dirPath - 目录路径
 * @returns MDX文件路径数组
 */
function getAllMdxFiles(dirPath: string): string[] {
  const files: string[] = [];
  
  function traverse(currentPath: string) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const itemPath = path.join(currentPath, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        traverse(itemPath);
      } else if (item.endsWith('.mdx')) {
        files.push(itemPath);
      }
    }
  }
  
  traverse(dirPath);
  return files;
}

/**
 * 根据slug获取特定内容
 * @param contentType - 内容类型
 * @param slug - 内容slug
 * @returns 内容对象或null
 */
export async function getPostBySlug(contentType: string, slug: string): Promise<ContentPost | null> {
  try {
    const contentPath = path.join(CONTENT_DIR, contentType);
    const files = getAllMdxFiles(contentPath);
    
    // TODO: 查找匹配的文件
    const targetFile = files.find(file => {
      const fileName = path.basename(file, '.mdx');
      return fileName === slug;
    });
    
    if (!targetFile) {
      return null;
    }
    
    return await parseContent(targetFile);
  } catch (error) {
    console.error(`Error getting post by slug ${slug}:`, error);
    return null;
  }
}

/**
 * 获取推荐内容
 * @param contentType - 内容类型
 * @param limit - 限制数量
 * @returns 推荐内容列表
 */
export async function getFeaturedPosts(contentType: string, limit: number = 3): Promise<ContentPost[]> {
  try {
    const allPosts = await getAllPosts(contentType);
    const featuredPosts = allPosts.filter(post => post.metadata.featured);
    
    return featuredPosts.slice(0, limit);
  } catch (error) {
    console.error(`Error getting featured posts:`, error);
    return [];
  }
}

/**
 * 根据标签获取相关内容
 * @param contentType - 内容类型
 * @param tags - 标签数组
 * @param limit - 限制数量
 * @returns 相关内容列表
 */
export async function getPostsByTags(contentType: string, tags: string[], limit: number = 5): Promise<ContentPost[]> {
  try {
    const allPosts = await getAllPosts(contentType);
    
    const relatedPosts = allPosts.filter(post => 
      post.metadata.tags.some(tag => tags.includes(tag))
    );
    
    return relatedPosts.slice(0, limit);
  } catch (error) {
    console.error(`Error getting posts by tags:`, error);
    return [];
  }
}

/**
 * 获取内容统计信息
 * @param contentType - 内容类型
 * @returns 统计信息
 */
export async function getContentStats(contentType: string): Promise<{
  total: number;
  published: number;
  drafts: number;
  featured: number;
}> {
  try {
    const contentPath = path.join(CONTENT_DIR, contentType);
    const files = getAllMdxFiles(contentPath);
    
    let total = files.length;
    let published = 0;
    let drafts = 0;
    let featured = 0;
    
    for (const file of files) {
      const { data } = matter(fs.readFileSync(file, 'utf8'));
      
      if (data.draft) {
        drafts++;
      } else {
        published++;
      }
      
      if (data.featured) {
        featured++;
      }
    }
    
    return { total, published, drafts, featured };
  } catch (error) {
    console.error(`Error getting content stats:`, error);
    return { total: 0, published: 0, drafts: 0, featured: 0 };
  }
}
