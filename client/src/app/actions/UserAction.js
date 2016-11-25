import { LOGIN_CLICKED, AUTH_SUCCESS, AUTH_FAILED, LOGIN_ATTEMPTED } from "../constants/actionTypes";
import 'whatwg-fetch';

export function loginClicked(payload){
    return dispatch => {
        
        dispatch({
                type : LOGIN_ATTEMPTED
            });
        
        fetch(
                    "http://localhost:3000/api/signin",
                    {
                        method : "POST",
                        headers : {
                            'Content-Type' : 'application/json'
                        },
                        body : JSON.stringify({
                            "email" : payload.email,
                            "password" : payload.password
                        })
            }).then(function(response){
                response.json().then(function(data){
                    if(data.status === true){
                        dispatch({
                            type : AUTH_SUCCESS ,
                            payload : data.user
                        });                  
                    }else{
                        dispatch({
                            type : AUTH_FAILED ,
                            payload : data.user
                        });    
                    }
                    
                });
            });        
    };
    
    //
}

export function loginAttempted(){
    
}