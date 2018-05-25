/**
 * Created by Aus on 2018/5/23.
 */
import logger from '../common/logger';

export default class BaseServer {
    constructor (){
        this.name = this.constructor.name;
    }

    /**
     * 正常log
     * @param message
     */
    loggerInfo (message) {
        logger.server.info(`${this.name} ${message}`);
    }

    /**
     * 异常log
     * @param message
     */
    loggerError (message) {
        logger.server.info(`${this.name} ${message}`);
    }
}