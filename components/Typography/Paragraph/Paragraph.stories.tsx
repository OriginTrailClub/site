import { Meta, Story } from '@storybook/react';

import { Paragraph, ParagraphProps } from './Paragraph';

export default {
  title: 'Components/Typography/Paragraph',
  component: Paragraph,
} as Meta;

const Template: Story<ParagraphProps> = (args) => <Paragraph {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Hello world',
};

Default.argTypes = {
  children: {
    control: {
      type: 'text',
    },
  },
};
