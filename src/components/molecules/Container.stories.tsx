import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';

const meta: Meta<typeof Container> = {
  title: 'Molecules/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    maxWidth: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl', 'full'],
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="bg-gray-100 p-4 rounded">
        <h2 className="text-xl font-bold mb-2">Container Content</h2>
        <p>This is a container with default settings (max-width: xl, padding: md)</p>
      </div>
    ),
  },
};

export const Small: Story = {
  args: {
    maxWidth: 'sm',
    children: (
      <div className="bg-blue-100 p-4 rounded">
        <h2 className="text-lg font-bold mb-2">Small Container</h2>
        <p>This container has a small max-width</p>
      </div>
    ),
  },
};

export const Large: Story = {
  args: {
    maxWidth: '2xl',
    children: (
      <div className="bg-green-100 p-4 rounded">
        <h2 className="text-2xl font-bold mb-2">Large Container</h2>
        <p>This container has a large max-width (2xl)</p>
      </div>
    ),
  },
};

export const NoPadding: Story = {
  args: {
    padding: 'none',
    children: (
      <div className="bg-red-100 p-4 rounded">
        <h2 className="text-lg font-bold mb-2">No Padding Container</h2>
        <p>This container has no padding</p>
      </div>
    ),
  },
};

export const FullWidth: Story = {
  args: {
    maxWidth: 'full',
    children: (
      <div className="bg-purple-100 p-4 rounded">
        <h2 className="text-lg font-bold mb-2">Full Width Container</h2>
        <p>This container takes full width</p>
      </div>
    ),
  },
};
