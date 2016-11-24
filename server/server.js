var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
//var cors = require('cors');

var app =   express();

app.use(bodyParser.urlencoded({'extended':true}));
app.use(bodyParser.json());


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