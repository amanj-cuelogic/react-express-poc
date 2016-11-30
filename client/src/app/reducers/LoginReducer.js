import { LOGIN_CLICKED, AUTH_SUCCESS, AUTH_FAILED, LOGIN_ATTEMPTED } from "../constants/actionTypes.js";

export function userInfo(state = {}, action) {

    switch (action.type) {
        case LOGIN_ATTEMPTED:
        case LOGIN_CLICKED:
            return Object.assign({}, state, {
                fetchingUserDetails: true
            });
        case AUTH_SUCCESS:
            return Object.assign({}, state, {
                isLoggedIn: true,
                fetchingUserDetails: false,
                user: action.payload,
                error: null
            });

        case AUTH_FAILED:
            return Object.assign({}, state, {
                isLoggedIn: false,
                fetchingUserDetails: false,
                error: action.payload,
                user: null
            });
        default:
            return state;
    }

}