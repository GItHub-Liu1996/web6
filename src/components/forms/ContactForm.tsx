/**
 * 联系表单组件
 * 
 * 支持上下文感知的联系表单，能够：
 * - 接收URL查询参数自动填充咨询主题
 * - 收集用户需求和联系信息
 * - 与Zoho CRM集成，自动创建潜在客户
 * - 支持多语言表单验证
 * 
 * @example
 * ```tsx
 * // 在解决方案页面使用，自动填充主题
 * <ContactForm defaultSubject="企业落地启动方案咨询" />
 * 
 * // 在联系页面使用，主题为空
 * <ContactForm />
 * ```
 */

'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import { cn } from '@/lib/utils';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  subject: string;
  serviceType: string;
  budget: string;
  timeline: string;
  message: string;
}

interface ContactFormProps {
  /**
   * 默认咨询主题
   */
  defaultSubject?: string;
  /**
   * 自定义样式类名
   */
  className?: string;
  /**
   * 是否显示完整表单（true）还是简化版本（false）
   */
  fullForm?: boolean;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  defaultSubject = '',
  className,
  fullForm = true,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    subject: defaultSubject,
    serviceType: '',
    budget: '',
    timeline: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // 从URL查询参数获取主题
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const subject = urlParams.get('subject');
      if (subject && !defaultSubject) {
        setFormData(prev => ({ ...prev, subject: decodeURIComponent(subject) }));
      }
    }
  }, [defaultSubject]);

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // 重置表单
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          country: '',
          subject: defaultSubject,
          serviceType: '',
          budget: '',
          timeline: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceTypes = [
    '企业落地启动方案',
    '企业持续运营支持',
    '主体资格',
    '银行账户开设',
    '跨境资金流动',
    '税务合规',
    '人员签证',
    '经营场所',
    '行业准入',
    '财税托管',
    '知识产权',
    '数字基建',
    '政策咨询',
  ];

  const budgetRanges = [
    '10万以下',
    '10-50万',
    '50-100万',
    '100-500万',
    '500万以上',
  ];

  const timelineOptions = [
    '1个月内',
    '1-3个月',
    '3-6个月',
    '6-12个月',
    '12个月以上',
  ];

  const countries = [
    '美国', '英国', '德国', '法国', '日本', '韩国', '新加坡', '澳大利亚',
    '加拿大', '意大利', '西班牙', '荷兰', '瑞士', '瑞典', '挪威', '丹麦',
    '其他',
  ];

  return (
    <Card className={cn('p-6', className)}>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">开始您的中国业务之旅</h2>
        <p className="text-gray-600">
          我们的专业团队将为您提供个性化的解决方案，确保您的业务在中国市场成功落地。
        </p>
      </div>

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <p className="text-green-800 font-medium">提交成功！我们将在24小时内与您联系。</p>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <p className="text-red-800 font-medium">提交失败，请稍后重试或直接联系我们。</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 基本信息 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="姓名 *"
            placeholder="请输入您的姓名"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            required
          />
          <Input
            label="邮箱 *"
            type="email"
            placeholder="请输入您的邮箱"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="电话"
            type="tel"
            placeholder="请输入您的电话"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
          />
          <Input
            label="公司名称"
            placeholder="请输入您的公司名称"
            value={formData.company}
            onChange={(e) => handleInputChange('company', e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">国家/地区</label>
            <select
              value={formData.country}
              onChange={(e) => handleInputChange('country', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">请选择您的国家/地区</option>
              {countries.map((country) => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>
          <Input
            label="咨询主题 *"
            placeholder="请输入您想咨询的主题"
            value={formData.subject}
            onChange={(e) => handleInputChange('subject', e.target.value)}
            required
          />
        </div>

        {fullForm && (
          <>
            {/* 服务需求 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">服务类型</label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => handleInputChange('serviceType', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">请选择服务类型</option>
                  {serviceTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">预算范围</label>
                <select
                  value={formData.budget}
                  onChange={(e) => handleInputChange('budget', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">请选择预算范围</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">期望时间</label>
                <select
                  value={formData.timeline}
                  onChange={(e) => handleInputChange('timeline', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">请选择期望时间</option>
                  {timelineOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* 详细需求 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">详细需求</label>
              <textarea
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                rows={4}
                placeholder="请详细描述您的需求和期望..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </>
        )}

        {/* 提交按钮 */}
        <div className="text-center">
          <Button
            type="submit"
            size="lg"
            loading={isSubmitting}
            loadingText="提交中..."
            className="w-full md:w-auto"
          >
            {isSubmitting ? '提交中...' : '提交咨询'}
          </Button>
        </div>
      </form>
    </Card>
  );
};
