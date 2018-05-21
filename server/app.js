/**
 * Created by Aus on 2018/3/9.
 */
import koa from 'koa';
import mongoose from 'mongoose';
import config from './config/';
import routers from './route/';
import logger from './common/logger';
import applyMiddleware from './middleware';

class Application {
    constructor(){
        //创建koa服务器应用
        const app = new koa();

        // 挂载数据
        this.app = app;
        this.config = config;

        console.log(this);
        // 执行
        this.create();
    }
    create () {
        // 1. 中间件配置
        this.middlewareConfig();

        // 2. 配置数据库
        this.dbConfig();

        // 3. 配置路由
        this.routerConfig();

        // 4. 监听
        this.listen();
    }
    middlewareConfig () {
        const {app} = this;

        app.keys = ['circles_aus'];

        applyMiddleware(app);

    }
    dbConfig () {
        const {config} = this;

        mongoose.connect(config.db, {poolSize: 20})
            .then(()=>{
                logger.info('数据库连接成功！🍺');
            })
            .catch((err)=>{
                logger.error('数据库连接失败！😢');
                logger.error(err);
            });
    }
    routerConfig(){
        // 3. 配置路由
        this.app.use(routers);
    }
    listen (){
        const {app, config} = this;
        // 4. 监听端口
        app.listen(config.serverPort, function(err) {
            if (err) {
                logger.error('server start err: ' + err);
            }

            logger.info('server running on port: ' + config.serverPort);
        });
    }
}

export default new Application();
