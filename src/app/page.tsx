/**
 * Go China Advisors (仮) 首页
 * 
 * 使用新的组件架构构建，展示组件组合使用
 * 
 * @example
 * ```tsx
 * <Home />
 * ```
 */

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Container } from '@/components/molecules/Container';
import { Grid } from '@/components/molecules/Grid';
import { Stack } from '@/components/molecules/Stack';
import { BlogCard } from '@/components/molecules/BlogCard';
import { CaseStudyCard } from '@/components/molecules/CaseStudyCard';
import { SolutionPackageCard } from '@/components/molecules/SolutionPackageCard';

export default function Home() {
  // 示例数据
  const solutions = [
    {
      title: '企业落地启动方案',
      description: '为外国企业在中国设立公司提供一站式专业服务',
      services: ['主体资格', '银行账户开设', '跨境资金流动', '税务登记'],
      href: '/solutions/startup',
    },
    {
      title: '企业持续运营支持',
      description: '为已在中国设立公司的外国企业提供持续的运营支持服务',
      services: ['财税托管', '税务合规', '人员管理', '行业准入'],
      href: '/solutions/operation',
    },
  ];

  const caseStudies = [
    {
      title: '德国科技公司成功进入中国市场',
      company: 'TechCorp Germany',
      industry: '科技',
      challenge: '需要在中国设立研发中心和生产基地',
      solution: '提供完整的公司注册和运营支持',
      results: ['3个月内完成注册', '获得生产许可证', '建立本地团队'],
      href: '/case-studies/german-tech-success',
    },
    {
      title: '美国制造企业建立中国生产基地',
      company: 'Manufacturing USA',
      industry: '制造业',
      challenge: '需要在中国设立生产基地并处理复杂的供应链',
      solution: '协助完成注册、获得生产许可和建立供应链',
      results: ['6个月内投产', '获得ISO认证', '建立完整供应链'],
      href: '/case-studies/us-manufacturing-china',
    },
  ];

  const blogPosts = [
    {
      title: '2024年中国外商投资企业注册指南',
      excerpt: '详细介绍2024年外国投资者在中国设立企业的最新政策和流程',
      category: '政策解读',
      readTime: '8分钟',
      href: '/blog/china-foreign-investment-guide-2024',
    },
    {
      title: 'WFOE vs 合资企业：如何选择最适合的企业类型',
      excerpt: '分析WFOE和合资企业的优缺点，帮助您做出最佳选择',
      category: '企业类型',
      readTime: '6分钟',
      href: '/blog/wofe-vs-joint-venture-comparison',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero区域 */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <Container>
          <Stack direction="vertical" spacing="lg" align="center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 text-center">
              让您的业务在中国市场
              <span className="text-blue-600">成功落地</span>
            </h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl">
              为外国用户在中国注册和运营公司提供一站式专业服务。我们的专业团队将为您提供个性化的解决方案。
            </p>
            <Stack direction="horizontal" spacing="md" align="center">
              <Button asChild size="lg" className="text-lg px-8 py-4">
                <Link href="/solutions/startup">咨询启动方案</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4">
                <Link href="/solutions/operation">获取运营支持</Link>
              </Button>
            </Stack>
          </Stack>
        </Container>
      </section>

      {/* 核心解决方案区 */}
      <section className="py-16 bg-gray-50">
        <Container>
          <Stack direction="vertical" spacing="lg" align="center">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                我们的核心解决方案
              </h2>
              <p className="text-lg text-gray-600">
                针对不同阶段的企业需求，提供专业的解决方案
              </p>
            </div>
            
            <Grid cols={2} gap="lg">
              {solutions.map((solution, index) => (
                <SolutionPackageCard
                  key={index}
                  title={solution.title}
                  description={solution.description}
                  services={solution.services}
                  href={solution.href}
                />
              ))}
            </Grid>
          </Stack>
        </Container>
      </section>

      {/* 成功案例区 */}
      <section className="py-16 bg-white">
        <Container>
          <Stack direction="vertical" spacing="lg" align="center">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                成功案例
              </h2>
              <p className="text-lg text-gray-600">
                看看我们如何帮助其他企业在中国市场取得成功
              </p>
            </div>
            
            <Grid cols={2} gap="lg">
              {caseStudies.map((caseStudy, index) => (
                <CaseStudyCard
                  key={index}
                  title={caseStudy.title}
                  company={caseStudy.company}
                  industry={caseStudy.industry}
                  challenge={caseStudy.challenge}
                  solution={caseStudy.solution}
                  results={caseStudy.results}
                  href={caseStudy.href}
                  variant="preview"
                />
              ))}
            </Grid>
          </Stack>
        </Container>
      </section>

      {/* 资源中心预览区 */}
      <section className="py-16 bg-gray-50">
        <Container>
          <Stack direction="vertical" spacing="lg" align="center">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                资源中心
              </h2>
              <p className="text-lg text-gray-600">
                获取最新的政策解读、行业洞察和实用指南
              </p>
            </div>
            
            <Grid cols={2} gap="lg">
              {blogPosts.map((post, index) => (
                <BlogCard
                  key={index}
                  title={post.title}
                  excerpt={post.excerpt}
                  category={post.category}
                  readTime={post.readTime}
                  href={post.href}
                />
              ))}
            </Grid>
          </Stack>
        </Container>
      </section>

      {/* 最终CTA区 */}
      <section className="py-16 bg-blue-600">
        <Container>
          <Stack direction="vertical" spacing="lg" align="center">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                准备开始您的中国业务之旅？
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl">
                我们的专业团队将为您提供个性化的解决方案，确保您的业务在中国市场成功落地。
              </p>
            </div>
            
            <Stack direction="horizontal" spacing="md" align="center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4">
                <Link href="/contact">立即咨询</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-600">
                <Link href="/about">了解我们</Link>
              </Button>
            </Stack>
          </Stack>
        </Container>
      </section>
    </div>
  );
}