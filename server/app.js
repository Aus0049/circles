/**
 * Created by Aus on 2018/3/9.
 */
import koa from 'koa';
import config from './config/';
import routers from './route/';
import logger from './common/logger';
import applyMiddleware from './middleware';

//创建koa服务器应用
const app = new koa();

app.keys = ['circles_aus'];

// 1. 中间件配置
applyMiddleware(app);





// 2. 配置数据库
require('./config/db_config');

// 3. 配置路由
app.use(routers);

// 4. 监听端口
app.listen(config.serverPort, function(err) {
    if (err) {
        logger.error('server start err: ' + err);
    }

    logger.info('server running on port: ' + config.serverPort);
});

