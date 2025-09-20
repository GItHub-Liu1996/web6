/**
 * 博客/资源中心页面
 * 
 * 最基础结构，等待详细设计
 * 
 * @example
 * ```tsx
 * <BlogPage />
 * ```
 */

import React from 'react';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            资源中心
          </h1>
          <p className="text-xl text-gray-600">
            获取最新的政策解读、行业洞察和实用指南
          </p>
        </div>
        
        {/* 页面内容占位符 */}
        <div className="mt-16 text-center">
          <p className="text-gray-500">页面内容待开发...</p>
        </div>
      </div>
    </div>
  );
}
