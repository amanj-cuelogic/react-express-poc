import { LOGIN_CLICKED } from "../constants/actionTypes";
import 'whatwg-fetch';

export function loginClicked(payload){
    return dispatch => {
        fetch(
                    "http://localhost:3000/api/signin",
                    {
                        method : "POST",
                        headers : {
                            'Content-Type' : 'application/json'
                        },
                        payload : JSON.stringify({
                            email : "amanjuneja5@gmail.com",
                            password : "123456"
                        })
            }).then(function(response){
                console.log(response);
            });        
    };
    
    //return { type : LOGIN_CLICKED , payload };
}

export function loginAttempted(){
    
}