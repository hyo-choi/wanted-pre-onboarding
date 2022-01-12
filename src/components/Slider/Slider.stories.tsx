import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Slider from './Slider';

export default {
  title: 'components/Slider',
  component: Slider,
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = () => <Slider />;

export const Max = Template.bind({});
Max.parameters = {
  viewport: {
    defaultViewport: 'max',
  },
};

export const LessThan1199 = Template.bind({});
LessThan1199.parameters = {
  viewport: {
    defaultViewport: '1199',
  },
};

export const LessThan991 = Template.bind({});
LessThan991.parameters = {
  viewport: {
    defaultViewport: '991',
  },
};

export const Min = Template.bind({});
Min.parameters = {
  viewport: {
    defaultViewport: 'min',
  },
};
