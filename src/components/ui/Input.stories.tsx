import { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: '输入框类型',
    },
    placeholder: {
      control: 'text',
      description: '占位符文本',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
    },
    className: {
      control: 'text',
      description: '额外的 CSS 类名',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

/**
 * 基础输入框
 *
 * 默认的文本输入框。
 */
export const Default: Story = {
  args: {
    placeholder: '请输入文本',
  },
};

/**
 * 邮箱输入框
 *
 * 用于邮箱地址输入的输入框。
 */
export const Email: Story = {
  args: {
    type: 'email',
    placeholder: '请输入邮箱地址',
  },
};

/**
 * 密码输入框
 *
 * 用于密码输入的输入框，内容会被隐藏。
 */
export const Password: Story = {
  args: {
    type: 'password',
    placeholder: '请输入密码',
  },
};

/**
 * 数字输入框
 *
 * 用于数字输入的输入框。
 */
export const Number: Story = {
  args: {
    type: 'number',
    placeholder: '请输入数字',
  },
};

/**
 * 禁用状态
 *
 * 被禁用的输入框，不可编辑。
 */
export const Disabled: Story = {
  args: {
    placeholder: '禁用状态',
    disabled: true,
  },
};

/**
 * 带标签的输入框
 *
 * 带有标签的输入框组合。
 */
export const WithLabel: Story = {
  render: (args) => (
    <div className="space-y-2">
      <label htmlFor="input" className="text-sm font-medium">
        用户名
      </label>
      <Input {...args} id="input" placeholder="请输入用户名" />
    </div>
  ),
};

/**
 * 带错误状态的输入框
 *
 * 显示错误状态的输入框。
 */
export const Error: Story = {
  render: (args) => (
    <div className="space-y-2">
      <label htmlFor="error-input" className="text-sm font-medium text-red-600">
        邮箱地址
      </label>
      <Input {...args} id="error-input" placeholder="请输入邮箱" className="border-red-500" />
      <p className="text-sm text-red-600">请输入有效的邮箱地址</p>
    </div>
  ),
};

/**
 * 不同尺寸
 *
 * 展示不同尺寸的输入框。
 */
export const Sizes: Story = {
  render: (args) => (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">小尺寸</label>
        <Input {...args} placeholder="小尺寸输入框" className="h-8" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">默认尺寸</label>
        <Input {...args} placeholder="默认尺寸输入框" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">大尺寸</label>
        <Input {...args} placeholder="大尺寸输入框" className="h-12" />
      </div>
    </div>
  ),
};
