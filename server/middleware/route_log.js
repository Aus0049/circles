/**
 * Created by Aus on 2018/5/23.
 */
import logger from '../common/logger';

// 路由时间测算
export default async function routeLog (ctx, next) {
    const {request} = ctx;

    const startTime = new Date().getTime();

    logger.route.info(`url：${request.originalUrl} start`);

    await next();

    const timeDiff = new Date().getTime() - startTime;

    logger.route.info(`url：${request.originalUrl} end ${timeDiff}ms`);
};