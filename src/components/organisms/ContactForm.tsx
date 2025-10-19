import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/molecules/Container';
import { Stack } from '@/components/molecules/Stack';
import { Grid } from '@/components/molecules/Grid';
import { FormField } from '@/components/molecules/FormField';
import { ActionButton } from '@/components/molecules/ActionButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select';
import { Textarea } from '@/components/ui/Textarea';
import { Alert, AlertDescription } from '@/components/ui/Alert';
import { CheckCircle, AlertCircle } from 'lucide-react';

/**
 * ContactForm 联系表单组件
 * 
 * 深度咨询表单，与Zoho CRM强绑定，收集详细的客户需求和背景信息
 * 
 * @param className - 额外的CSS类名
 * @param onSubmit - 表单提交回调
 */
interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  country: string;
  service: string;
  subject: string;
  message: string;
  budget: string;
}

interface ContactFormProps {
  className?: string;
  onSubmit?: (data: ContactFormData) => Promise<void>;
}

export function ContactForm({ className, onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    service: '',
    subject: '',
    message: '',
    budget: ''
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // 清除该字段的错误
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    // 必填字段验证
    if (!formData.name.trim()) {
      newErrors.name = '姓名是必填项';
    }

    if (!formData.email.trim()) {
      newErrors.email = '邮箱是必填项';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '请输入有效的邮箱地址';
    }

    if (!formData.message.trim()) {
      newErrors.message = '详细需求是必填项';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // 默认提交到API
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('提交失败');
        }
      }

      setSubmitStatus('success');
      // 重置表单
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        country: '',
        service: '',
        subject: '',
        message: '',
        budget: ''
      });
    } catch (error) {
      console.error('表单提交错误:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceOptions = [
    { value: 'startup', label: '企业落地启动方案' },
    { value: 'operation', label: '企业持续运营支持' },
    { value: 'legalEntity', label: '主体资格' },
    { value: 'bankAccount', label: '银行账户开设' },
    { value: 'crossBorder', label: '跨境资金流动' },
    { value: 'taxCompliance', label: '税务合规' },
    { value: 'hrVisa', label: '人员签证' },
    { value: 'premises', label: '经营场所' },
    { value: 'industryLicensing', label: '行业准入' },
    { value: 'financialOutsourcing', label: '财税托管' },
    { value: 'intellectualProperty', label: '知识产权' },
    { value: 'digitalInfrastructure', label: '数字基建' },
    { value: 'policySubsidy', label: '政策咨询' },
    { value: 'other', label: '其他' }
  ];

  const budgetOptions = [
    { value: 'under-10k', label: '10万以下' },
    { value: '10k-50k', label: '10-50万' },
    { value: '50k-100k', label: '50-100万' },
    { value: '100k-500k', label: '100-500万' },
    { value: '500k-plus', label: '500万以上' },
    { value: 'not-sure', label: '不确定' }
  ];

  return (
    <Container maxWidth="lg" className={cn('py-8', className)}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            联系我们
          </CardTitle>
          <p className="text-center text-gray-600">
            获取专业的咨询服务，我们将为您提供最适合的解决方案
          </p>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 状态提示 */}
            {submitStatus === 'success' && (
              <Alert className="border-green-200 bg-green-50">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800">
                  表单提交成功！我们将在24小时内与您联系。
                </AlertDescription>
              </Alert>
            )}

            {submitStatus === 'error' && (
              <Alert className="border-red-200 bg-red-50">
                <AlertCircle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-800">
                  提交失败，请稍后重试或直接联系我们。
                </AlertDescription>
              </Alert>
            )}

            {/* 基本信息 */}
            <Stack spacing="lg">
              <h3 className="text-lg font-semibold text-gray-900">基本信息</h3>
              
              <Grid cols={{ default: 1, md: 2 }} gap="md">
                <FormField
                  label="姓名"
                  placeholder="请输入您的姓名"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required
                  error={errors.name}
                />

                <FormField
                  label="邮箱"
                  type="email"
                  placeholder="请输入您的邮箱地址"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                  error={errors.email}
                />

                <FormField
                  label="公司名称"
                  placeholder="请输入您的公司名称"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                />

                <FormField
                  label="电话"
                  type="tel"
                  placeholder="请输入您的电话号码"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                />
              </Grid>
            </Stack>

            {/* 服务信息 */}
            <Stack spacing="lg">
              <h3 className="text-lg font-semibold text-gray-900">服务信息</h3>
              
              <Grid cols={{ default: 1, md: 2 }} gap="md">
                <div className="space-y-2">
                  <label className="text-sm font-medium">国家/地区</label>
                  <Select value={formData.country} onValueChange={(value) => handleInputChange('country', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="请选择您的国家/地区" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="china">中国</SelectItem>
                      <SelectItem value="usa">美国</SelectItem>
                      <SelectItem value="uk">英国</SelectItem>
                      <SelectItem value="germany">德国</SelectItem>
                      <SelectItem value="japan">日本</SelectItem>
                      <SelectItem value="singapore">新加坡</SelectItem>
                      <SelectItem value="other">其他</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">感兴趣的服务</label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="请选择您感兴趣的服务" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </Grid>

              <div className="space-y-2">
                <label className="text-sm font-medium">预算范围</label>
                <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="请选择您的预算范围" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgetOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </Stack>

            {/* 咨询详情 */}
            <Stack spacing="lg">
              <h3 className="text-lg font-semibold text-gray-900">咨询详情</h3>
              
              <FormField
                label="咨询主题"
                placeholder="请简要描述您的咨询主题"
                value={formData.subject}
                onChange={(e) => handleInputChange('subject', e.target.value)}
              />

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  详细需求 <span className="text-red-500">*</span>
                </label>
                <Textarea
                  placeholder="请详细描述您的需求和问题"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={5}
                  className={cn(
                    errors.message && 'border-red-500 focus:border-red-500'
                  )}
                />
                {errors.message && (
                  <p className="text-sm text-red-500">{errors.message}</p>
                )}
              </div>
            </Stack>

            {/* 提交按钮 */}
            <div className="flex justify-center pt-4">
              <ActionButton
                type="submit"
                loading={isSubmitting}
                loadingText="提交中..."
                size="lg"
                className="min-w-[200px]"
              >
                提交咨询
              </ActionButton>
            </div>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}

export default ContactForm;