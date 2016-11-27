import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

let app =   express();

app.use(bodyParser.urlencoded({'extended':true}));
app.use(bodyParser.json());
app.use(cors());

//const port = 3000;
let db;

import routes from "../routes/routes";
routes(app);

db = mongoose.connect("mongodb://localhost/user_sample");

let port, server;
export const start = (port,callback) => {
    server = app.listen(port,callback);
}

export const stop = (callback) => {
    server.close(callback);
}


start(port,() => {
        console.log("App is listening at port ",port);
});

// app.get("/hello",(req,res)=>{
//     res.status(200).send("Hello World!");
// })
mongoose.connection.on('connected',function(){
        console.log("Mongoose Connected");
    });

export default app;