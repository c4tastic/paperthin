module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  project: ['./tsconfig.json'],
  plugins: [
    '@typescript-eslint',
    'prettier'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
}
