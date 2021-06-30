module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  plugins: [
    '@typescript-eslint',
    'prettier',
    'import',
    'eslint-plugin-no-explicit-type-exports',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    require.resolve('@m4thieulavoie/linting'),
  ],
  rules: {
    'no-explicit-type-exports/no-explicit-type-exports': 2,
    'functional/prefer-readonly-type': ['error', { allowLocalMutation: true }],
  },
}
