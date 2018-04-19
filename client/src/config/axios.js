/**
 * Created by Aus on 2018/4/19.
 */
import axios from 'axios';

// axios response拦截器
axios.interceptors.response.use((res) => {
    // 拦截response
    const result = res.data;

    // // 无登录状态统一拦截
    // if(result.code === 201){
    //     window.location.href = '/sign-in';
    // }

    return Promise.resolve(result);
}, (error) => {
    // 拦截报错请求
    const data = error.response.data;

    return Promise.reject(data);
});