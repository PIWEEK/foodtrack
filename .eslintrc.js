module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  globals: {
    nfc: true,
    ndef: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': 'off',
    'operator-linebreak': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
