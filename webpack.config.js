const path = require("path");
const tsconfig = require("./tsconfig.json");
// class TypeBundler {
//     apply(compiler) {
//         compiler.hooks.run.tap(pluginName, (compilation) => {
//             console.log('The webpack build process is starting!');
//         });
//     }
// }

module.exports = (async () => {
    return {
        entry: "./src/index.ts",
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: './index.js',
            library: {
                name: 'webpackNumbers',
                type: 'umd',
            },
        },
        plugins: [
            // new TypeBundler(),
        ],
        target: "node",
        mode: "production",
        externals: ["encoding"],
        resolve: {
            // Add `.ts` and `.tsx` as a resolvable extension.
            extensions: [".ts", ".tsx", ".js"],
            alias: {
                "@application": path.resolve(__dirname, "src/application"),
                "@domain": path.resolve(__dirname, "src/domain"),
                "@infrastructure": path.resolve(__dirname, "src/infrastructure"),
                "tests": path.resolve(__dirname, "tests")
            }
        },
        module: {
            rules: [
                // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
                { test: /\.tsx?$/, loader: "ts-loader" },
            ],
        },
    };
})();
