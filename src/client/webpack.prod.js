// Generated by CoffeeScript 2.5.1
(function() {
  var common, merge, webpack;

  merge = require("webpack-merge");

  common = require(`${__dirname}/webpack.common.js`);

  webpack = require("webpack");

  module.exports = merge.merge(common, {
    devtool: 'source-map',
    mode: "production",
    plugins: [
      new webpack.DefinePlugin({
        PRODUCTION: JSON.stringify(true)
      })
    ]
  });

}).call(this);