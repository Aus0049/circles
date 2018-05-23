/**
 * Created by Aus on 2018/5/23.
 */
import BaseServer from './base';
import smsClient, {companyName, signUpTemplateCode} from '../common/ali_sms';
import Proxy from '../proxy/';
import logger from '../common/logger';

const Captcha = Proxy.captcha;

export default class SMSServer extends BaseServer {
    constructor () {
        super();
        this.name = 'SMSServer';
        this.create4BitsCaptcha = this.create4BitsCaptcha.bind(this);
        this.getSignUpCaptcha = this.getSignUpCaptcha.bind(this);
    }

    /**
     * 生成思维随机数
     * @returns {*}
     */
     create4BitsCaptcha () {
        return Math.random().toFixed(4).split('.')[1];
    }
    async getSignUpCaptcha (mobile) {
        // 1.创建简单验证码
        const captchaCode = this.create4BitsCaptcha();

        // 2. 结果入库
        const captcha = await Captcha.save(captchaCode, mobile);

        // 3. 交给验证码服务发送验证码
        await smsClient.sendSMS({
            PhoneNumbers: mobile,
            SignName: companyName,
            TemplateCode: signUpTemplateCode,
            TemplateParam: `{"code":"${captchaCode}"}`
        })
            .then((smsRes)=>{
                // 验证码发送成功
                logger.server.info(`${this.name} ${mobile}验证码发送成功！id: ${captcha.captcha_id}, code: ${captchaCode}`);

                // 验证码id和验证码返回controller
                return {
                    captchaId: captcha.captcha_id,
                    captchaCode: captcha.captcha_code,
                };
            })
            .catch((smsRes)=>{
                // 验证码发送失败
                logger.server.error(`${this.name} ${mobile}验证码发送失败！`);
                logger.server.error(`smsRes: ${smsRes}`);

                return undefined;
            });
    }
}