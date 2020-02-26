module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
  ],
  rules: {
    'react/state-in-constructor': 'off',
    'react/static-property-placement': ['off',
    'property assignment'],
    'react/static-property-placement': ['error',
    'static public field'],
    'react/sort-comp': 'off',
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js']
      }
    ],
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    'no-console': ["error", { allow: ["tron"] }],
    "react/prop-types": "off",
    "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings":true}],
  },
};
