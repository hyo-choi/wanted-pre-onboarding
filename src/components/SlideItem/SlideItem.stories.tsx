import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SlideItem from './SlideItem';

export default {
  title: 'components/SlideItem',
  component: SlideItem,
  args: {
    hidden: false,
    title: 'Git? GitHub?',
    description: '협업 필수 도구 마스터하기',
    url: '/',
    img: 'https://static.wanted.co.kr/images/banners/1452/be4ec643.jpg',
    index: 1,
    kind: 'EVENT_DETAIL',
  },
} as ComponentMeta<typeof SlideItem>;

const Template: ComponentStory<typeof SlideItem> = (args) => <SlideItem {...args} />;

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
