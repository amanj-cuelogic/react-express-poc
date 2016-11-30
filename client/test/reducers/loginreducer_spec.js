import * as Reducer from "../../src/app/reducers/LoginReducer";
import * as ActionType from "../../src/app/constants/actionTypes";

import { expect } from "chai";

describe("Login Reducer for ACTION : LOGIN_ATTEMPTED & LOGIN_CLICKED ", () => {
    it("sets fetchingUserDetails prop to true for LOGIN_ATTEMPTED", (done) => {

        let action = {
            type: ActionType.LOGIN_ATTEMPTED,
            payload: {
                email: "amanjuneja5@gmail.com"
            }
        };

        let newState = Reducer.userInfo(undefined, action);
        expect(newState).to.have.property("fetchingUserDetails", true);
        done();
    })
    it("sets fetchingUserDetails prop to true for LOGIN_CLICKED", (done) => {

        let action = {
            type: ActionType.LOGIN_CLICKED,
            payload: {
                email: "amanjuneja5@gmail.com"
            }
        };

        let newState = Reducer.userInfo(undefined, action);
        expect(newState).to.have.property("fetchingUserDetails", true);
        done();
    })
})

describe("Login Reducer for ACTION : AUTH_SUCCESS & AUTH_FAILED ", () => {
    it("Test for AUTH_SUCCESS", (done) => {

        let action = {
            type: ActionType.AUTH_SUCCESS,
            payload: {
                first_name: "Aman",
                last_name: "Juneja",
                email: "amanjuneja5@gmail.com"
            }
        };

        let newState = Reducer.userInfo(undefined, action);
        expect(newState).to.have.property("fetchingUserDetails", false);
        expect(newState).to.have.property("isLoggedIn", true);
        expect(newState).to.deep.have.property("user.first_name", "Aman");
        done();
    })
    it("Test for AUTH_FAILED", (done) => {

        let action = {
            type: ActionType.AUTH_FAILED,
            payload: "Invalid Credentials"
        };

        let newState = Reducer.userInfo(undefined, action);
        expect(newState).to.have.property("fetchingUserDetails", false);
        expect(newState).to.have.property("isLoggedIn", false);
        expect(newState).to.deep.have.property("user", null);
        expect(newState).to.have.property("error", action.payload);
        done();
    })
})