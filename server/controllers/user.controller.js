
var UserCtrl = function(User){
    
    var UserObj = {};
    
    UserObj.PostSignIn = function(req,res){
        res.send("Sign In Route");
    }
    
    UserObj.PostSignUp = function(req,res){
        console.log(req.payload);
        var newUser = new User(req.body);
        newUser.save(function(err,user){
                if (err) {
                    res.json({status : false, error : err.message});
                    return;
                }
                res.json({status  : true, user : user});
            });
    }
    
    UserObj.GetUserInfo = function(req,res,next){
        
    }
    
    UserObj.PostUserInfo = function(req,res,next){
        
    }
    
    return UserObj;
}

module.exports = UserCtrl;