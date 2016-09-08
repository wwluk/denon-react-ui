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
    loaders: [{
      test: /\.scss$/,
      loaders: ["style", "css?sourceMap", "sass?sourceMap"]
    }, {
      exclude: [/node_modules/],
      test: /\.js$/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    proxy: {
      '/api': {
        target: 'http://172.16.0.20',
        pathRewrite: {'^/api' : ''}
      }
    }
  }
};
