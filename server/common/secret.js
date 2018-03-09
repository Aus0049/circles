/**
 * Created by Aus on 2018/3/9.
 */
// 获取加密后的sessionID
import crypto from 'crypto';

// sha1加密方法
const stringEncryptSha1 = (str) => {
    const shasum = crypto.createHash('sha1');
    shasum.update(str);
    return shasum.digest('hex');
};

export default {
    stringEncryptSha1
}