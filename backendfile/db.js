const mongoose = require("mongoose");
const env = require("dotenv");

const mongoURL = "mongodb+srv://rockysingh800800:92086ei0Q0GFR9Je@cluster0.deoabzw.mongodb.net/";

// mongodb+srv://rockysingh800800:92086ei0Q0GFR9Je@cluster0.deoabzw.mongodb.net/

const connectToMongo = async ()=>{
    await mongoose.connect(mongoURL);
    console.log("connected to mongo");
}
// 7la9zUY5xG5TsZ3L - password
// rockysingh - username

module.exports = connectToMongo;





// 92086ei0Q0GFR9Je - password