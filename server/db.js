const mongoose = require('mongoose');

const connectToMongo = ()=>{
    mongoose.connect(process.env.mongoURI);
    console.log("Connected")
}

module.exports = connectToMongo;
