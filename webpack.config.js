module.exports = {
  mode: 'development',
  entry: __dirname + '/src/js/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader'}
        ]
      },
      { test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        ]
      },
    ]
  }
}