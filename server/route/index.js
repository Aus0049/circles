/**
 * Created by Aus on 2018/5/16.
 */
const Router = require('koa-router');
const support = require('./support');

const router = new Router({prefix: '/api'});

router.use('/support', support.routes(), support.allowedMethods());

module.exports = router.routes();