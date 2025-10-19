import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header.storybook';
import { Button } from '@/components/ui/Button';
import { Alert, AlertDescription } from '@/components/ui/Alert';
import { Bell, Search } from 'lucide-react';

const meta: Meta<typeof Header> = {
  title: 'Organisms/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: '自定义CSS类名',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithBanner: Story = {
  args: {},
  render: (args) => (
    <Header {...args}>
      <Alert className="mb-0">
        <Bell className="h-4 w-4" />
        <AlertDescription>
          欢迎访问我们的网站！我们提供专业的咨询服务。
        </AlertDescription>
      </Alert>
    </Header>
  ),
};

export const WithSearchBar: Story = {
  args: {},
  render: (args) => (
    <Header {...args}>
      <div className="flex items-center gap-4 py-2">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="搜索..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        <Button variant="outline" size="sm">
          搜索
        </Button>
      </div>
    </Header>
  ),
};

export const WithUserActions: Story = {
  args: {},
  render: (args) => (
    <Header {...args}>
      <div className="flex items-center justify-end gap-4 py-2">
        <Button variant="ghost" size="sm">
          登录
        </Button>
        <Button size="sm">
          注册
        </Button>
      </div>
    </Header>
  ),
};

export const WithMultipleElements: Story = {
  args: {},
  render: (args) => (
    <Header {...args}>
      <Alert className="mb-2">
        <Bell className="h-4 w-4" />
        <AlertDescription>
          新功能上线！立即体验我们的AI咨询服务。
        </AlertDescription>
      </Alert>
      <div className="flex items-center justify-between py-2">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="搜索服务..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            登录
          </Button>
          <Button size="sm">
            注册
          </Button>
        </div>
      </div>
    </Header>
  ),
};

export const CustomStyling: Story = {
  args: {
    className: 'bg-gray-50 border-b border-gray-200',
  },
  render: (args) => (
    <Header {...args}>
      <div className="text-center py-2 text-sm text-gray-600">
        自定义样式的头部区域
      </div>
    </Header>
  ),
};