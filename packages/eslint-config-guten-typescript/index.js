module.exports = {
  "parser": "typescript-eslint-parser",
  "plugins": ["typescript"],
  "extends": [
    "guten", 
    "guten-react",
  ],
  "rules": {
    "no-undef": "off",              // not support it
    "no-unused-vars": "off",        // not support it
    "typescript/class-name-casing": "error",
    "typescript/no-angle-bracket-type-assertion": "error",
    "typescript/no-array-constructor": "error",
    "typescript/no-empty-interface": "error",
    "typescript/no-namespace": "error",
    "typescript/no-parameter-properties": "error",
    "typescript/no-triple-slash-reference": "error",
    "typescript/no-use-before-define": "error",
    "typescript/type-annotation-spacing": "error",
  },
}
