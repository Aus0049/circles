/**
 * Created by Aus on 2018/5/23.
 */
import mongoose from 'mongoose';
import BPromise from 'bluebird';
// import './user';
import './captcha';
import './count';

mongoose.Promise = BPromise;

BPromise.promisifyAll(mongoose.Model);
BPromise.promisifyAll(mongoose.Model.prototype);
BPromise.promisifyAll(mongoose.Query.prototype);

// exports.Users = mongoose.model('Users');
export default {
    captchas: mongoose.model('Captchas'),
    counts: mongoose.model('Counts'),
}