/**
 * Created by Aus on 2018/3/9.
 */
import config from './index';
import mongoose from 'mongoose';
import loggerConfig from '../config/logger_config';

const logger = loggerConfig.getLogger('mongo');

mongoose.connect(config.db, {poolSize: 20})
    .then(()=>{
        logger.info('数据库连接成功！🍺');
    })
    .catch((err)=>{
        logger.error('数据库连接失败！😢');
        logger.error(err);
    });

// require('../models');