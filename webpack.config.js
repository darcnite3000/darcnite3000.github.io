const path = require('path')

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.join(__dirname),
    filename: 'bundle.js'
  },
  devServer: {
    index: 'indexTemplate.html'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      }
    ]
  }
}
