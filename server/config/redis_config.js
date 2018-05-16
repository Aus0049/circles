/**
 * Created by Aus on 2018/3/9.
 */
const config = require('./index');
const redis = require('redis');
const loggerConfig = require('../common/logger').default;

const client = redis.createClient(config.redisPort, config.redisHost);

client.on('ready', function() {
    loggerConfig.info('Redis链接成功！😁');
});

client.on('error', function (err) {
    if (err) {
        loggerConfig.error('Redis链接失败！😢');
        loggerConfig.error(err);
    }
});

module.exports = client;