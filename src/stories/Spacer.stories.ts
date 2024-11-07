import type { Meta, StoryObj } from '@storybook/web-components';

import type { SpacerProps } from './Spacer';
import { Spacer } from './Spacer';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Atoms/Spacer',
  tags: ['autodocs'],
  render: (args) => Spacer(args),
  argTypes: {
    marginTop: {
      control: { type: 'text' },
    },
    marginBottom: {
      control: { type: 'text' },
    },
    marginLeft: {
      control: { type: 'text' },
    },
    marginRight: {
      control: { type: 'text' },
    },
    backgroundColor: {
      control: { type: 'color' },
    }
  },
} satisfies Meta<SpacerProps>;

export default meta;
type Story = StoryObj<SpacerProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    backgroundColor: 'red',
  },
};

