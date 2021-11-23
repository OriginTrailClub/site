import { Meta, Story } from '@storybook/react';

import ArrowRightFillIcon from 'remixicon-react/ArrowRightFillIcon';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'Hello world',
};

Default.argTypes = {
  label: {
    control: {
      type: 'text',
    },
  },
};

export const WithIcon = Template.bind({});

WithIcon.args = {
  label: 'Hello world',
  Icon: ArrowRightFillIcon,
};

WithIcon.argTypes = {
  label: {
    control: {
      type: 'text',
    },
  },
};

export const HiddenLabel = Template.bind({});

HiddenLabel.args = {
  label: 'Hello world',
  hideLabel: true,
  Icon: ArrowRightFillIcon,
};

HiddenLabel.argTypes = {
  label: {
    control: {
      type: 'text',
    },
  },
};
