const express =require("express");
const router=express.Router();

router.get("/",function(req,res){
    res.sendFile(__dirname+"/"+"indexrout.html");
});

router.get("/youtube",function(req,res){
    res.redirect("https://www.youtube.com/");
});

module.exports = router;