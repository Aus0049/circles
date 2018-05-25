/**
 * Created by Aus on 2018/5/23.
 */
import Joi from 'joi';
import BaseController from './base';

import ParameterException from '../exception/parameter';
import Server from '../server/';

export default class SupportController extends BaseController {
    constructor () {
        super();
        this.sendSMSCodeForSign = this.sendSMSCodeForSign.bind(this);
    }

    /**
     * 注册发送验证码参数校验
     * @param ctx
     * @returns {Promise.<void>}
     */
    async sendSMSCodeForSign (ctx) {
        const schema = {
            mobile: Joi.string().regex(/^(1[3|5|8|9])\d{9}$/).required().error(new ParameterException('mobile', '手机号校验失败'))
        };

        const validateResult = Joi.validate(ctx.request.body, schema);

        if(validateResult.error){
            this.loggerError (
                `${ctx.request.url} 参数校验失败：
                ${validateResult.error.name} ${validateResult.error.message} 
                value: ${JSON.stringify(validateResult.value)}`
            );

            ctx.body = this.sendError('参数校验失败', validateResult.error.detail);
            return;
        }

        // 交由业务层处理
        const {mobile} = ctx.request.body;

        const result = await Server.sms.getSignUpCaptcha(mobile);

        if(result){
            ctx.body = this.sendSuccess('验证码发送成功', result);
            return;
        }

        ctx.body = this.sendError('验证码发送失败', null);
    }
}