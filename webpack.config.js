
var path = require('path')
var webpack = require('webpack')
module.exports = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, './main.js')],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx', '.css'],
        modules: ['node_modules']
    },
    module: {
        loaders: [
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: [
                        'env', 'react', 'stage-0'
                    ],
                }
            },
            {
                test: /\.(css)$/,
                loader: 'style.css',
                exclude: /^node_modules$/
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './build',
        port: 3005,
        host: '0.0.0.0',
        historyApiFallback: true
    }
};
