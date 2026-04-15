const path = require("path");

module.exports = {
  entry: {
    theme: "./src/index.js",
    blocks: "./src/blocks/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { useBuiltIns: "usage", corejs: 3 }],
              "@babel/preset-react"
            ]
          }
        }
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
    "@wordpress/blocks": "@wordpress.blocks",
    "@wordpress/components": "@wordpress.components",
    "@wordpress/element": "@wordpress.element",
    "@wordpress/i18n": "@wordpress.i18n",
    "@wordpress/data": "@wordpress.data"
  }
};
