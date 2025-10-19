import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from './Grid';

const meta: Meta<typeof Grid> = {
  title: 'Molecules/Grid',
  component: Grid,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    gap: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const SampleCard = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-gray-100 p-4 rounded border h-24 flex items-center justify-center ${className}`}>
    {children}
  </div>
);

export const Default: Story = {
  args: {
    cols: { default: 1, sm: 2, md: 3 },
    gap: 'md',
    children: (
      <>
        <SampleCard>Card 1</SampleCard>
        <SampleCard>Card 2</SampleCard>
        <SampleCard>Card 3</SampleCard>
        <SampleCard>Card 4</SampleCard>
        <SampleCard>Card 5</SampleCard>
        <SampleCard>Card 6</SampleCard>
      </>
    ),
  },
};

export const TwoColumns: Story = {
  args: {
    cols: { default: 1, sm: 2 },
    gap: 'lg',
    children: (
      <>
        <SampleCard>Card 1</SampleCard>
        <SampleCard>Card 2</SampleCard>
        <SampleCard>Card 3</SampleCard>
        <SampleCard>Card 4</SampleCard>
      </>
    ),
  },
};

export const FourColumns: Story = {
  args: {
    cols: { default: 1, sm: 2, md: 4 },
    gap: 'sm',
    children: (
      <>
        <SampleCard>Card 1</SampleCard>
        <SampleCard>Card 2</SampleCard>
        <SampleCard>Card 3</SampleCard>
        <SampleCard>Card 4</SampleCard>
        <SampleCard>Card 5</SampleCard>
        <SampleCard>Card 6</SampleCard>
        <SampleCard>Card 7</SampleCard>
        <SampleCard>Card 8</SampleCard>
      </>
    ),
  },
};

export const NoGap: Story = {
  args: {
    cols: { default: 3 },
    gap: 'none',
    children: (
      <>
        <SampleCard className="bg-blue-100">Card 1</SampleCard>
        <SampleCard className="bg-green-100">Card 2</SampleCard>
        <SampleCard className="bg-red-100">Card 3</SampleCard>
      </>
    ),
  },
};

export const CenterAligned: Story = {
  args: {
    cols: { default: 2 },
    gap: 'md',
    align: 'center',
    children: (
      <>
        <SampleCard className="h-16">Short</SampleCard>
        <SampleCard className="h-32">Tall</SampleCard>
        <SampleCard className="h-20">Medium</SampleCard>
        <SampleCard className="h-24">Medium Tall</SampleCard>
      </>
    ),
  },
};
