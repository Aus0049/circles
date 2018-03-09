/**
 * Created by Aus on 2018/3/9.
 */
import {actionsTypes} from "../actions/layout";

const layoutInitState = {
    username: '',
    gender: '',
    age: ''
};

export default function (state = {...layoutInitState}, action) {
    switch (action.type) {
        case actionsTypes.LAYOUT_UPDATE_USER_INFO: {

            return {...state};
        }
        default: {
            return state;
        }
    }
}