import { Meta, Story } from '@storybook/react';

import { Header, HeaderProps } from './Header';

import { Button } from 'components/Button';

export default {
  title: 'Components/Header',
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {};

Default.argTypes = {};

export const WithCallToAction = Template.bind({});

WithCallToAction.args = {
  CallToAction: <Button label="Hello world!" />,
};
