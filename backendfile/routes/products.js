const express = require("express");
const Products = require("../models/Products");
const router = express.Router();

router.get("/", async(req,res)=>{
     const{name, category, AddressName, feature, sort, select} = req.query;
      
     let dataObj = {};
     
     if(name){
          dataObj.name = {$regex:name , $options:"i"};
     }
     
     if(category){
          dataObj.category = category;
     }
     
     if(AddressName){
          dataObj.AddressName = AddressName;
     }
     
     if(feature){
          dataObj.feature = feature;
     }
     
     let apiResult = Products.find(dataObj);
     
     if(sort){
          let sortFix = sort.split(",").join(" ");
          apiResult = apiResult.sort(sortFix);
     }
     
     
     if(select){
          let selectFix = select.split(",").join(" ");
          apiResult = apiResult.select(selectFix);
     }
     
     
     
     
     
     //  sorting method if
     //  -price than it will show the list in decending order by taking refer to price 
     //  price than it will show the list in acending order by taking refer to price
     
     
     const data = await apiResult;
     res.json(data); 
     
})




module.exports = router