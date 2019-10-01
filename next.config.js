const withSass = require("@zeit/next-sass");
const withCss = require("@zeit/next-css");
module.exports = withCss(
  withSass({
    webpack(config, options) {
      config.module.rules.push(
        {
          test: /\.(png|woff|woff2|eot|ttf|jpe?g|gif)$/,
          use: {
            loader: "url-loader",
            options: {
              limit: 8000
            }
          }
          //   loader: "url-loader?limit=8000&name=images/[name].[ext]"
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: "file-loader"
            }
          ]
        }
      );
      return config;
    }
  })
);
