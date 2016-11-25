
const UserCtrl = User => {
    
    const UserObj = {};
    
    UserObj.PostSignIn = (req, res) => {
        
        User.findOne({email:req.body.email,password:req.body.password},(err, user) => {
            if(err){
                res.json({status : false, error : err.message});
                return;        
            }
            if (user) {
                res.json({status : true, user});
                return;    
            }
            res.json({status : false, user : "Invalid user credentials "});
            return;
        });      
    };
    
    UserObj.PostSignUp = (req, res) => {
        
        User.findOne({email : req.body.email},(err, user) => {
            if(err){
                    res.json({status : false, error : err.message});
                    return;
                }
            if (user) {
                res.json({status : false, error : "User already exists"});
                return;
            }else{
                const newUser = new User(req.body);
                newUser.save((err, user) => {
                    if (err) {
                        res.json({status : false, error : err.message});
                        return;
                    }
                    res.json({status  : true, user});
                });       
            }
        });
        
    };
    
    UserObj.GetUserInfo = (req, res) => {
        User.findOne({ email:req.params.email },(err, user) => {
            if(err){
                res.json({status : false, error : err.message});
                return;
            }
            if (user) {
                res.json({status : true, user});
                return;    
            }
            res.json({status : false, user : "User does not exist"});
            return;
            
        });
    };
    
    UserObj.PostUserInfo = (req, res) => {
        
        User.findOneAndUpdate({email:req.body.email},req.body,{new:true},(err, user) => {
            if(err){
                res.json({status : false, error : err.message});
                return;        
            }
            if (user) {
                res.json({status : true, user});
                return;    
            }
            res.json({status : false, user : "User does not exist"});
            return;
        });
    };
    
    return UserObj;
};

export default UserCtrl;