/**
 * Created by Aus on 2018/5/17.
 */
import Joi from 'joi';

/**
 * 发送验证码
 * @param ctx
 * @returns {Promise.<void>}
 */
async function sendSMSCodeForSign (ctx) {
    // 参数校验
    const schema = Joi.object({
       mobile: Joi.number().required()
    });

    const result = Joi.validate(ctx.request.body, schema);

    if(result.error) ctx.body = '12';
    // 调用server
    // 返回结果
}

export default {
    sendSMSCodeForSign
}