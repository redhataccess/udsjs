var webpack = require('webpack');
var path = require('path');

module.exports = function (options) {
    var config = {
        entry: './uds',
        output: {
            filename: options.filename,
            libraryTarget: 'umd',
            library: 'uds'
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: [
                        path.resolve(__dirname, 'node_modules'),
                        path.resolve(__dirname, 'bower_components')
                    ]
                }
            ]
        },
        plugins: [
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('production')
                }
            })
        ]
    };
    
    if (options.minified) {
        config.plugins.push(
            new webpack.optimize.UglifyJsPlugin({
                compressor: {
                    warnings: false
                }
            })
        )
    }
    
    return config;
};