/**
 * @type {import('eslint').ESLint.Options}
 */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  project: ['./tsconfig.json'],
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    require.resolve('@m4thieulavoie/linting'),
  ],
}
