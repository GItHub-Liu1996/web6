import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-9 px-3 text-xs",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * 是否作为子组件渲染，使用 Radix UI 的 Slot 组件
   * @default false
   */
  asChild?: boolean
  /**
   * 是否显示加载状态
   * @default false
   */
  loading?: boolean
  /**
   * 加载状态时显示的文本
   * @default "Loading..."
   */
  loadingText?: string
}

/**
 * 可定制的按钮组件，支持多种变体和尺寸
 * 
 * 基于 Radix UI 的 Slot 组件构建，支持作为子组件渲染
 * 使用 class-variance-authority 管理样式变体
 * 
 * @example
 * ```tsx
 * <Button variant="default" size="lg">点击我</Button>
 * <Button variant="outline" size="sm">轮廓按钮</Button>
 * <Button asChild>
 *   <Link href="/about">关于我们</Link>
 * </Button>
 * ```
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading = false, loadingText = "Loading...", children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    const isDisabled = disabled || loading
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {loading ? loadingText : children}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
