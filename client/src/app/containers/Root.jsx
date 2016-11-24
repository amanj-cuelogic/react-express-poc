import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import RootReducer from "../reducers/RootReducer";

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import React, { Component } from "react";
import { render } from "react-dom";
import { Router, Route, Link,browserHistory} from "react-router";
//import createHistory from 'history/createBrowserHistory'

import App from "./App";
import SignInPage from "./SignInPage";

const logger = createLogger();

//const createStoreWithMiddleware = applyMiddleware(
//  thunk,
//  logger
//)(createStore);

//const initialState = {
//  isLoggedIn : false,
//  fetchingUserDetails : false,
//  userObject : null,
//  error : null
//};

const store = createStore(
                          RootReducer,
                          {},
                          applyMiddleware(thunk,logger)
                          );


var routes = (
    <Router history = {browserHistory}>
        <Route path={"/"} component={App}>
            <Route path="signup" component=""/>
            <Route path={"signin"} component={SignInPage}/>
            <Route path="user/:id" component=""/>
        </Route>
    </Router>
);

export default class Root extends React.Component {
    render(){
        return (
            <Provider store={store} children={routes}>
            </Provider>
        )
    }
};
