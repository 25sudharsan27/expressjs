var express = require("express");

var app=express()

var alert = require('alert')

router.use(function(req,res,next){
    alert("Welcome");
    console.log("Requested method is",req.method,'and',req.url,'url address page is running')
    next();
})
app.get("/sudharsan",function(req,res,next){
    console.log("First Page");
    res.send("<p>Welcome to Sudharsan</p>");
});
router.get("/contact",function(req,res,next){
    console.log("Second Page");
    res.send("Contact Me on Instagram. My ID is sudharsan");
    next();
})
router.get("/exit",function(req,res,next){
    console.log("Third Page");
    res.send("Hello world");
    next();
});
app.use("/sudharsan",router);
app.use(function(err,req,res,next){
    console.error(err,stack);
    res.status(500).send("Page not found");
    alert("oops");
})
app.listen(8080);