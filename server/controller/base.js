/**
 * Created by Aus on 2018/5/23.
 */
import logger from '../common/logger';

export default class BaseController {
    constructor(){
        this.name = this.constructor.name;
    }

    /**
     * 正常log
     * @param message
     */
    loggerInfo (message) {
        logger.controller.info(`${this.name} ${message}`);
    }

    /**
     * 异常log
     * @param message
     */
    loggerError (message) {
        logger.controller.info(`${this.name} ${message}`);
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