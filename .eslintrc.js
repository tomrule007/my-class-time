module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['airbnb'],
  parser: 'babel-eslint',
  rules: {
    'linebreak-style': ['error', 'windows'],
    'import/no-unresolved': 'off', // Turned off due to using Webpack resolve functionality
  },
  overrides: [
    {
      files: ['src/client/**/*'],
      rules: {

      },
    },
    {
      files: ['src/server/**/*'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
}