/**
 * Created by Aus on 2018/3/9.
 */
// 加载model
import mongoose from 'mongoose';
import BPromise from 'bluebird';
import './user';

mongoose.Promise = BPromise;

BPromise.promisifyAll(mongoose.Model);
BPromise.promisifyAll(mongoose.Model.prototype);
BPromise.promisifyAll(mongoose.Query.prototype);

exports.Users = mongoose.model('Users');