import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Organisms/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '响应式页脚组件，包含服务链接、资源中心、公司信息、联系信息和社交媒体。使用方案C图标设计：默认灰色，悬停时显示品牌色彩。',
      },
    },
  },
  argTypes: {
    className: {
      control: 'text',
      description: '额外的CSS类名',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

// 默认故事
export const Default: Story = {
  args: {},
};

// 紧凑布局故事
export const Compact: Story = {
  args: {
    className: 'py-8',
  },
};

// 全宽布局故事
export const FullWidth: Story = {
  args: {
    className: 'max-w-full',
  },
};

// 深色主题故事
export const DarkTheme: Story = {
  args: {
    className: 'bg-gray-900 text-white',
  },
  parameters: {
    docs: {
      description: {
        story: '深色主题的页脚样式。',
      },
    },
  },
};

// 移动端预览故事
export const MobileView: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: '移动端视图下的页脚布局。',
      },
    },
  },
};

// 平板端预览故事
export const TabletView: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
    docs: {
      description: {
        story: '平板端视图下的页脚布局。',
      },
    },
  },
};

// 桌面端预览故事
export const DesktopView: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
    docs: {
      description: {
        story: '桌面端视图下的页脚布局。',
      },
    },
  },
};

