import { Meta, StoryObj } from '@storybook/web-components';

// import type { FlexContainerProps } from './FlexContainer';
// import { FlexContainer } from './FlexContainer';
import { html } from 'lit';

const meta = {
    title: 'Atoms/FlexContainer',
    tags: ['autodocs'],
    component: 'flex-container',
    // render: (args) => FlexContainer(args),
    argTypes: {
        alignItems: {
            control: { type: 'select' },
            options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
        },
        flexDirection: {
            control: { type: 'select' },
            options: ['row', 'row-reverse', 'column', 'column-reverse'],
        },
        justifyContent: {
            control: { type: 'select' },
            options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
        },
    },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
    args: {
        alignItems: 'stretch',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    }};



// const Template: Story<FlexContainerProps> = ({ direction, justifyContent, alignItems }): TemplateResult => html`
//     <flex-container
//         direction=${direction}
//         justify-content=${justifyContent}
//         align-items=${alignItems}
//     >
//         <div style="background: lightgray; padding: 10px;">Item 1</div>
//         <div style="background: lightgray; padding: 10px;">Item 2</div>
//         <div style="background: lightgray; padding: 10px;">Item 3</div>
//     </flex-container>
// `;

// export const Default = Template.bind({});
// Default.args = {
//     direction: 'row',
//     justifyContent: 'flex-start',
//     alignItems: 'stretch',
// };

// export const Column = Template.bind({});
// Column.args = {
//     direction: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
// };