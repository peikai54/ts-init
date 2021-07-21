/** @type {import('webpack').Configuration} */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const dist = path.resolve(__dirname, "dist");

const config = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: dist,
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "时光序",
      template: "./src/index.html",
    }),
  ],
};

module.exports = config;
