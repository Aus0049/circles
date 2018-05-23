/**
 * Created by Aus on 2018/5/23.
 */
import BaseProxy from './base';
import Model from '../model/';
import CountProxy from './count';
import logger from '../common/logger';

const Captchas = Model.captchas;
const Counts = Model.counts;
const countProxy = new CountProxy();

export default class CaptchaProxy extends BaseProxy {
    constructor () {
        super();
        this.name = 'CaptchaProxy';
        this.save = this.save.bind(this);
    }
    async save (captcha, mobile) {
        // 先去Counts表中查找最大id
        let maxCount;
        let captchaItemArray = await Counts.findAsync({'collection_name': 'captcha'});

        if(captchaItemArray.length === 0){
            maxCount = 1;

            // 更新最大id
            const counts = new Counts();

            counts.collection_name = 'captcha';
            counts.count = maxCount;

            await countProxy.save(counts);
        } else {
            const currentCaptchaItem = captchaItemArray[0];
            maxCount = currentCaptchaItem.count + 1;
            currentCaptchaItem.count = maxCount;

            // 更新最大id
            await countProxy.update({_id: currentCaptchaItem._id}, currentCaptchaItem);
        }

        // 创建新的captcha文档并存入
        const newCaptcha = new Captchas();

        newCaptcha.captcha_id = maxCount;
        newCaptcha.captcha_code = captcha;
        newCaptcha.mobile = mobile;

        logger.proxy.info(`${this.name} 存入captcha：${newCaptcha}`);

        // 返回结果
        return await newCaptcha.saveAsync();
    }
}