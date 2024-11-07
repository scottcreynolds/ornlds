import type { Meta, StoryObj } from '@storybook/web-components';

import type { HeaderProps } from './Header';
import { Header } from './Header';

const meta = {
  title: 'Components/Global Nav & Header',
  render: (args: HeaderProps) => Header(args),
} satisfies Meta<HeaderProps>;

export default meta;
type Story = StoryObj<HeaderProps>;

export const Primary: Story = {
  args: {
    header: true,
    navLocation: 'top',
  },
};

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
    header: true,
    navLocation: 'top',
  },
};

// export const LoggedOut: Story = {};
