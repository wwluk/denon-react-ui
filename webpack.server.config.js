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
        rules: [{
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
        extensions: ['.js', '.jsx', '.json']
    }
};
