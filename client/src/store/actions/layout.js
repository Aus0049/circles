/**
 * Created by Aus on 2018/3/9.
 */
const LAYOUT_UPDATE_USER_INFO = 'LAYOUT_UPDATE_USER_INFO';

export const actionsTypes = {
    LAYOUT_UPDATE_USER_INFO
};

const updateUserInfo = () => ({
    type: LAYOUT_UPDATE_USER_INFO,
    payLoad: null,
});

export const actionCreator = {
    updateUserInfo
};
