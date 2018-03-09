/**
 * Created by Aus on 2018/3/9.
 */
import {routeLogger} from '../common/logger';
// 打印路由中间件
export default function (req, res, next) {
    routeLogger.info(`url：${req.originalUrl} start`);
    next();
    routeLogger.info(`url：${req.originalUrl} end`);
};