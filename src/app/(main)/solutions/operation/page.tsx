/**
 * 企业持续运营支持页面
 * 
 * 针对已在中国设立公司的外国企业，提供持续的运营支持服务。
 * 包含服务清单、工作流程、成功案例和上下文联系表单。
 */

import React from 'react';
import { SolutionPackageCard } from '@/components/solutions/SolutionPackageCard';

export default function OperationSolutionPage() {
  const services = [
    {
      id: 'financial-outsourcing',
      name: '财税托管',
      description: '提供专业的财务和税务管理服务',
      href: '/services/financial-outsourcing',
    },
    {
      id: 'cross-border-funds',
      name: '跨境资金流动',
      description: '协助处理日常跨境资金流动和外汇管理',
      href: '/services/cross-border-funds-flow',
    },
    {
      id: 'tax-compliance',
      name: '税务合规',
      description: '确保税务合规，优化税务结构',
      href: '/services/tax-compliance',
    },
    {
      id: 'hr-visa',
      name: '人员与签证',
      description: '协助外籍员工续签和管理',
      href: '/services/hr-visa',
    },
    {
      id: 'industry-licensing',
      name: '行业准入',
      description: '协助获得特定行业的经营许可',
      href: '/services/industry-licensing',
    },
    {
      id: 'intellectual-property',
      name: '知识产权',
      description: '保护和管理知识产权资产',
      href: '/services/intellectual-property',
    },
    {
      id: 'digital-infrastructure',
      name: '数字基建',
      description: '建立数字化运营基础设施',
      href: '/services/digital-infrastructure',
    },
    {
      id: 'policy-subsidy',
      name: '政策咨询',
      description: '获取政府政策支持和补贴',
      href: '/services/policy-subsidy',
    },
  ];

  const workflow = [
    {
      step: 1,
      title: '现状评估',
      description: '评估企业当前运营状况，识别改进机会',
      duration: '1-2个工作日',
    },
    {
      step: 2,
      title: '方案制定',
      description: '制定个性化的运营优化方案',
      duration: '3-5个工作日',
    },
    {
      step: 3,
      title: '服务实施',
      description: '按照方案逐步实施各项服务',
      duration: '根据服务类型',
    },
    {
      step: 4,
      title: '合规监控',
      description: '持续监控合规状况，及时调整',
      duration: '持续监控',
    },
    {
      step: 5,
      title: '绩效优化',
      description: '定期评估绩效，持续优化运营',
      duration: '月度评估',
    },
    {
      step: 6,
      title: '长期支持',
      description: '提供长期的专业咨询和支持服务',
      duration: '持续服务',
    },
  ];

  const caseStudies = [
    {
      id: 'european-retail',
      title: '欧洲零售品牌中国运营优化',
      company: 'Retail Europe',
      industry: '零售',
      href: '/case-studies/european-retail-optimization',
    },
    {
      id: 'asian-tech',
      title: '亚洲科技公司中国合规管理',
      company: 'Tech Asia',
      industry: '科技',
      href: '/case-studies/asian-tech-compliance',
    },
    {
      id: 'american-service',
      title: '美国服务公司中国业务扩展',
      company: 'Service USA',
      industry: '专业服务',
      href: '/case-studies/american-service-expansion',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SolutionPackageCard
          title="企业持续运营支持"
          description="为已在中国设立公司的外国企业提供持续的运营支持服务，包括财税托管、税务合规、人员管理、行业准入等全方位服务，确保您的业务在中国市场持续稳定发展。"
          services={services}
          workflow={workflow}
          caseStudies={caseStudies}
          contactSubject="企业持续运营支持咨询"
        />
      </div>
    </div>
  );
}
