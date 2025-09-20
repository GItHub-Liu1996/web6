import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * 输入框组件，提供统一的输入框样式和交互效果
 * 
 * 支持所有原生 input 元素的属性和类型
 * 包含焦点状态、禁用状态、文件上传等样式处理
 * 响应式设计，在移动端和桌面端有不同的字体大小
 * 
 * @example
 * ```tsx
 * <Input type="text" placeholder="请输入内容" />
 * <Input type="email" placeholder="邮箱地址" />
 * <Input type="password" placeholder="密码" />
 * ```
 */
const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
