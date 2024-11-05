import { fn } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/web-components';

import type { HeaderProps } from './Header';
import { Header } from './Header';

const meta = {
  title: 'Components/Global Nav & Header',
  render: (args: HeaderProps) => Header(args),
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
} satisfies Meta<HeaderProps>;

export default meta;
type Story = StoryObj<HeaderProps>;

// export const LoggedIn: Story = {
//   args: {
//     user: {
//       name: 'Jane Doe',
//     },
//   },
// };

// export const LoggedOut: Story = {};
