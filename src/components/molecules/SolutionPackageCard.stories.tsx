import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SolutionPackageCard } from './SolutionPackageCard';

const meta: Meta<typeof SolutionPackageCard> = {
  title: 'Molecules/SolutionPackageCard',
  component: SolutionPackageCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    popular: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '基础设立服务',
    description: '为初创企业提供基本的公司设立服务，包括主体资格认证、营业执照申请和基础银行开户。',
    features: [
      '主体资格认证',
      '营业执照申请',
      '基础银行开户',
      '税务登记',
      '基础合规咨询'
    ],
    category: '公司设立',
    slug: 'basic-setup-service',
    onClick: () => console.log('点击基础服务卡片'),
  },
};

export const Popular: Story = {
  args: {
    title: '全流程设立服务',
    description: '提供从公司设立到运营的全流程服务，包括注册、开户、合规、人员招聘等一站式解决方案。',
    features: [
      '完整公司设立',
      '银行开户服务',
      '税务合规管理',
      '人员招聘支持',
      '经营场所租赁',
      '行业许可申请',
      '年度合规维护'
    ],
    price: '¥50,000起',
    duration: '3-6个月',
    category: '全流程服务',
    slug: 'full-service-setup',
    popular: true,
    onClick: () => console.log('点击热门服务卡片'),
  },
};

export const Premium: Story = {
  args: {
    title: '企业重组与退出服务',
    description: '为企业提供专业的重组和退出解决方案，包括股权转让、资产出售、清算注销等复杂业务。',
    features: [
      '股权转让服务',
      '资产出售方案',
      '清算注销流程',
      '资金汇出安排',
      '员工遣散补偿',
      '替代性方案咨询'
    ],
    price: '¥100,000起',
    duration: '6-12个月',
    category: '企业重组',
    slug: 'corporate-restructuring',
    onClick: () => console.log('点击企业重组服务卡片'),
  },
};

export const IndustrySpecific: Story = {
  args: {
    title: '科技行业专项服务',
    description: '专为科技公司设计的设立和运营服务，包括ICP备案、软件著作权申请、数据合规等专业服务。',
    features: [
      '科技公司设立',
      'ICP备案服务',
      '软件著作权申请',
      '数据合规管理',
      '知识产权保护',
      '技术转移服务'
    ],
    price: '¥80,000起',
    duration: '4-8个月',
    category: '行业专项',
    slug: 'tech-industry-service',
    onClick: () => console.log('点击科技行业服务卡片'),
  },
};
