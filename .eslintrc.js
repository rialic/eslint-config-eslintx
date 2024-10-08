module.exports = {
  'root': true,
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    'allowImportExportEverywhere': true
  },
  'settings': {
    'import/resolver': {
      'alias': {
        'map': [['@', './src']],
        'extensions': ['.json', '.js', '.vue']
      }
    }
  },
  'rules': {
    'indent': ['error', 4],
    'space-before-function-paren': ['error', 'never'],
    'no-prototype-builtins': 'off',
    'no-useless-escape': 'off',
    'brace-style': ['error', '1tbs'],
    'object-curly-spacing': ['error', 'always', { 'objectsInObjects': false }],
    'max-len': ['error', { 'code': 180, 'ignoreUrls': true }],
    'eol-last': ['error', 'never'],
    'arrow-spacing': ['error', { 'before': true, 'after': true }],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never']
  }
}