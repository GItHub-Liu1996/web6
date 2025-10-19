// src/components/organisms/BlogMenu.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import BlogMenu from './BlogMenu';

const meta: Meta<typeof BlogMenu> = {
  title: 'Organisms/Navigation/BlogMenu',
  component: BlogMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 默认状态下的"资源中心"下拉菜单。
 * 
 * 必须点击 "Resources" 按钮才能打开/关闭菜单。
 * 不会因鼠标悬停而触发。
 * 点击外部区域会自动关闭。
 * 内置了完整的键盘导航和无障碍支持。
 */
export const Default: Story = {};