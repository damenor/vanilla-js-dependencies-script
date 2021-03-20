const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const compressionPlugin = new CompressionPlugin()
const htmlWebpackPlugin = new HtmlWebpackPlugin({ 
  template: './src/index.html',  
  hash: true,
  inject: 'body'
})

const developmentPlugins = []
const productionPlugins = [compressionPlugin]

const javascriptRules = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: [
        '@babel/preset-env',
      ]
    }
  }
}

const cssRules = {
  test: /\.css$/,
  use: [MiniCssExtractPlugin.loader, 'css-loader'],
}

const imageRules = {
  test: /\.(gif|png|jpe?g|svg)$/i,
  use: [
    'file-loader',
    {
      loader: 'image-webpack-loader',
      options: {
        disable: true
      },
    },
  ],
}

module.exports = (_, { mode }) => ({
  mode,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: '[contenthash].app.js'
  },
  plugins: [
    htmlWebpackPlugin,
    new MiniCssExtractPlugin(),
    ...(mode === 'production' ? productionPlugins : developmentPlugins),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
  },
  module: {
    rules: [
      cssRules,
      javascriptRules,
      imageRules
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        terserOptions: {
          ecma: undefined,
          parse: {},
          compress: {},
          mangle: true, // Note `mangle.properties` is `false` by default.
          module: false,
        },
      }),
    ],
  },
})
