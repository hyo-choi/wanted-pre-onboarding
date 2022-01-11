module.exports = {
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:react/recommended", "airbnb", "plugin:storybook/recommended"],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/function-component-definition': [2, {
      namedComponents: 'arrow-function'
    }],
    'import/extensions': ['error', {
      ts: 'never'
    }],
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2]
  },
  overrides: [{
    files: ['*.stories.tsx'],
    rules: {
      'react/jsx-props-no-spreading': 0,
      'react/function-component-definition': [0, {
        namedComponents: 'arrow-function'
      }]
    }
  }]
};