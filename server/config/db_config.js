/**
 * Created by Aus on 2018/3/9.
 */
import config from './index';
import mongoose from 'mongoose';
import {mongoLogger} from '../common/logger';

mongoose.connect(config.db, {poolSize: 20})
    .then(()=>{
        mongoLogger.info('数据库连接成功！🍺');
    })
    .catch((err)=>{
        mongoLogger.error('数据库连接失败！😢');
        mongoLogger.error(err);
    });

// require('../models');