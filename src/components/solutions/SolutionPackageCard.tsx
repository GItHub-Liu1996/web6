/**
 * 解决方案包卡片组件
 * 
 * 用于在解决方案页面展示服务包，包含：
 * - 方案标题和描述
 * - 服务清单
 * - 工作流程
 * - 相关案例
 * - 上下文联系表单
 * 
 * @example
 * ```tsx
 * <SolutionPackageCard
 *   title="企业落地启动方案"
 *   description="为外国企业在中国设立公司提供一站式服务"
 *   services={services}
 *   workflow={workflow}
 *   caseStudies={caseStudies}
 *   contactSubject="企业落地启动方案咨询"
 * />
 * ```
 */

import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface Service {
  id: string;
  name: string;
  description: string;
  href: string;
}

interface WorkflowStep {
  step: number;
  title: string;
  description: string;
  duration?: string;
}

interface CaseStudy {
  id: string;
  title: string;
  company: string;
  industry: string;
  href: string;
}

interface SolutionPackageCardProps {
  /**
   * 方案标题
   */
  title: string;
  /**
   * 方案描述
   */
  description: string;
  /**
   * 包含的服务列表
   */
  services: Service[];
  /**
   * 工作流程步骤
   */
  workflow: WorkflowStep[];
  /**
   * 相关成功案例
   */
  caseStudies: CaseStudy[];
  /**
   * 联系表单的默认主题
   */
  contactSubject: string;
  /**
   * 自定义样式类名
   */
  className?: string;
}

export const SolutionPackageCard: React.FC<SolutionPackageCardProps> = ({
  title,
  description,
  services,
  workflow,
  caseStudies,
  contactSubject,
  className,
}) => {
  return (
    <div className={cn('space-y-8', className)}>
      {/* 方案介绍 */}
      <Card className="p-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
        </div>
      </Card>

      {/* 服务清单 */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">服务清单</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <div key={service.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-2">{service.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{service.description}</p>
              <Link
                href={service.href}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                了解详情 →
              </Link>
            </div>
          ))}
        </div>
      </Card>

      {/* 工作流程图 */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">工作流程</h2>
        <div className="space-y-4">
          {workflow.map((step, index) => (
            <div key={step.step} className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                {step.step}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-gray-600 mb-1">{step.description}</p>
                {step.duration && (
                  <p className="text-sm text-gray-500">预计时间: {step.duration}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* 相关案例 */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">成功案例</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((caseStudy) => (
            <div key={caseStudy.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">{caseStudy.title}</h3>
              <div className="text-sm text-gray-600 mb-3">
                <p className="font-medium">{caseStudy.company}</p>
                <p>{caseStudy.industry}</p>
              </div>
              <Link
                href={caseStudy.href}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                查看案例 →
              </Link>
            </div>
          ))}
        </div>
      </Card>

      {/* 上下文联系表单 */}
      <Card className="p-6 bg-blue-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">开始您的中国业务之旅</h2>
          <p className="text-gray-600 mb-6">
            我们的专业团队将为您提供个性化的解决方案，确保您的业务在中国市场成功落地。
          </p>
          <Button asChild size="lg">
            <Link href={`/contact?subject=${encodeURIComponent(contactSubject)}`}>
              立即咨询 {title}
            </Link>
          </Button>
        </div>
      </Card>
    </div>
  );
};
