import { Meta, StoryObj } from '@storybook/react';
import { Separator } from './separator';

const meta: Meta<typeof Separator> = {
  title: 'UI/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: '分隔线方向',
    },
    className: {
      control: 'text',
      description: '额外的 CSS 类名',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Separator>;

/**
 * 水平分隔线
 *
 * 默认的水平分隔线。
 */
export const Horizontal: Story = {
  render: (args) => (
    <div className="w-80">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">第一部分</h4>
        <p className="text-sm text-muted-foreground">
          这是第一部分的内容。
        </p>
      </div>
      <Separator {...args} className="my-4" />
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">第二部分</h4>
        <p className="text-sm text-muted-foreground">
          这是第二部分的内容。
        </p>
      </div>
    </div>
  ),
};

/**
 * 垂直分隔线
 *
 * 垂直方向的分隔线。
 */
export const Vertical: Story = {
  render: (args) => (
    <div className="flex h-5 items-center space-x-4 text-sm">
      <div>第一部分</div>
      <Separator {...args} orientation="vertical" />
      <div>第二部分</div>
      <Separator {...args} orientation="vertical" />
      <div>第三部分</div>
    </div>
  ),
};

/**
 * 在卡片中使用
 *
 * 展示分隔线在卡片中的应用。
 */
export const InCard: Story = {
  render: (args) => (
    <div className="w-80 border rounded-lg p-4">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">用户信息</h4>
        <p className="text-sm text-muted-foreground">
          显示用户的基本信息。
        </p>
      </div>
      <Separator {...args} className="my-4" />
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">设置选项</h4>
        <p className="text-sm text-muted-foreground">
          用户的各种设置选项。
        </p>
      </div>
      <Separator {...args} className="my-4" />
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">操作按钮</h4>
        <p className="text-sm text-muted-foreground">
          保存、取消等操作按钮。
        </p>
      </div>
    </div>
  ),
};

/**
 * 导航分隔线
 *
 * 在导航菜单中使用的分隔线。
 */
export const InNavigation: Story = {
  render: (args) => (
    <div className="w-60 border rounded-lg p-2">
      <div className="space-y-2">
        <div className="px-2 py-1 text-sm font-medium">主要功能</div>
        <div className="px-2 py-1 text-sm">首页</div>
        <div className="px-2 py-1 text-sm">产品</div>
        <div className="px-2 py-1 text-sm">服务</div>
        <Separator {...args} className="my-2" />
        <div className="px-2 py-1 text-sm font-medium">用户功能</div>
        <div className="px-2 py-1 text-sm">个人资料</div>
        <div className="px-2 py-1 text-sm">设置</div>
        <Separator {...args} className="my-2" />
        <div className="px-2 py-1 text-sm">帮助</div>
        <div className="px-2 py-1 text-sm">退出</div>
      </div>
    </div>
  ),
};

/**
 * 表单分隔线
 *
 * 在表单中使用的分隔线。
 */
export const InForm: Story = {
  render: (args) => (
    <div className="w-80 space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">用户名</label>
        <input className="w-full px-3 py-2 border rounded-md" placeholder="请输入用户名" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">邮箱</label>
        <input className="w-full px-3 py-2 border rounded-md" placeholder="请输入邮箱" />
      </div>
      <Separator {...args} />
      <div className="space-y-2">
        <label className="text-sm font-medium">密码</label>
        <input className="w-full px-3 py-2 border rounded-md" type="password" placeholder="请输入密码" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">确认密码</label>
        <input className="w-full px-3 py-2 border rounded-md" type="password" placeholder="请确认密码" />
      </div>
    </div>
  ),
};

/**
 * 不同样式
 *
 * 展示不同样式的分隔线。
 */
export const DifferentStyles: Story = {
  render: (args) => (
    <div className="w-80 space-y-4">
      <div>
        <p className="text-sm font-medium mb-2">默认样式</p>
        <Separator {...args} />
      </div>
      <div>
        <p className="text-sm font-medium mb-2">粗分隔线</p>
        <Separator {...args} className="h-1" />
      </div>
      <div>
        <p className="text-sm font-medium mb-2">虚线分隔线</p>
        <Separator {...args} className="border-dashed" />
      </div>
    </div>
  ),
};