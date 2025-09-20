/**
 * 成功案例卡片组件
 * 
 * 用于在多处展示案例预览，包含：
 * - 案例标题和公司信息
 * - 行业和挑战描述
 * - 解决方案摘要
 * - 结果和成果
 * - 查看详情链接
 * 
 * @example
 * ```tsx
 * <CaseStudyCard
 *   id="case-1"
 *   title="德国制造企业成功进入中国市场"
 *   company="TechCorp Germany"
 *   industry="制造业"
 *   challenge="需要在中国设立生产基地"
 *   solution="提供完整的公司注册和运营支持"
 *   results={["3个月内完成注册", "获得生产许可证", "建立本地团队"]}
 *   href="/case-studies/german-manufacturing-success"
 * />
 * ```
 */

import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface CaseStudyCardProps {
  /**
   * 案例唯一标识符
   */
  id: string;
  /**
   * 案例标题
   */
  title: string;
  /**
   * 公司名称
   */
  company: string;
  /**
   * 所属行业
   */
  industry: string;
  /**
   * 面临的挑战
   */
  challenge: string;
  /**
   * 解决方案摘要
   */
  solution: string;
  /**
   * 取得的成果列表
   */
  results: string[];
  /**
   * 案例详情页链接
   */
  href: string;
  /**
   * 自定义样式类名
   */
  className?: string;
  /**
   * 是否显示完整信息（用于列表页）还是简化版本（用于首页预览）
   */
  variant?: 'full' | 'preview';
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  id,
  title,
  company,
  industry,
  challenge,
  solution,
  results,
  href,
  className,
  variant = 'preview',
}) => {
  if (variant === 'preview') {
    return (
      <Card className={cn('p-6 hover:shadow-lg transition-shadow', className)}>
        <div className="space-y-4">
          {/* 公司信息 */}
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
              <p className="text-sm text-gray-600">{company}</p>
              <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full mt-1">
                {industry}
              </span>
            </div>
          </div>

          {/* 挑战和解决方案 */}
          <div className="space-y-3">
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-1">挑战</h4>
              <p className="text-sm text-gray-600">{challenge}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-1">解决方案</h4>
              <p className="text-sm text-gray-600">{solution}</p>
            </div>
          </div>

          {/* 主要成果 */}
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-2">主要成果</h4>
            <ul className="space-y-1">
              {results.slice(0, 2).map((result, index) => (
                <li key={index} className="text-sm text-gray-600 flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {result}
                </li>
              ))}
              {results.length > 2 && (
                <li className="text-sm text-gray-500">
                  +{results.length - 2} 更多成果
                </li>
              )}
            </ul>
          </div>

          {/* 查看详情按钮 */}
          <div className="pt-4 border-t border-gray-200">
            <Button asChild variant="outline" className="w-full">
              <Link href={href}>查看完整案例</Link>
            </Button>
          </div>
        </div>
      </Card>
    );
  }

  // 完整版本（用于案例列表页）
  return (
    <Card className={cn('p-8 hover:shadow-lg transition-shadow', className)}>
      <div className="space-y-6">
        {/* 标题和公司信息 */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
          <p className="text-lg text-gray-600 mb-3">{company}</p>
          <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">
            {industry}
          </span>
        </div>

        {/* 挑战和解决方案 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">面临的挑战</h3>
            <p className="text-gray-600">{challenge}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">我们的解决方案</h3>
            <p className="text-gray-600">{solution}</p>
          </div>
        </div>

        {/* 取得的成果 */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">取得的成果</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {results.map((result, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{result}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 行动按钮 */}
        <div className="text-center pt-6 border-t border-gray-200">
          <Button asChild size="lg">
            <Link href={href}>查看完整案例研究</Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};
