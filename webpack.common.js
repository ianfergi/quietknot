const path = require('path');


module.exports = {
    entry : path.join( __dirname, "./src/index.js"),
  module: {
    rules : [{
          test : /.js$/,
          exclude : /node_modules/,
          use : "babel-loader"
       },
       {
          test : /\.css$/i,
          use : ["style-loader", "css-loader"]
       }]
   },
  output: {
    filename : "index.js",
    path : path.join( __dirname, "./public/"),
    clean: true,
  },
};