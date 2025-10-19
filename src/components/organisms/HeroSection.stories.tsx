import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { HeroSection } from './HeroSection';

const meta: Meta<typeof HeroSection> = {
  title: 'Organisms/HeroSection',
  component: HeroSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '现代化企业级英雄区域组件，包含双栏布局、统计数据、服务特色卡片和装饰性元素，支持自定义背景图片。'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: '额外的CSS类名'
    },
    backgroundImage: {
      control: 'text',
      description: '背景图片URL'
    }
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: '',
    backgroundImage: ''
  }
};

export const WithGradientBackground: Story = {
  args: {
    className: '',
    backgroundImage: ''
  },
  render: (args) => (
    <HeroSection 
      {...args} 
      className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
    />
  )
};

export const WithBusinessBackground: Story = {
  args: {
    className: '',
    backgroundImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  }
};

export const WithOfficeBackground: Story = {
  args: {
    className: '',
    backgroundImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80'
  }
};

export const WithCityBackground: Story = {
  args: {
    className: '',
    backgroundImage: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  }
};

export const MobileView: Story = {
  args: {
    className: '',
    backgroundImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
};

export const TabletView: Story = {
  args: {
    className: '',
    backgroundImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet'
    }
  }
};

export const DesktopView: Story = {
  args: {
    className: '',
    backgroundImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    }
  }
};

export const FullHeight: Story = {
  args: {
    className: 'min-h-screen',
    backgroundImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  }
};

export const DarkTheme: Story = {
  args: {
    className: 'bg-gradient-to-br from-gray-900 via-gray-800 to-black',
    backgroundImage: ''
  }
};
