/** @type {import('webpack').Configuration} */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const dist = path.resolve(__dirname, "dist");

const config = {
  mode: "development",
  entry: "./src/index.tsx",
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
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["@babel/preset-react"] },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "时光序",
      template: "./src/index.html",
    }),
  ],
  devServer: {
    open: true,
    port: 9000,
    publicPath: "/",
  },
};

module.exports = config;
