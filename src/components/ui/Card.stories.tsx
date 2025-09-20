import { Meta, StoryObj } from '@storybook/react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: '额外的 CSS 类名',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

/**
 * 基础卡片
 *
 * 包含标题、描述、内容和页脚的完整卡片结构。
 */
export const Default: Story = {
  render: (args) => (
    <Card {...args} className="w-80">
      <CardHeader>
        <CardTitle>卡片标题</CardTitle>
        <CardDescription>这是一个卡片的描述文本</CardDescription>
      </CardHeader>
      <CardContent>
        <p>这是卡片的主要内容区域，可以放置任何内容。</p>
      </CardContent>
      <CardFooter>
        <p>页脚内容</p>
      </CardFooter>
    </Card>
  ),
};

/**
 * 简单卡片
 *
 * 只包含标题和内容的简化卡片。
 */
export const Simple: Story = {
  render: (args) => (
    <Card {...args} className="w-80">
      <CardHeader>
        <CardTitle>简单卡片</CardTitle>
      </CardHeader>
      <CardContent>
        <p>这是一个简化的卡片，只包含标题和内容。</p>
      </CardContent>
    </Card>
  ),
};

/**
 * 无页脚卡片
 *
 * 包含标题、描述和内容，但没有页脚。
 */
export const NoFooter: Story = {
  render: (args) => (
    <Card {...args} className="w-80">
      <CardHeader>
        <CardTitle>无页脚卡片</CardTitle>
        <CardDescription>这个卡片没有页脚</CardDescription>
      </CardHeader>
      <CardContent>
        <p>卡片内容区域</p>
      </CardContent>
    </Card>
  ),
};

/**
 * 卡片网格
 *
 * 展示多个卡片的网格布局。
 */
export const Grid: Story = {
  render: (args) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card {...args}>
        <CardHeader>
          <CardTitle>卡片 1</CardTitle>
          <CardDescription>第一个卡片</CardDescription>
        </CardHeader>
        <CardContent>
          <p>内容 1</p>
        </CardContent>
      </Card>
      <Card {...args}>
        <CardHeader>
          <CardTitle>卡片 2</CardTitle>
          <CardDescription>第二个卡片</CardDescription>
        </CardHeader>
        <CardContent>
          <p>内容 2</p>
        </CardContent>
      </Card>
      <Card {...args}>
        <CardHeader>
          <CardTitle>卡片 3</CardTitle>
          <CardDescription>第三个卡片</CardDescription>
        </CardHeader>
        <CardContent>
          <p>内容 3</p>
        </CardContent>
      </Card>
    </div>
  ),
};
