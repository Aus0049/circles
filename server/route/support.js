/**
 * Created by Aus on 2018/5/23.
 */
import Router from 'koa-router';
import Controller from '../controller/';

const router = new Router();

// support模块下的路径 路由表
router.post('/send-sms-code-for-sign', Controller.support.sendSMSCodeForSignValidate, Controller.support.sendSMSCodeForSign);

export default router;