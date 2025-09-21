"use client";

import Link from 'next/link';
import Navigation from './Navigation';
import { Button } from '@/components/ui/Button';

/**
 * Header Component
 * 
 * Professional header component for Go China Advisors website
 * Based on Vistra.com design patterns and atomic design principles
 * 
 * ## Design Features
 * - Clean, modern enterprise design
 * - Professional color scheme with primary blue tones
 * - White background with clear hierarchy
 * - Professional typography
 * - Hover effects: dark blue text → primary color highlight
 * 
 * ## 导航结构设计
 * 
 * ### 桌面端布局 (1200px+)
 * ```
 * [Logo: Go China Advisors] | [解决方案 ▼] | [成功案例 ▼] | [资源中心 ▼] | [关于我们 ▼] | [🔍] | [免费咨询] | [EN/中文]
 * ```
 * 
 * ### 导航菜单设计
 * 
 * **1. 解决方案超级菜单 (MegaMenu)**:
 * 采用3栏布局，参考Vistra的多栏超级菜单：
 * 
 * **第一栏 (浅灰背景 bg-gray-50)**:
 * - 企业落地启动方案
 * - 银行账户开设
 * - 人员与签证
 * - 经营场所
 * - 更多服务
 * 
 * **第二栏 (白色背景)**:
 * - 企业持续运营支持
 * - 财税托管
 * - 行业准入
 * - 知识产权
 * - 企业重组与退出
 * - 更多服务
 * 
 * **第三栏 (白色背景)**:
 * - 行业解决方案
 * - 科技与软件 (TMT)
 * - 电子商务与零售
 * - 专业服务业
 * - 高端制造业
 * - 医疗器械
 * - 更多行业
 * 
 * **2. 成功案例下拉菜单**:
 * - 案例列表页 → /case-studies
 * - 快速注册服务案例 → /case-studies/quick-registration-service
 * - 行业准入许可案例 → /case-studies/industry-licensing-permit
 * - 跨境资金合规案例 → /case-studies/cross-border-funds-compliance
 * - 企业重组退出案例 → /case-studies/corporate-restructuring-exit
 * - 更多案例 → /case-studies
 * 
 * **3. 资源中心下拉菜单**:
 * - 博客列表页 → /blog
 * - 政策解读 → /blog/category/policy
 * - 案例分析 → /blog/category/case-study
 * - 行业洞察 → /blog/category/industry-insight
 * - 更多文章 → /blog
 * 
 * **4. 关于我们下拉菜单**:
 * - 公司介绍 → /about
 * - 团队介绍 → /about#team
 * - 发展历程 → /about#history
 * - 联系我们 → /contact
 * 
 * ### 移动端布局 (< 768px)
 * ```
 * [☰] [Logo] [🔍] [免费咨询]
 * ```
 * 汉堡菜单展开后显示完整导航结构
 * 
 * ## 样式规范
 * - 高度: 80px (桌面端), 60px (移动端)
 * - 背景: 白色，底部1px边框 (border-gray-200)
 * - Logo: 左侧，高度40px
 * - 导航链接: 深蓝色文字 (text-gray-800)，悬停时变为主色调 (text-primary)
 * - CTA按钮: 实心主色调背景 (bg-primary)，白色文字
 * - 字体: 16px (桌面端), 14px (移动端)
 * 
 * ## 交互效果
 * - 超级菜单: 鼠标悬停显示，延迟300ms隐藏
 * - 链接悬停: 颜色过渡动画 (transition-colors 200ms)
 * - 按钮悬停: 轻微阴影效果 (shadow-md)
 * - 移动端菜单: 滑入动画 (slide-in from right)
 * 
 * ## 响应式断点
 * - 桌面端: >= 1200px (完整超级菜单)
 * - 平板端: 768px - 1199px (简化下拉菜单)
 * - 移动端: < 768px (汉堡菜单)
 */

export default function Header() {
  // TODO: 实现Header组件
  // 设计要点：
  // 1. 使用Container组件确保最大宽度和居中
  // 2. 使用Flexbox布局，justify-between对齐
  // 3. Logo使用Next.js Image组件优化
  // 4. 导航链接使用Link组件，支持客户端路由
  // 5. CTA按钮使用Button组件，variant="default"
  // 6. 超级菜单使用绝对定位，z-index确保层级
  // 7. 移动端使用useState管理菜单开关状态
  // 8. 添加键盘导航支持 (Tab键)
  // 9. 使用useEffect监听窗口大小变化
  // 10. 集成Zoho SalesIQ聊天图标 (右下角)
  // 11. 成功案例菜单专注于服务成果展示，避免与企业成功混淆
  // 12. 案例菜单展示四大核心能力：服务效率、专业能力、金融合规、全生命周期
  
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Navigation Area */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="h-10 w-auto">
                <span className="text-xl font-bold text-gray-900">Go China Advisors</span>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex">
              <Navigation />
            </div>
          </div>
          
          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <button className="p-2 text-gray-600 hover:text-primary transition-colors" aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </button>

            {/* CTA Button */}
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Free Consultation
            </Button>

            {/* Language Switcher */}
            <button className="flex items-center space-x-1 px-3 py-2 text-sm text-gray-600 hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" x2="22" y1="12" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <span>EN/中文</span>
            </button>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2 text-gray-600 hover:text-primary transition-colors" aria-label="Open menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}