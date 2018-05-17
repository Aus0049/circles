/**
 * Created by Aus on 2018/5/17.
 */

// controller类的公共方法
export default class Base {
    parameterCheck (ctx) {
        ctx.body = '111';
    }
    createJSONResponseData (status = true, message = '', data = null) {
        return {
            status: status,
            message: message,
            data: data,
        };
    }
}