module.exports = {
   extends: [
    "guten",
    "airbnb/rules/react",
    "prettier/react"
  ],

  "rules": {
    "react/no-direct-mutation-state": "off",
    "react/jsx-filename-extension": "off",      // a.jsx
    "react/prefer-stateless-function": "off",
    "react/prop-types": "off",
    "react/sort-comp": "off",                   // class { onClick(), render(), ... }
    "react/require-default-props": "off",
    "react/no-children-props": "off",           // <Post children={this.props.children} />
    "react/no-array-index-key": "off",          // items.map((v,index) => <div key={index} />)
    "react/no-danger": "off",                   // dangerouslySetInnerHTML={{ __html: bodyHtml }}
    "class-methods-use-this": "off",            // class { method() { this.a = 1 }}
  }
}
