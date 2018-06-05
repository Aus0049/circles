/**
 * Created by Aus on 2018/6/5.
 */
import Router from 'koa-router';

const HttpMethod = {
    HEAD: 'head',
    OPTIONS: 'options',
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    PATCH: 'patch',
    DELETE: 'delete'
};

const router = new Router({prefix: '/api'});

function RequestMapping(path, method, ...middleware) {
    return (target, key, descriptor) => {
        // 类的修饰器
        if(typeof target === 'function' && key === undefined && descriptor === undefined){

            if (middleware.length > 0) {
                target.prototype.router.use(...middleware);
            }

            router.use(path, target.prototype.router.routes(), target.prototype.router.allowedMethods());
            return target;
        }

        // 类的方法的修饰器

        if(!target.router){
            target.router = new Router();
        }

        target['router'][method](path, ...middleware, descriptor.value);
        return descriptor;
    }
}

export {
    HttpMethod,
    RequestMapping,
    router
}