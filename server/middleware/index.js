/**
 * Created by Aus on 2018/5/23.
 */

import compress from 'koa-compress';
import bodyParser from 'koa-bodyparser';
import json from 'koa-json';
import session from 'koa-generic-session';
import redisStore from 'koa-redis';
import serve from 'koa-static2';
import limit from 'koa-limit';
import helmet from 'koa-helmet';

import redisClient from '../config/redis_config';
import routeLog from './route_log';

/**
 * 配置中间件
 * */
export default function applyMiddleware () {
    const {app} = this;

    /**
     * how to config middleware is a learning.
     * we must know:
     * what middleware should we have
     * what is the correct order of the middleware
     *
     * most common middlewares and the order are:
     *
     * 1.
     *
     *
     */

    // 1. log using time
    app.use(routeLog);

    // 2. helmet
    app.use(helmet());

    // 3. 使用gzip压缩
    app.use(compress({
        filter: function (content_type) {
            return /text/i.test(content_type)
        },
        threshold: 2048,
        flush: require('zlib').Z_SYNC_FLUSH
    }));

    // 4. get request body
    app.use(bodyParser());

    // 5. send request json
    app.use(json({pretty: false}));

    // 6. use static dir
    app.use(serve('', __dirname + '/public'));

    // 7. config session
    app.use(session({
        store: redisStore({client: redisClient, db: 0}),
        maxAge: 86400000,
        overwrite: true,
        httpOnly: true,
        signed: true
    }, app));

    // 8. limit
    app.use(limit({
        limit: 1000,
        interval: 1000 * 60 * 60,
        // whiteList: ip
        // blackList: ip
        // message: 'request frequency limited.'
    }));

    // 9. csrf
}