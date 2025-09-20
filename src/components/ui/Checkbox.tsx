import React from 'react';
import { cn } from '@/lib/utils';

interface CheckboxProps {
  /**
   * 复选框的标签
   */
  label?: string;
  /**
   * 复选框的值
   */
  checked?: boolean;
  /**
   * 状态变化时的回调函数
   */
  onChange?: (checked: boolean) => void;
  /**
   * 是否为禁用状态
   * @default false
   */
  disabled?: boolean;
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
   * 附加的CSS类名
   */
  className?: string;
}

/**
 * 复选框组件 (Checkbox)
 *
 * 提供复选框功能，支持选中状态、禁用状态、错误状态等。
 * 完整的表单体验需要复选框，将其原子化是构建复杂表单的最佳实践。
 *
 * @param {CheckboxProps} props - 组件属性
 * @example
 * ```tsx
 * <Checkbox
 *   label="我同意服务条款"
 *   checked={agreed}
 *   onChange={setAgreed}
 *   required
 * />
 * <Checkbox
 *   label="订阅我们的邮件更新"
 *   checked={subscribed}
 *   onChange={setSubscribed}
 * />
 * ```
 */
export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked = false,
  onChange,
  disabled = false,
  required = false,
  error,
  helpText,
  className,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked);
  };

  return (
    <div className={cn('space-y-2', className)}>
      <div className="flex items-start space-x-3">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          required={required}
          className={cn(
            'mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500',
            error && 'border-red-300 focus:ring-red-500',
            disabled && 'bg-gray-50 text-gray-500 cursor-not-allowed'
          )}
        />
        {label && (
          <label className="text-sm font-medium text-gray-700">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
      </div>
      {helpText && !error && (
        <p className="text-sm text-gray-500 ml-7">{helpText}</p>
      )}
      {error && (
        <p className="text-sm text-red-600 ml-7">{error}</p>
      )}
    </div>
  );
};
