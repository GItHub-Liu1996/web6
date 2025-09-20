/**
 * 案例研究卡片组件
 * 
 * 最基础结构，等待详细设计
 * 
 * @example
 * ```tsx
 * <CaseStudyCard />
 * ```
 */

import React from 'react';
import { Card } from '@/components/ui/Card';

interface CaseStudyCardProps {
  className?: string;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ 
  className 
}) => {
  return (
    <Card className={className}>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          成功案例
        </h3>
        <p className="text-gray-600">
          案例研究内容待开发...
        </p>
      </div>
    </Card>
  );
};