/**
 * Created by Aus on 2018/3/9.
 */
import log4js from 'log4js';
import path from 'path';
import config from './index';

// 日志配置分成两个维度：层级和模块
log4js.configure({
    appenders: {
        default: { type: 'console'},
        redis: {
            type: 'DateFile',
            filename: path.join(config.log_dir, 'redis', 'redis.log'),
            pattern: '-yyyy-MM-dd.log',
            alwaysIncludePattern: true
        },
        proxy: {
            type: 'file',
            filename: path.join(config.log_dir, 'proxy', 'proxy.log'),
            maxLogSize: 1024,
            backups: 3,
        },
        server: {
            type: 'file',
            filename: path.join(config.log_dir, 'server', 'server.log'),
            maxLogSize: 1024,
            backups: 3,
        },
        route: {
            type: 'DateFile',
            filename: path.join(config.log_dir, 'route', 'route.log'),
            pattern: '-yyyy-MM-dd.log',
            alwaysIncludePattern: true
        }
    },
    replaceConsole: true,
    categories: {
        default: { appenders: ['default'], level: 'info' },
        redis: {appenders: ['redis'], level: 'info'},
        route: {appenders: ['route'], level: 'info'},

        captcha_proxy: {appenders: ['proxy'], level: 'info'},
        count_proxy: {appenders: ['proxy'], level: 'info'},

        sms_server: {appenders: ['server'], level: 'info'}
    }
});

export default log4js;