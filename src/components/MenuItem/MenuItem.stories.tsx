import React from 'react';
import { maxMenu, minMenu } from '../../constants/menu';
import MenuItem from './MenuItem';

export default {
  title: 'components/MenuItem',
  component: MenuItem,
};

export const Max = () => (
  <>
    {maxMenu.map(({
      label, kind, isNew, isBeta,
    }) => (<MenuItem key={kind} label={label} kind={kind} isNew={isNew} isBeta={isBeta} />))}
  </>
);
Max.parameters = {
  viewport: {
    defaultViewport: 'max',
  },
};

export const LessThan1100 = () => (
  <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
    {maxMenu.map(({
      label, kind, isNew, isBeta,
    }) => (<MenuItem key={kind} label={label} kind={kind} isNew={isNew} isBeta={isBeta} />))}
  </div>
);
LessThan1100.parameters = {
  viewport: {
    defaultViewport: '1100',
  },
};

export const LessThan991 = () => (
  <>
    {maxMenu.map(({
      label, kind, isNew, isBeta,
    }) => (<MenuItem key={kind} label={label} kind={kind} isNew={isNew} isBeta={isBeta} />))}
  </>
);
LessThan991.parameters = {
  viewport: {
    defaultViewport: '991',
  },
};

export const Min = () => (
  <>
    {minMenu.map(({
      label, kind, isNew, isBeta,
    }) => (<MenuItem key={kind} label={label} kind={kind} isNew={isNew} isBeta={isBeta} />))}
  </>
);
Min.parameters = {
  viewport: {
    defaultViewport: 'min',
  },
};
