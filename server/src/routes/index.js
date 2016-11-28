import userController  from "../controllers/UserController";
export default (app) => {
    
    app.post('/api/signin',userController.postLogin);
    
    // app.post('/api/signup',userController.PostSignUp);
    
    // app.get('/api/user/:email',userController.GetUserInfo);
    
    // app.post('/api/user',userController.PostUserInfo);
};