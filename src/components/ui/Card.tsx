import React from 'react';
import { cn } from '@/lib/utils';

/**
 * 卡片组件的属性接口
 */
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * 卡片变体样式
   * @default 'default'
   */
  variant?: 'default' | 'outlined' | 'elevated';
  /**
   * 是否可点击
   * @default false
   */
  clickable?: boolean;
}

/**
 * 卡片容器组件
 * 
 * 提供统一的卡片样式，支持多种变体和点击状态。
 * 用于展示内容块，如文章摘要、服务介绍等。
 * 
 * @example
 * ```tsx
 * <Card>
 *   <CardHeader>
 *     <CardTitle>服务标题</CardTitle>
 *   </CardHeader>
 *   <CardContent>
 *     <p>服务描述内容</p>
 *   </CardContent>
 * </Card>
 * 
 * <Card variant="outlined" clickable>
 *   可点击的卡片
 * </Card>
 * ```
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', clickable = false, ...props }, ref) => {
    const baseStyles = 'rounded-lg border bg-card text-card-foreground shadow-sm';
    
    const variants = {
      default: 'border-border',
      outlined: 'border-2 border-border',
      elevated: 'border-border shadow-lg',
    };

    const clickableStyles = clickable
      ? 'cursor-pointer transition-all hover:shadow-md hover:scale-[1.02] active:scale-[0.98]'
      : '';

    return (
      <div
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          clickableStyles,
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';

/**
 * 卡片头部组件
 */
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5 p-6', className)}
      {...props}
    />
  )
);

CardHeader.displayName = 'CardHeader';

/**
 * 卡片标题组件
 */
interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const CardTitle = React.forwardRef<HTMLParagraphElement, CardTitleProps>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        'text-2xl font-semibold leading-none tracking-tight',
        className
      )}
      {...props}
    />
  )
);

CardTitle.displayName = 'CardTitle';

/**
 * 卡片描述组件
 */
interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  CardDescriptionProps
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));

CardDescription.displayName = 'CardDescription';

/**
 * 卡片内容组件
 */
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
  )
);

CardContent.displayName = 'CardContent';

/**
 * 卡片底部组件
 */
interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center p-6 pt-0', className)}
      {...props}
    />
  )
);

CardFooter.displayName = 'CardFooter';
