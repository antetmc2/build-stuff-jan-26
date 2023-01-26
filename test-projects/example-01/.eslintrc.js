module.exports = {
  extends: [
    'oclif',
    'oclif-typescript',
    'prettier',
  ],
  plugins: [
    'prettier',
  ],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: './',
  },
  rules: {
    'prettier/prettier': ['warn'],
    'node/no-extraneous-import': 'off',
    'unicorn/no-array-callback-reference': 'off',
  }
};
