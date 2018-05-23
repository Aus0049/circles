/**
 * Created by Aus on 2018/5/23.
 */
import loggerConfig from '../config/logger_config';

export default {
    default: loggerConfig.getLogger('default'),
    redis: loggerConfig.getLogger('redis'),
    proxy: loggerConfig.getLogger('proxy'),
    server: loggerConfig.getLogger('server'),
    route: loggerConfig.getLogger('route')
}