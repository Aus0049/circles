/**
 * Created by Aus on 2018/5/23.
 */

import compress from 'koa-compress';
import bodyParser from 'koa-bodyparser';
import json from 'koa-json';
import passport from 'koa-passport';
import session from 'koa-generic-session';
import redisStore from 'koa-redis';
import koaLogger from 'koa-logger';
import serve from 'koa-static2';

import redisClient from '../config/redis_config';
import routeLog from './route_log';

/**
 * 配置中间件
 * */
export default function applyMiddleware () {
    const {app} = this;

    // 使用logger日志库
    app.use(koaLogger());

    // 使用gzip压缩
    app.use(compress({
        filter: function (content_type) {
            return /text/i.test(content_type)
        },
        threshold: 2048,
        flush: require('zlib').Z_SYNC_FLUSH
    }));

    // get request body
    app.use(bodyParser());

    // send request json
    app.use(json({pretty: false}));

    // use static dir
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
}