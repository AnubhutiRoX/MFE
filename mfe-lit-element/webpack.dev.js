const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
module.exports = {
	devtool: 'eval-source-map',
	output: {
		publicPath: "http://localhost:8082/",
		filename: "bundle.js",
	},
	mode: "development",
	entry: "./src/index.js",
	// entry: {
	// 	index: "./src/App.js",
	// },
	devServer: {
		port: 8082,
		historyApiFallback: true,
	},
	//   devtool: "inline-source-map",
	// plugins: [
	// 	new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
	// 	new HtmlWebpackPlugin({
	// 		template: "./index.html",
	// 	}),
	// ],
	// module: {
	// 	rules: [
	// 		{
	// 			test: require.resolve("./src/Element.js"),
	// 			use: [
	// 				{
	// 					loader: `val-loader`,
	// 				},
	// 			],
	// 		},
	// 	],
	// },
	plugins: [
		// This is important part
		new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
		new ModuleFederationPlugin({
			name: "lit_mfe_1",
			filename: "remoteEntry.js",
			remotes: {},
			exposes: {
				"./Header": "./src/Header",
				// "./Module": "./src/App",
				"./appContainer": "./src/App",
				"./Element": "./src/Element",
			},
		}),
		new HtmlWebpackPlugin({
			template: "index.html",
		}),
	],
};
