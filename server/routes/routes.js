var User = require("../models/user.model");
var UserController = require("../controllers/user.controller")(User);

module.exports = function(app){
    
    app.post('/api/signin',UserController.PostSignIn);
    
    app.post('/api/signup',UserController.PostSignUp);
    
    app.get('/api/user/:email',UserController.GetUserInfo);
    
    app.post('/api/user',UserController.PostUserInfo);
};