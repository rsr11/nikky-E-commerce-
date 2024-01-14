const connectToMongo = require("./db");
const NikeProducts = require("./products.json");
const product = require("./models/Products");

const SendingProucts = async()=>{
    try {
        await connectToMongo();
        await product.deleteMany();
        await product.create(NikeProducts);
        console.log("successfully added data to products collection!!");
    } catch (error) {
        console.log(error);
    }
}


// SendingProucts();

module.exports = SendingProucts;