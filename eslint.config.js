export default [
  {
    ignores: ["docs/**"], // ignore auto-generated JSDoc files
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "commonjs",
      globals: {
        node: true,
        jest: true
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
      "semi": ["error", "always"],
      "quotes": ["warn", "double"]
    }
  }
];
