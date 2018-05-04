/**
 * Created by Aus on 2018/3/9.
 */
// 基本配置引入
import express from 'express';
import path from 'path';
import config from './config';
import middleware from './middleware/';

const app = express();

// 配置静态目录 放在最上面
app.use(express.static(path.join(__dirname, 'public')));
// 配置中间件
middleware(app);

// 配置数据库
import './config/db_config';

// 配置路由
import user from './route/user';
import support from './route/support';
const routePrefix = '/api';

app.use(`${routePrefix}/users`, user);
app.use(`${routePrefix}/support`, support);

import logger from './common/logger';

app.listen(config.server_port, (err)=>{
   if(err){
       logger.error('server start err: ' + err);
   }

    logger.info('server running on port: ' + config.server_port);
});

