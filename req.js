const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});


app.post("/", function(req, res){
    var weight = req.body.weight;
    var height = req.body.height;
    var result = weight/(height*height);
    res.send("Your body mass index is "+ result.toFixed(2));
});


app.listen(process.env.PORT || 3000, function(){
  console.log("server is running on port 3000");
});
