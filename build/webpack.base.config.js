const path = require("path");
const env = process.env.NODE_ENV;

const config = {
  mode: env || "development",
  entry: {
    app: path.resolve(__dirname, "../src/client-entry.js")
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /(\.js$)/,
        loader: this.query,
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      vue: "vue/dist/vue.js"
    }
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
    filename: "assets/js/[name].js"
  }
};

module.exports = config;

