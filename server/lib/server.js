import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

let app =   express();

app.use(bodyParser.urlencoded({'extended':true}));
app.use(bodyParser.json());
app.use(cors());


let db;

import routes from "../routes/routes";
routes(app);

db = mongoose.connect("mongodb://localhost/user_sample");

//require("../routes/routes")(app);

app.listen(3000,function(){
        console.log("App is listening at port 3000");
    });

mongoose.connection.on('connected',function(){
        console.log("Mongoose Connected");
    });

module.exports = app;