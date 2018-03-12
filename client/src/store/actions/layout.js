/**
 * Created by Aus on 2018/3/9.
 */
import axios from 'axios';

const LAYOUT_UPDATE_USER_INFO = 'LAYOUT_UPDATE_USER_INFO';

export const actionsTypes = {
    LAYOUT_UPDATE_USER_INFO
};

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

const updateUserInfo = (data) => ({
    type: LAYOUT_UPDATE_USER_INFO,
    payLoad: data,
});

export const actionCreator = {
    fetchUserInfo
};
