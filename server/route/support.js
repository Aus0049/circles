/**
 * Created by Aus on 2018/5/3.
 */
import express from 'express';
import SMS from '../server/sms';
const router = express.Router();

// support模块下的路径 路由表
// 获取验证码
router.post('/send-sms-code-for-sign', SMS.getSignUpCaptcha);

export default router;