import React from "react";
import ReactDOM from "react-dom";

import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithTag
} from "react-addons-test-utils";

import SignInForm from "../src/components/SignInForm";

describe("root container",()=>{
    it("renders the basic app component",(done)=>{
        const component = renderIntoDocument(
            <SignInForm />
        );
        const input = scryRenderedDOMComponentsWithTag(component,'input');
        expect(input.length).to.equal(2);
        
    })
})