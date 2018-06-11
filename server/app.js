/**
 * Created by Aus on 2018/3/9.
 */
import koa from 'koa';
import mongoose from 'mongoose';

import config from './config/';
import routers from './route/';
import applyMiddleware from './middleware';
import CSRF from 'koa-csrf';

class Application {
    constructor(){
        //创建koa服务器应用
        const app = new koa();

        // 挂载数据
        this.app = app;
        this.config = config;
        // 执行
        this.create();
    }
    create () {
        // 1. 中间件配置
        this.middlewareConfig();

        // 2. 数据库配置
        this.dbConfig();

        // 3. 路由配置
        this.routerConfig();

        // 4. 监听
        this.listen();
    }
    middlewareConfig () {
        // 配置中间件
        this.app.keys = ['circles_aus'];

        applyMiddleware.call(this);

        // csrf
        this.app.use(new CSRF({
            invalidSessionSecretMessage: 'Invalid session secret',
            invalidSessionSecretStatusCode: 403,
            invalidTokenMessage: 'Invalid CSRF token',
            invalidTokenStatusCode: 403,
            excludedMethods: [ 'GET', 'HEAD', 'OPTIONS' ],
            disableQuery: false
        }));
    }
    dbConfig () {
        const {config} = this;

        mongoose.connect(config.db, {poolSize: 20})
            .then(()=>{
                console.info('数据库连接成功！🍺');
            })
            .catch((err)=>{
                console.error('数据库连接失败！😢');
                console.error(err);
            });
    }
    routerConfig(){
        this.app.use(routers);
    }
    listen (){
        const {app, config} = this;
        // 4. 监听端口
        app.listen(config.serverPort, function(err) {
            if (err) {
                console.error('server start err: ' + err);
            }

            console.info('server running on port: ' + config.serverPort);
        });
    }
}

export default new Application();
