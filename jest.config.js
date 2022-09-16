const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig.json");

const config = {
    preset: "ts-jest",
    // collectCoverage: true,
    // collectCoverageFrom: ["src/**/*.ts(x)?"],
    testEnvironment: "node",
    testMatch: ["**/tests/**/?(*.)spec.ts?(x)"],
    setupFilesAfterEnv: ["jest-plugin-must-assert"],
    moduleNameMapper: {
        ...pathsToModuleNameMapper(compilerOptions.paths, {
            prefix: "<rootDir>/",
        })
    },
};

module.exports = config;
