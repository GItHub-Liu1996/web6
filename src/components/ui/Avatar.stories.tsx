import { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';

const meta: Meta<typeof Avatar> = {
  title: 'UI/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: '额外的 CSS 类名',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

/**
 * 默认头像
 *
 * 带有图片和备用文本的头像。
 */
export const Default: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

/**
 * 只有备用文本
 *
 * 没有图片时的备用文本头像。
 */
export const Fallback: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
};

/**
 * 不同尺寸
 *
 * 展示不同尺寸的头像。
 */
export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center space-x-4">
      <Avatar {...args} className="h-8 w-8">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>XS</AvatarFallback>
      </Avatar>
      <Avatar {...args} className="h-10 w-10">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      <Avatar {...args}>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar {...args} className="h-16 w-16">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
      <Avatar {...args} className="h-20 w-20">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>XL</AvatarFallback>
      </Avatar>
    </div>
  ),
};

/**
 * 头像组
 *
 * 多个头像的组合展示。
 */
export const Group: Story = {
  render: (args) => (
    <div className="flex -space-x-2">
      <Avatar {...args}>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar {...args}>
        <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
        <AvatarFallback>VC</AvatarFallback>
      </Avatar>
      <Avatar {...args}>
        <AvatarFallback>+3</AvatarFallback>
      </Avatar>
    </div>
  ),
};

/**
 * 不同备用文本
 *
 * 展示不同备用文本的头像。
 */
export const DifferentFallbacks: Story = {
  render: (args) => (
    <div className="flex items-center space-x-4">
      <Avatar {...args}>
        <AvatarFallback>张三</AvatarFallback>
      </Avatar>
      <Avatar {...args}>
        <AvatarFallback>李四</AvatarFallback>
      </Avatar>
      <Avatar {...args}>
        <AvatarFallback>王五</AvatarFallback>
      </Avatar>
      <Avatar {...args}>
        <AvatarFallback>赵六</AvatarFallback>
      </Avatar>
    </div>
  ),
};

/**
 * 在线状态
 *
 * 带有在线状态指示器的头像。
 */
export const WithStatus: Story = {
  render: (args) => (
    <div className="flex items-center space-x-4">
      <div className="relative">
        <Avatar {...args}>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></div>
      </div>
      <div className="relative">
        <Avatar {...args}>
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="absolute bottom-0 right-0 h-3 w-3 bg-gray-400 rounded-full border-2 border-white"></div>
      </div>
      <div className="relative">
        <Avatar {...args}>
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        <div className="absolute bottom-0 right-0 h-3 w-3 bg-yellow-500 rounded-full border-2 border-white"></div>
      </div>
    </div>
  ),
};
