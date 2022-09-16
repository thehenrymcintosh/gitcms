module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'standard-with-typescript',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import"],
  ignorePatterns: [".eslintrc.js", "jest.config.js", "webpack.config.js", "dist"],
  rules: {
    "@typescript-eslint/semi": ["error", "always"],
    "@typescript-eslint/no-restricted-imports": [
      "error",
      {
        patterns: [
          "../*",
        ],
      },
    ],
  },
  overrides: [
    {
      files: ["src/domain/**/*"],
      rules: {
        "@typescript-eslint/no-restricted-imports": [
          "error",
          {
            patterns: [
              "src/*",
              "@application/*",
              "@infrastructure/*",
              "tests/*",
              "../*",
              "./*"
            ],
          },
        ],
      },
    },
    {
      files: ["src/application/**/*"],
      rules: {
        "@typescript-eslint/no-restricted-imports": [
          "error",
          {
            patterns: ["src/*", "@infrastructure/*", "tests/*", "../*"],
          },
        ],
      },
    },
    {
      files: ["src/infrastructure/**/*"],
      rules: {
        "@typescript-eslint/no-restricted-imports": [
          "error",
          {
            patterns: ["src/*", "tests/*", "../*", ],
          },
        ],
      },
    },
  ],
}
