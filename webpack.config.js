var webpack = require('webpack');

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                {
                    loader: "style-loader"
                },
                {
                    loader: "css-loader?sourceMap"
                },
                {
                    loader: "sass-loader?sourceMap"
                }
            ]
        }, {
            test: /\.js$/,
            exclude: [/node_modules/],
            use: [
                {
                    loader: 'babel-loader'
                }
            ]
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"production"'
            }
        })
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        proxy: {
            '/api': {
                target: 'http://denon',
                pathRewrite: {'^/api': ''}
            }
        }
    }
};
