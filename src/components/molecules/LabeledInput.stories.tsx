import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LabeledInput } from './LabeledInput';

const meta: Meta<typeof LabeledInput> = {
  title: 'Molecules/LabeledInput',
  component: LabeledInput,
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

export const Required: Story = {
  args: {
    label: '邮箱地址',
    placeholder: '请输入您的邮箱',
    type: 'email',
    required: true,
  },
};

export const WithValue: Story = {
  args: {
    label: '公司名称',
    value: 'Go China Advisors',
    placeholder: '请输入公司名称',
  },
};

export const Disabled: Story = {
  args: {
    label: '用户名',
    value: 'john.doe',
    placeholder: '请输入用户名',
    disabled: true,
  },
};

export const Password: Story = {
  args: {
    label: '密码',
    type: 'password',
    placeholder: '请输入密码',
    required: true,
  },
};
