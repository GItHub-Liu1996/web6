import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CaseStudyCard } from './CaseStudyCard';

const meta: Meta<typeof CaseStudyCard> = {
  title: 'Molecules/CaseStudyCard',
  component: CaseStudyCard,
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
    title: '科技公司WFOE设立成功案例',
    company: 'TechCorp China',
    industry: '科技与软件',
    challenge: '作为一家美国科技公司，需要在中国设立外商独资企业以开展本地化业务，但面临复杂的注册流程和合规要求。',
    solution: '我们提供了从公司注册到银行开户的全程服务，包括主体资格认证、经营范围确定、税务登记等关键环节。',
    results: '成功在3个月内完成WFOE设立，获得营业执照和银行开户许可，公司业务顺利开展，年营收增长200%。',
    slug: 'techcorp-china-wfoe-success',
    onClick: () => console.log('点击案例研究卡片'),
  },
};

export const Featured: Story = {
  args: {
    title: '制造业企业重组与退出案例',
    company: 'Manufacturing Solutions Ltd.',
    industry: '高端制造业',
    challenge: '由于市场变化，需要关闭在中国的制造工厂，但面临复杂的员工遣散、资产处置和资金汇出问题。',
    solution: '我们制定了完整的退出方案，包括员工补偿计划、资产出售策略、税务清算和资金汇出安排。',
    results: '顺利完成企业重组，员工得到合理补偿，资产成功处置，资金安全汇出，整个过程合规高效。',
    slug: 'manufacturing-exit-case-study',
    featured: true,
    onClick: () => console.log('点击特色案例研究卡片'),
  },
};

export const Ecommerce: Story = {
  args: {
    title: '电商平台合规运营案例',
    company: 'E-Commerce Global',
    industry: '电子商务',
    challenge: '电商平台需要在中国合规运营，但面临复杂的行业准入、数据合规和跨境支付等问题。',
    solution: '我们协助完成了ICP备案、EDI许可证申请、数据本地化合规和跨境支付解决方案。',
    results: '平台成功获得运营许可，合规运营一年，用户增长300%，交易额突破5000万元。',
    slug: 'ecommerce-compliance-case',
    onClick: () => console.log('点击电商案例卡片'),
  },
};

export const ProfessionalServices: Story = {
  args: {
    title: '专业服务公司设立案例',
    company: 'Consulting Partners',
    industry: '专业服务业',
    challenge: '国际咨询公司需要在中国设立分支机构，但面临行业准入限制和人员签证问题。',
    solution: '我们协助完成了代表处设立、行业许可申请、外籍员工工作许可和税务登记。',
    results: '代表处成功设立，获得行业经营许可，外籍员工顺利获得工作许可，业务快速开展。',
    slug: 'consulting-partners-setup',
    onClick: () => console.log('点击专业服务案例卡片'),
  },
};
