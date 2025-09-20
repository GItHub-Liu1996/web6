import React from 'react';
import { cn } from '@/lib/utils';

interface IconProps {
  /**
   * 图标的名称 (来自某个图标库, 如 'check-circle')
   */
  name: string;
  /**
   * 图标的尺寸
   * @default 'default'
   */
  size?: 'sm' | 'default' | 'lg';
  /**
   * 附加的CSS类名
   */
  className?: string;
}

/**
 * 图标组件 (Icon)
 *
 * 统一管理和渲染网站中所有的SVG图标，如服务卡片前的装饰图标、
 * 提示信息中的状态图标等。确保所有图标的尺寸、颜色、线条粗细都保持一致。
 * 方便未来统一更换图标库（例如从 lucide-react 更换到 heroicons）。
 *
 * @param {IconProps} props - 组件属性
 * @example
 * ```tsx
 * <Icon name="check-circle" size="sm" className="text-green-500" />
 * <Icon name="arrow-right" size="default" />
 * <Icon name="star" size="lg" className="text-yellow-500" />
 * ```
 */
export const Icon: React.FC<IconProps> = ({
  name,
  size = 'default',
  className,
}) => {
  const sizeStyles = {
    sm: 'w-4 h-4',
    default: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  // 这里使用简单的SVG图标作为示例
  // 在实际项目中，可以集成 lucide-react 或其他图标库
  const getIconSvg = (iconName: string) => {
    const icons: Record<string, JSX.Element> = {
      'check-circle': (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22,4 12,14.01 9,11.01" />
        </svg>
      ),
      'arrow-right': (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12,5 19,12 12,19" />
        </svg>
      ),
      'star': (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ),
      'info': (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      ),
      'warning': (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      ),
      'error': (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="15" y1="9" x2="9" y2="15" />
          <line x1="9" y1="9" x2="15" y2="15" />
        </svg>
      ),
      'success': (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22,4 12,14.01 9,11.01" />
        </svg>
      ),
      'external-link': (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15,3 21,3 21,9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      ),
    };

    return icons[iconName] || (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    );
  };

  return (
    <span className={cn('inline-flex items-center justify-center', sizeStyles[size], className)}>
      {getIconSvg(name)}
    </span>
  );
};
