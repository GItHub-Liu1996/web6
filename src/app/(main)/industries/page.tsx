/**
 * 行业方案概览页面
 * 
 * 展示所有行业领域的解决方案概览
 * 
 * @example
 * ```tsx
 * <IndustriesPage />
 * ```
 */

import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function IndustriesPage() {
  const industries = [
    {
      slug: 'technology',
      title: '科技与软件 (TMT)',
      description: '互联网、软件、人工智能等科技企业的专业解决方案',
      features: ['互联网信息服务许可', '软件著作权登记', '高新技术企业认定', '数据安全合规'],
      icon: '💻'
    },
    {
      slug: 'e-commerce',
      title: '电子商务与零售',
      description: '跨境电商、零售、品牌运营等电商企业的专业服务',
      features: ['跨境电商备案', '食品经营许可', '品牌商标注册', '电商平台入驻'],
      icon: '🛒'
    },
    {
      slug: 'professional-services',
      title: '专业服务业',
      description: '咨询、法律、财务等专业服务机构的合规方案',
      features: ['专业资质申请', '行业准入许可', '税务合规优化', '知识产权保护'],
      icon: '📋'
    },
    {
      slug: 'advanced-manufacturing',
      title: '高端制造业',
      description: '精密制造、工业4.0、智能制造等制造业的专业服务',
      features: ['生产许可证', '质量管理体系', '环保合规认证', '供应链管理'],
      icon: '🏭'
    },
    {
      slug: 'medical-devices',
      title: '医疗器械',
      description: '医疗设备、生物技术、健康科技等医疗企业的专业方案',
      features: ['医疗器械注册', '临床试验管理', 'GMP认证', '医疗数据合规'],
      icon: '🏥'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero区域 */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              行业解决方案
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              为不同行业领域的企业提供专业、定制化的中国落地和运营解决方案
            </p>
          </div>
        </div>
      </div>

      {/* 行业列表 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <Card key={industry.slug} className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {industry.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {industry.description}
                </p>
              </div>
              
              <div className="space-y-2 mb-6">
                {industry.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-600">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <Button asChild>
                  <Link href={`/industries/${industry.slug}`}>
                    了解详情
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA区域 */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              找不到适合您行业的解决方案？
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              我们的专业团队可以为您定制专属的行业解决方案
            </p>
            <Button asChild variant="outlined" className="bg-white text-blue-600 hover:bg-gray-50">
              <Link href="/contact">
                获取定制方案
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
