/**
 * Created by Aus on 2018/5/22.
 */
import log4js from 'log4js';
import path from 'path';
import config from './index';

/**
 * 日志配置分成两个维度：层级和模块
 * appenders分成两种info和error
 */
log4js.configure({
    appenders: {
        default: { type: 'console'},
        error: {
            type: 'DateFile',
            filename: path.join(config.logDir, 'error', 'error.log'),
            pattern: '-yyyy-MM-dd.log',
            alwaysIncludePattern: true
        },
        info: {
            type: 'file',
            filename: path.join(config.logDir, 'info', 'info.log'),
            maxLogSize: 1024,
            backups: 3,
        },
        route: {
            type: 'file',
            filename: path.join(config.logDir, 'route', 'route.log'),
            maxLogSize: 1024,
            backups: 3,
        }
    },
    replaceConsole: true,
    categories: {
        default: {appenders: ['default'], level: 'debug'},
        redis: {appenders: ['info', 'error'], level: 'info'},
        proxy: {appenders: ['info', 'error'], level: 'info'},
        server: {appenders: ['info', 'error'], level: 'info'},
        controller: {appenders: ['info', 'error'], level: 'info'},
        route: {appenders: ['route'], level: 'info'}
    }
});

export default log4js;