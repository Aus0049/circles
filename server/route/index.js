/**
 * Created by Aus on 2018/5/16.
 */
import Router from 'koa-router';
import support from './support';

const router = new Router({prefix: '/api'});

router.use('/support', support.routes(), support.allowedMethods());

export default router.routes();