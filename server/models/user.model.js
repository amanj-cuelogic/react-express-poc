var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema  =   new Schema({
    first_name : {
            type : String,
            required : true
        },
    last_name   : {
            type : String,
            required : true
        },
    email       :   {
            type : String,
            required : true
        },
    password    :   {
            type : String,
            required : true
        }
});


var UserModel = mongoose.model("User",UserSchema);

module.exports = UserModel;