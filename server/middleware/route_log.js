/**
 * Created by Aus on 2018/5/23.
 */
import logger from '../common/logger';

// 打印路由中间件
export default async function routeLog (ctx, next) {
    const {request} = ctx;

    logger.route.info(`url：${request.originalUrl} start`);
    await next();
    logger.route.info(`url：${request.originalUrl} end`);
};