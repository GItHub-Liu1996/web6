import React from 'react';
import { Input } from '@/components/ui/Input';
import { cn } from '@/lib/utils';

interface LabeledInputProps {
  /**
   * 输入框的标签文本
   */
  label: string;
  /**
   * 输入框的占位符
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
   * 输入框类型
   * @default 'text'
   */
  type?: 'text' | 'email' | 'password' | 'tel' | 'url';
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
 * 带标签的输入框分子组件 (LabeledInput)
 *
 * 由Label原子和Input原子组成的分子组件，提供完整的表单字段功能。
 * 这是一个典型的分子组件，将两个原子组合成一个功能单元。
 *
 * @param {LabeledInputProps} props - 组件属性
 * @example
 * ```tsx
 * <LabeledInput
 *   label="您的姓名"
 *   placeholder="请输入您的姓名"
 *   value={name}
 *   onChange={setName}
 *   required
 * />
 * ```
 */
export const LabeledInput: React.FC<LabeledInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
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
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        error={error}
        className="w-full"
      />
      {helpText && !error && (
        <p className="text-sm text-gray-500">{helpText}</p>
      )}
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};
