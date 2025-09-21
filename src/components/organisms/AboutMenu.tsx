"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

/**
 * AboutMenu 关于我们下拉菜单组件
 * 
 * 基于Vistra网站的简洁下拉菜单设计
 * 
 * ## 设计风格参考 (Vistra.com)
 * - 简洁的单栏下拉菜单
 * - 白色背景，清晰的边框
 * - 悬停效果和过渡动画
 * - 专业的图标和排版
 * 
 * ## 布局结构设计
 * 
 * ### 单栏布局 (桌面端 >= 1200px)
 * ```
 * ┌─────────────────────────┐
 * │ 关于我们                │
 * ├─────────────────────────┤
 * │ 公司介绍                │
 * │ 团队介绍                │
 * │ 发展历程                │
 * │ 联系我们                │
 * └─────────────────────────┘
 * ```
 * 
 * ### 移动端布局 (< 768px)
 * ```
 * ┌─────────────────────────┐
 * │ 关于我们                │
 * ├─────────────────────────┤
 * │ 公司介绍                │
 * │ 团队介绍                │
 * │ 发展历程                │
 * │ 联系我们                │
 * └─────────────────────────┘
 * ```
 * 
 * ## 样式规范
 * - 容器宽度: 192px (固定宽度)
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
 * ### 关于我们菜单
 * - 公司介绍 → /about
 * - 团队介绍 → /about#team
 * - 发展历程 → /about#history
 * - 联系我们 → /contact
 * 
 * ## 技术实现要点
 * - 使用绝对定位，相对于Header组件
 * - 使用CSS实现单栏布局
 * - 使用Framer Motion或CSS动画实现显示/隐藏效果
 * - 使用useRef和useEffect管理焦点和键盘导航
 * - 响应式设计使用Tailwind的断点系统
 */

interface AboutMenuProps {
  isVisible: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function AboutMenu({ isVisible, onMouseEnter, onMouseLeave }: AboutMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // 处理鼠标进入
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
    onMouseEnter();
  };

  // 处理鼠标离开
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      onMouseLeave();
    }, 300); // 300ms延迟隐藏
  };

  // 键盘导航支持
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      onMouseLeave();
    }
  };

  // 清理定时器
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // 根据isVisible和isOpen状态决定是否显示
  const shouldShow = isVisible && isOpen;

  return (
    <div
      ref={menuRef}
      className={`absolute top-full left-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-40 transition-all duration-200 ease-out ${
        shouldShow 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      role="menu"
      aria-label="关于我们菜单"
    >
      <div className="p-4">
        <ul className="space-y-2">
          <li>
            <Link 
              href="/about" 
              className="block px-3 py-2 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors duration-200"
              role="menuitem"
            >
              公司介绍
            </Link>
          </li>
          <li>
            <Link 
              href="/about#team" 
              className="block px-3 py-2 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors duration-200"
              role="menuitem"
            >
              团队介绍
            </Link>
          </li>
          <li>
            <Link 
              href="/about#history" 
              className="block px-3 py-2 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors duration-200"
              role="menuitem"
            >
              发展历程
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className="block px-3 py-2 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors duration-200"
              role="menuitem"
            >
              联系我们
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
