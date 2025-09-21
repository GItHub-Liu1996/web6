/**
 * Alert 内容组件
 * 
 * 用于在MDX内容中显示不同类型的提示信息
 * 
 * @param {string} type - 提示类型 (info, warning, error, success)
 * @param {React.ReactNode} children - 提示内容
 * @param {string} [title] - 提示标题
 * @param {string} [className] - 额外的CSS类名
 * 
 * @example
 * ```mdx
 * <Alert type="info" title="重要提示">
 *   这是一个重要的政策更新，请仔细阅读。
 * </Alert>
 * ```
 */

import React from 'react';
import { cn } from '@/lib/utils';

interface AlertProps {
  type: 'info' | 'warning' | 'error' | 'success';
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export const Alert: React.FC<AlertProps> = ({
  type,
  children,
  title,
  className,
}) => {
  // TODO: 实现 Alert 组件
  const baseClasses = "p-4 rounded-lg border-l-4 mb-4";
  
  const typeClasses = {
    info: "bg-blue-50 border-blue-400 text-blue-800",
    warning: "bg-yellow-50 border-yellow-400 text-yellow-800",
    error: "bg-red-50 border-red-400 text-red-800",
    success: "bg-green-50 border-green-400 text-green-800",
  };
  
  const iconMap = {
    info: "ℹ️",
    warning: "⚠️",
    error: "❌",
    success: "✅",
  };

  return (
    <div className={cn(baseClasses, typeClasses[type], className)}>
      <div className="flex items-start">
        <span className="mr-2 text-lg">{iconMap[type]}</span>
        <div className="flex-1">
          {title && (
            <h4 className="font-semibold mb-1">{title}</h4>
          )}
          <div className="text-sm">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
