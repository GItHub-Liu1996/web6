// src/components/organisms/AboutMenu.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { AboutMenu } from './AboutMenu';

const meta: Meta<typeof AboutMenu> = {
  title: 'Organisms/Navigation/AboutMenu',
  component: AboutMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 默认状态下的"关于我们"下拉菜单。
 * 
 * 必须点击 "About Us" 按钮才能打开/关闭菜单。
 * 
 * 不会因鼠标悬停而触发。
 * 
 * 点击外部区域会自动关闭。
 * 
 * 内置了完整的键盘导航和无障碍支持。
 */
export const Default: Story = {};