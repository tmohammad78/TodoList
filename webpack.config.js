const path = require("path");
// const __dirname=require('./');
const PROJECT_ROOT = path.resolve(__dirname, "./");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  devtool: "cheap-module-eval-source-map",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    chunkFilename: "[id].js",
    publicPath: ""
  },
  devServer: {
    historyApiFallback: true
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    // alias: {
    //   components: path.resolve(__dirname, "./src/components")
    // }
    // alias: {
    //   components: path.resolve(PROJECT_ROOT, "./src/components/")
    // }
  },
  // node: {
  //   __dirname: false
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true,
              modifyVars: { "@primary-color": "red" }
            }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              // minimize:false,
              // sourceMap:false
            }
          },
          // {
          //   loader: "less-loader",
          //   options: {
          //     modifyVars: antThemeVars
          //   }
          // },

          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => {
                autoprefixer({
                  // browsers:[
                  //     "> %1",
                  //     "last 2 versions"
                  // ]
                });
              }
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|jpe?g|gif)$/,
        loader: "url-loader?limit=8000&name=images/[name].[ext]"
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true // true outputs JSX tags
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.html",
      filename: "index.html",
      inject: "body"
    })
  ]
};
