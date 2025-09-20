/**
 * 解决方案包卡片组件
 * 
 * 最基础结构，等待详细设计
 * 
 * @example
 * ```tsx
 * <SolutionPackageCard />
 * ```
 */

import React from 'react';
import { Card } from '@/components/ui/Card';

interface SolutionPackageCardProps {
  className?: string;
}

export const SolutionPackageCard: React.FC<SolutionPackageCardProps> = ({ 
  className 
}) => {
  return (
    <Card className={className}>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          解决方案包
        </h3>
        <p className="text-gray-600">
          解决方案包内容待开发...
        </p>
      </div>
    </Card>
  );
};