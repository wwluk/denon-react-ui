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
    loaders: [{
      test: /\.scss$/,
      loaders: ["style-loader", "css-loader?sourceMap", "sass-loader?sourceMap"]
    }, {
      exclude: [/node_modules/],
      test: /\.js$/,
      loader: 'babel-loader'
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
        pathRewrite: {'^/api' : ''}
      }
    }
  }
};
