import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SearchBox } from './SearchBox';

const meta: Meta<typeof SearchBox> = {
  title: 'Molecules/SearchBox',
  component: SearchBox,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    loading: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('');
    
    return (
      <SearchBox
        placeholder="搜索博客文章..."
        value={value}
        onChange={setValue}
        onSearch={(searchValue) => {
          console.log('搜索:', searchValue);
          alert(`搜索: ${searchValue}`);
        }}
        onClear={() => {
          console.log('清空搜索');
        }}
      />
    );
  },
};

export const WithValue: Story = {
  render: () => {
    const [value, setValue] = useState('中国外商投资');
    
    return (
      <SearchBox
        placeholder="搜索服务..."
        value={value}
        onChange={setValue}
        onSearch={(searchValue) => {
          console.log('搜索:', searchValue);
        }}
      />
    );
  },
};

export const Loading: Story = {
  render: () => {
    const [value, setValue] = useState('搜索中...');
    
    return (
      <SearchBox
        placeholder="搜索案例..."
        value={value}
        onChange={setValue}
        loading={true}
        onSearch={(searchValue) => {
          console.log('搜索:', searchValue);
        }}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "搜索功能已禁用",
    value: "禁用状态",
    onChange: () => {},
    disabled: true,
  },
};

export const Empty: Story = {
  args: {
    placeholder: "请输入搜索关键词",
    value: "",
    onChange: () => {},
  },
};
