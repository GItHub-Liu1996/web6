/**
 * 企业落地启动方案页面
 * 
 * 针对需要在中国设立公司的外国企业，提供完整的启动解决方案。
 * 包含服务清单、工作流程、成功案例和上下文联系表单。
 */

import React from 'react';
import { SolutionPackageCard } from '@/components/solutions/SolutionPackageCard';

export default function StartupSolutionPage() {
  const services = [
    {
      id: 'legal-entity',
      name: '主体资格',
      description: '协助选择最适合的企业类型，完成工商注册',
      href: '/services/legal-entity',
    },
    {
      id: 'bank-account',
      name: '银行账户开设',
      description: '协助开设企业银行账户，建立资金通道',
      href: '/services/bank-account-opening',
    },
    {
      id: 'cross-border-funds',
      name: '跨境资金流动',
      description: '协助处理初始投资和后续资金流动',
      href: '/services/cross-border-funds-flow',
    },
    {
      id: 'tax-registration',
      name: '税务登记',
      description: '完成税务登记，建立合规税务体系',
      href: '/services/tax-compliance',
    },
    {
      id: 'hr-visa',
      name: '人员与签证',
      description: '协助外籍员工办理工作签证和居留许可',
      href: '/services/hr-visa',
    },
    {
      id: 'premises',
      name: '经营场所',
      description: '协助寻找和租赁合适的办公场所',
      href: '/services/premises-property',
    },
  ];

  const workflow = [
    {
      step: 1,
      title: '需求评估',
      description: '深入了解您的业务需求，制定个性化方案',
      duration: '1-2个工作日',
    },
    {
      step: 2,
      title: '文件准备',
      description: '协助准备所有必要的注册文件和证明材料',
      duration: '3-5个工作日',
    },
    {
      step: 3,
      title: '工商注册',
      description: '提交注册申请，完成工商登记手续',
      duration: '5-10个工作日',
    },
    {
      step: 4,
      title: '银行开户',
      description: '协助开设企业银行账户，建立资金通道',
      duration: '3-7个工作日',
    },
    {
      step: 5,
      title: '税务登记',
      description: '完成税务登记，建立合规税务体系',
      duration: '2-5个工作日',
    },
    {
      step: 6,
      title: '后续支持',
      description: '提供持续的合规咨询和运营支持',
      duration: '持续服务',
    },
  ];

  const caseStudies = [
    {
      id: 'german-tech',
      title: '德国科技公司成功进入中国市场',
      company: 'TechCorp Germany',
      industry: '科技',
      href: '/case-studies/german-tech-success',
    },
    {
      id: 'us-manufacturing',
      title: '美国制造企业建立中国生产基地',
      company: 'Manufacturing USA',
      industry: '制造业',
      href: '/case-studies/us-manufacturing-china',
    },
    {
      id: 'uk-finance',
      title: '英国金融服务公司获得中国牌照',
      company: 'Finance UK',
      industry: '金融服务',
      href: '/case-studies/uk-finance-license',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SolutionPackageCard
          title="企业落地启动方案"
          description="为外国企业在中国设立公司提供一站式专业服务，从工商注册到银行开户，从税务登记到人员签证，我们为您提供完整的启动解决方案，确保您的业务在中国市场成功落地。"
          services={services}
          workflow={workflow}
          caseStudies={caseStudies}
          contactSubject="企业落地启动方案咨询"
        />
      </div>
    </div>
  );
}
