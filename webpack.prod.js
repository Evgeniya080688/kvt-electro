const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSPlugin = require('cssnano');
const TerserPlugin = require("terser-webpack-plugin");
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
   	mode: 'production',
   	optimization: {
	    minimizer: [
	     	new UglifyJsPlugin({
	          sourceMap: true,
	          uglifyOptions: {
	            compress: {
	                inline: false,
	                drop_console: true
	                },
	            },
	          }),
	      	new OptimizeCSSPlugin({
	            cssProcessorOptions: {
	              "preset": "advanced",
	              "safe": true,
	              "map": { "inline": false },
	            },
	          }),
	     	new TerserPlugin({
		        sourceMap: true,
		        extractComments: true
		      }), 
	     	new TerserJSPlugin({}), 
	      	new OptimizeCSSAssetsPlugin({}),
	      ],  
	    
	  },
});

