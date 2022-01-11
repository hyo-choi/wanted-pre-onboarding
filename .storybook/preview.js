import 'minireset.css';
import 'normalize.css';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

const customViewports = {
  'max': {
    name: 'larger than 1200px',
    styles: {
      width: '1300px',
      height: 'auto',
    }
  },
  '1199': {
    name: 'less than 1199px',
    styles: {
      width: '1198px',
      height: 'auto',
    },
  },
  '1100': {
    name: 'less than 1100px',
    styles: {
      width: '1099px',
      height: 'auto',
    }
  },
  '991': {
    name: 'less than 991px',
    styles: {
      width: '990px',
      height: 'auto',
    }
  },
  'min': {
    name: 'less than 767px',
    styles: {
      width: '766px',
      height: 'auto',
    }
  }
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      ...customViewports,
    },
  },
};
