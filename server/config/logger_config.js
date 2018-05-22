/**
 * Created by Aus on 2018/5/22.
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
        controller: {
            type: 'file',
            filename: path.join(config.logDir, 'controller', 'controller.log'),
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
        proxy: {appenders: ['proxy'], level: 'info'},
        server: {appenders: ['server'], level: 'info'},
        controller: {appenders: ['controller'], level: 'info'},
    }
});

export default log4js;