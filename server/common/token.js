/**
 * Created by Aus on 2018/6/11.
 */
import rndm from 'rndm';
import crypto from 'crypto';
import uid from 'uid-safe';
import compare from 'tsscmp';
import {escape} from 'base64-url';

export default class Token {
    constructor (options) {
        // 生成token对象
        let {saltLength, secretLength} = options;

        // 参数校验一期先省略

        this.saltLength = saltLength || 8;
        this.secretLength = secretLength || 18;
    }

    /**
     * create a token
     */
    create (secret) {
        if (!secret || typeof secret !== 'string') {
            throw new TypeError('argument secret is required')
        }

        return this._tokenize(secret, rndm(this.saltLength))
    }

    /**
     * Create a new secret key.
     * @param callback
     * @returns {Promise|*}
     */
    secret (callback) {
        return uid(this.secretLength, callback);
    }

    /**
     * Create a new secret key synchronously.
     * @returns {*|string}
     */
    secretSync () {
        return uid.sync(this.secretLength);
    }

    /**
     * Tokenize a secret and salt.
     * @param secret
     * @param salt
     * @returns {*}
     * @private
     */
    _tokenize (secret, salt) {
        const hash = crypto
            .createHash('sha1')
            .update(salt + '-' + secret, 'ascii')
            .digest('base64');

        return escape(salt + '-' + hash);
    }

    verify (secret, token) {
        if (!secret || typeof secret !== 'string') {
            return false;
        }

        if (!token || typeof token !== 'string') {
            return false;
        }

        let index = token.indexOf('-');

        if (index === -1) {
            return false;
        }

        let salt = token.substr(0, index);
        let expected = this._tokenize(secret, salt);

        return compare(token, expected);
    }
}