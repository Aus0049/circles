/**
 * Created by Aus on 2018/3/9.
 */
// 加载model
import mongoose from 'mongoose';
import BPromise from 'bluebird';
import './user';
import './captcha';
import './count';

mongoose.Promise = BPromise;

BPromise.promisifyAll(mongoose.Model);
BPromise.promisifyAll(mongoose.Model.prototype);
BPromise.promisifyAll(mongoose.Query.prototype);

exports.Users = mongoose.model('Users');
exports.Captchas = mongoose.model('Captchas');
exports.Counts = mongoose.model('Counts');