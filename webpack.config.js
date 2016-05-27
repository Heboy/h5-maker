'use strict'
var dev = require('./webpack.dev');
var production = require('./webpack.production');

if (process.env.NODE_ENV == 'production') {
    console.log('webpack production');
    module.exports = production;
}
if (process.env.NODE_ENV == 'dev') {
    console.log('webpack dev');
    module.exports = dev;
}
if(process.env.NODE_ENV == 'server'){
    console.log('webpack server');
    module.exports = server;
}