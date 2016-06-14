/**
 * Created by Soup Tang on 2015/8/26.
 */
var webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/components/Entry.js',
        vendor: ["react", "react-dom"],
        immutable: ["immutable"],
        normalizr: ["normalizr"]
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
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
        //new webpack.ProvidePlugin({
        //    React: 'react',
        //    ReactDom: 'react-dom',
        //    Immutable: 'immutable'
        //}),//这个可以使jquery变成全局变量，妮不用在自己文件require('jquery')了
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'immutable', 'normalizr']
        })
    ]
};