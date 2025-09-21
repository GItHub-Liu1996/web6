"use client";

import React, { useState } from 'react';
import AboutMenu from '@/components/organisms/AboutMenu';

export default function TestAboutPage() {
  const [isAboutMenuVisible, setIsAboutMenuVisible] = useState(false);

  const handleAboutMouseEnter = () => {
    setIsAboutMenuVisible(true);
  };

  const handleAboutMouseLeave = () => {
    setIsAboutMenuVisible(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">AboutMenu 组件完整测试</h1>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">关于我们下拉菜单 - 完整功能测试</h2>
          
          <div className="space-y-4">
            <p className="text-gray-600">
              测试功能：悬停显示、延迟隐藏、键盘导航、过渡动画
            </p>
            
            {/* 模拟Header中的触发按钮 */}
            <div className="relative inline-block">
              <button 
                className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-primary transition-colors"
                onMouseEnter={handleAboutMouseEnter}
                onMouseLeave={handleAboutMouseLeave}
              >
                <span>关于我们</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* AboutMenu组件 */}
              <AboutMenu 
                isVisible={isAboutMenuVisible}
                onMouseEnter={handleAboutMouseEnter}
                onMouseLeave={handleAboutMouseLeave}
              />
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-gray-100 rounded-lg">
            <h3 className="font-semibold mb-2">测试说明：</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 鼠标悬停在"关于我们"按钮上，菜单应该显示</li>
              <li>• 鼠标离开后，菜单应该延迟300ms后隐藏</li>
              <li>• 菜单应该有平滑的过渡动画</li>
              <li>• 菜单项应该有悬停效果</li>
              <li>• 按Escape键应该关闭菜单</li>
              <li>• 菜单宽度应该是192px (w-48)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
