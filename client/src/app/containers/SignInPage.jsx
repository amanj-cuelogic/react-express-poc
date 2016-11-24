import React , { Component } from "react";
import { render } from "react-dom";

import SignInForm from "../components/user/SignInForm";

export default class SignInPage extends React.Component {
    constructor(){
        super();
    }
    
    render(){
        return (
            <div className="container">
                <SignInForm/>
            </div>    
        );
    }
}