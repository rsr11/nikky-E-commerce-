const mongoose = require("mongoose");


const ProductSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    category:{
        type : String,
        required: true
    },
    AddressName:{
        type: String,
        required: true
    },
    images:{
       type:Array
  },
    feature:{
        type: Boolean,
        default : false
    },
    coverPage:{
        type: String,
    },
    price:{
        type : Number,
        default: 4000
    },
    detail:{
        type: String,
        default : "It is very nice product"
    },
    Date:{
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('product',ProductSchema);