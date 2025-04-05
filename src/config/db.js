const mongoose = require('mongoose');
require('dotenv').config;

const connectDB = async () => {
    try{

        await mongoose.connect(process.env.MONGO_URI);

    }catch(error){

        console.log("Not connected to DB !!!")

    }
}

module.exports = connectDB;