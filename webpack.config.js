const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebpackPlugin({
  template: "./src/public/index.html",
  filename: "index.html",
});

module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        use: ["style-loader", "css-loader"],
        test: /\.css$/,
      },
      {
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { sourceMap: true } },
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
        test: /\.scss$/,
      },
      {
        test: /\.(png|jpe?g|gif|mp3|svg)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [htmlPlugin],
};
