var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new webpackDevServer(webpack(config),{
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    quiet: false,
    noInfo: false,
    stats: {
        asserts: false,
        colors: true,
        version: false,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false
    }
}).listen(2000,'localhost',function (err) {
    if(err){
        console.log(err);
    }

    console.log('Listening at localhost:2000');
});