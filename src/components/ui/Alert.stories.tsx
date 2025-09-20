import { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertDescription, AlertTitle } from './alert';

const meta: Meta<typeof Alert> = {
  title: 'UI/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive'],
      description: '警告框样式变体',
    },
    className: {
      control: 'text',
      description: '额外的 CSS 类名',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

/**
 * 默认警告框
 *
 * 标准的警告框样式。
 */
export const Default: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>提示</AlertTitle>
      <AlertDescription>
        这是一个默认的警告框，用于显示一般信息。
      </AlertDescription>
    </Alert>
  ),
};

/**
 * 危险警告框
 *
 * 用于显示错误或危险信息的警告框。
 */
export const Destructive: Story = {
  render: (args) => (
    <Alert {...args} variant="destructive">
      <AlertTitle>错误</AlertTitle>
      <AlertDescription>
        发生了错误，请检查您的输入或联系管理员。
      </AlertDescription>
    </Alert>
  ),
};

/**
 * 无标题警告框
 *
 * 只包含描述文本的警告框。
 */
export const NoTitle: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertDescription>
        这是一个没有标题的警告框。
      </AlertDescription>
    </Alert>
  ),
};

/**
 * 成功信息
 *
 * 使用默认样式显示成功信息。
 */
export const Success: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>成功</AlertTitle>
      <AlertDescription>
        操作已成功完成！
      </AlertDescription>
    </Alert>
  ),
};

/**
 * 警告信息
 *
 * 使用默认样式显示警告信息。
 */
export const Warning: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>警告</AlertTitle>
      <AlertDescription>
        请注意，此操作可能会影响系统性能。
      </AlertDescription>
    </Alert>
  ),
};

/**
 * 信息提示
 *
 * 使用默认样式显示信息提示。
 */
export const Info: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>信息</AlertTitle>
      <AlertDescription>
        这是一条重要的信息提示。
      </AlertDescription>
    </Alert>
  ),
};

/**
 * 所有类型
 *
 * 展示不同类型的警告框。
 */
export const AllTypes: Story = {
  render: (args) => (
    <div className="space-y-4">
      <Alert {...args}>
        <AlertTitle>信息</AlertTitle>
        <AlertDescription>这是一条信息提示。</AlertDescription>
      </Alert>
      <Alert {...args}>
        <AlertTitle>成功</AlertTitle>
        <AlertDescription>操作成功完成！</AlertDescription>
      </Alert>
      <Alert {...args}>
        <AlertTitle>警告</AlertTitle>
        <AlertDescription>请注意相关风险。</AlertDescription>
      </Alert>
      <Alert {...args} variant="destructive">
        <AlertTitle>错误</AlertTitle>
        <AlertDescription>操作失败，请重试。</AlertDescription>
      </Alert>
    </div>
  ),
};
