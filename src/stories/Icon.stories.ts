import { Meta, StoryObj } from '@storybook/web-components';

import type { IconProps } from './Icon';
import { Icon } from './Icon';

const meta = {
  title: 'Atoms/Icon',
  render: (args: IconProps) => Icon(args),
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: ['music-notes-simple', 'speaker-simple-high', 'stack', 'wifi-high', 'biohazard', 'house', 'magnifying-glass'],
      description: 'The name of the icon to display, without the ph- prefix. Dropdown options are examples, the whole library is currently supported.',
    },
    color: {
        control: { type: 'color' },
        },
    size: {
        control: { type: 'select' },
        options: ['small', 'large'],
  },
    },
} satisfies Meta<IconProps>;

export default meta;

type Story = StoryObj<IconProps>;

export const Primary: Story = {
  args: {
    icon: 'address-book',
    size: "large"
  },
};