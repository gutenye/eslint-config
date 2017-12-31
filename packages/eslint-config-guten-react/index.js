module.exports = {
   "extends": [
    "guten",
    "standard-react",
    "prettier/react"
  ],
  "rules": {
    "jsx-quotes": "off",     // by prettier
    "react/prop-types": [ "error", { "skipUndeclared": true } ]
  }
}
