const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react-ts');

const webpack = require('webpack');

const path = require('path');

require('dotenv').config({
  path: path.join(__dirname, '.env'),
});

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'albert-einstein',
    projectName: 'payment-dash',
    webpackConfigEnv,
    argv,
    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':
          'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers':
          'X-Requested-With, content-type, Authorization',
      },
    },
  });

  // const output = {
  //   path: "build",
  // };

  return merge(defaultConfig, {
    module: {
      rules: [
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                useRelativePath: true,
                outputPath: 'fonts/',
              },
            },
          ],
        },
      ],
    },
    output: {
      path: path.resolve(__dirname, 'build'),
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env),
      }),
    ],
  });
};
