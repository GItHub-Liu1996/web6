// src/components/organisms/CaseStudiesMenu.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { CaseStudiesMenu } from './CaseStudiesMenu';

const meta: Meta<typeof CaseStudiesMenu> = {
  title: 'Organisms/Navigation/CaseStudiesMenu',
  component: CaseStudiesMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 默认状态下的"成功案例"下拉菜单。
 *
 * 必须点击 "Case Studies" 按钮才能打开/关闭菜单。
 *
 * 不会因鼠标悬停而触发。
 *
 * 点击外部区域会自动关闭。
 *
 * 内置了完整的键盘导航和无障碍支持。
 */
export const Default: Story = {};
