/**
 * Created by Aus on 2018/5/22.
 */
import path from 'path';

export default {
    debug: true,
    //域名
    host: 'localhost',
    // mongodb 配置
    db: 'mongodb://127.0.0.1:27017/circle_of_friends',

    // redis 配置，默认是本地
    redisHost: '127.0.0.1',
    redisPort: 6379,
    redisDb: 0,
    redisPassword: '',

    sessionSecret: 'c_s',
    saltFactory: 10,

    logDir: path.join(__dirname, '../logs'),

    serverPort: 9000
}