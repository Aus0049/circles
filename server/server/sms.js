/**
 * Created by Aus on 2018/5/4.
 */
import {smsServerLogger} from '../common/logger';
import Captcha from '../proxy/captcha';
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
    console.log('获取验证码');
    // 1.创建简单验证码
    const captchaCode = create4BitsCaptcha();
    console.log('captcha: ' + captchaCode);
    const captcha = await Captcha.save(captchaCode);
    console.log('ok');
    // 2. 结果入库

    // 3. 交给验证码服务发送验证码
    res.send('ok');
}

export default {
    getSignUpCaptcha
}