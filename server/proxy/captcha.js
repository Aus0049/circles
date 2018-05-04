/**
 * Created by Aus on 2018/5/3.
 */
import {Captchas, Counts} from '../model';
import {captchaProxyLogger} from '../common/logger';
import CountProxy from './count';

/**
 * 存储验证码并返回验证码id
 * @param captcha
 * @return captchaId
 */
async function save (captcha) {
    // 先去Counts表中查找最大id
    let maxCount;
    let captchaItemArray = await Counts.findAsync({'collection_name': 'captcha'});

    if(captchaItemArray.length === 0){
        maxCount = 1;

        // 更新最大id
        const counts = new Counts();

        counts.collection_name = 'captcha';
        counts.count = maxCount;

        await CountProxy.save(counts);
    } else {
        const currentCaptchaItem = captchaItemArray[0];
        maxCount = currentCaptchaItem.count + 1;
        currentCaptchaItem.count = maxCount;

        // 更新最大id
        await CountProxy.update({_id: currentCaptchaItem._id}, currentCaptchaItem);
    }

    // 创建新的captcha文档并存入
    const newCaptcha = new Captchas();

    newCaptcha.captcha_id = maxCount;
    newCaptcha.captcha_code = captcha;

    captchaProxyLogger.info('存入captcha：' + newCaptcha);
    return await newCaptcha.saveAsync();
    // 返回结果
}



export default {
    save
}