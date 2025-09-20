/**
 * 头部组件的属性接口
 */
interface HeaderProps {
  /** 自定义样式类名 */
  className?: string;
}

/**
 * 网站头部导航组件
 *
 * 使用新的Navigation组件，严格按照GoChinaAdvisors (仮)设计蓝图实现：
 * - 桌面端：Logo + 解决方案下拉菜单 + 其他导航项 + 搜索 + 联系我们按钮 + 语言切换
 * - 移动端：汉堡菜单，展开后显示所有导航项
 *
 * @example
 * ```tsx
 * <Header />
 * ```
 */

import React from 'react';
import { Navigation } from './Navigation';
import { cn } from '@/lib/utils';

export const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn('bg-white shadow-sm', className)}>
      <Navigation />
    </header>
  );
};