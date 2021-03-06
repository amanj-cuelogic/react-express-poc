import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import React, { Component } from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory } from "react-router";
import Immutable from "immutable";

import RootReducer from "../reducers/RootReducer";
import App from "./App";
import SignInPage from "./SignInPage";

const logger = createLogger();
const initialState = Immutable.Map({
    isLoggedIn: false,
    fetchingUserDetails: false,
    userObject: null,
    error: null,
});

const store = createStore(
    RootReducer,
    window.initialState,
    applyMiddleware(thunk, logger)
);


var routes = (
    <Router history={browserHistory}>
        <Route path={"/"} component={App}>
            <Route path="signup" component="" />
            <Route path={"signin"} component={SignInPage} />
            <Route path="user/:id" component="" />
        </Route>
    </Router>
);

export default class Root extends React.Component {
    render() {
        return (
            <Provider store={store} children={routes}>
            </Provider>
        )
    }
};
