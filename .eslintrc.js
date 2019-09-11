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