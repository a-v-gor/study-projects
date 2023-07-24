module.exports = {
  env: {
    browser: true,
    es2021: true,
    // node: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  ignorePatterns: ['webpack.config.js'],
  rules: {
    '@typescript-eslint/no-explicit-any': 2,
  },
};
