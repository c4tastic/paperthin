/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  root: true,
  plugins: ['prettier', 'eslint-plugin-no-explicit-type-exports'],
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.vite.json'],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    require.resolve('@m4thieulavoie/linting'),
  ],
  rules: {
    'no-explicit-type-exports/no-explicit-type-exports': 2,
  },
}
