/**
 * Created by Aus on 2018/3/9.
 */
import Redis from '../common/cache';
import {routeLogger} from '../common/logger';

// 检查登录状态
export default function (req, res, next) {
    // 白名单里的路径不做登录状态检查

    const urlWhiteList = [
        '/api/users/sign-in',
        '/api/users/sign-up',
        '/api/support/send-sms-code'
    ];

    const url = req.originalUrl;
    routeLogger.info('登录检查');
    routeLogger.info(url);

    // 不在白名单里
    if(urlWhiteList.indexOf(url) === -1){
        // 检查redis中有没有这个值
        if(req.cookies && req.cookies.RRIDSID){
            // 根据sid 查找redis
            Redis.get(req.cookies.RRIDSID)
                .then((cache)=>{
                    routeLogger.info('cache');
                    routeLogger.info(cache);

                    if(cache){
                        // 更新redis时间
                        Redis.set(req.cookies.RRIDSID, cache, 60*60*24*1000);

                        routeLogger.info('已登录');
                        next();
                        return;
                    }

                    routeLogger.info('没有redis');
                    // 没有登录
                    res.send({
                        status: false,
                        code: 201,
                        message: '请先登录'
                    });
                });

            return;
        }

        routeLogger.info('没有cookie');
        // 没有登录
        res.send({
            status: false,
            code: 201,
            message: '请先登录'
        });

        return;
    }

    // 在白名单里
    next();
}