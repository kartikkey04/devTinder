const express = require('express');
const connectDB = require('./config/db');

const app = express();

const PORT = 4000;

app.use("/",(req,res)=>{res.send("Hello!!!!")});

connectDB();

app.listen(PORT,()=>{
    console.log("Server Listening.....")
});