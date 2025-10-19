import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Navigation } from './Navigation.storybook';

const meta: Meta<typeof Navigation> = {
  title: 'Organisms/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '主导航组件，包含Logo、解决方案下拉菜单、基础导航链接和语言切换功能。实现v5.8精简下拉菜单架构。'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: '额外的CSS类名'
    }
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-white">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: ''
  }
};

export const WithCustomStyling: Story = {
  args: {
    className: 'bg-gray-50'
  }
};

export const MobileView: Story = {
  args: {
    className: ''
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
};

export const TabletView: Story = {
  args: {
    className: ''
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet'
    }
  }
};

export const DesktopView: Story = {
  args: {
    className: ''
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    }
  }
};

export const DarkTheme: Story = {
  args: {
    className: 'bg-gray-900 border-gray-700'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
};