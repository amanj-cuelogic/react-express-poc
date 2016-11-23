var express = require("express");
var mongoose = require("mongoose");
var app =   express();

var db;

db = mongoose.connect("mongodb://localhost/user_sample");


require("./routes/routes")(app);


app.listen(3000,function(){
        console.log("App is listening at port 3000");
    });

mongoose.connection.on('connected',function(){
        console.log("Mongoose Connected");
    });

module.exports = app;