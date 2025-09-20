/**
 * 案例研究卡片组件
 * 
 * 用于展示成功案例的卡片组件，基于UI轮子组件构建
 * 
 * @example
 * ```tsx
 * <CaseStudyCard 
 *   title="案例标题"
 *   company="公司名称"
 *   industry="行业"
 *   challenge="挑战"
 *   solution="解决方案"
 *   results={["结果1", "结果2"]}
 *   href="/case-studies/slug"
 * />
 * ```
 */

import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface CaseStudyCardProps {
  /**
   * 案例标题
   */
  title: string;
  
  /**
   * 公司名称
   */
  company: string;
  
  /**
   * 行业类型
   */
  industry: string;
  
  /**
   * 面临的挑战
   */
  challenge: string;
  
  /**
   * 解决方案
   */
  solution: string;
  
  /**
   * 取得的成果
   */
  results: string[];
  
  /**
   * 案例详情链接
   */
  href: string;
  
  /**
   * 卡片变体
   * @default 'preview'
   */
  variant?: 'preview' | 'full';
  
  /**
   * 自定义CSS类名
   */
  className?: string;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ 
  title,
  company,
  industry,
  challenge,
  solution,
  results,
  href,
  variant = 'preview',
  className 
}) => {
  return (
    <Card className={cn('hover:shadow-lg transition-shadow', className)}>
      <div className="p-6">
        {/* 行业标签 */}
        <div className="mb-3">
          <Badge variant="outline" size="sm">
            {industry}
          </Badge>
        </div>
        
        {/* 案例标题 */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        
        {/* 公司信息 */}
        <p className="text-sm text-gray-500 mb-4">
          {company}
        </p>
        
        {variant === 'full' ? (
          /* 完整版本 */
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">挑战：</h4>
              <p className="text-gray-600 text-sm">{challenge}</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">解决方案：</h4>
              <p className="text-gray-600 text-sm">{solution}</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">成果：</h4>
              <ul className="text-gray-600 text-sm space-y-1">
                {results.map((result, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          /* 预览版本 */
          <div className="space-y-3">
            <div>
              <h4 className="font-medium text-gray-900 text-sm">挑战：</h4>
              <p className="text-gray-600 text-sm line-clamp-2">{challenge}</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 text-sm">解决方案：</h4>
              <p className="text-gray-600 text-sm line-clamp-2">{solution}</p>
            </div>
          </div>
        )}
        
        {/* 查看详情按钮 */}
        <div className="mt-6">
          <Button asChild variant="outline" className="w-full">
            <Link href={href}>
              查看完整案例
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};