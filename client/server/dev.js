/**
 * Created by Aus on 2018/3/1.
 */
const express = require('express');
const debug = require('debug')('app:server');
const webpack = require('webpack');
const webpackConfig = require('../build/webpack.config.dev');
const config = require('../config');

const app = express();

app.use(require('connect-history-api-fallback')());

const compiler = webpack(webpackConfig);

debug('Enable webpack dev and HMR middleware');

app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: config.src_path,
    hot: true,
    headers: {"Access-Control-Allow-Origin": "*"},
    quiet: false,
    noInfo: false,
    lazy: false,
    stats: {
        chunks: false,
        chunkModules: false,
        colors: true
    },
}));

app.use(require('webpack-hot-middleware')(compiler));

// Serve static assets from ~/src/static since Webpack is unaware of
// these files. This middleware doesn't need to be enabled outside
// of development since this directory will be copied into ~/dist
// when the application is compiled.
app.use(express.static(config.public_path));

app.listen(config.client_port);

debug(`Server is now running at http://localhost:${port}.`);