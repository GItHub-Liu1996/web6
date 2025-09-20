import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

/**
 * Shadcn/ui Button 组件的 Storybook 故事
 * 
 * 展示由 Shadcn/ui 生成的高质量 Button 组件的所有变体、尺寸和状态。
 * 这个组件使用了 class-variance-authority 来管理变体，具有更好的类型安全性。
 */
const meta: Meta<typeof Button> = {
  title: 'UI/Button (Shadcn/ui)',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '由 Shadcn/ui 生成的高质量按钮组件，支持多种变体、尺寸和状态。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      description: '按钮的样式变体',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'icon'],
      description: '按钮的尺寸',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: '是否禁用按钮',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    asChild: {
      control: { type: 'boolean' },
      description: '是否作为子组件渲染（使用 Radix Slot）',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      control: { type: 'text' },
      description: '按钮内容',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    onClick: {
      action: 'clicked',
      description: '点击事件处理函数',
      table: {
        type: { summary: '() => void' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 默认主要按钮
 * 
 * Shadcn/ui 的默认按钮样式，具有蓝色背景和白色文字。
 * 这是最常用的按钮样式，用于主要的用户操作。
 */
export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
    children: '按钮',
  },
};

/**
 * 次要按钮
 * 
 * 用于次要操作，视觉权重较低。
 * 具有灰色背景，不会与主要按钮竞争注意力。
 */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'default',
    children: '次要按钮',
  },
};

/**
 * 危险操作按钮
 * 
 * 用于删除、重置等危险操作。
 * 具有红色背景，提醒用户操作的严重性。
 */
export const Destructive: Story = {
  args: {
    variant: 'destructive',
    size: 'default',
    children: '删除',
  },
};

/**
 * 轮廓按钮
 * 
 * 具有透明背景和边框，适合在彩色背景上使用。
 * 视觉权重较低，常用于取消操作。
 */
export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'default',
    children: '取消',
  },
};

/**
 * 幽灵按钮
 * 
 * 完全透明的按钮，只有文字可见。
 * 适合在卡片或复杂背景上使用。
 */
export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'default',
    children: '幽灵按钮',
  },
};

/**
 * 链接样式按钮
 * 
 * 看起来像链接的按钮，但具有按钮的交互行为。
 * 常用于"了解更多"等辅助操作。
 */
export const Link: Story = {
  args: {
    variant: 'link',
    size: 'default',
    children: '了解更多',
  },
};

/**
 * 小尺寸按钮
 * 
 * 适合在空间受限的地方使用，如表格操作列。
 */
export const Small: Story = {
  args: {
    variant: 'default',
    size: 'sm',
    children: '小按钮',
  },
};

/**
 * 大尺寸按钮
 * 
 * 适合在重要位置使用，如登录页面的主要操作。
 */
export const Large: Story = {
  args: {
    variant: 'default',
    size: 'lg',
    children: '大按钮',
  },
};

/**
 * 图标按钮
 * 
 * 只包含图标的按钮，适合工具栏或操作列。
 */
export const Icon: Story = {
  args: {
    variant: 'default',
    size: 'icon',
    children: '⚙️',
  },
};

/**
 * 禁用状态按钮
 * 
 * 不可交互的按钮，用于表示当前操作不可用。
 * 视觉上会变暗，鼠标悬停无效果。
 */
export const Disabled: Story = {
  args: {
    variant: 'default',
    size: 'default',
    disabled: true,
    children: '禁用按钮',
  },
};

/**
 * 带图标的按钮
 * 
 * 在文字前添加图标的按钮，增强视觉识别。
 * 图标和文字的组合使用。
 */
export const WithIcon: Story = {
  args: {
    variant: 'default',
    size: 'default',
    children: (
      <>
        <span>📧</span>
        发送邮件
      </>
    ),
  },
};

/**
 * 作为子组件的按钮
 * 
 * 使用 asChild 属性，按钮可以作为其他元素的包装器。
 * 这在需要将按钮样式应用到链接或其他元素时很有用。
 */
export const AsChild: Story = {
  args: {
    variant: 'default',
    size: 'default',
    asChild: true,
    children: <a href="#">链接按钮</a>,
  },
};

/**
 * 所有变体对比
 * 
 * 展示所有按钮变体的视觉效果对比。
 * 帮助设计师和开发者选择合适的按钮样式。
 */
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

/**
 * 所有尺寸对比
 * 
 * 展示所有按钮尺寸的视觉效果对比。
 * 帮助选择合适的按钮尺寸。
 */
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">⚙️</Button>
    </div>
  ),
};

/**
 * 状态对比
 * 
 * 展示按钮的不同状态：正常、禁用。
 * 帮助理解按钮的交互状态。
 */
export const States: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button>正常状态</Button>
      <Button disabled>禁用状态</Button>
    </div>
  ),
};

/**
 * 响应式测试
 * 
 * 在不同屏幕尺寸下测试按钮的显示效果。
 * 确保按钮在各种设备上都能正常显示。
 */
export const Responsive: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="text-sm text-muted-foreground">桌面端 (Desktop)</div>
      <div className="flex gap-4">
        <Button size="sm">小按钮</Button>
        <Button size="default">默认按钮</Button>
        <Button size="lg">大按钮</Button>
      </div>
      
      <div className="text-sm text-muted-foreground">移动端 (Mobile)</div>
      <div className="flex flex-col gap-2 w-64">
        <Button size="sm" className="w-full">小按钮</Button>
        <Button size="default" className="w-full">默认按钮</Button>
        <Button size="lg" className="w-full">大按钮</Button>
      </div>
    </div>
  ),
};