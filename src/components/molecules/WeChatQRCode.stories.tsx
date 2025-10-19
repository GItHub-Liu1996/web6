import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { WeChatQRCode } from './WeChatQRCode';

const meta: Meta<typeof WeChatQRCode> = {
  title: 'Molecules/WeChatQRCode',
  component: WeChatQRCode,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    wechatId: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    qrCodeUrl: 'https://via.placeholder.com/128x128/4CAF50/FFFFFF?text=WeChat',
    wechatId: 'gochina2024',
    title: '扫码添加微信',
    description: '扫描二维码或搜索微信号联系我们',
  },
};

export const CustomTitle: Story = {
  args: {
    qrCodeUrl: 'https://via.placeholder.com/128x128/4CAF50/FFFFFF?text=WeChat',
    wechatId: 'consultant_li',
    title: '联系我们的专业顾问',
    description: '添加微信获取一对一咨询服务',
  },
};

export const LongWechatId: Story = {
  args: {
    qrCodeUrl: 'https://via.placeholder.com/128x128/4CAF50/FFFFFF?text=WeChat',
    wechatId: 'gochina_advisors_official',
    title: '官方微信客服',
    description: '扫描二维码添加官方微信客服',
  },
};
