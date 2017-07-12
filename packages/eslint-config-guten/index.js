module.exports = {
  "extends": "airbnb-base",
  "parser": "babel-eslint",  // for Flow
  "globals": { pd: true, $: true, $$: true, __DEV__: true },
  "rules": {
    "semi": "off",
    "arrow-body-style": "off",
    "max-len": "off",
    "spaced-comment": "off",
    "object-curly-spacing": "off",
    "eol-last": "off",
    "comma-dangle": "off",
    "no-param-reassign": "off",
    "class-methods-use-this": "off",
    "no-confusing-arrow": "off",
    "import/prefer-default-export": "off",
    "no-console": "off",
    "no-trailing-spaces": "off",
    "space-infix-opts": "off"
  }
}
