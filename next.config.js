require('dotenv').config();
const webpack = require('webpack');

module.exports = {
  webpack5: true,
  webpack: (config) => {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));
    return config;
  },
};
