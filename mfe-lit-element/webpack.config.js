const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;

module.exports = (_, argv) => ({
    entry: './src/js/main.js',
    mode: 'development',
    output: {
      path: `${__dirname}/dist`,
      filename: 'bundle.js',
    },
//   output: {
//     publicPath: "http://localhost:8082/",
//   },

//   resolve: {
//     extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
//   },

//   devServer: {
//     port: 8082,
//     historyApiFallback: true,
//   },

//   module: {
//     rules: [
//       {
//         test: /\.m?js/,
//         type: "javascript/auto",
//         resolve: {
//           fullySpecified: false,
//         },
//       },
//       {
//         test: /\.(css|s[ac]ss)$/i,
//         use: ["style-loader", "css-loader", "postcss-loader"],
//       },
//       {
//         test: /\.(ts|tsx|js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//         },
//       },
//     ],
//   },

// plugins: [ // This is important part
// new ModuleFederationPlugin({
//   name: "mfe_lit_element",
//   filename: "remoteEntry.js",
//   remotes: {},
//   exposes: {
//     "./ProjectCard": "./src/projectCard",
//   },
//   shared: {
//     ...deps,
//   },
// }),
// new HtmlWebPackPlugin({
//   template: "./src/index.html",
// }),
// ],
});
