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
  return (
    <div className={`callout-placeholder callout-${type} ${className || ''}`}>
      {/* TODO: 实现突出显示组件 */}
      <div>Callout: {type}</div>
      {title && <div>Title: {title}</div>}
      <div>{children}</div>
    </div>
  );
};
