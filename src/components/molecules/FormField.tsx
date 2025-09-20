import React from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface FormFieldProps {
  /**
   * 字段标签
   */
  label: string;
  /**
   * 输入框类型
   * @default 'text'
   */
  type?: 'text' | 'email' | 'password' | 'tel' | 'url';
  /**
   * 占位符文本
   */
  placeholder?: string;
  /**
   * 输入框的值
   */
  value?: string;
  /**
   * 值变化时的回调函数
   */
  onChange?: (value: string) => void;
  /**
   * 是否显示操作按钮
   * @default false
   */
  showAction?: boolean;
  /**
   * 操作按钮文本
   * @default '提交'
   */
  actionText?: string;
  /**
   * 操作按钮点击回调
   */
  onAction?: () => void;
  /**
   * 是否为必填字段
   * @default false
   */
  required?: boolean;
  /**
   * 错误信息
   */
  error?: string;
  /**
   * 帮助文本
   */
  helpText?: string;
  /**
   * 额外的CSS类名
   */
  className?: string;
}

/**
 * 表单字段分子组件 (FormField)
 *
 * 由Label、Input和Button原子组成的分子组件，提供完整的表单字段功能。
 * 支持带操作按钮的表单字段，常用于搜索框、订阅表单等场景。
 *
 * @param {FormFieldProps} props - 组件属性
 * @example
 * ```tsx
 * <FormField
 *   label="邮箱订阅"
 *   type="email"
 *   placeholder="请输入您的邮箱"
 *   value={email}
 *   onChange={setEmail}
 *   showAction
 *   actionText="订阅"
 *   onAction={handleSubscribe}
 * />
 * ```
 */
export const FormField: React.FC<FormFieldProps> = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  showAction = false,
  actionText = '提交',
  onAction,
  required = false,
  error,
  helpText,
  className,
}) => {
  return (
    <div className={cn('space-y-2', className)}>
      <label className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      <div className="flex gap-2">
        <Input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          error={error}
          className="flex-1"
        />
        {showAction && (
          <Button onClick={onAction} className="flex-shrink-0">
            {actionText}
          </Button>
        )}
      </div>
      
      {helpText && !error && (
        <p className="text-sm text-gray-500">{helpText}</p>
      )}
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};
