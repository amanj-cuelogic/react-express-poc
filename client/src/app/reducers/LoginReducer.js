import { LOGIN_CLICKED } from "../constants/actionTypes.js";

const initialState = {
  isLoggedIn : false,
  fetchingUserDetails : false,
  userObject : null,
  error : null,
  login_info :{
    email : "amanjuneja5@gmail.com",
    password : "1234567"
  }
};

export function userInfo(state=initialState,action){
    
    switch (action.type) {
        case LOGIN_CLICKED :
            return Object.assign({},state,{
                fetchingUserDetails : true    
            });
        default :
            return state;
    }
    
}