/**
 * Created by Aus on 2018/5/3.
 */
import mongoose from 'mongoose';
import BaseModel from './base';

const Schema = mongoose.Schema;

// 验证码
const CaptchasSchema = new Schema({
    captcha_id: {
        type: Number,
        required: true,
        unique: true
    },
    captcha_code: {
        type: Number,
        required: true,
    },
    is_used: {
        type: Boolean,
        default: true,
    },
    create_time: {
        type: Date,
        default: Date.now()
    },
    update_time: {
        type:Date,
        default: Date.now()
    }
}, {
    versionKey: false,
    timestamps: { createdAt: 'create_time', updatedAt: 'update_time' }
});

CaptchasSchema.plugin(BaseModel);
CaptchasSchema.index({_id: 1});

mongoose.model('Captchas', CaptchasSchema);

export default CaptchasSchema;

