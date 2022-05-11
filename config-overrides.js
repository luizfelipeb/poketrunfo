const Dotenv = require('dotenv-webpack');
// const webpack = require('webpack');

module.exports = function override(config, env) {
  return {
    ...config,
    plugins: [
      ...config.plugins,
      new Dotenv(),
    ],
  };
};
