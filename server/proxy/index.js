/**
 * Created by Aus on 2018/5/23.
 */
import CaptchaProxy from './captcha';
import CountProxy from './count';

export default {
    captcha: new CaptchaProxy(),
    count: new CountProxy(),
};