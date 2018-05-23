/**
 * Created by Aus on 2018/5/23.
 */

export default class Base {
    constructor(){

    }

    /**
     * 返回标准格式的json数据
     * @param status
     * @param message
     * @param data
     */
    send (status = true, message = '', data = null) {
        return {
            status: status,
            message: message,
            data: data,
        }
    }
}