var vue = require('vue-loader');
var webpack = require("webpack");

var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
	entry: {
		a: "./src/main.js"
	},
	output: {
		path: './dist',
		publicPath: 'dist/', //生成文件的路径，页面中图片的前缀
		filename: 'main.js'//[name]
	},
	module: {
		loaders: [
			{
				test: /\.vue$/,
				loader: vue.withLoaders({
					js: 'babel?optional[]=runtime&loose=all'
				})
			},
			{ test: /\.css$/, loader: ExtractTextPlugin.extract(
				"style-loader",
				"css-loader",
				{
					publicPath: "../"
				}
			)},
			{ test: /\.js$/, loader: 'jsx-loader?harmony' },
			{ test: /\.scss$/, loader: 'style!css!sass'},
			{ test: /\.(jpe?g|png|gif|svg)$/i, loaders: [ 'url?limit=10000', 'img?minimize' ]}
		]
	},
	resolve: {
		modulesDirectories: [ //文件查找目录
		  'node_modules',
		  'createBigApp'
		]
	},
	plugins: [
		new ExtractTextPlugin("main.css?[hash]-[chunkhash]-[contenthash]-[name]", {
			disable: false,
			allChunks: true
		})
	]
};