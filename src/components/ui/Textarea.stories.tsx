import { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './textarea';

const meta: Meta<typeof Textarea> = {
  title: 'UI/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
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
type Story = StoryObj<typeof Textarea>;

/**
 * 默认文本域
 *
 * 基础的文本域组件。
 */
export const Default: Story = {
  args: {
    placeholder: '请输入文本...',
  },
};

/**
 * 带默认值
 *
 * 包含默认文本的文本域。
 */
export const WithValue: Story = {
  args: {
    defaultValue: '这是一些默认文本内容。',
  },
};

/**
 * 禁用状态
 *
 * 被禁用的文本域。
 */
export const Disabled: Story = {
  args: {
    placeholder: '禁用状态',
    disabled: true,
  },
};

/**
 * 带标签的文本域
 *
 * 带有标签的文本域组合。
 */
export const WithLabel: Story = {
  render: (args) => (
    <div className="space-y-2">
      <label htmlFor="message" className="text-sm font-medium">
        消息
      </label>
      <Textarea {...args} id="message" placeholder="请输入您的消息..." />
    </div>
  ),
};

/**
 * 带错误状态的文本域
 *
 * 显示错误状态的文本域。
 */
export const Error: Story = {
  render: (args) => (
    <div className="space-y-2">
      <label htmlFor="error-message" className="text-sm font-medium text-red-600">
        消息
      </label>
      <Textarea {...args} id="error-message" placeholder="请输入消息..." className="border-red-500" />
      <p className="text-sm text-red-600">消息不能为空</p>
    </div>
  ),
};

/**
 * 不同尺寸
 *
 * 展示不同尺寸的文本域。
 */
export const Sizes: Story = {
  render: (args) => (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">小尺寸</label>
        <Textarea {...args} placeholder="小尺寸文本域" className="min-h-[60px]" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">默认尺寸</label>
        <Textarea {...args} placeholder="默认尺寸文本域" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">大尺寸</label>
        <Textarea {...args} placeholder="大尺寸文本域" className="min-h-[120px]" />
      </div>
    </div>
  ),
};

/**
 * 只读状态
 *
 * 只读的文本域。
 */
export const ReadOnly: Story = {
  args: {
    defaultValue: '这是只读的文本内容，无法编辑。',
    readOnly: true,
  },
};

/**
 * 限制字符数
 *
 * 带有字符数限制的文本域。
 */
export const WithCharacterLimit: Story = {
  render: (args) => (
    <div className="space-y-2">
      <label htmlFor="limited-message" className="text-sm font-medium">
        消息 (最多 100 字符)
      </label>
      <Textarea {...args} id="limited-message" placeholder="请输入消息..." maxLength={100} />
      <p className="text-sm text-gray-500">0/100 字符</p>
    </div>
  ),
};
