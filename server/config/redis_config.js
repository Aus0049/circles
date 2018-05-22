/**
 * Created by Aus on 2018/5/22.
 */
import config from './index';
import redis from 'redis';

const client = redis.createClient(config.redisPort, config.redisHost);

client.on('ready', function() {
    console.info('Redis链接成功！😁');
});

client.on('error', function (err) {
    if (err) {
        console.info('Redis链接失败！😢');
        console.info(err);
    }
});

export default client;