/**
 * Created by Aus on 2018/5/23.
 */

export default class BaseController {
    constructor(){

    }

    /**
     * 返回标准格式的json数据
     * @param status
     * @param message
     * @param data
     */
    sendSuccess (message = '', data = null) {
        return {
            status: true,
            message: message,
            data: data,
        }
    }

    /**
     *
     * @param message
     * @param data
     */
    sendError (message = '', data = null) {
        return {
            status: false,
            message: message,
            data: data,
        }
    }
}