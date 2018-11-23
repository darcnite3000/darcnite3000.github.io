const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  entry: './app/index.js',
  mode: 'production',
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
  },
  plugins: [
    new PrerenderSPAPlugin({
      staticDir: path.join(__dirname, '.'),
      indexPath: path.join(__dirname, 'indexTemplate.html'),
      routes: [
        '/',
        '/education',
        '/freelance',
        '/freelance/edm',
        '/freelance/spa',
        '/freelance/splash',
        '/freelance/fullsite',
        '/work',
        '/hobbies-interests',
        '/professional-skills'
      ]
    })
  ]
}
