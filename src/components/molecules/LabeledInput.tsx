import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/Input';

/**
 * LabeledInput 带标签输入框组件
 * 
 * 组合Label和Input原子组件，提供统一的表单字段布局
 * 
 * @param label - 标签文本
 * @param required - 是否必填
 * @param className - 额外的CSS类名
 * @param labelClassName - 标签的CSS类名
 * @param inputClassName - 输入框的CSS类名
 * @param ...inputProps - Input组件的其他属性
 */
interface LabeledInputProps extends React.ComponentProps<typeof Input> {
  label: string;
  required?: boolean;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
}

export function LabeledInput({
  label,
  required = false,
  className,
  labelClassName,
  inputClassName,
  ...inputProps
}: LabeledInputProps) {
  return (
    <div className={cn('space-y-2', className)}>
      <label 
        className={cn(
          'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
          labelClassName
        )}
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <Input 
        className={cn(inputClassName)}
        {...inputProps}
      />
    </div>
  );
}

export default LabeledInput;