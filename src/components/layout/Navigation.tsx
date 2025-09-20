/**
 * 主导航组件
 * 
 * 严格按照GoChinaAdvisors (仮)设计蓝图实现：
 * - 桌面端：Logo + 解决方案下拉菜单 + 其他导航项 + 搜索 + 联系我们按钮 + 语言切换
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
import { cn } from '@/lib/utils';

interface NavigationProps {
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSolutionsDropdown = () => {
    setIsSolutionsDropdownOpen(!isSolutionsDropdownOpen);
  };

  return (
    <nav className={cn('bg-white border-b border-gray-200', className)}>
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
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {/* 解决方案下拉菜单 */}
              <div className="relative">
                <button
                  onClick={toggleSolutionsDropdown}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center"
                >
                  解决方案
                  <svg
                    className={cn(
                      'ml-1 h-4 w-4 transition-transform duration-200',
                      isSolutionsDropdownOpen ? 'rotate-180' : ''
                    )}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* 下拉菜单内容 */}
                {isSolutionsDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-80 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                    <div className="py-1">
                      {/* 企业落地启动方案 */}
                      <div className="px-4 py-2">
                        <Link
                          href="/solutions/startup"
                          className="text-sm font-medium text-gray-900 hover:text-blue-600"
                        >
                          企业落地启动方案
                        </Link>
                        <div className="mt-1 space-y-1">
                          <Link
                            href="/services/legal-entity"
                            className="block px-4 py-1 text-sm text-gray-600 hover:text-blue-600"
                          >
                            主体资格
                          </Link>
                          <Link
                            href="/services/bank-account-opening"
                            className="block px-4 py-1 text-sm text-gray-600 hover:text-blue-600"
                          >
                            银行账户开设
                          </Link>
                          <Link
                            href="/services/cross-border-funds-flow"
                            className="block px-4 py-1 text-sm text-gray-600 hover:text-blue-600"
                          >
                            跨境资金流动
                          </Link>
                        </div>
                      </div>

                      {/* 分割线 */}
                      <div className="border-t border-gray-200"></div>

                      {/* 企业持续运营支持 */}
                      <div className="px-4 py-2">
                        <Link
                          href="/solutions/operation"
                          className="text-sm font-medium text-gray-900 hover:text-blue-600"
                        >
                          企业持续运营支持
                        </Link>
                        <div className="mt-1 space-y-1">
                          <Link
                            href="/services/financial-outsourcing"
                            className="block px-4 py-1 text-sm text-gray-600 hover:text-blue-600"
                          >
                            财税托管
                          </Link>
                          <Link
                            href="/services/cross-border-funds-flow"
                            className="block px-4 py-1 text-sm text-gray-600 hover:text-blue-600"
                          >
                            跨境资金流动
                          </Link>
                          <Link
                            href="/services/tax-compliance"
                            className="block px-4 py-1 text-sm text-gray-600 hover:text-blue-600"
                          >
                            税务合规
                          </Link>
                        </div>
                      </div>

                      {/* 分割线 */}
                      <div className="border-t border-gray-200"></div>

                      {/* 全部服务概览 */}
                      <div className="px-4 py-2">
                        <Link
                          href="/services"
                          className="text-sm font-medium text-blue-600 hover:text-blue-700"
                        >
                          全部服务概览
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* 其他导航项 */}
              <Link
                href="/case-studies"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                成功案例
              </Link>
              <Link
                href="/blog"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                资源中心
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
              >
                关于我们
              </Link>
            </div>
          </div>

          {/* 右侧操作区 */}
          <div className="hidden md:flex items-center space-x-4">
            {/* 搜索图标 */}
            <button className="text-gray-700 hover:text-blue-600 p-2">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* 联系我们按钮 */}
            <Button asChild>
              <Link href="/contact">联系我们</Link>
            </Button>

            {/* 语言切换器 */}
            <div className="flex items-center space-x-2">
              <button className="text-sm text-gray-600 hover:text-blue-600">EN</button>
              <span className="text-gray-300">|</span>
              <button className="text-sm text-blue-600 font-medium">中文</button>
            </div>
          </div>

          {/* 移动端菜单按钮 */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* 移动端菜单 */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {/* 解决方案 */}
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-gray-900">解决方案</div>
                <div className="mt-1 space-y-1">
                  <Link
                    href="/solutions/startup"
                    className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600"
                  >
                    企业落地启动方案
                  </Link>
                  <Link
                    href="/solutions/operation"
                    className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600"
                  >
                    企业持续运营支持
                  </Link>
                  <Link
                    href="/services"
                    className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600"
                  >
                    全部服务概览
                  </Link>
                </div>
              </div>

              {/* 其他导航项 */}
              <Link
                href="/case-studies"
                className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600"
              >
                成功案例
              </Link>
              <Link
                href="/blog"
                className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600"
              >
                资源中心
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600"
              >
                关于我们
              </Link>

              {/* 移动端操作区 */}
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center justify-between px-3">
                  <Button asChild className="w-full">
                    <Link href="/contact">联系我们</Link>
                  </Button>
                </div>
                <div className="mt-3 px-3 flex items-center justify-center space-x-4">
                  <button className="text-sm text-gray-600 hover:text-blue-600">EN</button>
                  <span className="text-gray-300">|</span>
                  <button className="text-sm text-blue-600 font-medium">中文</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
