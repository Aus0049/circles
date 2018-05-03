/**
 * Created by Aus on 2018/5/3.
 */
import mongoose from 'mongoose';
import BaseModel from './base';

const Schema = mongoose.Schema;

// 创建每个需要自增id的collection
const CountsSchema = new Schema({
    collection_name: {
        type: String,
        required: true,
        unique: true
    },
    count: {
        type: Number,
        required: true
    }
}, {versionKey: false});

CountsSchema.plugin(BaseModel);
CountsSchema.index({_id: 1});

mongoose.model('Counts', CountsSchema);

export default CountsSchema;