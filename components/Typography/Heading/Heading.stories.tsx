import { Meta, Story } from '@storybook/react';

import { Heading, HeadingProps } from './Heading';

export default {
  title: 'Components/Typography/Heading',
  component: Heading,
} as Meta;

const Template: Story<HeadingProps> = (args) => <Heading {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Hello world',
  level: 3,
};

Default.argTypes = {
  children: {
    control: {
      type: 'text',
    },
  },
};
