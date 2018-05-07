/**
 * Created by Aus on 2018/3/9.
 */
import config from './index';
import Redis from 'ioredis';
import loggerConfig from '../common/logger';

const client = new Redis({
    port: config.redis_port,
    host: config.redis_host,
    db: config.redis_db,
    password: config.redis_password
});

client.on('ready',function() {
    loggerConfig.info('Redis链接成功！😁');
});

client.on('error', function (err) {
    if (err) {
        loggerConfig.error('Redis链接失败！😢');
        loggerConfig.error(err);
    }
});

export default client;