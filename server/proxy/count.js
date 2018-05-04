/**
 * Created by Aus on 2018/5/4.
 */
import {Counts} from '../model';
import {countProxyLogger} from '../common/logger';

async function save (count) {
    countProxyLogger.info('存入count: ' + count);
    return await Counts.saveAsync(count);
}

async function update(conditions, count, options) {
    countProxyLogger.info('更新count: ' + count);
    return await Counts.updateAsync(conditions, count, options);
}

export default {
    save,
    update
}