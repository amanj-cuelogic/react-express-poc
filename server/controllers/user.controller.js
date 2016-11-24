
var UserCtrl = function(User){
    
    var UserObj = {};
    
    UserObj.PostSignIn = function(req,res){
        
        User.findOne({email:req.body.email,password:req.body.password},function(err,user){
            if(err){
                res.json({status : false, error : err.message});
                return;        
            }
            if (user) {
                res.json({status : true, user : user});
                return;    
            }
            res.json({status : false, user : "Invalid user credentials "});
            return;
        });      
    };
    
    UserObj.PostSignUp = function(req,res){
        
        User.findOne({email : req.body.email},function(err,user){
            if(err){
                    res.json({status : false, error : err.message});
                    return;
                }
            if (user) {
                res.json({status : false, error : "User already exists"});
                return;
            }else{
                var newUser = new User(req.body);
                newUser.save(function(err,user){
                    if (err) {
                        res.json({status : false, error : err.message});
                        return;
                    }
                    res.json({status  : true, user : user});
                });       
            }
        });
        
    };
    
    UserObj.GetUserInfo = function(req,res){
        User.findOne({ email:req.params.email },function(err,user){
            if(err){
                res.json({status : false, error : err.message});
                return;
            }
            if (user) {
                res.json({status : true, user : user});
                return;    
            }
            res.json({status : false, user : "User does not exist"});
            return;
            
        });
    };
    
    UserObj.PostUserInfo = function(req,res){
        
        User.findOneAndUpdate({email:req.body.email},req.body,{new:true},function(err,user){
            if(err){
                res.json({status : false, error : err.message});
                return;        
            }
            if (user) {
                res.json({status : true, user : user});
                return;    
            }
            res.json({status : false, user : "User does not exist"});
            return;
        });
    };
    
    return UserObj;
};

module.exports = UserCtrl;