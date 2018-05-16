/**
 * Created by Aus on 2018/3/9.
 */
const routeLogger = require('../common/logger').routeLogger;

// 打印路由中间件
module.exports = async function routeLog (ctx, next) {
    const {request} = ctx;

    routeLogger.info(`url：${request.originalUrl} start`);
    await next();
    routeLogger.info(`url：${request.originalUrl} end`);
};