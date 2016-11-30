import proxyquire from "proxyquire";
 import { expect } from "chai";
let stubs = {
    'actionTypes' : {},
    'Config' : {
        '@noCallThru' : true
    }
}
let actionCreators = proxyquire("../../src/app/actions/UserAction",stubs);

describe("User Action", () => {
    let payload;
    before(() => {
        payload = {
            email: "amanjuneja5@gmail.com",
            password: "1234567"
        }
    });
    it("returns a function", (done) => {
        let action = actionCreators.loginClicked(payload);
        expect(action).to.be.a('function');
        done();
    });
    it("Dispatches Action LOGIN_ATTEMPTED", (done) => {
        const dispatch = actionCreators.loginClicked(payload)();
        console.log(dispatch);
    })
});