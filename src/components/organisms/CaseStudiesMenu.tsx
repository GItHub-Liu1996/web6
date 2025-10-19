/**
 * CaseStudiesMenu 成功案例下拉菜单组件
 * 
 * 专注于展示我们的服务成果，而非企业成功
 * 
 * ## 设计理念
 * - 展示我们的服务能力和专业水平
 * - 突出服务效率和客户满意度
 * - 建立专业信任，引导咨询
 * - 避免与企业成功混淆
 * 
 * ## 布局结构设计
 * 
 * ### 单栏布局 (桌面端 >= 1200px)
 * ```
 * ┌─────────────────────────┐
 * │ 成功案例                │
 * ├─────────────────────────┤
 * │ 案例列表页              │
 * │ ├─ 快速注册服务案例     │
 * │ ├─ 行业准入许可案例     │
 * │ ├─ 跨境资金合规案例     │
 * │ ├─ 企业重组退出案例     │
 * │ └─ 更多案例            │
 * └─────────────────────────┘
 * ```
 * 
 * ### 单栏布局 (移动端 < 768px)
 * ```
 * ┌─────────────────────────┐
 * │ 成功案例                │
 * ├─────────────────────────┤
 * │ 案例列表页              │
 * │ ├─ 快速注册服务案例     │
 * │ ├─ 行业准入许可案例     │
 * │ ├─ 企业重组退出案例     │
 * │ └─ 更多案例            │
 * └─────────────────────────┘
 * ```
 * 
 * ## 样式规范
 * - 容器宽度: 240px (简洁的单栏)
 * - 背景: 白色，边框 (border border-gray-200)
 * - 内边距: 16px
 * - 项目间距: 8px (垂直)
 * - 圆角: 8px
 * - 阴影: shadow-lg
 * 
 * ## 交互效果
 * - 显示/隐藏: 基于父组件Header的hover状态
 * - 延迟隐藏: 300ms延迟，避免意外关闭
 * - 悬停效果: 链接颜色变化 (text-gray-600 → text-primary)
 * - 过渡动画: opacity和transform动画 (200ms ease-out)
 * - 键盘导航: 支持Tab键和方向键导航
 * 
 * ## 内容结构
 * 
 * ### 成功案例菜单
 * - 案例列表页 → /case-studies
 * - 快速注册服务案例 → /case-studies/quick-registration-service
 * - 行业准入许可案例 → /case-studies/industry-licensing-permit
 * - 跨境资金合规案例 → /case-studies/cross-border-funds-compliance
 * - 企业重组退出案例 → /case-studies/corporate-restructuring-exit
 * - 更多案例 → /case-studies
 * 
 * ## 服务成果展示设计
 * 
 * ### 1. 服务效率展示
 * - "快速注册服务案例" → 展示我们的高效服务能力
 * - 突出服务速度和质量，让客户看到我们的专业水平
 * 
 * ### 2. 专业能力展示
 * - "行业准入许可案例" → 展示我们处理复杂业务的能力
 * - "跨境资金合规案例" → 展示我们在金融合规方面的专业性
 * 
 * ### 3. 全生命周期服务
 * - "企业重组退出案例" → 展示我们提供从注册到退出的完整服务
 * - 体现我们的全生命周期服务能力
 * 
 * ### 4. 客户信任建立
 * - 专注于我们的服务成果，而非企业成功
 * - 展示客户对我们服务的满意度和推荐
 * - 建立专业信任，引导咨询
 * 
 * ## 技术实现要点
 * - 使用绝对定位，相对于Header组件
 * - 使用固定宽度 (w-60)
 * - 使用白色背景和边框
 * - 每个链接使用Link组件，支持客户端路由
 * - 添加悬停效果和过渡动画
 * - 使用useEffect监听鼠标进入/离开事件
 * - 添加键盘导航支持 (Tab, Enter, Escape)
 * - 使用Framer Motion实现平滑的显示/隐藏动画
 */

import React from 'react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/Button';
import { ChevronDown } from 'lucide-react';

/**
 * CaseStudiesMenu 成功案例下拉菜单组件
 * 
 * 专注于展示我们的服务成果，而非企业成功
 * 
 * ## 设计理念
 * - 展示我们的服务能力和专业水平
 * - 突出服务效率和客户满意度
 * - 建立专业信任，引导咨询
 * - 避免与企业成功混淆
 * 
 * ## 布局结构设计
 * 
 * ### 单栏布局 (桌面端 >= 1200px)
 * ```
 * ┌─────────────────────────┐
 * │ 成功案例                │
 * ├─────────────────────────┤
 * │ 案例列表页              │
 * │ ├─ 快速注册服务案例     │
 * │ ├─ 行业准入许可案例     │
 * │ ├─ 跨境资金合规案例     │
 * │ ├─ 企业重组退出案例     │
 * │ └─ 更多案例            │
 * └─────────────────────────┘
 * ```
 * 
 * ### 单栏布局 (移动端 < 768px)
 * ```
 * ┌─────────────────────────┐
 * │ 成功案例                │
 * ├─────────────────────────┤
 * │ 案例列表页              │
 * │ ├─ 快速注册服务案例     │
 * │ ├─ 行业准入许可案例     │
 * │ ├─ 企业重组退出案例     │
 * │ └─ 更多案例            │
 * └─────────────────────────┘
 * ```
 * 
 * ## 样式规范
 * - 容器宽度: 240px (简洁的单栏)
 * - 背景: 白色，边框 (border border-gray-200)
 * - 内边距: 16px
 * - 项目间距: 8px (垂直)
 * - 圆角: 8px
 * - 阴影: shadow-lg
 * 
 * ## 交互效果
 * - 显示/隐藏: 基于父组件Header的hover状态
 * - 延迟隐藏: 300ms延迟，避免意外关闭
 * - 悬停效果: 链接颜色变化 (text-gray-600 → text-primary)
 * - 过渡动画: opacity和transform动画 (200ms ease-out)
 * - 键盘导航: 支持Tab键和方向键导航
 * 
 * ## 内容结构
 * 
 * ### 成功案例菜单
 * - 案例列表页 → /case-studies
 * - 快速注册服务案例 → /case-studies/quick-registration-service
 * - 行业准入许可案例 → /case-studies/industry-licensing-permit
 * - 跨境资金合规案例 → /case-studies/cross-border-funds-compliance
 * - 企业重组退出案例 → /case-studies/corporate-restructuring-exit
 * - 更多案例 → /case-studies
 * 
 * ## 服务成果展示设计
 * 
 * ### 1. 服务效率展示
 * - "快速注册服务案例" → 展示我们的高效服务能力
 * - 突出服务速度和质量，让客户看到我们的专业水平
 * 
 * ### 2. 专业能力展示
 * - "行业准入许可案例" → 展示我们处理复杂业务的能力
 * - "跨境资金合规案例" → 展示我们在金融合规方面的专业性
 * 
 * ### 3. 全生命周期服务
 * - "企业重组退出案例" → 展示我们提供从注册到退出的完整服务
 * - 体现我们的全生命周期服务能力
 * 
 * ### 4. 客户信任建立
 * - 专注于我们的服务成果，而非企业成功
 * - 展示客户对我们服务的满意度和推荐
 * - 建立专业信任，引导咨询
 * 
 * ## 技术实现要点
 * - 使用绝对定位，相对于Header组件
 * - 使用固定宽度 (w-60)
 * - 使用白色背景和边框
 * - 每个链接使用Link组件，支持客户端路由
 * - 添加悬停效果和过渡动画
 * - 使用useEffect监听鼠标进入/离开事件
 * - 添加键盘导航支持 (Tab, Enter, Escape)
 * - 使用Framer Motion实现平滑的显示/隐藏动画
 */

export function CaseStudiesMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-base font-semibold">
          Case Studies
          <ChevronDown className="relative top-[1px] ml-1 h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-60" align="start">
        <ul className="grid gap-1 p-3 list-none">
          <ListItem href="/case-studies" title="Case Studies Overview" />
          <ListItem href="/case-studies/quick-registration-service" title="Quick Registration Service" />
          <ListItem href="/case-studies/industry-licensing-permit" title="Industry Licensing Permit" />
          <ListItem href="/case-studies/cross-border-funds-compliance" title="Cross-border Funds Compliance" />
          <ListItem href="/case-studies/corporate-restructuring-exit" title="Corporate Restructuring & Exit" />
          <ListItem href="/case-studies" title="More Case Studies" />
        </ul>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// ListItem 子组件，用于统一菜单项样式
const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  { href: string; title: string }
>(({ href, title, ...props }, ref) => {
  return (
    <li>
      <Link href={href} legacyBehavior passHref>
        <a
          ref={ref}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </a>
      </Link>
    </li>
  );
});
ListItem.displayName = 'ListItem';

export default CaseStudiesMenu;
