/**
 * Created by Aus on 2018/3/9.
 */
import loggerConfig from '../config/logger_config';

export default loggerConfig.getLogger('default');

export const redisLogger = loggerConfig.getLogger('redis');

export const mongoLogger = loggerConfig.getLogger('mongo');

export const routeLogger = loggerConfig.getLogger('route');

export const proxyLogger = loggerConfig.getLogger('proxy');

export const serverLogger = loggerConfig.getLogger('server');