/**
 * 主导航组件
 * 
 * 最基础结构，等待详细设计
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
  const [isSolutionsMegaMenuOpen, setIsSolutionsMegaMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsSolutionsMegaMenuOpen(false);
  };

  const handleSolutionsHover = (open: boolean) => {
    setIsSolutionsMegaMenuOpen(open);
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Solutions Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => handleSolutionsHover(true)}
              onMouseLeave={() => handleSolutionsHover(false)}
            >
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-blue-600"
              >
                解决方案
              </Button>
              {isSolutionsMegaMenuOpen && <MegaMenu />}
            </div>

            <Link href="/case-studies" className="text-gray-700 hover:text-blue-600">
              成功案例
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600">
              资源中心
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              关于我们
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" onClick={toggleMobileMenu}>
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Mobile Solutions (collapsible) */}
            <div className="relative">
              <Button
                variant="ghost"
                className="w-full justify-start text-gray-700 hover:text-blue-600"
                onClick={() => setIsSolutionsMegaMenuOpen(!isSolutionsMegaMenuOpen)}
              >
                解决方案
              </Button>
              {isSolutionsMegaMenuOpen && (
                <div className="pl-4">
                  <MegaMenu isMobile={true} />
                </div>
              )}
            </div>
            <Link href="/case-studies" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">
              成功案例
            </Link>
            <Link href="/blog" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">
              资源中心
            </Link>
            <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">
              关于我们
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};