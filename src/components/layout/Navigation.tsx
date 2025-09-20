/**
 * 主导航组件 - v4.2 超级菜单版本
 * 
 * 严格按照GoChinaAdvisors (仮) v4.2设计蓝图实现：
 * - 桌面端：Logo + 解决方案超级菜单 + 其他导航项 + 搜索 + 联系我们按钮 + 语言切换
 * - 移动端：汉堡菜单，展开后显示所有导航项
 * 
 * @example
 * ```tsx
 * <Navigation />
 * ```
 */

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { MegaMenu } from './MegaMenu';
import { cn } from '@/lib/utils';

interface NavigationProps {
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMegaMenu = () => {
    setIsMegaMenuOpen(!isMegaMenuOpen);
  };

  const closeMegaMenu = () => {
    setIsMegaMenuOpen(false);
  };

  return (
    <nav className={cn('bg-white border-b border-gray-200 relative', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">
                GoChinaAdvisors
              </span>
              <span className="text-sm text-gray-500 ml-1">(仮)</span>
            </Link>
          </div>

          {/* 桌面端导航 */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {/* 解决方案超级菜单 */}
            <div className="relative">
              <button
                onClick={toggleMegaMenu}
                className={cn(
                  "flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors",
                  isMegaMenuOpen && "text-blue-600"
                )}
              >
                解决方案
                <svg
                  className={cn(
                    "ml-1 h-4 w-4 transition-transform",
                    isMegaMenuOpen && "rotate-180"
                  )}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* 超级菜单 */}
              <MegaMenu isOpen={isMegaMenuOpen} onClose={closeMegaMenu} />
            </div>

            {/* 其他导航项 */}
            <Link
              href="/case-studies"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              成功案例
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              资源中心
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              关于我们
            </Link>
          </div>

          {/* 右侧操作区 */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            {/* 搜索图标 */}
            <button className="text-gray-400 hover:text-gray-500 p-2">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* 联系我们按钮 */}
            <Button asChild>
              <Link href="/contact">联系我们</Link>
            </Button>

            {/* 语言切换器 */}
            <div className="flex items-center space-x-2">
              <button className="text-sm text-gray-500 hover:text-gray-700 px-2 py-1 rounded hover:bg-gray-100 transition-colors">
                中文
              </button>
              <span className="text-gray-300">|</span>
              <button className="text-sm text-gray-500 hover:text-gray-700 px-2 py-1 rounded hover:bg-gray-100 transition-colors">
                EN
              </button>
            </div>
          </div>

          {/* 移动端菜单按钮 */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-500 hover:text-gray-600 p-2"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* 移动端菜单 */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* 解决方案超级菜单 - 移动端 */}
              <div className="space-y-1">
                <div className="text-sm font-medium text-gray-500 px-3 py-2">
                  解决方案
                </div>
                
                {/* 按业务阶段划分 */}
                <div className="pl-4 space-y-1">
                  <div className="text-xs font-medium text-gray-400 px-3 py-1">
                    按业务阶段划分
                  </div>
                  <Link
                    href="/solutions/startup"
                    className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    企业落地启动方案
                  </Link>
                  <Link
                    href="/solutions/operation"
                    className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    企业持续运营支持
                  </Link>
                  <Link
                    href="/services"
                    className="block px-3 py-2 text-blue-600 hover:text-blue-700 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    全部服务概览
                  </Link>
                </div>

                {/* 按行业领域划分 */}
                <div className="pl-4 space-y-1">
                  <div className="text-xs font-medium text-gray-400 px-3 py-1">
                    按行业领域划分
                  </div>
                  <Link
                    href="/industries/technology"
                    className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    科技与软件 (TMT)
                  </Link>
                  <Link
                    href="/industries/e-commerce"
                    className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    电子商务与零售
                  </Link>
                  <Link
                    href="/industries/professional-services"
                    className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    专业服务业
                  </Link>
                  <Link
                    href="/industries/advanced-manufacturing"
                    className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    高端制造业
                  </Link>
                  <Link
                    href="/industries/medical-devices"
                    className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    医疗器械
                  </Link>
                  <Link
                    href="/industries"
                    className="block px-3 py-2 text-blue-600 hover:text-blue-700 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    查看所有行业方案
                  </Link>
                </div>

                {/* 特色内容 */}
                <div className="pl-4 space-y-1">
                  <div className="text-xs font-medium text-gray-400 px-3 py-1">
                    特色内容
                  </div>
                  <Link
                    href="/case-studies/tech-startup-success"
                    className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    🚀 科技创业成功案例
                  </Link>
                  <Link
                    href="/contact"
                    className="block px-3 py-2 bg-green-500 text-white hover:bg-green-600 rounded-md transition-colors text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    💬 获取免费咨询
                  </Link>
                </div>
              </div>

              {/* 其他导航项 */}
              <Link
                href="/case-studies"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                成功案例
              </Link>
              <Link
                href="/blog"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                资源中心
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                关于我们
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                联系我们
              </Link>

              {/* 语言切换器 - 移动端 */}
              <div className="flex items-center justify-center space-x-4 pt-4 border-t border-gray-200">
                <button className="text-sm text-gray-500 hover:text-gray-700 px-3 py-1 rounded hover:bg-gray-100 transition-colors">
                  中文
                </button>
                <span className="text-gray-300">|</span>
                <button className="text-sm text-gray-500 hover:text-gray-700 px-3 py-1 rounded hover:bg-gray-100 transition-colors">
                  EN
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};