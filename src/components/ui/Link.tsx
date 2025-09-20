import React from 'react';
import NextLink from 'next/link';
import { Icon } from './Icon';
import { cn } from '@/lib/utils';

interface LinkProps {
  /**
   * 链接的样式变体
   * @default 'default'
   */
  variant?: 'default' | 'primary' | 'subtle';
  /**
   * 是否是外部链接 (自动添加 target="_blank" 和 "external-link" 图标)
   * @default false
   */
  isExternal?: boolean;
  /**
   * 链接的URL
   */
  href: string;
  /**
   * 链接内容
   */
  children: React.ReactNode;
  /**
   * 附加的CSS类名
   */
  className?: string;
}

/**
 * 链接组件 (Link)
 *
 * 封装 Next.js 的 <Link> 组件，并提供统一的、可复用的链接样式。
 * 网站中有大量的链接，有些是段落中的普通链接，有些是需要重点突出的"行动号召"链接。
 * 用一个统一的组件来管理它们的样式和行为，能保证视觉一致性。
 *
 * @param {LinkProps} props - 组件属性
 * @example
 * ```tsx
 * <Link href="/about" variant="primary">了解更多关于我们</Link>
 * <Typography>
 *   请参考官方发布的<Link href="http://gov.cn" isExternal>最新政策</Link>。
 * </Typography>
 * ```
 */
export const Link: React.FC<LinkProps> = ({
  variant = 'default',
  isExternal = false,
  href,
  children,
  className,
}) => {
  const variantStyles = {
    default: 'text-blue-600 hover:text-blue-800 hover:underline transition-colors',
    primary: 'text-blue-600 hover:text-blue-800 font-medium hover:underline transition-colors',
    subtle: 'text-gray-600 hover:text-gray-800 hover:underline transition-colors',
  };

  const linkContent = (
    <>
      {children}
      {isExternal && (
        <Icon 
          name="external-link" 
          size="sm" 
          className="ml-1 inline-flex"
        />
      )}
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(variantStyles[variant], className)}
      >
        {linkContent}
      </a>
    );
  }

  return (
    <NextLink href={href} className={cn(variantStyles[variant], className)}>
      {linkContent}
    </NextLink>
  );
};
