const path = require("path");
const env = process.env.NODE_ENV;

const config = {
  mode: env || "development",
  entry: {
    app: path.resolve(__dirname, "../src/client-entry.js")
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
    filename: "assets/js/[name].js"
  }
};

module.exports = config;

