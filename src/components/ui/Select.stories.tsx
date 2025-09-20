import type { Meta, StoryObj } from '@storybook/react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './select'; // 确保导入了所有子组件

const meta: Meta<typeof Select> = {
  title: 'UI/Select',
  component: Select,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 这是一个完整的、经过样式设计的Select组件。
 */
export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="选择一个主题" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>水果</SelectLabel>
          <SelectItem value="apple">苹果</SelectItem>
          <SelectItem value="banana">香蕉</SelectItem>
          <SelectItem value="blueberry">蓝莓</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>蔬菜</SelectLabel>
          <SelectItem value="carrot">胡萝卜</SelectItem>
          <SelectItem value="celery">芹菜</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

/**
 * 简单选择器
 *
 * 没有分组的基础选择器。
 */
export const Simple: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="选择国家" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="cn">中国</SelectItem>
        <SelectItem value="us">美国</SelectItem>
        <SelectItem value="jp">日本</SelectItem>
        <SelectItem value="kr">韩国</SelectItem>
        <SelectItem value="de">德国</SelectItem>
      </SelectContent>
    </Select>
  ),
};

/**
 * 禁用状态
 *
 * 被禁用的选择器。
 */
export const Disabled: Story = {
  render: () => (
    <Select disabled>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="禁用状态" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">选项 1</SelectItem>
        <SelectItem value="option2">选项 2</SelectItem>
        <SelectItem value="option3">选项 3</SelectItem>
      </SelectContent>
    </Select>
  ),
};

/**
 * 带标签的选择器
 *
 * 带有标签的选择器组合。
 */
export const WithLabel: Story = {
  render: () => (
    <div className="space-y-2">
      <label htmlFor="select" className="text-sm font-medium">
        选择城市
      </label>
      <Select>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="请选择城市" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="beijing">北京</SelectItem>
          <SelectItem value="shanghai">上海</SelectItem>
          <SelectItem value="guangzhou">广州</SelectItem>
          <SelectItem value="shenzhen">深圳</SelectItem>
          <SelectItem value="hangzhou">杭州</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

/**
 * 不同尺寸
 *
 * 展示不同尺寸的选择器。
 */
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">小尺寸</label>
        <Select>
          <SelectTrigger className="w-[150px] h-8">
            <SelectValue placeholder="小尺寸" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="small1">小选项 1</SelectItem>
            <SelectItem value="small2">小选项 2</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">默认尺寸</label>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="默认尺寸" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default1">默认选项 1</SelectItem>
            <SelectItem value="default2">默认选项 2</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">大尺寸</label>
        <Select>
          <SelectTrigger className="w-[200px] h-12">
            <SelectValue placeholder="大尺寸" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="large1">大选项 1</SelectItem>
            <SelectItem value="large2">大选项 2</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  ),
};

/**
 * 复杂分组
 *
 * 展示更复杂的分组结构。
 */
export const ComplexGroups: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[250px]">
        <SelectValue placeholder="选择技术栈" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>前端框架</SelectLabel>
          <SelectItem value="react">React</SelectItem>
          <SelectItem value="vue">Vue.js</SelectItem>
          <SelectItem value="angular">Angular</SelectItem>
          <SelectItem value="svelte">Svelte</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>后端框架</SelectLabel>
          <SelectItem value="nodejs">Node.js</SelectItem>
          <SelectItem value="python">Python</SelectItem>
          <SelectItem value="java">Java</SelectItem>
          <SelectItem value="go">Go</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>数据库</SelectLabel>
          <SelectItem value="postgresql">PostgreSQL</SelectItem>
          <SelectItem value="mysql">MySQL</SelectItem>
          <SelectItem value="mongodb">MongoDB</SelectItem>
          <SelectItem value="redis">Redis</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};