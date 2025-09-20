/**
 * 联系表单组件
 * 
 * 最基础结构，等待详细设计
 * 
 * @example
 * ```tsx
 * <ContactForm />
 * ```
 */

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

interface ContactFormProps {
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ 
  className 
}) => {
  return (
    <Card className={className}>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          联系我们
        </h3>
        <form className="space-y-4">
          <Input placeholder="您的姓名" />
          <Input placeholder="您的邮箱" type="email" />
          <Input placeholder="您的电话" type="tel" />
          <Button className="w-full">
            提交咨询
          </Button>
        </form>
        <p className="text-sm text-gray-500 mt-4">
          表单功能待开发...
        </p>
      </div>
    </Card>
  );
};