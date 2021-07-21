/** @type {import('webpack').Configuration} */

const path = require("path");
const dist = path.resolve(__dirname, "dist");

const config = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: dist,
  },
};

module.exports = config;
