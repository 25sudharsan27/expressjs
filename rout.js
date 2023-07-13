const express=require("express")

const app=express();

const routing =require("./routing")
 
app.use("/",routing);

app.listen(8080);
