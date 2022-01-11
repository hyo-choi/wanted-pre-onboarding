import 'minireset.css';
import 'normalize.css';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

const customViewports = {
  'max': {
    name: 'larger than 1100px',
    styles: {
      width: '1200px',
      height: 'auto',
    }
  },
  '1100': {
    name: 'less than 1100px',
    styles: {
      width: '1100px',
      height: 'auto',
    }
  },
  '991': {
    name: 'less than 991px',
    styles: {
      width: '991px',
      height: 'auto',
    }
  },
  'min': {
    name: 'less than 767px',
    styles: {
      width: '767px',
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
