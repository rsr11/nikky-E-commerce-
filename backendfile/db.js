const mongoose = require("mongoose");
const env = require("dotenv")

env.config();

const mongoURL ="mongodb+srv://rockysingh800800:92086ei0Q0GFR9Je@cluster0.deoabzw.mongodb.net/";



// mongodb+srv://rockysingh800800:92086ei0Q0GFR9Je@cluster0.deoabzw.mongodb.net/

const connectToMongo = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("connected to mongo");
        
    } catch (error) {
        console.log(`there is a error in connecting the mongoDB : ${error}`);
    }
}
// 7la9zUY5xG5TsZ3L - password
// rockysingh - username

module.exports = connectToMongo;





// 92086ei0Q0GFR9Je - password