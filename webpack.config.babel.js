import path from 'path';
import nodeExternals from 'webpack-node-externals';

module.exports = {
  devtool: 'source-map',
  entry: {
    'alexa-skills-toolkit': './src/alexa-skills-toolkit.js',
    'bin/alexa-skills-toolkit': './src/bin/alexa-skills-toolkit.js',
  },
  target: 'node',
  output: {
    path: path.join(__dirname, 'dist'),
    library: 'alexa-skill-tools',
    libraryTarget: 'umd',
    filename: '[name].js',
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },

      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
