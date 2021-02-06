const path = require('path');
const process = require('process');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: process.env.mode || 'production',
	resolve: {
    extensions: ['.vue', '.js', '.css', '.scss'],
  },
	entry: {
		main: path.resolve(__dirname, './src/index.js'),
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				sideEffects: true,
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
			},
			{
				test: /\.css$/,
				use: [
					process.env.NODE_ENV !== 'production'
						? 'style-loader'
						: MiniCssExtractPlugin.loader,
					'css-loader',
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Irregular verbs',
			template: path.resolve(__dirname, './src/index.html'),
			filename: 'index.html',
		}),
		new CleanWebpackPlugin(),
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			filename: 'style.css',
		}),
	],
	devServer: {
		historyApiFallback: true,
		contentBase: path.resolve(__dirname, './dist'),
		open: true,
		compress: true,
		hot: true,
		port: 8080,
	},
};
