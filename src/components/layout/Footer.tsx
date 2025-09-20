/**
 * 页脚组件
 * 
 * 最基础结构，等待详细设计
 * 
 * @example
 * ```tsx
 * <Footer />
 * ```
 */

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export const Footer: React.FC = () => {
  return (
    <footer className={cn('bg-gray-900 text-white')}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">GoChinaAdvisors (仮)</h3>
          <p className="text-gray-400 mb-4">
            为外国用户在中国注册和运营公司提供一站式专业服务
          </p>
          <div className="flex justify-center space-x-6">
            <Link href="/about" className="text-gray-400 hover:text-white">
              关于我们
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white">
              联系我们
            </Link>
            <Link href="/blog" className="text-gray-400 hover:text-white">
              资源中心
            </Link>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-sm text-gray-500">
              © 2024 GoChinaAdvisors (仮). All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};