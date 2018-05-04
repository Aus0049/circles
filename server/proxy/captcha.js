/**
 * Created by Aus on 2018/5/3.
 */
import {Captchas, Counts} from '../model';
import {proxyLogger} from '../common/logger';
import Redis from '../common/cache';
import Secret from '../common/secret';

/**
 * 存储验证码并返回验证码id
 * @param captcha
 * @return captchaId
 */
async function save (captcha) {
    // 先去Counts表中查找最大id
    const maxCount = Counts.findAsync({'collection_name': 'captcha'});
    console.log(maxCount);
    // 最大id作为新id存入
    // 返回结果
}



export default {
    save
}