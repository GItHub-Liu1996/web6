import React from 'react';
// import Link from 'next/link'; // 在Storybook中使用普通链接
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/Button';
import { ChevronDown } from 'lucide-react';

/**
 * BlogMenu 资源中心下拉菜单组件
 * 
 * 基于Vistra网站的简洁下拉菜单设计
 * 
 * ## 设计风格参考 (Vistra.com)
 * - 简洁的单栏下拉菜单
 * - 白色背景，清晰的边框
 * - 悬停效果和过渡动画
 * - 专业的图标和排版
 * 
 * ## 布局结构设计
 * 
 * ### 单栏布局 (桌面端 >= 1200px)
 * ```
 * ┌─────────────────────────┐
 * │ 资源中心                │
 * ├─────────────────────────┤
 * │ 博客列表页              │
 * │ 政策解读                │
 * │ 案例分析                │
 * │ 行业洞察                │
 * │ 更多文章                │
 * └─────────────────────────┘
 * ```
 * 
 * ### 移动端布局 (< 768px)
 * ```
 * ┌─────────────────────────┐
 * │ 资源中心                │
 * ├─────────────────────────┤
 * │ 博客列表页              │
 * │ 政策解读                │
 * │ 案例分析                │
 * │ 行业洞察                │
 * │ 更多文章                │
 * └─────────────────────────┘
 * ```
 * 
 * ## 样式规范
 * - 容器宽度: 192px (固定宽度)
 * - 背景: 白色，边框 (border border-gray-200)
 * - 内边距: 16px
 * - 项目间距: 8px (垂直)
 * - 圆角: 8px
 * - 阴影: shadow-lg
 * 
 * ## 交互效果
 * - 显示/隐藏: 基于父组件Header的hover状态
 * - 延迟隐藏: 300ms延迟，避免意外关闭
 * - 悬停效果: 链接颜色变化 (text-gray-600 → text-primary)
 * - 过渡动画: opacity和transform动画 (200ms ease-out)
 * - 键盘导航: 支持Tab键和方向键导航
 * 
 * ## 内容结构
 * 
 * ### 资源中心菜单
 * - 博客列表页 → /blog
 * - 政策解读 → /blog/category/policy
 * - 案例分析 → /blog/category/case-study
 * - 行业洞察 → /blog/category/industry-insight
 * - 更多文章 → /blog
 * 
 * ## 技术实现要点
 * - 使用绝对定位，相对于Header组件
 * - 使用CSS实现单栏布局
 * - 使用Framer Motion或CSS动画实现显示/隐藏效果
 * - 使用useRef和useEffect管理焦点和键盘导航
 * - 响应式设计使用Tailwind的断点系统
 */

export function BlogMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-base font-semibold">
          Resources
          <ChevronDown className="relative top-[1px] ml-1 h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180" />
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent className="w-48" align="start">
        <ul className="grid gap-1 p-3 list-none">
          <ListItem href="/blog" title="Blog Posts" />
          <ListItem href="/blog/category/policy" title="Policy Analysis" />
          <ListItem href="/blog/category/case-study" title="Case Studies" />
          <ListItem href="/blog/category/industry-insight" title="Industry Insights" />
          <ListItem href="/blog" title="More Articles" />
        </ul>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// ListItem 子组件，用于统一菜单项样式
const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  { href: string; title: string }
>(({ href, title, ...props }, ref) => {
  return (
    <li>
      <a
        ref={ref}
        href={href}
        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
      </a>
    </li>
  );
});
ListItem.displayName = 'ListItem';

export default BlogMenu;
