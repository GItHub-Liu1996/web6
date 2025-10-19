import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FormField } from './FormField';

const meta: Meta<typeof FormField> = {
  title: 'Molecules/FormField',
  component: FormField,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    required: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'tel', 'url'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '姓名',
    placeholder: '请输入您的姓名',
  },
};

export const WithError: Story = {
  args: {
    label: '邮箱地址',
    placeholder: '请输入您的邮箱',
    type: 'email',
    required: true,
    error: '请输入有效的邮箱地址',
  },
};

export const WithHelpText: Story = {
  args: {
    label: '公司名称',
    placeholder: '请输入公司名称',
    helpText: '请输入您公司的完整名称',
  },
};

export const Required: Story = {
  args: {
    label: '联系电话',
    placeholder: '请输入联系电话',
    type: 'tel',
    required: true,
    helpText: '我们将通过此电话与您联系',
  },
};

export const Disabled: Story = {
  args: {
    label: '用户名',
    value: 'john.doe',
    placeholder: '请输入用户名',
    disabled: true,
    helpText: '用户名不可修改',
  },
};
