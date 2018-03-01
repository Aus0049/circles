/**
 * Created by Aus on 2018/2/28.
 */
//加载Node的Path模块
const path = require('path');
const config = require('../config/');
//加载webpack模块
const webpack = require('webpack');
//加载自动化HTML自动化编译插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const webpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
const webpackIsomorphicToolsPluginIns =
    new webpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools-configuration')).development();

const webpackConfig = {
    devtool: 'source-map',
    entry: {
        app: [
            `webpack-dev-server/client?http://0.0.0.0:${config.client_port}`,
            'webpack/hot/only-dev-server',
            config.entry_path // 入口文件
        ],
        vendor: [
            'react',
            'react-dom',
            'redux',
            'react-redux',
            'react-router',
            'axios'
        ]
    },
    output: {
        path: config.dist_path,
        filename: '[name]_[hash].js',
        publicPath: '../dist/assets' // 按需加载和额外资源
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                include: [config.style_path],
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            camelCase: true,
                            localIdentName: '[name]_[local]_[hash:base64:3]',
                            importLoaders: 1,
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            plugins: () => [
                                autoprefixer({
                                    browsers: ['last 3 version', 'ie >= 10']
                                })
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ]
            },
            {
                test: /\.(png|jpeg|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: `${config.dist_asset_path}/[name].[ext]`
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        webpackIsomorphicToolsPluginIns,
        new HtmlWebpackPlugin({
            template: config.entry_template_path,
            inject: true,
            hash: true,
            minify: {
                removeComments: true,
                collapseWhitespace: false
            },
            chunks: [
                'index', 'vendor'
            ],
            filename: 'index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: [
                'vendor'
            ],
            filename: '[name]_[hash:base64:3].js'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};

module.exports = webpackConfig;
