import React from 'react';
import { cn } from '@/lib/utils';

interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectProps {
  /**
   * 选择框的标签
   */
  label?: string;
  /**
   * 选择框的值
   */
  value?: string;
  /**
   * 值变化时的回调函数
   */
  onChange?: (value: string) => void;
  /**
   * 选项列表
   */
  options: SelectOption[];
  /**
   * 占位符文本
   */
  placeholder?: string;
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
   * 附加的CSS类名
   */
  className?: string;
}

/**
 * 选择框组件 (Select)
 *
 * 提供下拉选择功能，支持选项列表、禁用状态、错误状态等。
 * 完整的表单体验需要下拉选择，将其原子化是构建复杂表单的最佳实践。
 *
 * @param {SelectProps} props - 组件属性
 * @example
 * ```tsx
 * <Select
 *   label="选择服务类型"
 *   value={serviceType}
 *   onChange={setServiceType}
 *   options={[
 *     { value: 'startup', label: '企业落地启动方案' },
 *     { value: 'operation', label: '企业持续运营支持' }
 *   ]}
 *   placeholder="请选择服务类型"
 *   required
 * />
 * ```
 */
export const Select: React.FC<SelectProps> = ({
  label,
  value,
  onChange,
  options,
  placeholder,
  required = false,
  disabled = false,
  error,
  helpText,
  className,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
      <select
        value={value}
        onChange={handleChange}
        disabled={disabled}
        className={cn(
          'block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm',
          error && 'border-red-300 focus:border-red-500 focus:ring-red-500',
          disabled && 'bg-gray-50 text-gray-500 cursor-not-allowed'
        )}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>
      {helpText && !error && (
        <p className="text-sm text-gray-500">{helpText}</p>
      )}
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};
