/**
 * 解决方案包卡片组件
 * 
 * 用于展示解决方案包的卡片组件，基于UI轮子组件构建
 * 
 * @example
 * ```tsx
 * <SolutionPackageCard 
 *   title="解决方案标题"
 *   description="解决方案描述"
 *   services={["服务1", "服务2"]}
 *   href="/solutions/slug"
 * />
 * ```
 */

import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

interface SolutionPackageCardProps {
  /**
   * 解决方案标题
   */
  title: string;
  
  /**
   * 解决方案描述
   */
  description: string;
  
  /**
   * 包含的服务列表
   */
  services: string[];
  
  /**
   * 解决方案链接
   */
  href: string;
  
  /**
   * 自定义CSS类名
   */
  className?: string;
}

export const SolutionPackageCard: React.FC<SolutionPackageCardProps> = ({ 
  title,
  description,
  services,
  href,
  className 
}) => {
  return (
    <Card className={cn('hover:shadow-lg transition-shadow', className)}>
      <div className="p-6">
        {/* 解决方案标题 */}
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {title}
        </h3>
        
        {/* 解决方案描述 */}
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        
        {/* 包含服务 */}
        <div className="mb-6">
          <h4 className="font-medium text-gray-900 mb-3">包含服务：</h4>
          <div className="flex flex-wrap gap-2">
            {services.map((service, index) => (
              <Badge key={index} variant="secondary" size="sm">
                {service}
              </Badge>
            ))}
          </div>
        </div>
        
        {/* 查看详情按钮 */}
        <Button asChild className="w-full">
          <Link href={href}>
            了解详情
          </Link>
        </Button>
      </div>
    </Card>
  );
};