/**
 * 科技与软件行业页面
 * 
 * 专门为TMT（科技、媒体、电信）行业企业提供专业解决方案
 * 
 * @example
 * ```tsx
 * <TechnologyIndustryPage />
 * ```
 */

import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ContactForm } from '@/components/forms/ContactForm';

export default function TechnologyIndustryPage() {
  const services = [
    {
      title: '互联网信息服务许可',
      description: 'ICP许可证、EDI许可证、SP许可证等互联网业务资质',
      features: ['ICP经营许可证申请', 'EDI许可证办理', 'SP许可证申请', '网站备案服务']
    },
    {
      title: '软件著作权登记',
      description: '软件产品登记、软件企业认定、高新技术企业认定',
      features: ['软件著作权申请', '软件产品登记', '软件企业认定', '高新技术企业认定']
    },
    {
      title: '数据安全合规',
      description: '数据安全法合规、个人信息保护、网络安全等级保护',
      features: ['数据安全法合规', '个人信息保护认证', '等保三级认证', '数据出境安全评估']
    },
    {
      title: '知识产权保护',
      description: '专利、商标、著作权等知识产权申请和保护',
      features: ['发明专利代理', '商标注册申请', '著作权登记', '知识产权维权']
    }
  ];

  const caseStudies = [
    {
      title: '德国AI公司6个月完成中国落地',
      company: 'TechAI GmbH',
      industry: '人工智能',
      challenge: '需要在中国设立研发中心，申请相关资质',
      solution: '协助完成WFOE设立、ICP许可证申请、软件著作权登记',
      result: '6个月内完成所有手续，顺利开展业务'
    },
    {
      title: '美国SaaS公司快速获得ICP许可证',
      company: 'CloudSoft Inc.',
      industry: '云计算',
      challenge: '需要在中国提供SaaS服务，需要相关许可',
      solution: '协助申请ICP许可证、EDI许可证，完成数据合规',
      result: '3个月内获得所有必要许可，业务顺利上线'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero区域 */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center text-white">
            <div className="text-6xl mb-4">💻</div>
            <h1 className="text-4xl font-bold mb-4">
              科技与软件 (TMT) 行业解决方案
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              为互联网、软件、人工智能等科技企业提供专业的中国落地和运营解决方案
            </p>
          </div>
        </div>
      </div>

      {/* 行业特点 */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              科技行业特点与挑战
            </h2>
            <p className="text-xl text-gray-600">
              科技企业在中国开展业务面临独特的监管环境和合规要求
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">资质要求复杂</h3>
              <p className="text-gray-600">需要多种许可证和资质认证</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">数据安全严格</h3>
              <p className="text-gray-600">数据安全法和个人信息保护要求</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">变化速度快</h3>
              <p className="text-gray-600">技术更新快，监管政策调整频繁</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">竞争激烈</h3>
              <p className="text-gray-600">需要快速获得市场准入资格</p>
            </div>
          </div>
        </div>
      </div>

      {/* 专业服务 */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              专业服务领域
            </h2>
            <p className="text-xl text-gray-600">
              我们为科技企业提供全方位的专业服务
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <svg className="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* 成功案例 */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              成功案例
            </h2>
            <p className="text-xl text-gray-600">
              看看我们如何帮助科技企业成功落地中国
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {caseStudy.title}
                </h3>
                <div className="text-sm text-gray-500 mb-4">
                  {caseStudy.company} • {caseStudy.industry}
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-900">挑战：</h4>
                    <p className="text-gray-600">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">解决方案：</h4>
                    <p className="text-gray-600">{caseStudy.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">结果：</h4>
                    <p className="text-gray-600">{caseStudy.result}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* 联系咨询 */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              获取科技行业专业咨询
            </h2>
            <p className="text-xl text-gray-600">
              我们的专业团队将为您提供定制化的科技行业解决方案
            </p>
          </div>
          
          <ContactForm 
            defaultSubject="科技行业解决方案咨询"
            variant="full"
          />
        </div>
      </div>
    </div>
  );
}
