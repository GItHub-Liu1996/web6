import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from './Stack';

const meta: Meta<typeof Stack> = {
  title: 'Molecules/Stack',
  component: Stack,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['row', 'column'],
    },
    spacing: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch'],
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const SampleItem = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-blue-100 p-3 rounded border ${className}`}>
    {children}
  </div>
);

export const Vertical: Story = {
  args: {
    direction: 'column',
    spacing: 'md',
    children: (
      <>
        <SampleItem>Item 1</SampleItem>
        <SampleItem>Item 2</SampleItem>
        <SampleItem>Item 3</SampleItem>
      </>
    ),
  },
};

export const Horizontal: Story = {
  args: {
    direction: 'row',
    spacing: 'md',
    children: (
      <>
        <SampleItem>Item 1</SampleItem>
        <SampleItem>Item 2</SampleItem>
        <SampleItem>Item 3</SampleItem>
      </>
    ),
  },
};

export const CenterAligned: Story = {
  args: {
    direction: 'column',
    spacing: 'lg',
    align: 'center',
    children: (
      <>
        <SampleItem className="w-32">Short</SampleItem>
        <SampleItem className="w-48">Medium Length</SampleItem>
        <SampleItem className="w-24">Tiny</SampleItem>
      </>
    ),
  },
};

export const JustifyBetween: Story = {
  args: {
    direction: 'row',
    spacing: 'none',
    justify: 'between',
    children: (
      <>
        <SampleItem>Left</SampleItem>
        <SampleItem>Center</SampleItem>
        <SampleItem>Right</SampleItem>
      </>
    ),
  },
};

export const NoSpacing: Story = {
  args: {
    direction: 'column',
    spacing: 'none',
    children: (
      <>
        <SampleItem>Item 1</SampleItem>
        <SampleItem>Item 2</SampleItem>
        <SampleItem>Item 3</SampleItem>
      </>
    ),
  },
};
