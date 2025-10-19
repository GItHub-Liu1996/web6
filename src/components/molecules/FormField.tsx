import React from 'react';
import { cn } from '@/lib/utils';
import { LabeledInput } from './LabeledInput';

/**
 * FormField 完整表单字段组件
 * 
 * 组合LabeledInput和错误信息显示，提供完整的表单字段功能
 * 
 * @param label - 标签文本
 * @param required - 是否必填
 * @param error - 错误信息
 * @param helpText - 帮助文本
 * @param className - 额外的CSS类名
 * @param ...inputProps - Input组件的其他属性
 */
interface FormFieldProps extends React.ComponentProps<typeof LabeledInput> {
  error?: string;
  helpText?: string;
}

export function FormField({
  label,
  required = false,
  error,
  helpText,
  className,
  ...inputProps
}: FormFieldProps) {
  return (
    <div className={cn('space-y-1', className)}>
      <LabeledInput
        label={label}
        required={required}
        className={cn(error && 'border-red-500 focus:border-red-500')}
        {...inputProps}
      />
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
      {helpText && !error && (
        <p className="text-sm text-gray-500">{helpText}</p>
      )}
    </div>
  );
}

export default FormField;