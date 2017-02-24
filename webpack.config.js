var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: __dirname + '/app',
    devtool: 'source-map',
    entry: {
        app: './app.js',
        vendor: ['angular','jquery','bootstrap','textangular','angular-route']  
    },
    output: {
        path: __dirname + '/public/js',
        filename: 'app.bundle.js'
    },
    module: {
        
        rules: [
            { test: /\.css$/,use: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader" })},
            { test:/\.(eot|svg|ttf|woff|woff2)$/,
                use: "file-loader?name=../fonts/[name].[ext]" }
        ]

    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name:"vendor", filename:"vendor.bundle.js"}),
        new webpack.ProvidePlugin({$: "jquery",jQuery: "jquery"}),
        new ExtractTextPlugin("../css/bundle.css")

    ],
    watch:true
};
