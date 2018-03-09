/**
 * Created by Aus on 2018/3/9.
 */
import config from './index';
import Redis from 'ioredis';
import {redisLogger} from '../common/logger';

const client = new Redis({
    port: config.redis_port,
    host: config.redis_host,
    db: config.redis_db,
    password: config.redis_password
});

client.on('ready',function() {
    redisLogger.info('Redis链接成功！😁');
});

client.on('error', function (err) {
    if (err) {
        redisLogger.error('Redis链接失败！😢');
        redisLogger.error(err);
        process.exit(1);
    }
});

export default client;