import React from 'react';

import NavBar from './NavBar';

export default {
  title: 'components/NavBar',
  component: NavBar,
};

export const Max = () => <NavBar />;
Max.parameters = {
  viewport: {
    defaultViewport: 'max',
  },
};

export const LessThan1199 = () => <NavBar />;
LessThan1199.parameters = {
  viewport: {
    defaultViewport: '1199',
  },
};

export const LessThan991 = () => <NavBar />;
LessThan991.parameters = {
  viewport: {
    defaultViewport: '991',
  },
};

export const Min = () => <NavBar />;
Min.parameters = {
  viewport: {
    defaultViewport: 'min',
  },
};
