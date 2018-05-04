/**
 * Created by Aus on 2018/5/4.
 */
import Redis from '../common/cache';
import {serverLogger} from '../common/logger';

// sms使用log提示
export default function (req, res, next) {
    // 记录点: 谁+什么时候+调用了服务
    // serverLogger.info('');

    next();
}