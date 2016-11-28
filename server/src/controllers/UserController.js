import UserModel from "../models/User";

/**
 * What is the class?
 */
export class UserController {

    constructor(userModel) {
        this.userModel = userModel;
    }

    /**
     * What does the method do?
     */
    postLogin(req, res, next) {

        this.userModel.findOne({email:req.body.email,password:req.body.password}, (err, user) => {

            if (err) {
                next(err);
            }

            if (user) {
                res.json({ status: true, user });
            }
        });
    }
}

const userController = new UserController(UserModel);
export default userController;


