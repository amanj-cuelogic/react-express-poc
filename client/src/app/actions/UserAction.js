import * as actionTypes from "../constants/actionTypes";
import * as Config from "Config";
import "whatwg-fetch";

export const loginClicked = (payload) => {
    return dispatch =>  {

        dispatch({
            type: actionTypes.LOGIN_ATTEMPTED
        });

        fetch(
            Config.apiUrl + "/signin",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "email": payload.email,
                    "password": payload.password
                })
            }).then(function (response) {
                response.json().then(function (data) {
                    if (data.status === true) {
                        dispatch({
                            type: actionTypes.AUTH_SUCCESS,
                            payload: data.user
                        });
                    } else {
                        dispatch({
                            type: actionTypes.AUTH_FAILED,
                            payload: data.user
                        });
                    }
                });
            });
    };
}