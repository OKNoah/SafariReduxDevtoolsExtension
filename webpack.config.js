const path = require('path')

module.exports = {
  target: 'web',
  entry: './src',
  output: {
      path: path.resolve(__dirname, "ReduxDevTools.safariextension"),
      filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|ReduxDevTools\.safariextension)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
