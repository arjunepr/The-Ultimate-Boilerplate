module.exports = {
  'env': {
    'es6': true,
    'meteor': true,
    'node': true,
    'browser': true
  },
  'extends': 'airbnb',
  'ecmaFeatures': {
      'sourceType': 'module',
      'jsx': true,
      'modules': true,
      'experimentalObjectRestSpread': true
  },
  'parser': 'babel-eslint',
  'parserOptions': {
    'sourceType': 'module'
  },
  'plugins': [
  ],
  'globals': {
    'describe': true,
    'it': true,
    'beforeEach': true,
    'before': true,
    'afterEach': true,
    'after': true,
    'expect': true,
    'assert': true,
    'browser': true,
    'server': true
  },
};
