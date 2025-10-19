import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ActionButton } from './ActionButton';

const meta: Meta<typeof ActionButton> = {
  title: 'Molecules/ActionButton',
  component: ActionButton,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
    loading: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '提交申请',
    onClick: () => console.log('按钮点击'),
  },
};

export const Loading: Story = {
  args: {
    children: '提交申请',
    loading: true,
    loadingText: '正在提交...',
  },
};

export const Disabled: Story = {
  args: {
    children: '提交申请',
    disabled: true,
  },
};

export const Outline: Story = {
  args: {
    children: '了解更多',
    variant: 'outline',
    onClick: () => console.log('了解更多点击'),
  },
};

export const Destructive: Story = {
  args: {
    children: '删除',
    variant: 'destructive',
    onClick: () => console.log('删除点击'),
  },
};

export const Small: Story = {
  args: {
    children: '保存',
    size: 'sm',
    onClick: () => console.log('保存点击'),
  },
};

export const Large: Story = {
  args: {
    children: '立即咨询',
    size: 'lg',
    onClick: () => console.log('立即咨询点击'),
  },
};
