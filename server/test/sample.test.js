import chai from "chai";
import request from "superagent";
let expect = chai.expect;

describe("Sample web app function",function(){

    describe("when requested ",function(){
        const myApp = require("../lib/server.js");
        const port = 8080;
        
        before((done)=>{
            myApp.start(port,done);
        });

        after((done)=>{
            myApp.stop(done);
        })
        const baseUrl = "http://localhost:"+port;
        
        it("should accpet post request to /api/signin",(done)=>{
            request
                .post(baseUrl+'/api/signin')
                .send({email:"amanjuneja5@gmail.com",password:"123456"})
                .type('application/json')
                .end((err,res)=>{
                    expect(err).to.not.be.ok;
                    expect(res.body).to.have.property("status",true);
                    done();
                })
        })

        it("should accpet post request to /api/signup",(done)=>{
            request
                .post(baseUrl+'/api/signup')
                .send({first_name : "Aman",last_name : "Juneja",email:"amanjuneja5@gmail.com",password:"123456"})
                .type('application/json')
                .end((err,res)=>{
                    expect(err).to.not.be.ok;
                    expect(res.body).to.have.property("status",true);
                    done();
                })
        })

        it("should accpet get request to /api/user/:email",(done)=>{
            request
                .get(baseUrl+'/api/user/')
                .query({email : "amanjuneja5@gmail.com"})
                .end((err,res)=>{
                    expect(err).to.not.be.ok;
                    expect(res.body).to.have.property("status",true);
                    done();
                })
        })

        it("should accpet post request to /api/user",(done)=>{
            request
                .post(baseUrl+'/api/user')
                .send({email : "amanjuneja5@gmail.com"})
                .type("application/json")
                .end((err,res)=>{
                    expect(err).to.not.be.ok;
                    expect(res.body).to.have.property("status",true);
                    done();
                })
        })
    })
})