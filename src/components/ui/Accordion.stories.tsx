import { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './accordion';

const meta: Meta<typeof Accordion> = {
  title: 'UI/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
      description: '手风琴类型',
    },
    collapsible: {
      control: 'boolean',
      description: '是否可折叠',
    },
    className: {
      control: 'text',
      description: '额外的 CSS 类名',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

/**
 * 默认手风琴
 *
 * 单选项手风琴，一次只能展开一个项目。
 */
export const Default: Story = {
  render: (args) => (
    <Accordion {...args} type="single" collapsible className="w-80">
      <AccordionItem value="item-1">
        <AccordionTrigger>第一个项目</AccordionTrigger>
        <AccordionContent>
          这是第一个项目的内容。可以包含任何文本或组件。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>第二个项目</AccordionTrigger>
        <AccordionContent>
          这是第二个项目的内容。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>第三个项目</AccordionTrigger>
        <AccordionContent>
          这是第三个项目的内容。
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

/**
 * 多选手风琴
 *
 * 多选手风琴，可以同时展开多个项目。
 */
export const Multiple: Story = {
  render: (args) => (
    <Accordion {...args} type="multiple" className="w-80">
      <AccordionItem value="item-1">
        <AccordionTrigger>常见问题 1</AccordionTrigger>
        <AccordionContent>
          这是第一个常见问题的答案。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>常见问题 2</AccordionTrigger>
        <AccordionContent>
          这是第二个常见问题的答案。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>常见问题 3</AccordionTrigger>
        <AccordionContent>
          这是第三个常见问题的答案。
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

/**
 * 不可折叠
 *
 * 至少有一个项目必须保持展开状态。
 */
export const NotCollapsible: Story = {
  render: (args) => (
    <Accordion {...args} type="single" className="w-80">
      <AccordionItem value="item-1">
        <AccordionTrigger>必读内容</AccordionTrigger>
        <AccordionContent>
          这是必读的内容，无法折叠。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>可选内容 1</AccordionTrigger>
        <AccordionContent>
          这是可选的内容。
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>可选内容 2</AccordionTrigger>
        <AccordionContent>
          这也是可选的内容。
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

/**
 * 长内容
 *
 * 包含较长内容的手风琴。
 */
export const LongContent: Story = {
  render: (args) => (
    <Accordion {...args} type="single" collapsible className="w-96">
      <AccordionItem value="item-1">
        <AccordionTrigger>详细说明</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <p>这是一个包含详细说明的手风琴项目。</p>
            <p>内容可以很长，包含多个段落和列表：</p>
            <ul className="list-disc list-inside space-y-1">
              <li>第一项说明</li>
              <li>第二项说明</li>
              <li>第三项说明</li>
            </ul>
            <p>更多详细内容...</p>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>使用指南</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <h4 className="font-semibold">使用步骤：</h4>
            <ol className="list-decimal list-inside space-y-1">
              <li>第一步操作</li>
              <li>第二步操作</li>
              <li>第三步操作</li>
            </ol>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
