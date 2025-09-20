import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

/**
 * 导航链接类型
 */
interface NavLink {
  /** 链接文本 */
  label: string;
  /** 链接地址 */
  href: string;
  /** 是否为外部链接 */
  external?: boolean;
}

/**
 * 头部组件的属性接口
 */
interface HeaderProps {
  /**
   * 是否显示在首页
   * @default false
   */
  isHomePage?: boolean;
  /**
   * 自定义样式类名
   */
  className?: string;
}

/**
 * 网站头部组件
 * 
 * 包含网站logo、主导航菜单和联系按钮。
 * 支持响应式设计，在移动端显示汉堡菜单。
 * 
 * @example
 * ```tsx
 * <Header isHomePage={true} />
 * ```
 */
export const Header: React.FC<HeaderProps> = ({ isHomePage = false, className }) => {
  const navLinks: NavLink[] = [
    { label: '服务', href: '/services' },
    { label: '博客', href: '/blog' },
    { label: '关于我们', href: '/about' },
    { label: '案例', href: '/cases' },
    { label: '联系我们', href: '/contact' },
  ];

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-2 text-xl font-bold text-primary hover:text-primary/80 transition-colors"
            >
              <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">中</span>
              </div>
              <span className="hidden sm:block">中国公司注册</span>
            </Link>
          </div>

          {/* 桌面端导航 */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* 联系按钮 */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:inline-flex"
            >
              免费咨询
            </Button>
            
            {/* 移动端菜单按钮 */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="打开菜单"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
