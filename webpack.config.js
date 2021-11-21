const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const paths = {
  dist: path.resolve(__dirname, './dist'),
  nodeModules: path.resolve(__dirname, './node_modules'),
  assets: path.resolve(__dirname, './src/assets'),
  root: path.resolve(__dirname, './'),
  src: path.resolve(__dirname, './src'),
  appHtml: path.resolve(__dirname, './src/index.html'),
  tsConfig: path.resolve(__dirname, './tsconfig.json'),
}


module.exports = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    modules: ['node_modules', paths.nodeModules, paths.src],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    hot: true,
    port: 9000,
  },
  output: {
    filename: "index.js",

    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
    }),
  ],
};
