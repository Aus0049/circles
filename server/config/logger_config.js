/**
 * Created by Aus on 2018/3/9.
 */
import log4js from 'log4js';
import path from 'path';
import config from './index';

log4js.configure({
    appenders: {
        default: { type: 'console'},
        redis: {
            type: 'file',
            filename: path.join(config.log_dir, 'redis', 'redis.log'),
            alwaysIncludePattern: true
        },
        mongo: {
            type: 'file',
            filename: path.join(config.log_dir, 'mongo', 'mongo.log'),
            alwaysIncludePattern: true
        },
        user: {
            type: 'file',
            filename: path.join(config.log_dir, 'proxy', 'user.log'),
            maxLogSize: 1024,
            backups: 3,
        },
        route: {
            type: 'file',
            filename: path.join(config.log_dir, 'route', 'request.log'),
            maxLogSize: 1024,
            backups: 3,
        }
    },
    replaceConsole: true,
    categories: {
        default: { appenders: ['default'], level: 'info' },
        database: { appenders: ['redis', 'mongo'], level: 'error'},
        server: { appenders: ['user'], level: 'error' },
        controller: { appenders: ['route'], level: 'info' }
    }
});

export default log4js;