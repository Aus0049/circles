/**
 * Created by Aus on 2018/3/9.
 */
require('babel-polyfill');
require('babel-register')({
    presets: ['es2015'],
    plugins: ["transform-decorators-legacy"]
});

require('../app');