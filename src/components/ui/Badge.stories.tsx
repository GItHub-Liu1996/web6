import { Meta, StoryObj } from '@storybook/react';
import { Badge } from './badge';

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'],
      description: '徽章样式变体',
    },
    className: {
      control: 'text',
      description: '额外的 CSS 类名',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

/**
 * 默认徽章
 *
 * 标准的徽章样式。
 */
export const Default: Story = {
  args: {
    children: '默认',
  },
};

/**
 * 次要徽章
 *
 * 次要样式的徽章。
 */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: '次要',
  },
};

/**
 * 危险徽章
 *
 * 用于表示危险或重要状态的徽章。
 */
export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: '危险',
  },
};

/**
 * 轮廓徽章
 *
 * 只有边框的徽章样式。
 */
export const Outline: Story = {
  args: {
    variant: 'outline',
    children: '轮廓',
  },
};

/**
 * 所有变体
 *
 * 展示所有徽章变体。
 */
export const AllVariants: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-2">
      <Badge {...args}>默认</Badge>
      <Badge {...args} variant="secondary">次要</Badge>
      <Badge {...args} variant="destructive">危险</Badge>
      <Badge {...args} variant="outline">轮廓</Badge>
    </div>
  ),
};

/**
 * 不同内容
 *
 * 展示不同内容的徽章。
 */
export const DifferentContent: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-2">
      <Badge {...args}>新</Badge>
      <Badge {...args} variant="secondary">热门</Badge>
      <Badge {...args} variant="destructive">紧急</Badge>
      <Badge {...args} variant="outline">Beta</Badge>
      <Badge {...args}>Pro</Badge>
      <Badge {...args} variant="secondary">免费</Badge>
    </div>
  ),
};

/**
 * 在卡片中使用
 *
 * 展示徽章在卡片中的应用。
 */
export const InCard: Story = {
  render: (args) => (
    <div className="border rounded-lg p-4 space-y-2">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">产品标题</h3>
        <Badge {...args} variant="destructive">热销</Badge>
      </div>
      <p className="text-sm text-gray-600">产品描述内容</p>
      <div className="flex gap-2">
        <Badge {...args} variant="secondary">标签1</Badge>
        <Badge {...args} variant="outline">标签2</Badge>
      </div>
    </div>
  ),
};
