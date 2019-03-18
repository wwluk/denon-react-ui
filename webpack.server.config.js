module.exports = {
    target: 'node',
    node: {
        __dirname: false
    },
    entry: [
        './server-es6.js'
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'server.js'
    },
    module: {
        loaders: [{
            exclude: [/node_modules/],
            test: /\.js$/,
            loader: 'babel-loader'
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    }
};
