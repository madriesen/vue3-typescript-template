module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module",
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "eslint:recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "plugin:vue/vue3-recommended",
    //"plugin:vue/recommended",
    "prettier/vue",
  ],
  plugins: ["prettier", "@typescript-eslint"],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "vue/script-setup-uses-vars": 1,
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
  ignorePatterns: ["dist"],
};
