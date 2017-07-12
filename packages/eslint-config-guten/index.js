module.exports = {
  "extends": [
    "airbnb-base",
    "prettier",               // disable rules not needed, e.g. semi: off
    "prettier/flowtype"
  ],
  "env": {
    "browser": true,         // add global variables, e.g. localStorage
    "node": true
  },
  "parser": "babel-eslint",  // for Flow
  "globals": { pd: true, $: true, $$: true, __DEV__: true },
  "rules": {
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off", // import { Hello } from 'gureact/mdc'
    "import/extensions": "off", // import { Hello } from 'gureact/mdc'
    "import/first": "off",  // import './Button.scss'; import React from 'react'
    "no-param-reassign": "off",
    "no-confusing-arrow": "off",
    "no-console": "off",
    "no-trailing-spaces": "off",
    "no-else-return": "off",    // if (true) { return a } else { return b }
    "no-underscore-dangle": "off",
    "arrow-body-style": "off",
    "comma-dangle": "off",
    "class-methods-use-this": "off", // class { method() { this.a = 1 }}
    "dot-notation": "off",       // user['name']
    "eol-last": "off",
    "max-len": "off",
    "object-curly-spacing": "off",
    "semi": "off",
    "spaced-comment": "off",
    "space-infix-opts": "off",
  },
  "settings": {
    "import/resolver": {
      "node": {
        "moduleDirectory": ["src", "node_modules"]
      }
    }
  }
}
