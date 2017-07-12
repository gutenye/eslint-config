module.exports = {
  "extends": [
    "airbnb-base",
    "prettier"               // disable rules not needed, e.g. semi: off
  ],
  "env": {
    "browser": true,         // add global variables, e.g. localStorage
    "node": true
  },
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
    "space-infix-opts": "off",
    "no-else-return": "off",    // if (true) { return a } else { return b }
    "dot-notation": "off"       // user['name']
  },
  "settings": {
    "import/resolver": {
      "node": {
        "moduleDirectory": ["src", "node_modules"]
      }
    }
  }
}
