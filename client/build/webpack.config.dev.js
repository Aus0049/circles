/**
 * Created by Aus on 2018/2/28.
 */
const config = require('../config/');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
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
        // vendor: [
        //     'react',
        //     'react-dom',
        //     'redux',
        //     'react-redux',
        //     'react-router',
        //     'axios'
        // ]
    },
    output: {
        path: config.dist_path,
        filename: 'assets/js/[name]_[hash].js',
        publicPath: '/' // 按需加载和额外资源
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {loader: 'babel-loader'}
                ]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {loader: 'css-loader'},
                        {loader: 'postcss-loader'},
                        {loader: 'sass-loader'}
                    ]
                })
            },
            // {
            //     test: /\.scss$/,
            //     loader: ExtractTextPlugin.extract(
            //         Object.assign({
            //             fallback: require.resolve('style-loader'),
            //             use: [
            //                 {
            //                     loader: 'css-loader',
            //                     options: {
            //                         importLoaders: 1,
            //                     }
            //                 },
            //                 {
            //                     loader: 'postcss-loader',
            //                     options: {
            //                         sourceMap: true,
            //                         plugins: () => [
            //                             autoprefixer({
            //                                 browsers: ['last 3 version', 'ie >= 10']
            //                             })
            //                         ]
            //                     }
            //                 },
            //                 {loader: 'sass-loader'}
            //             ]
            //         })
            //     )
            // },
            {
                test: webpackIsomorphicToolsPluginIns.regular_expression('images'),
                loader: 'file-loader',
                options: {
                    name: 'assets/images/[name].[ext]'
                }
            },
            {
                test: webpackIsomorphicToolsPluginIns.regular_expression('fonts'),
                loader: 'file-loader',
                options: {
                    name: 'assets/fonts/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        webpackIsomorphicToolsPluginIns,
        // new HtmlWebpackPlugin({
        //     template: config.entry_template_path,
        //     inject: true,
        //     hash: true,
        //     minify: {
        //         removeComments: true,
        //         collapseWhitespace: false
        //     },
        //     chunks: [
        //         'app', 'vendor'
        //     ],
        //     filename: 'index.html'
        // }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
            filename: 'assets/js/[name]_[hash].js'
        }),
        new ExtractTextPlugin({
            filename: 'assets/css/[name]_[hash].css',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};

module.exports = webpackConfig;
