module.exports = {
   extends: [
    'eslint-config-guten',
    'eslint-config-airbnb-base/rules/strict',
    'eslint-config-airbnb/rules/react',
    'eslint-config-airbnb/rules/react-a11y',
  ].map(require.resolve),

  "rules": {
    'react/no-direct-mutation-state': 'off',
    'jsx-a11y/alt-text': 'off',
  }
}
