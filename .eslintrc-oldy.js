module.exports = {
    root: true,
    env: {
        es2021: true,
        jest: true
    },
    settings: {
        "import/resolver": {
            typescript: {},
        },
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        tsconfigRootDir: __dirname,
        project: "./tsconfig.json",
    },
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier",
    ],
    plugins: ["@typescript-eslint", "import", "prettier"],
    ignorePatterns: [".eslintrc.js", "jest.config.js", "webpack.config.js"],
    rules: {
        "@typescript-eslint/no-restricted-imports": [
            "error",
            {
                patterns: ["../**", "./**"],
            },
        ],
        "@typescript-eslint/require-await": "off",
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
                            "../*"
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
                        patterns: ["src/*", "tests/*", "../*"],
                    },
                ],
            },
        },
    ],
};
