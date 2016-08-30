/**
 * Created by Soup Tang on 2015/8/26.
 */
var webpack = require("webpack");

module.exports = {
    entry: {
        app: './src/components/App.js',
        vendor: ["react", "react-dom"],
        immutable: ["immutable"]
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css'},
            {test: /.(png|jpg)$/, loader: "url-loader?limit=100000"},
            {test: /\.js$/, loader: "babel-loader", query: {presets: ['react', 'es2015']}},
            {test: /\.scss$/, loader: "style!css!sass"}
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production")
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'immutable']
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            mangle: false
        })

    ]
};