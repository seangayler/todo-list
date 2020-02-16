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
        loader: 'style-loader!css-loader',
        options: {
          presets: ['css-loader', 'style-loader']
        }
      },
      { test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
    ]
  }
}