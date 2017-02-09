var webpack = require('webpack'),
       path = require('path');

module.exports = {
    context: __dirname + '/app',
    devtool: 'source-map',
    entry: {
        app: './app.js',
        vendor: ['angular']  
    },
    output: {
        path: __dirname + '/public/js',
        filename: 'app.bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name:"vendor", filename:"vendor.bundle.js"})
    ],
    watch:true
};
