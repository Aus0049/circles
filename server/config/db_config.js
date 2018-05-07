/**
 * Created by Aus on 2018/3/9.
 */
import config from './index';
import mongoose from 'mongoose';
import loggerConfig from '../common/logger';

mongoose.connect(config.db, {poolSize: 20})
    .then(()=>{
        loggerConfig.info('数据库连接成功！🍺');
    })
    .catch((err)=>{
        loggerConfig.error('数据库连接失败！😢');
        loggerConfig.error(err);
    });

// require('../models');