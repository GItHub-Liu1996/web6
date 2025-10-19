import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Loader2 } from 'lucide-react';

/**
 * ActionButton 操作按钮组件
 * 
 * 提供统一的操作按钮样式和状态管理，组合Button原子组件
 * 
 * @param children - 按钮内容
 * @param variant - 按钮变体
 * @param size - 按钮尺寸
 * @param loading - 加载状态
 * @param disabled - 禁用状态
 * @param className - 额外的CSS类名
 * @param onClick - 点击回调
 * @param ...props - Button组件的其他属性
 */
interface ActionButtonProps extends React.ComponentProps<typeof Button> {
  loading?: boolean;
  loadingText?: string;
}

export function ActionButton({
  children,
  variant = 'default',
  size = 'default',
  loading = false,
  loadingText,
  disabled,
  className,
  onClick,
  ...props
}: ActionButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <Button
      variant={variant}
      size={size}
      disabled={isDisabled}
      className={cn(
        'transition-all duration-200',
        loading && 'cursor-not-allowed',
        className
      )}
      onClick={onClick}
      {...props}
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {loadingText || '处理中...'}
        </>
      ) : (
        children
      )}
    </Button>
  );
}

export default ActionButton;

