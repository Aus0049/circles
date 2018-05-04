/**
 * Created by Aus on 2018/3/9.
 */
import loggerConfig from '../config/logger_config';

export default loggerConfig.getLogger('default');

export const redisLogger = loggerConfig.getLogger('redis');

export const routeLogger = loggerConfig.getLogger('route');

export const countProxyLogger = loggerConfig.getLogger('count_proxy');

export const captchaProxyLogger = loggerConfig.getLogger('captcha_proxy');

export const smsServerLogger = loggerConfig.getLogger('sms_server');