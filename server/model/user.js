/**
 * Created by Aus on 2018/3/9.
 */
import mongoose from 'mongoose';
import BaseModel from './base';
import crypto from 'crypto';

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    slogan: {type: String},
    head_image: {type: String},
    create_time: {
        type: Date,
        default: Date.now()
    },
}, {versionKey: false});

UsersSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password')) return next();

    const shasum = crypto.createHash('sha1');
    shasum.update(user.password);
    user.password = shasum.digest('hex');

    next();
});

UsersSchema.plugin(BaseModel);
UsersSchema.index({_id: 1});

mongoose.model('Users', UsersSchema);

export default UsersSchema;