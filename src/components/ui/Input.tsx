import React from 'react';
import { cn } from '@/lib/utils';

/**
 * 输入框组件的属性接口
 */
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * 输入框变体样式
   * @default 'default'
   */
  variant?: 'default' | 'error' | 'success';
  /**
   * 输入框尺寸
   * @default 'default'
   */
  size?: 'default' | 'sm' | 'lg';
  /**
   * 错误信息
   */
  error?: string;
  /**
   * 标签文本
   */
  label?: string;
  /**
   * 帮助文本
   */
  helpText?: string;
  /**
   * 是否必填
   * @default false
   */
  required?: boolean;
}

/**
 * 通用输入框组件
 * 
 * 提供多种样式变体和尺寸，支持错误状态、标签和帮助文本。
 * 遵循无障碍设计原则，支持键盘导航和屏幕阅读器。
 * 
 * @example
 * ```tsx
 * <Input
 *   label="邮箱地址"
 *   type="email"
 *   placeholder="请输入邮箱"
 *   required
 * />
 * 
 * <Input
 *   variant="error"
 *   error="邮箱格式不正确"
 *   label="邮箱"
 *   type="email"
 * />
 * ```
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = 'text',
      variant = 'default',
      size = 'default',
      error,
      label,
      helpText,
      required = false,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    const baseStyles = 'flex w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';

    const variants = {
      default: 'border-input',
      error: 'border-destructive focus-visible:ring-destructive',
      success: 'border-green-500 focus-visible:ring-green-500',
    };

    const sizes = {
      default: 'h-10',
      sm: 'h-9 px-2',
      lg: 'h-11 px-4',
    };

    return (
      <div className="space-y-2">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </label>
        )}
        <input
          type={type}
          className={cn(
            baseStyles,
            variants[variant],
            sizes[size],
            className
          )}
          ref={ref}
          id={inputId}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={
            error ? `${inputId}-error` : helpText ? `${inputId}-help` : undefined
          }
          {...props}
        />
        {error && (
          <p
            id={`${inputId}-error`}
            className="text-sm text-destructive"
            role="alert"
          >
            {error}
          </p>
        )}
        {helpText && !error && (
          <p
            id={`${inputId}-help`}
            className="text-sm text-muted-foreground"
          >
            {helpText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
