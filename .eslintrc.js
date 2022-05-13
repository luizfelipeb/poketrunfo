module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  settings: {
    // Ignore file extension on imports (rule and setting)
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    // Allow jsx in tsx file format
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
    // No linebreak style ( RF/CRLF )
    'linebreak-style': 0,
    // Ignore file extension on imports (rule and setting)
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    // No prefer export default
    'import/prefer-default-export': 'off',
    // No props spreading forbiden
    'react/jsx-props-no-spreading': 'off',
    // No array index antipattern warn
    'react/no-array-index-key': 'off',
  },
};
