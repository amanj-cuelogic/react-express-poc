import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import nconf from "nconf";
import routes from "./routes";

nconf.argv()
    .env()
    .file({ file: '../config.json' });

let app = express();

// Initializing the app middlewares
app.use(bodyParser.urlencoded({ 'extended': true }));
app.use(bodyParser.json());
app.use(cors());

routes(app);

export default app;

connect()
  .on('error', console.log)
  .on('disconnected', connect)
  .once('open', listen);

function listen () {
    //const ENV = app.get('env');
    //const ENV_VARS = nconf.get(ENV);
    app.listen(3000);
    console.log("App is running");
}

function connect () {
  //const DB = nconf.get("DB");
  var options = { server: { socketOptions: { keepAlive: 1 } } };
  return mongoose.connect("mongodb://localhost/user_sample", options).connection;
}

