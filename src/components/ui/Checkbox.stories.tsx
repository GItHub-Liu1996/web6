import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: '是否选中',
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
type Story = StoryObj<typeof Checkbox>;

/**
 * 默认复选框
 *
 * 未选中的复选框。
 */
export const Default: Story = {
  args: {
    checked: false,
  },
};

/**
 * 选中状态
 *
 * 已选中的复选框。
 */
export const Checked: Story = {
  args: {
    checked: true,
  },
};

/**
 * 禁用状态
 *
 * 被禁用的复选框。
 */
export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
  },
};

/**
 * 禁用且选中
 *
 * 禁用且选中的复选框。
 */
export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
  },
};

/**
 * 带标签的复选框
 *
 * 带有标签文本的复选框。
 */
export const WithLabel: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox {...args} id="terms" />
      <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        我同意服务条款
      </label>
    </div>
  ),
};

/**
 * 复选框组
 *
 * 多个复选框的组合。
 */
export const Group: Story = {
  render: (args) => (
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <Checkbox {...args} id="option1" />
        <label htmlFor="option1" className="text-sm font-medium">
          选项 1
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox {...args} id="option2" checked />
        <label htmlFor="option2" className="text-sm font-medium">
          选项 2
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox {...args} id="option3" />
        <label htmlFor="option3" className="text-sm font-medium">
          选项 3
        </label>
      </div>
    </div>
  ),
};

/**
 * 不同状态
 *
 * 展示复选框的不同状态。
 */
export const States: Story = {
  render: (args) => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox {...args} />
        <label className="text-sm font-medium">未选中</label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox {...args} checked />
        <label className="text-sm font-medium">已选中</label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox {...args} disabled />
        <label className="text-sm font-medium text-gray-500">禁用</label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox {...args} checked disabled />
        <label className="text-sm font-medium text-gray-500">禁用且选中</label>
      </div>
    </div>
  ),
};
