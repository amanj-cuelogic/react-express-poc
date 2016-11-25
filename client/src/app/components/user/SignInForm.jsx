import React, { Component } from "react";
import { render } from "react-dom";


export const SignInForm = (props) => {
        return (
                <form action="#">
                    <div className="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input onChange={props.changeHandler.bind(this)} type="email" name="email"  className="form-control" id="exampleInputEmail1" placeholder={props.email}/>
                    </div>
                    <div className="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input onChange={props.changeHandler.bind(this)} name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder={props.email}/>
                    </div>
                    <button onClick={props.clickedLogin.bind(this)} type="submit" className="btn btn-default">Submit</button>
                </form>
            
        );
}

