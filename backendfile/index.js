const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");
const SendingProucts = require("./ProductsDb");
// const Products = require("./models/Products");
const products = require("./routes/products");
const path = require("path");
const env = require("dotenv");

env.config();

connectToMongo().then(()=>{
    app.listen(process.env.PORT || port,()=>{
        console.log(`connect to port ${port}`);
    })
}).catch(err => console.log(`error in connecting server and database : ${err}`)) 


// SendingProucts();

const app = express();
const port = process.env.PORT || 6000;

app.use(cors());



app.use(express.json());


// routes available


// creating route for products api
app.use("/api/products",products);




// creating route for usersAuthentication
app.use('/api/users', require("./routes/auth"));

// app.use(express.static(path.resolve(__dirname,"public")));


// app.use("*",(req,res)=>{
//     res.sendFile(path.resolve(__dirname,"public","index.html"));
// })

app.get('/',(req,res)=>{
    res.send("hello world");
})





