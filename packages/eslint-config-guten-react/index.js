module.exports = {
   extends: [
    "guten",
    "airbnb/rules/react",
    "prettier/react"
  ],

  "rules": {
    "react/no-direct-mutation-state": "off",
    "react/jsx-filename-extension": "off",
    "react/prefer-stateless-function": "off",
    "react/prop-types": "off",
    "react/sort-comp": "off",  // class { onClick(), render(), ... }
    "class-methods-use-this": "off", // class { method() { this.a = 1 }}
  }
}
