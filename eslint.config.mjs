// @ts-check

import globals from "globals";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHook from "eslint-plugin-react-hooks";

export default tseslint.config({
  languageOptions: {
    globals: globals.browser,

    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },

  files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],

  extends: [
    eslint.configs.recommended,

    ...tseslint.configs.strict,

    ...tseslint.configs.stylistic,
  ],

  plugins: {
    react,

    reactHook,
  },

  rules: {
    "linebreak-style": ["error", "unix"],

    quotes: ["error", "double"],

    semi: ["error", "always"],

    indent: [
      "warn",

      2,

      {
        ignoredNodes: ["TemplateLiteral"],

        SwitchCase: 1,
      },
    ],

    "max-len": [
      "error",

      {
        code: 150,

        ignoreComments: true,

        ignoreTrailingComments: true,

        ignoreTemplateLiterals: true,
      },
    ],

    "no-unused-vars": "off",

    "@typescript-eslint/no-unused-vars": [
      "warn",

      { vars: "all", args: "after-used", ignoreRestSiblings: true },
    ],
    "@typescript-eslint/consistent-type-definitions": ["off"],
  },
});
