var path = require('path');
module.exports = {
  entry: './src/styles/_index.scss',
  output: {
    path: path.resolve(__dirname),
    filename: '_index.scss'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader'
        }
      },{
        test: /\.(css|scss|sass)$/,
        //loader: "style-loader!css-loader!sass-loader"
          loader: "sass-loader"
      },{
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader?limit=100000'
      }, {
        test: /\.jpe?g$|\.gif$|\.png$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: 'file-loader'
      }
    ]
    },
  externals: {
  }
};
