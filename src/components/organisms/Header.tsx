/**
 * 头部导航组件
 * 
 * 最基础结构，等待详细设计
 * 
 * @example
 * ```tsx
 * <Header />
 * ```
 */

import React from 'react';
import { Navigation } from './Navigation';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <Navigation />
    </header>
  );
};