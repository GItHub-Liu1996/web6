import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Container } from '@/components/molecules/Container';
import { Stack } from '@/components/molecules/Stack';
import { Button } from '@/components/ui/Button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { 
  Menu,
  X,
  ChevronDown,
  Globe,
  ChevronRight
} from 'lucide-react';

/**
 * Navigation 主导航组件
 * 
 * 响应式主导航，包含Logo、解决方案下拉菜单、基础导航链接和语言切换
 * 实现v5.8精简下拉菜单架构，突出四个核心解决方案
 * 
 * @param className - 额外的CSS类名
 */
interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  // 处理 Storybook 环境或 pathname 为 null 的情况
  const currentPath = pathname || '/';

  // v5.8核心解决方案
  const solutions = [
    {
      name: '在中国设立公司',
      href: '/solutions/startup',
      description: '企业落地启动方案'
    },
    {
      name: '在华企业运营与合规',
      href: '/solutions/operation',
      description: '企业持续运营支持'
    },
    {
      name: '企业重组与退出',
      href: '/services/corporate-restructuring-and-exit',
      description: '企业重组与退出服务'
    },
    {
      name: '按行业划分的解决方案',
      href: '/industries',
      description: '行业特定解决方案'
    }
  ];

  // 基础导航链接
  const navItems = [
    { name: '关于我们', href: '/about' },
    { name: '联系我们', href: '/contact' },
    { name: '见解', href: '/blog' }
  ];

  // 语言选项
  const languages = [
    { code: 'zh-CN', name: '中文', flag: '🇨🇳' },
    { code: 'en-US', name: 'English', flag: '🇺🇸' },
    { code: 'ja-JP', name: '日本語', flag: '🇯🇵' }
  ];

  const currentLanguage = languages[0]; // 默认中文

  // 检查当前路径是否匹配
  const isActive = (href: string) => {
    if (href === '/') {
      return currentPath === '/';
    }
    return currentPath.startsWith(href);
  };

  // Logo组件
  const Logo = () => (
    <Link 
      href="/" 
      className="flex items-center hover:opacity-80 transition-opacity duration-200"
      title="回到首页"
    >
      <div className="h-8 w-8 rounded-lg flex items-center justify-center">
        <span className="font-bold text-sm">GCA</span>
      </div>
    </Link>
  );

  // 导航项组件
  const NavItem = ({ name, href, isActive: active }: { name: string; href: string; isActive: boolean }) => (
    <Link
      href={href}
      className="px-2 py-1.5 text-sm font-medium transition-colors duration-200 rounded-md"
    >
      {name}
    </Link>
  );

  // 语言切换组件
  const LanguageSwitcher = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{currentLanguage.name}</span>
          <ChevronDown className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {languages.map((lang) => (
          <DropdownMenuItem key={lang.code} className="gap-2">
            <span>{lang.flag}</span>
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  // 移动端菜单按钮
  const MobileMenuButton = () => (
    <Button
      variant="ghost"
      size="sm"
      className="lg:hidden"
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    >
      {isMobileMenuOpen ? (
        <X className="h-5 w-5" />
      ) : (
        <Menu className="h-5 w-5" />
      )}
    </Button>
  );

  return (
    <nav className={cn('', className)}>
      <Container maxWidth="xl">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Logo />

          {/* 桌面端导航 */}
          <div className="hidden lg:flex items-center space-x-2">
            {/* 解决方案下拉菜单 */}
            <DropdownMenu onOpenChange={setIsSolutionsOpen}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="px-2 py-1.5 text-sm font-medium transition-colors duration-200"
                >
                  解决方案
                  <ChevronDown className="ml-1 h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-72">
                <div className="flex flex-col gap-1 p-2">
                  {solutions.map((solution) => (
                    <DropdownMenuItem key={solution.href} asChild>
                      <Link
                        href={solution.href}
                        className="flex flex-col items-start p-3 rounded-md transition-colors duration-200 w-full"
                      >
                        <div className="font-medium text-sm">
                          {solution.name}
                        </div>
                        <div className="text-xs mt-1">
                          {solution.description}
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* 基础导航链接 */}
            {navItems.map((item) => (
              <NavItem
                key={item.href}
                name={item.name}
                href={item.href}
                isActive={isActive(item.href)}
              />
            ))}
          </div>

          {/* 右侧区域 */}
          <div className="flex items-center space-x-1">
            {/* 语言切换 */}
            <LanguageSwitcher />
            
            {/* 移动端菜单按钮 */}
            <MobileMenuButton />
          </div>
        </div>

        {/* 移动端菜单 */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-3">
            <Stack spacing="sm">
              {/* 解决方案 */}
              <div className="space-y-2">
                <button
                  onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200"
                >
                  <span>解决方案</span>
                  <ChevronRight className={cn(
                    'h-4 w-4 transition-transform duration-200',
                    isSolutionsOpen && 'rotate-90'
                  )} />
                </button>
                
                {isSolutionsOpen && (
                  <div className="pl-4 space-y-1">
                    {solutions.map((solution) => (
                      <Link
                        key={solution.href}
                        href={solution.href}
                        className="block px-3 py-2 text-sm rounded-md transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {solution.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* 基础导航链接 */}
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-2 py-1.5 text-sm font-medium transition-colors duration-200 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </Stack>
          </div>
        )}
      </Container>
    </nav>
  );
}

export default Navigation;