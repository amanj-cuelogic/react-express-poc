import { CLICKED_LOGIN } from "../constants/actionTypes.js";

const initialState = {
  isLoggedIn : false,
  fetchingUserDetails : false,
  userObject : null,
  error : null
};

export function userInfo(state=initialState,action){
    
    switch (action.type) {
        case CLICKED_LOGIN :
            return Object.assign({},state,{
                fetchingUpdate : true    
            });
        default :
            return state;
    }
    
}