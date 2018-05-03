/**
 * Created by Aus on 2018/3/9.
 */
import axios from 'axios';

const SITE_UPDATE_USER_INFO = 'SITE_UPDATE_USER_INFO';
const SITE_UPDATE_LOADING = 'SITE_UPDATE_LOADING';
const SITE_UPDATE_PERSONAL_INFO = 'SITE_UPDATE_PERSONAL_INFO';

export const actionsTypes = {
    SITE_UPDATE_USER_INFO,
    SITE_UPDATE_LOADING,
    SITE_UPDATE_PERSONAL_INFO,
};

const apiRoutePrefix = '/api';

// 获取个人信息
function fetchUserInfo() {
    return (dispatch, getState) => {

        return axios.post('/api/users/get-user-sign-in-status')
            .then(result => {
                // 如果为true 获取正常
                if(result.status){
                    // 存储皮肤id
                    dispatch(updateUserInfo(result.data));
                }

                return result;
            })
    }
}

// 注册
function encryptionPasswordAndSignUp (fetchData) {
    // 密码加密


    return (dispatch, getState) => {
        return axios.post(`${apiRoutePrefix}/users/sign-up`, {
            username: username,
            phone: phone,
            password: password
        })
            .catch(response => response.data)
    }
}

// 发送验证码
function fetchCaptcha(mobile) {
    return (dispatch, getState) => {
        return axios.post(`${apiRoutePrefix}/support/send-sms-code`, {mobile: mobile})
            .catch(response => response.data)
    }
}

// 登录
function fetchSignIn (username, password) {
    return (dispatch, getState) => {
        return axios.post(`${apiRoutePrefix}/users/sign-in`, {
            username: username,
            password: password
        })
            .catch(response => response.data)
    }
}

// 存储个人信息
const updatePersonalInfo = (obj) => ({
    type: SITE_UPDATE_PERSONAL_INFO,
    payload: obj
});

const updateUserInfo = (data) => ({
    type: SITE_UPDATE_USER_INFO,
    payLoad: data,
});

const updateLoading = (data) => ({
    type: SITE_UPDATE_LOADING,
    payLoad: data,
});

export const actionCreator = {
    fetchUserInfo,
    encryptionPasswordAndSignUp,
    fetchCaptcha,

    fetchSignIn,
    updatePersonalInfo,
    updateLoading,
};
