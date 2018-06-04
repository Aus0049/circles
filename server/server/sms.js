/**
 * Created by Aus on 2018/5/23.
 */
import BaseServer from './base';
import smsClient from '../common/ali_sms';
import config from '../config/';
import Proxy from '../proxy/';

const {companyName, signUpTemplateCode} = config;
const Captcha = Proxy.captcha;

export default class SMSServer extends BaseServer {
    constructor () {
        super();
        this.createNumberCaptcha = this.createNumberCaptcha.bind(this);
        this.getSignUpCaptcha = this.getSignUpCaptcha.bind(this);
    }

    /**
     * 生成数字随机数
     * @param bits
     * @returns {*}
     */
     createNumberCaptcha (bits = 4) {
        return Math.random().toFixed(bits).split('.')[1];
    }

    /**
     * 发送验证码
     * @param mobile
     * @returns {Promise.<*>}
     */
    async getSignUpCaptcha (mobile) {
        try {
            // 1.创建简单验证码
            const captchaCode = this.createNumberCaptcha();

            // 2. 结果入库
            const captcha = await Captcha.save(captchaCode, mobile);

            // 3. 交给验证码服务发送验证码
            const smsRes = await smsClient.sendSMS({
                PhoneNumbers: mobile,
                SignName: companyName,
                TemplateCode: signUpTemplateCode,
                TemplateParam: `{"code":"${captchaCode}"}`
            });

            // 验证码发送成功
            this.loggerInfo(`${mobile}验证码发送成功！id: ${captcha.captcha_id}, code: ${captchaCode}`);

            // 验证码id和验证码返回controller
            return {captchaId: captcha.captcha_id};

        } catch (error){
            // 验证码发送失败
            this.loggerError(`${mobile}验证码发送失败！`);
            this.loggerError(`smsRes: ${error}`);

            return undefined;
        }
    }
}