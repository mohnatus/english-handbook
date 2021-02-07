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
		alias: {
			Components: path.resolve(__dirname, './src/components'),
			Containers: path.resolve(__dirname, './src/containers'),
			Data: path.resolve(__dirname, './src/data'),
		}
  },
	entry: {
		main: path.resolve(__dirname, './src/index.js'),
	},
	output: {
		path: path.resolve(__dirname, './www'),
		filename: '[name].bundle.js',
		publicPath: ''
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
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
			{
				test: /\.s?css$/,
				use: [
					process.env.NODE_ENV !== 'production'
						? 'style-loader'
						: MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'English handbook',
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
		contentBase: path.resolve(__dirname, './www'),
		open: true,
		compress: true,
		hot: true,
		port: 8080,
	},
};
