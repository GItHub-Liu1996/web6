import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BlogCard } from './BlogCard';

const meta: Meta<typeof BlogCard> = {
  title: 'Molecules/BlogCard',
  component: BlogCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    featured: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '2024年中国外商投资政策解读',
    excerpt: '本文详细解读了2024年中国外商投资的最新政策变化，包括负面清单调整、投资便利化措施等，为外国投资者提供全面的政策指导。',
    category: '政策解读',
    slug: 'china-foreign-investment-policy-2024',
    date: '2024-01-15',
    readingTime: 8,
    onClick: () => console.log('点击博客卡片'),
  },
};

export const Featured: Story = {
  args: {
    title: '科技公司在中国设立WFOE的完整指南',
    excerpt: '从公司注册到银行开户，从税务合规到人员招聘，本文提供了科技公司在中国设立外商独资企业的完整操作指南。',
    category: '设立指南',
    slug: 'tech-company-wfoe-setup-guide',
    date: '2024-01-10',
    readingTime: 12,
    featured: true,
    onClick: () => console.log('点击特色博客卡片'),
  },
};

export const LongTitle: Story = {
  args: {
    title: '跨境资金流动管理：从外汇管制到资金池管理的全面解析',
    excerpt: '深入分析中国跨境资金流动的管理框架，包括外汇管制政策、资金池管理、跨境人民币业务等关键内容。',
    category: '资金管理',
    slug: 'cross-border-funds-flow-management',
    date: '2024-01-08',
    readingTime: 15,
    onClick: () => console.log('点击长标题博客卡片'),
  },
};

export const ShortContent: Story = {
  args: {
    title: '快速了解中国税务合规',
    excerpt: '简要介绍中国税务合规的基本要求。',
    category: '税务',
    slug: 'china-tax-compliance-basics',
    date: '2024-01-05',
    readingTime: 3,
    onClick: () => console.log('点击短内容博客卡片'),
  },
};
