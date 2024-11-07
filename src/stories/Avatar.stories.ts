import { fn } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/web-components';

import type { AvatarProps } from './avatar';
import { Avatar } from './avatar';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Atoms/Avatar',
  tags: ['autodocs'],
  render: (args) => Avatar(args),
  argTypes: {
    imageUrl: {
      control: { type: 'text' },
    },
    altTag: {
      control: { type: 'text' },
    }
  },
  args: { onClick: fn() },
} satisfies Meta<AvatarProps>;

export default meta;
type Story = StoryObj<AvatarProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    altTag: 'A super cool user',
    imageUrl: 'https://picsum.photos/id/64/32',
  },
};

