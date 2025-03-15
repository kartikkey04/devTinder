const express = require('express');

const app = express();

const PORT = 4000;

app.use("/",(req,res)=>{res.send("Hello!!!!")});

app.listen(PORT,()=>{
    console.log("Server Listening.....")
});