/**
 * Created by Aus on 2018/5/3.
 */
import Router from 'koa-router';
import Controller from '../controller/';

const router = new Router();

// support模块下的路径 路由表
// 获取验证码
router.post('/send-sms-code-for-sign', Controller.support.sendSMSCodeForSign);

export default router;