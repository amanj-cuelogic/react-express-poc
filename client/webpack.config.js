var path = require("path");

var DIST_DIR = path.resolve(__dirname,"dist");
var SRC_DIR = path.resolve(__dirname,"src");
var config = {
    entry   :   SRC_DIR + "/app/index.js",
    output  :   {
        path    :   DIST_DIR + "/app",
        filename    :   "bundle.js",
        publicPath  :   "/app/"
    },
    resolve : {
      extensions : ['','.js','.jsx']  
    },
    module : {
        loaders : [
            {
                test    :   /\.js?/,
                include : SRC_DIR,
                exclude : /node_modules/,
                loader : "babel-loader",
                query : {
                    presets : ["react","es2015","stage-2"]
                }
            },
            {
                test    :   /\.jsx?$/,
                include : SRC_DIR,
                exclude : /node_modules/,
                loader : "babel-loader",
                query : {
                    presets : ["react","es2015","stage-2"]
                }
            }
        ]
    }
    
};

module.exports = config;