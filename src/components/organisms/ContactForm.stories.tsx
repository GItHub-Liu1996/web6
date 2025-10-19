import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ContactForm } from './ContactForm';

const meta: Meta<typeof ContactForm> = {
  title: 'Organisms/ContactForm',
  component: ContactForm,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '深度咨询表单组件，与Zoho CRM强绑定，收集详细的客户需求和背景信息。包含基本信息、服务信息和咨询详情三个部分。',
      },
    },
  },
  argTypes: {
    className: {
      control: 'text',
      description: '额外的CSS类名',
    },
    onSubmit: {
      action: 'submitted',
      description: '表单提交回调函数',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ContactForm>;

// 默认故事
export const Default: Story = {
  args: {},
};

// 带自定义提交处理的故事
export const WithCustomSubmit: Story = {
  args: {
    onSubmit: async (data) => {
      console.log('表单数据:', data);
      // 模拟API调用
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert('表单提交成功！');
    },
  },
};

// 紧凑布局故事
export const Compact: Story = {
  args: {
    className: 'max-w-2xl mx-auto',
  },
};

// 全宽布局故事
export const FullWidth: Story = {
  args: {
    className: 'max-w-full',
  },
};

// 带预设数据的故事（用于测试）
export const WithPresetData: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: '这个版本用于测试表单的各个状态和验证功能。',
      },
    },
  },
};

// 错误状态测试故事
export const ErrorHandling: Story = {
  args: {
    onSubmit: async () => {
      // 模拟API错误
      throw new Error('网络错误');
    },
  },
  parameters: {
    docs: {
      description: {
        story: '测试表单的错误处理功能。',
      },
    },
  },
};

