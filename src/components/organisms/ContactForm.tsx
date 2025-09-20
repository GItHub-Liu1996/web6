/**
 * 联系表单组件
 * 
 * 用于收集用户咨询信息的表单组件，基于UI轮子组件构建
 * 
 * @example
 * ```tsx
 * <ContactForm 
 *   defaultSubject="咨询主题"
 *   variant="full"
 * />
 * ```
 */

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { cn } from '@/lib/utils';

interface ContactFormProps {
  /**
   * 默认咨询主题
   */
  defaultSubject?: string;
  
  /**
   * 表单变体
   * @default 'full'
   */
  variant?: 'full' | 'simple';
  
  /**
   * 自定义CSS类名
   */
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ 
  defaultSubject = '',
  variant = 'full',
  className 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: defaultSubject,
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 表单提交逻辑待开发
    console.log('表单提交:', formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className={cn('', className)}>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          联系我们
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* 基本信息 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              placeholder="您的姓名 *"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
            />
            <Input
              placeholder="您的邮箱 *"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              placeholder="您的电话"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
            />
            <Input
              placeholder="公司名称"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
            />
          </div>
          
          {/* 咨询主题 */}
          <Input
            placeholder="咨询主题 *"
            value={formData.subject}
            onChange={(e) => handleInputChange('subject', e.target.value)}
            required
          />
          
          {/* 详细需求 */}
          {variant === 'full' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                详细需求
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={4}
                placeholder="请详细描述您的需求..."
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
              />
            </div>
          )}
          
          {/* 提交按钮 */}
          <Button type="submit" className="w-full">
            提交咨询
          </Button>
          
          <p className="text-sm text-gray-500 text-center">
            我们将在24小时内回复您的咨询
          </p>
        </form>
      </div>
    </Card>
  );
};