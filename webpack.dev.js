/**
 * Created by Soup Tang on 2015/8/26.
 */
module.exports = {
    entry: {app: './src/components/App.js'},
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js'
    },
    devtool: 'eval',
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css'},
            {test: /.(png|jpg)$/, loader: "url-loader?limit=100000"},
            {test: /\.js$/, loader: "babel-loader",query: {presets:['react','es2015']}},
            {test: /\.scss$/, loader: "style!css!sass"}
        ]
    }
};