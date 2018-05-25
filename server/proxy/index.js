/**
 * Created by Aus on 2018/5/23.
 */
import CaptchaProxy from './captcha';
import CountProxy from './count';

const proxy = {
    captcha: new CaptchaProxy(),
    count: new CountProxy()
};

export default proxy;