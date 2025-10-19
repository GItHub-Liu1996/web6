import React from 'react';
import { Navigation } from '@/components/organisms/Navigation';

/**
 * 测试页面 - 验证 Navigation 组件的 Logo 跳转功能
 */
export default function TestNavigationPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Navigation 组件测试页面</h1>
        
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">测试说明：</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>点击左上角的 GCA Logo，应该跳转到首页 (/)</li>
            <li>点击"解决方案"下拉菜单，应该显示四个选项</li>
            <li>点击"关于我们"、"联系我们"、"见解"应该跳转到对应页面</li>
            <li>点击语言切换按钮，应该显示语言选项</li>
          </ul>
        </div>
        
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-2">当前页面信息：</h2>
          <p>这是测试页面，用于验证 Navigation 组件的功能。</p>
          <p>如果您看到这个页面，说明 Logo 跳转功能正常工作！</p>
        </div>
      </div>
    </div>
  );
}

