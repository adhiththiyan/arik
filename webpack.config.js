
const webpack = require("webpack");
const path = require("path");
const PACKAGE = require("./package.json");

// WebPack Plugins.
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /.(js)$/,
        exclude: [/node_modules/],
        use: ["babel-loader"],
      },
      {
        test: /.svg$/,
        use: ["@svgr/webpack", "file-loader"],
      },
      {
        test: /.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js"],
    alias: {
      "@arik-portfolio/images": path.resolve(
        __dirname,
        "src",
        "static",
        "images"
      ),
      "@arik-portfolio/components": path.resolve(
        __dirname,
        "src",
        "components"
      ),
      "@arik-portfolio/Pages": path.resolve(
        __dirname,
        "src",
        "Pages"
      ),
    },
  },
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "arik-portfolio.js",
    chunkFilename: "[name].js",
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new webpack.EnvironmentPlugin({
      VERSION: PACKAGE.version,
    }),

    // Take Reference of HTML File.
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, "src/static/index.html"),
      APP_ROOT_ID: 'arik-portfolio',
      APP_VERSION: PACKAGE.version
    }),

    // Copy all Assets, Icons to public Folder
    new CopyPlugin({
      patterns: [
        { from: "./src/static/images", to: "images" },
      ],
    }),
  ],
  devServer: {
    open: true,
    historyApiFallback: true,
    static: {
      directory: "./src/static",
    },
    hot: true,
    port: 3000,
    proxy: []
  },
};    
