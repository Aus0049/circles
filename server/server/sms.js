/**
 * Created by Aus on 2018/5/4.
 */
import smsClient, {companyName, signUpTemplateCode} from '../common/ali_sms';
import loggerConfig, {smsServerLogger} from '../common/logger';
import Captcha from '../proxy/captcha';
import {createJSONResponseData} from '../common/tool';
// 只向外暴露流程 内部方法不暴露

// 短信验证码类别：

// 1. 4位数字简单验证码
function create4BitsCaptcha () {
    // 生成四位随机数
    return Math.floor(Math.random() * (9999 - 1) + 1);
}

// 2. 6位数字简单验证码
// 3. 多位数组字母验证码

// 注册获取验证码
async function getSignUpCaptcha (req, res) {
    // 1.创建简单验证码
    const captchaCode = create4BitsCaptcha();

    // 2. 获取手机号
    const {mobile} = req.body;

    // 3. 结果入库
    const captcha = await Captcha.save(captchaCode, mobile);

    // 4. 交给验证码服务发送验证码
    smsClient.sendSMS({
        PhoneNumbers: mobile,
        SignName: companyName,
        TemplateCode: signUpTemplateCode,
        TemplateParam: `{"code":"${captchaCode}"}`
    })
        .then((smsRes)=>{
            // 验证码发送成功
            smsServerLogger.info(`${mobile}验证码发送成功！id: ${captcha.captcha_id}, code: ${captchaCode}`);
            // 验证码id和验证码返回前端
            res.send(createJSONResponseData(true, '验证码发送成功！', {
                captchaId: captcha.captcha_id,
                captchaCode: captcha.captcha_code,
            }));
        })
        .catch((smsRes)=>{
            // 验证码发送失败
            smsServerLogger.error(`${mobile}验证码发送失败！`);
            smsServerLogger.error(`smsRes: ${smsRes}`);
            res.send(createJSONResponseData(false, '验证码发送失败！'));
        });
}

export default {
    getSignUpCaptcha
}