const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const prod = process.env.NODE_ENV === "production";
const webpack = require("webpack");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const { SourceMapDevToolPlugin } = require("webpack");

module.exports = {
  mode: prod ? "production" : "development",
  devtool: "eval-source-map",

  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js",
  },

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    plugins: [new TsconfigPathsPlugin({ baseUrl: "src" })],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.tsx?$/,
        use: ["babel-loader", "ts-loader"],
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 25000,
            esModule: false,
          },
        },
      },
    ],
  },

  plugins: [
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),

    new webpack.HotModuleReplacementPlugin(),
    new SourceMapDevToolPlugin({
      filename: "[file].map",
    }),
  ],

  devServer: {
    contentBase: path.join(__dirname, "public/"),
    historyApiFallback: true,
    inline: true,
    port: 3000,
    hot: true,
    publicPath: "http://localhost:3000/dist/",
  },
};
