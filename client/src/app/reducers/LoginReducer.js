import { LOGIN_CLICKED, AUTH_SUCCESS, AUTH_FAILED,LOGIN_ATTEMPTED } from "../constants/actionTypes.js";

const initialState = {
  isLoggedIn : false,
  fetchingUserDetails : false,
  userObject : null,
  error : null,
};

export function userInfo(state=initialState,action){
    
    switch (action.type) {
        case LOGIN_ATTEMPTED : 
        case LOGIN_CLICKED :
            return Object.assign({},state,{
                fetchingUserDetails : true    
            });
        case AUTH_SUCCESS :
            return Object.assign({},state,{
              isLoggedIn  : true,
              fetchingUserDetails : false,
              userObject : action.payload,
              error : null
            });
            
        case AUTH_FAILED :
            return Object.assign({},state,{
              fetchingUserDetails : false,
              error : action.payload,
              userObject : null
            });
        default :
            return state;
    }
    
}