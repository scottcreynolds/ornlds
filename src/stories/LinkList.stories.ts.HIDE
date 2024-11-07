import type { Meta, StoryObj } from '@storybook/web-components';

// import type { LinkListItemProps } from './LinkListItem';
// import { LinkListItem } from './LinkListItem';
// import type { LinkListProps } from './LinkList';
// import { LinkList } from './LinkList';
import { html } from 'lit';

const meta = {
  title: 'Atoms/LinkList',
  component: 'link-list',
  subcomponents: {LinkListItem: 'link-list-item'},
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  args: {
    direction: 'row',
  },
  render: (args) => html`
    <link-list direction=${args.direction}>
      <link-list-item href="https://example.com">Example</link-list-item>
      <link-list-item href="https://example.com">Example</link-list-item>
      <link-list-item href="https://example.com">Example</link-list-item>
    </link-list>`,
};

export const Column: Story = {
  args: {
    direction: 'column',
  },
    render: (args: LinkListProps) => html`
        <link-list direction=${args.direction}>
        <link-list-item href="https://example.com">Example</link-list-item>
        <link-list-item href="https://example.com">Example</link-list-item>
        <link-list-item href="https://example.com">Example</link-list-item>
        </link-list>`,
};

