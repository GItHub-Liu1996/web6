// src/app/test-blogmenu/page.tsx
import BlogMenu from '@/components/organisms/BlogMenu';

export default function TestBlogMenuPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">BlogMenu 组件测试</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">资源中心下拉菜单</h2>
          <p className="text-gray-600 mb-6">
            点击 "Resources" 按钮查看下拉菜单效果。
          </p>
          
          <div className="flex justify-center">
            <BlogMenu />
          </div>
          
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">组件特性：</h3>
            <ul className="text-blue-700 space-y-1">
              <li>✅ 点击触发（非悬停）</li>
              <li>✅ 垂直布局的菜单项</li>
              <li>✅ 无黑点、无下划线</li>
              <li>✅ 使用Shadcn/ui组件</li>
              <li>✅ 响应式设计</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
