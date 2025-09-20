import React from 'react';
import { Icon } from './Icon';
import { cn } from '@/lib/utils';

interface AlertProps {
  /**
   * 提示框的类型，决定了颜色和图标
   */
  variant: 'info' | 'success' | 'warning' | 'error';
  /**
   * 提示框的标题 (可选)
   */
  title?: string;
  /**
   * 提示框的主要内容
   */
  children: React.ReactNode;
  /**
   * 附加的CSS类名
   */
  className?: string;
}

/**
 * 提示框组件 (Alert)
 *
 * 用于在页面中显示重要的信息、成功提示、警告或错误，比 Toast 更持久。
 * 在联系表单提交后显示"提交成功"的提示，或在服务说明中高亮显示"注意：政策变更"等信息。
 * 这是专业网站不可或缺的反馈元素。
 *
 * @param {AlertProps} props - 组件属性
 * @example
 * ```tsx
 * <Alert variant="success" title="提交成功">
 *   我们的顾问将在24小时内与您联系。
 * </Alert>
 * <Alert variant="warning" title="注意">
 *   政策变更，请及时关注最新信息。
 * </Alert>
 * ```
 */
export const Alert: React.FC<AlertProps> = ({
  variant,
  title,
  children,
  className,
}) => {
  const variantStyles = {
    info: {
      container: 'bg-blue-50 border-blue-200 text-blue-800',
      icon: 'text-blue-500',
      iconName: 'info',
    },
    success: {
      container: 'bg-green-50 border-green-200 text-green-800',
      icon: 'text-green-500',
      iconName: 'success',
    },
    warning: {
      container: 'bg-yellow-50 border-yellow-200 text-yellow-800',
      icon: 'text-yellow-500',
      iconName: 'warning',
    },
    error: {
      container: 'bg-red-50 border-red-200 text-red-800',
      icon: 'text-red-500',
      iconName: 'error',
    },
  };

  const styles = variantStyles[variant];

  return (
    <div className={cn(
      'border rounded-lg p-4 flex items-start space-x-3',
      styles.container,
      className
    )}>
      <Icon 
        name={styles.iconName} 
        size="sm" 
        className={cn('flex-shrink-0 mt-0.5', styles.icon)}
      />
      <div className="flex-1">
        {title && (
          <h4 className="font-semibold mb-1">{title}</h4>
        )}
        <div className="text-sm">{children}</div>
      </div>
    </div>
  );
};
