/**
 * Created by Aus on 2018/3/9.
 */
const log4js = require('log4js');
const path = require('path');
const config = require('./index');

// 日志配置分成两个维度：层级和模块
log4js.configure({
    appenders: {
        default: { type: 'console'},
        redis: {
            type: 'DateFile',
            filename: path.join(config.logDir, 'redis', 'redis.log'),
            pattern: '-yyyy-MM-dd.log',
            alwaysIncludePattern: true
        },
        proxy: {
            type: 'file',
            filename: path.join(config.logDir, 'proxy', 'proxy.log'),
            maxLogSize: 1024,
            backups: 3,
        },
        server: {
            type: 'file',
            filename: path.join(config.logDir, 'server', 'server.log'),
            maxLogSize: 1024,
            backups: 3,
        },
        route: {
            type: 'DateFile',
            filename: path.join(config.logDir, 'route', 'route.log'),
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

module.exports = log4js;