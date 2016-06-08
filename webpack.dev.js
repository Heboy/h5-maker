/**
 * Created by Soup Tang on 2015/8/26.
 */
var webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/components/Entry.js',
        vendor: ["react", "react-dom"]
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js',
        publicPath: './dist/'
    },
    devtool: 'eval',
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css'},
            {test: /.(png|jpg)$/, loader: "url-loader?limit=100000"},
            {test: /\.js$/, loader: "babel-loader", query: {presets: ['react', 'es2015']}},
            {test: /\.scss$/, loader: "style!css!sass"}
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js'
        })
    ]
};