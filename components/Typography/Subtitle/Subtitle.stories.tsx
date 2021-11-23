import { Meta, Story } from '@storybook/react';

import { Subtitle, SubtitleProps } from './Subtitle';

export default {
  title: 'Components/Typography/Subtitle',
  component: Subtitle,
} as Meta;

const Template: Story<SubtitleProps> = (args) => <Subtitle {...args} />;

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
