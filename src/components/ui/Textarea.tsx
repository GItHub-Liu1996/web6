import React from 'react';
import { cn } from '@/lib/utils';

interface TextareaProps {
  /**
   * 文本域的标签
   */
  label?: string;
  /**
   * 文本域的值
   */
  value?: string;
  /**
   * 值变化时的回调函数
   */
  onChange?: (value: string) => void;
  /**
   * 占位符文本
   */
  placeholder?: string;
  /**
   * 行数
   * @default 4
   */
  rows?: number;
  /**
   * 是否为必填字段
   * @default false
   */
  required?: boolean;
  /**
   * 是否为禁用状态
   * @default false
   */
  disabled?: boolean;
  /**
   * 错误信息
   */
  error?: string;
  /**
   * 帮助文本
   */
  helpText?: string;
  /**
   * 最大字符数
   */
  maxLength?: number;
  /**
   * 附加的CSS类名
   */
  className?: string;
}

/**
 * 多行文本输入框组件 (Textarea)
 *
 * 提供多行文本输入功能，支持行数设置、字符限制、错误状态等。
 * 完整的表单体验需要多行文本输入框，将其原子化是构建复杂表单的最佳实践。
 *
 * @param {TextareaProps} props - 组件属性
 * @example
 * ```tsx
 * <Textarea
 *   label="详细需求描述"
 *   value={description}
 *   onChange={setDescription}
 *   placeholder="请详细描述您的需求..."
 *   rows={6}
 *   maxLength={500}
 *   required
 * />
 * ```
 */
export const Textarea: React.FC<TextareaProps> = ({
  label,
  value,
  onChange,
  placeholder,
  rows = 4,
  required = false,
  disabled = false,
  error,
  helpText,
  maxLength,
  className,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={cn('space-y-2', className)}>
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <textarea
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        required={required}
        maxLength={maxLength}
        className={cn(
          'block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm',
          error && 'border-red-300 focus:border-red-500 focus:ring-red-500',
          disabled && 'bg-gray-50 text-gray-500 cursor-not-allowed'
        )}
      />
      {maxLength && (
        <div className="text-right text-sm text-gray-500">
          {value?.length || 0} / {maxLength}
        </div>
      )}
      {helpText && !error && (
        <p className="text-sm text-gray-500">{helpText}</p>
      )}
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};
