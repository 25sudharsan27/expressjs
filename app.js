var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var urlencodedParser=bodyParser.urlencoded({extended:false})

app.get("/",function(req,res){
    res.sendFile(__dirname+"/"+"index.html");
})

app.post("/home",urlencodedParser,function(req,res){
    // res.send("<h1>Welcome "+req.query['username']+" Email :"+req.query["mailid"]+"</h1>");
    res.send("<h1>Welcome"+req.body.username+"</h1><br><h1> Mail ID"+req.body.mailid+"</h1>");
})
app.listen(8080);