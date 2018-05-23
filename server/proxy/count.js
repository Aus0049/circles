/**
 * Created by Aus on 2018/5/23.
 */
import Model from '../model';
import logger from '../common/logger';
import BaseProxy from './base';

export default class CountProxy extends BaseProxy {
    constructor(){
        super();
        this.name = 'CountProxy';

        this.save = this.save.bind(this);
        this.update = this.update.bind(this);
    }
    async save (count) {
        logger.proxy.info(`${this.name} 存入count ${count}`);

        return await count.saveAsync();
    }
    async update (conditions, count, options) {
        logger.proxy.info(`${this.name} 更新count ${count}`);

        return await Model.counts.updateAsync(conditions, count, options);
    }
}

