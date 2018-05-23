/**
 * Created by Aus on 2018/5/23.
 */
import Joi from 'joi';
import BaseController from './base';
import logger from '../common/logger';
import ParameterException from '../exception/parameter';
import Server from '../server/';

export default class SupportController extends BaseController {
    constructor () {
        super();
        this.sendSMSCodeForSignValidate = this.sendSMSCodeForSignValidate.bind(this);
        this.sendSMSCodeForSign = this.sendSMSCodeForSign.bind(this);
    }

    /**
     * 注册发送验证码参数校验
     * @param ctx
     * @param next
     * @returns {Promise.<void>}
     */
    async sendSMSCodeForSignValidate (ctx, next) {
        const schema = {
            mobile: Joi.string().regex(/^(1[3|5|8|9])\d{9}$/).required().error(new ParameterException('mobile', '手机号校验失败'))
        };

        const validateResult = Joi.validate(ctx.request.body, schema);

        if(validateResult.error){
            logger.controller.error(
                `${ctx.request.url} 参数校验失败：
                ${validateResult.error.name} ${validateResult.error.message} 
                value: ${JSON.stringify(validateResult.value)}`
            );

            ctx.body = this.send(false, '参数校验失败', validateResult.error.detail);
            return;
        }

        // 交由业务层处理
        const result = await next();

        if(result){
            ctx.body = this.send(true, '验证码发送成功', result);
            return;
        }

        ctx.body = this.send(false, '验证码发送失败', null);
    }

    /**
     * 注册发送验证码业务逻辑
     * @param ctx
     */
    async sendSMSCodeForSign (ctx) {
        // 调用业务层
        const {mobile} = ctx.request.body;

        const serverResult = await Server.sms.getSignUpCaptcha(mobile);

        return serverResult;
    }
}