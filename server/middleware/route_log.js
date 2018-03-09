/**
 * Created by Aus on 2018/3/9.
 */
import loggerConfig from '../config/logger_config';

const logger = loggerConfig.getLogger('route');
// 打印路由中间件
export default function (req, res, next) {
    logger.info(`url：${req.originalUrl} start`);
    next();
    logger.info(`url：${req.originalUrl} end`);
};