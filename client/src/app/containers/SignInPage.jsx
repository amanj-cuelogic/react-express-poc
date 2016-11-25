import React , { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";

import { SignInForm } from "../components/user/SignInForm";

import { loginClicked } from "../actions/UserAction.js";

class SignInPage extends React.Component {
    constructor(){
        super();
        this.state = {
            email : '',
            password : ''
        };
    }
    handleChange(event){
        
        this.setState({
                email : event.target.value
            })
        
        
    }
    
    render(){
        return (
            <div className="container">
                <SignInForm changeHandler={this.handleChange.bind(this)} clickedLogin = { () => this.props.userLogin("ama")} />
            </div>    
        );
    }
}


const mapStateToProps = (state) => {
    return {
        user : state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userLogin : (email) => {
            dispatch(loginClicked(email));
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(SignInPage)