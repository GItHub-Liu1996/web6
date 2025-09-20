/**
 * GoChinaAdvisors (仮) 首页
 * 
 * 严格按照设计蓝图实现：
 * - Hero区域：价值主张 + 两个核心CTA按钮
 * - 客户痛点区：核心痛点展示
 * - 核心解决方案区：启动方案和运营支持
 * - 信任背书区：成功案例展示
 * - 资源中心预览区：最新博客文章
 * - 最终CTA区：联系咨询引导
 */

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { CaseStudyCard } from '@/components/case-studies/CaseStudyCard';
import { SITE_CONFIG } from '@/lib/constants';

export default function Home() {
  // 客户痛点数据
  const painPoints = [
    {
      title: '复杂的注册流程',
      description: '不了解中国公司注册的具体要求和流程',
      solution: '查看我们的企业落地启动方案',
      href: '/solutions/startup',
    },
    {
      title: '税务合规难题',
      description: '担心税务申报和合规问题',
      solution: '了解我们的税务合规服务',
      href: '/services/tax-compliance',
    },
    {
      title: '跨境资金流动',
      description: '不知道如何处理跨境资金流动',
      solution: '查看跨境资金流动解决方案',
      href: '/services/cross-border-funds-flow',
    },
    {
      title: '人员签证问题',
      description: '外籍员工签证和居留许可办理困难',
      solution: '了解人员与签证服务',
      href: '/services/hr-visa',
    },
  ];

  // 核心解决方案数据
  const solutions = [
    {
      title: '企业落地启动方案',
      description: '为外国企业在中国设立公司提供一站式专业服务，从工商注册到银行开户，确保您的业务在中国市场成功落地。',
      href: '/solutions/startup',
      services: ['主体资格', '银行账户开设', '跨境资金流动', '税务登记'],
      cta: '咨询启动方案',
    },
    {
      title: '企业持续运营支持',
      description: '为已在中国设立公司的外国企业提供持续的运营支持服务，包括财税托管、合规管理等全方位服务。',
      href: '/solutions/operation',
      services: ['财税托管', '税务合规', '人员管理', '行业准入'],
      cta: '获取运营支持',
    },
  ];

  // 成功案例数据
  const caseStudies = [
    {
      id: 'german-tech',
      title: '德国科技公司成功进入中国市场',
      company: 'TechCorp Germany',
      industry: '科技',
      challenge: '需要在中国设立研发中心和生产基地',
      solution: '提供完整的公司注册和运营支持',
      results: ['3个月内完成注册', '获得生产许可证', '建立本地团队'],
      href: '/case-studies/german-tech-success',
    },
    {
      id: 'us-manufacturing',
      title: '美国制造企业建立中国生产基地',
      company: 'Manufacturing USA',
      industry: '制造业',
      challenge: '需要在中国设立生产基地并处理复杂的供应链',
      solution: '协助完成注册、获得生产许可和建立供应链',
      results: ['6个月内投产', '获得ISO认证', '建立完整供应链'],
      href: '/case-studies/us-manufacturing-china',
    },
    {
      id: 'uk-finance',
      title: '英国金融服务公司获得中国牌照',
      company: 'Finance UK',
      industry: '金融服务',
      challenge: '需要获得中国金融服务牌照并建立合规体系',
      solution: '协助获得牌照并建立完整的合规管理体系',
      results: ['获得金融服务牌照', '建立合规体系', '成功开展业务'],
      href: '/case-studies/uk-finance-license',
    },
  ];

  // 最新博客文章数据
  const blogPosts = [
    {
      title: '2024年中国外商投资企业注册指南',
      excerpt: '详细介绍2024年外国投资者在中国设立企业的最新政策和流程...',
      href: '/blog/china-foreign-investment-guide-2024',
      category: '政策解读',
      readTime: '8分钟',
    },
    {
      title: 'WFOE vs 合资企业：如何选择最适合的企业类型',
      excerpt: '分析WFOE和合资企业的优缺点，帮助您做出最佳选择...',
      href: '/blog/wofe-vs-joint-venture-comparison',
      category: '企业类型',
      readTime: '6分钟',
    },
    {
      title: '中国银行开户全攻略：从准备到成功',
      excerpt: '详细指导如何在中国开设企业银行账户，包括所需文件和流程...',
      href: '/blog/china-bank-account-opening-guide',
      category: '银行服务',
      readTime: '10分钟',
    },
    {
      title: '跨境资金流动合规指南',
      excerpt: '了解中国跨境资金流动的最新政策和合规要求...',
      href: '/blog/cross-border-funds-compliance',
      category: '资金管理',
      readTime: '7分钟',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero区域 */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            让您的业务在中国市场
            <span className="text-blue-600">成功落地</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            为外国用户在中国注册和运营公司提供一站式专业服务。我们的专业团队将为您提供个性化的解决方案，确保您的业务在中国市场成功落地。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-4">
              <Link href="/solutions/startup">咨询启动方案</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4">
              <Link href="/solutions/operation">获取运营支持</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 客户痛点区 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              您是否正面临以下挑战？
            </h2>
            <p className="text-lg text-gray-600">
              我们理解外国企业在中国市场面临的挑战，并提供专业的解决方案
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {painPoints.map((point, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{point.title}</h3>
                <p className="text-gray-600 mb-4">{point.description}</p>
                <Link
                  href={point.href}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  {point.solution} →
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 核心解决方案区 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              我们的核心解决方案
            </h2>
            <p className="text-lg text-gray-600">
              针对不同阶段的企业需求，提供专业的解决方案
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">包含服务：</h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.services.map((service, serviceIndex) => (
                      <span
                        key={serviceIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link href={solution.href}>{solution.cta}</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 信任背书区 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              成功案例
            </h2>
            <p className="text-lg text-gray-600">
              看看我们如何帮助其他企业在中国市场取得成功
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard
                key={caseStudy.id}
                {...caseStudy}
                variant="preview"
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/case-studies">查看所有成功案例</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 资源中心预览区 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              资源中心
            </h2>
            <p className="text-lg text-gray-600">
              获取最新的政策解读、行业洞察和实用指南
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogPosts.map((post, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full mb-2">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.readTime}</span>
                    <Link
                      href={post.href}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      阅读更多 →
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/blog">浏览所有文章</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 最终CTA区 */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            准备开始您的中国业务之旅？
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            我们的专业团队将为您提供个性化的解决方案，确保您的业务在中国市场成功落地。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4">
              <Link href="/contact">立即咨询</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/about">了解我们</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}