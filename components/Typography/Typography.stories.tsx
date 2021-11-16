import { Meta, Story } from '@storybook/react';

import { Typography, TypographyProps } from './Typography';
import { Heading } from './';
import { Paragraph } from './Paragraph';

export default {
  title: 'Components/Typography',
  component: Typography,
} as Meta;

const Template: Story<TypographyProps> = () => (
  <Typography>
    <Heading level={1}>Level 1</Heading>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia est
      non blandit porta. Donec eu mi libero. Morbi id ultricies risus, in
      blandit metus. Integer in libero eu nisi ullamcorper tristique id et
      purus. Suspendisse in aliquam orci. Maecenas est ligula, ultrices ac leo
      ut, vestibulum finibus eros. Pellentesque habitant morbi tristique
      senectus et netus et malesuada fames ac turpis egestas. In sagittis
      porttitor risus, efficitur pulvinar sem sodales sit amet. Sed eget cursus
      enim.
    </Paragraph>
    <Heading level={2}>Level 2</Heading>
    <Paragraph>
      Etiam lectus nisl, aliquam id metus ut, porta vestibulum quam. Nullam
      condimentum mi nibh, ac ornare nulla vulputate ac. Interdum et malesuada
      fames ac ante ipsum primis in faucibus. Maecenas imperdiet erat nisl, ut
      fermentum neque finibus id. Vestibulum ante ipsum primis in faucibus orci
      luctus et ultrices posuere cubilia curae; Class aptent taciti sociosqu ad
      litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum
      tellus est, scelerisque eget est vitae, mollis sollicitudin magna.
    </Paragraph>
    <Heading level={3}>Level 3</Heading>
    <Paragraph>
      Cras vel diam neque. Nunc at dignissim eros, quis pulvinar elit. Interdum
      et malesuada fames ac ante ipsum primis in faucibus. Phasellus non enim
      pulvinar, viverra metus non, aliquet purus. Integer et odio pretium,
      tincidunt tellus id, scelerisque mauris. Duis quis diam ut velit tempus
      semper id quis ligula. Ut vitae nisi at urna aliquet egestas in vitae
      ante. Nam consequat urna nulla. Suspendisse venenatis tristique dolor non
      cursus. Curabitur commodo gravida nisi ut tempus. Etiam varius interdum
      elit dictum eleifend. Pellentesque posuere ante eget ullamcorper pharetra.
    </Paragraph>
    <Heading level={4}>Level 4</Heading>
    <Paragraph>
      Phasellus finibus lacinia orci, eget consequat sapien dignissim sit amet.
      In purus velit, maximus sit amet tempus at, finibus a mauris. Aliquam erat
      volutpat. Sed euismod convallis enim, ut semper lorem semper et. Nam a ex
      nec nunc fermentum faucibus sed porta eros. Curabitur varius lectus velit,
      sit amet facilisis felis consequat quis. Vivamus risus odio, condimentum
      ac neque sit amet, dignissim vulputate mi. Nulla lacinia vitae ipsum vitae
      aliquam. Pellentesque et purus eget velit ultricies malesuada ut quis ex.
      Donec ultrices nec ipsum vulputate semper. Integer tempus nisl augue, non
      dapibus magna sollicitudin eu. Cras ac dolor sed purus iaculis tempus.
      Phasellus scelerisque quis est non faucibus. Curabitur laoreet neque ut
      nunc blandit pharetra. Maecenas elementum ullamcorper velit ac dapibus.
    </Paragraph>
    <Paragraph>
      Nunc imperdiet odio eget volutpat elementum. In porttitor erat ultrices,
      rutrum orci nec, venenatis lacus. Duis quis justo nulla. Sed consequat
      massa enim, sed interdum turpis eleifend sit amet. Integer bibendum sapien
      massa, viverra aliquam orci vulputate vitae. Cras a libero consectetur,
      sodales risus in, dignissim augue. Aenean efficitur libero a laoreet
      varius. Pellentesque in magna nec ante porta dictum. Fusce vestibulum est
      aliquam, volutpat massa ut, efficitur dui. In sapien massa, luctus eget
      ultrices vitae, dictum a nunc. Phasellus vulputate dapibus massa, non
      rutrum eros malesuada non. Pellentesque posuere, lorem non pellentesque
      efficitur, felis odio gravida purus, egestas finibus enim lorem sed
      mauris.
    </Paragraph>
  </Typography>
);

export const Default = Template.bind({});

Default.args = {};

Default.argTypes = {};
