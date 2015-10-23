var vue = require('vue-loader');
var webpack = require("webpack");

var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
	entry: {
		a: "./src/main.js"
	},
	output: {
		path: './dist',
		publicPath: 'dist/', //�����ļ���·����ҳ����ͼƬ��ǰ׺
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
		modulesDirectories: [ //�ļ�����Ŀ¼
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