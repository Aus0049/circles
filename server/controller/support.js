/**
 * Created by Aus on 2018/5/23.
 */
import Joi from 'joi';
import Base from './base';
import logger from '../common/logger';
import ParameterException from '../exception/parameter';

export default class Support extends Base {
    constructor () {
        super();
        this.sendSMSCodeForSign = this.sendSMSCodeForSign.bind(this);
    }
    /**
     * 注册发送验证码
     * @param ctx
     */
    sendSMSCodeForSign (ctx) {
        // 参数验证
        const schema = {
            mobile: Joi.string().regex(/^(1[3|5|8|9])\d{9}$/).required().error(new ParameterException('mobile', '手机号校验失败'))
        };

        const result = Joi.validate(ctx.request.body, schema);

        if(result.error){
            logger.controller.error(`sendSMSCodeForSign 参数校验失败：${result.error.name} ${result.error.message}`);

            ctx.body = this.send(false, '参数校验失败', result.error);
            return;
        }

        // 调用server
        // 返回数据
    }
}