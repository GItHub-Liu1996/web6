import React from 'react';
import { cn } from '@/lib/utils';

interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface RadioGroupProps {
  /**
   * 单选按钮组的标签
   */
  label?: string;
  /**
   * 单选按钮组的值
   */
  value?: string;
  /**
   * 值变化时的回调函数
   */
  onChange?: (value: string) => void;
  /**
   * 选项列表
   */
  options: RadioOption[];
  /**
   * 单选按钮组的名称
   */
  name: string;
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
   * 布局方向
   * @default 'vertical'
   */
  orientation?: 'vertical' | 'horizontal';
  /**
   * 附加的CSS类名
   */
  className?: string;
}

/**
 * 单选按钮组组件 (RadioGroup)
 *
 * 提供单选按钮组功能，支持多个选项、禁用状态、错误状态等。
 * 完整的表单体验需要单选按钮组，将其原子化是构建复杂表单的最佳实践。
 *
 * @param {RadioGroupProps} props - 组件属性
 * @example
 * ```tsx
 * <RadioGroup
 *   label="选择公司类型"
 *   name="companyType"
 *   value={companyType}
 *   onChange={setCompanyType}
 *   options={[
 *     { value: 'wfoe', label: '外商独资企业 (WFOE)' },
 *     { value: 'jv', label: '合资企业 (JV)' },
 *     { value: 'rep', label: '代表处 (RO)' }
 *   ]}
 *   required
 * />
 * ```
 */
export const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  value,
  onChange,
  options,
  name,
  required = false,
  disabled = false,
  error,
  helpText,
  orientation = 'vertical',
  className,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const containerClasses = cn(
    'space-y-2',
    orientation === 'horizontal' && 'flex flex-wrap gap-4',
    className
  );

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className={containerClasses}>
        {options.map((option) => (
          <div key={option.value} className="flex items-center space-x-2">
            <input
              type="radio"
              id={`${name}-${option.value}`}
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={handleChange}
              disabled={disabled || option.disabled}
              required={required}
              className={cn(
                'h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500',
                error && 'border-red-300 focus:ring-red-500',
                (disabled || option.disabled) && 'bg-gray-50 text-gray-500 cursor-not-allowed'
              )}
            />
            <label
              htmlFor={`${name}-${option.value}`}
              className={cn(
                'text-sm font-medium text-gray-700',
                (disabled || option.disabled) && 'text-gray-500 cursor-not-allowed'
              )}
            >
              {option.label}
            </label>
          </div>
        ))}
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
