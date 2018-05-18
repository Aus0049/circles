/**
 * Created by Aus on 2018/3/12.
 */
const compress = require('koa-compress');
const bodyParser = require('koa-bodyparser');
const json = require('koa-json');
const passport = require('koa-passport');
const session = require('koa-generic-session');
const redisStore = require('koa-redis');

//加载koa日记模块
const logger = require('koa-logger');
// 静态资源代理
const serve = require('koa-static2');

const config = require('../config/');
const redisClient = require('../config/redis_config');

const routeLog = require('./route_log');

// 公共中间件按顺序配置
function applyMiddleware (app) {
    //使用logger日志库
    app.use(logger());

    //使用gzip压缩
    app.use(compress({
        filter: function (content_type) {
            return /text/i.test(content_type)
        },
        threshold: 2048,
        flush: require('zlib').Z_SYNC_FLUSH
    }));

    //get request body
    app.use(bodyParser());

    //send request json
    app.use(json({pretty: false}));

    //use static dir
    app.use(serve("", __dirname + "/public"));

    app.use(session({
        store: redisStore({client: redisClient, db: 0}),
        maxAge: 86400000,
        overwrite: true,
        httpOnly: true,
        signed: true
    }, app));

    // 路由log
    app.use(routeLog);
    // 登录检查
    // app.use(signInCheck);
}

export default applyMiddleware;