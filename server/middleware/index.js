/**
 * Created by Aus on 2018/3/12.
 */
import session from 'express-session';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import redis_store from 'connect-redis';
const RedisStore = redis_store(session);
import config from '../config';
import redisConfig from '../config/redis_config';
import routeLog from './route_log';
import signInCheck from './sign_in_check';

// 公共中间件按顺序配置
export default function (app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(cookieParser());
    app.use(session({
        store: new RedisStore({client: redisConfig, db: 1}),
        secret: config.session_secret,
        resave: true,
        saveUninitialized: true
    }));

    // 路由log
    app.use(routeLog);
    // 登录检查
    app.use(signInCheck);
}