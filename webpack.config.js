var path = require('path');

module.exports = {
  context: path.join(__dirname, 'app'),
  devtool: 'source-map',
  entry: {
    javascript: './main.js',
    html: './index.html',
  },

  output: {
    filename: 'app.built.js',
    path: `${__dirname}/www`,
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel?presets[]=es2015&presets[]=stage-1&presets[]=react']
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
     {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'url?limit=100000'
      }
    ]
  },

  resolve: {
    modulesDirectories: [
      'node_modules'
    ]
  }
}