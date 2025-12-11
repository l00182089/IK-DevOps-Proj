module.exports = [
  {
    ignores: ["docs/**"], // ignore documentation folder
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "script",
      globals: {
        node: true,
        console: true,
        jest: true,
        test: "readonly",
        expect: "readonly",
        require: true,
        module: true
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
