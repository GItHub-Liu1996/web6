/**
 * Callout 内容组件
 * 
 * 用于在MDX内容中突出显示重要信息
 * 
 * @param {string} type - 突出类型 (info, warning, tip, note)
 * @param {React.ReactNode} children - 内容
 * @param {string} [title] - 标题
 * @param {string} [className] - 额外的CSS类名
 * 
 * @example
 * ```mdx
 * <Callout type="warning" title="注意事项">
 *   请注意最新的政策变化。
 * </Callout>
 * ```
 */

import React from 'react';
import { cn } from '@/lib/utils';

interface CalloutProps {
  type: 'info' | 'warning' | 'tip' | 'note';
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export const Callout: React.FC<CalloutProps> = ({
  type,
  children,
  title,
  className,
}) => {
  // TODO: 实现 Callout 组件
  const baseClasses = "p-4 rounded-lg border mb-4";
  
  const typeClasses = {
    info: "bg-blue-50 border-blue-200 text-blue-900",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-900",
    tip: "bg-green-50 border-green-200 text-green-900",
    note: "bg-gray-50 border-gray-200 text-gray-900",
  };
  
  const iconMap = {
    info: "💡",
    warning: "⚠️",
    tip: "💡",
    note: "📝",
  };

  return (
    <div className={cn(baseClasses, typeClasses[type], className)}>
      <div className="flex items-start">
        <span className="mr-3 text-xl">{iconMap[type]}</span>
        <div className="flex-1">
          {title && (
            <h4 className="font-semibold mb-2 text-lg">{title}</h4>
          )}
          <div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
