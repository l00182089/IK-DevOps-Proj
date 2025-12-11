import js from "@eslint/js";

export default [
  {
    ignores: ["docs/**"], // ignore auto-generated documentation
  },
  js.configs.recommended, // recommended ESLint rules

  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
      "semi": ["error", "always"],
      "quotes": ["warn", "double"]
    }
  }
];
