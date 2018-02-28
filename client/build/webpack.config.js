/**
 * Created by Aus on 2018/2/28.
 */
const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const getClientEnvironment = require('./env');
const paths = require('./paths');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const customLess = require('./custom-less');

const publicPath = '/';
const publicUrl = '';

const env = getClientEnvironment(publicUrl);
const cssFilename = 'static/css/[name].css';

module.exports = {

};
