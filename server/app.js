/**
 * Created by Aus on 2018/3/9.
 */
// 基本配置引入
import express from 'express';
import path from 'path';
import session from 'express-session';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import redis_store from 'connect-redis';
import config from './config';
import redisConfig from './config/redis_config';
import routeLog from './middleware/route_log';
import signInCheck from './middleware/sign_in_check';

const RedisStore = redis_store(session);
const app = express();

// 配置中间件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({
    store: new RedisStore({client: redisConfig, db: 1}),
    secret: config.session_secret,
    resave: true,
    saveUninitialized: true
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routeLog);
app.use(signInCheck);

// 配置数据库
import './config/db_config';

// 配置路由
import user from './route/user';
const routePrefix = '/api';
app.use(`${routePrefix}/users`, user);

import logger from './common/logger';

app.listen(config.server_port, (err)=>{
   if(err){
       logger.error('server start err: ' + err);
   }

    logger.info('server running on port: ' + config.server_port);
});

