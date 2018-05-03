/**
 * Created by Aus on 2018/5/3.
 */
import {Users} from '../model';
import {proxyLogger} from '../common/logger';
import Redis from '../common/cache';
import Secret from '../common/secret';

// 发送验证码
function sendSMSCode (req, res) {
    //
    res.send(createResultObj(true, 'ok'));
}

const createResultObj = (status = true, message = '', data = null) => ({
    status: status,
    message: message,
    data: data,
});

export default {
    sendSMSCode
}