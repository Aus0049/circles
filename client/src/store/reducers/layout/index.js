/**
 * Created by Aus on 2018/3/9.
 */
import {actionsTypes} from "../../actions/layout/index";

const layoutInitState = {
    loading: false,
    username: '',
    phone: null,
    gender: '',
    age: ''
};

export default function (state = {...layoutInitState}, action) {
    switch (action.type) {
        case actionsTypes.SITE_UPDATE_PERSONAL_INFO: {
            const {username, phone} = action.payload;

            state.username = username;
            state.phone = phone;

            return {...state};
        }
        default: {
            return state;
        }
    }
}