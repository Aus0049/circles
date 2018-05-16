/**
 * Created by Aus on 2018/5/3.
 */
const router = require('koa-router')();
const SMS = require('../server/sms');

// support模块下的路径 路由表
// 获取验证码
router.post('/send-sms-code-for-sign', SMS.getSignUpCaptcha);

module.exports = router;