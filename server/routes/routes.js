import UserModel from "../models/user.model";
import UserCtrl  from "../controllers/user.controller";
const UserController = UserCtrl(UserModel);
export default (app) => {
    
    app.post('/api/signin',UserController.PostSignIn);
    
    app.post('/api/signup',UserController.PostSignUp);
    
    app.get('/api/user/:email',UserController.GetUserInfo);
    
    app.post('/api/user',UserController.PostUserInfo);
};