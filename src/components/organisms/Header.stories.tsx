import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';

const meta: Meta<typeof Header> = {
  title: 'Organisms/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Go China Advisors 网站的主导航栏组件，基于Vistra网站设计风格。'
      }
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 基础状态 - 默认样式和基本用法
export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Header组件的默认状态，包含Logo、导航、搜索、CTA按钮和语言切换器。'
      }
    }
  }
};

// 桌面端状态
export const Desktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
    docs: {
      description: {
        story: '桌面端视图下的Header组件，显示完整的导航菜单。'
      }
    }
  }
};

// 平板端状态
export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
    docs: {
      description: {
        story: '平板端视图下的Header组件，导航菜单可能被隐藏。'
      }
    }
  }
};

// 移动端状态
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: '移动端视图下的Header组件，显示汉堡菜单按钮。'
      }
    }
  }
};

// 交互状态 - 悬停效果
export const Interactive: Story = {
  parameters: {
    docs: {
      description: {
        story: '展示Header组件的交互状态，包括按钮悬停效果。'
      }
    }
  }
};
