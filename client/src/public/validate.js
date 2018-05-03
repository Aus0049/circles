/**
 * Created by Aus on 2018/1/18.
 */
// 自定义验证规则
// 验证手机号
export const verifyMobile = (rule, value, callback) => {
    if(!/^1(3|4|5|7|8)\d{9}$/.test(value)){
        // 错误
        callback(new Error(rule.message));
    } else {
        callback();
    }
};

// 验证必选
export const verifyTrue = (rule, value, callback) => {
    if(!value === true){
        // 错误
        callback(new Error(rule.message));
    } else {
        callback();
    }
};