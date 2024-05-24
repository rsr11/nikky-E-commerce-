const express = require("express");
const Products = require("../models/Products");
const router = express.Router();
const nikeProducts = require("../products");


router.post("/", async(req,res)=>{
     const{category, AddressName, feature, sort, select} = req.query;

     const {categories, sorting} = await req.body;

     console.log(categories);
     // console.log(nikeProducts?.length);
      
     let dataObj = {};

     let isShoes = categories?.filter((e)=>{ return e === "Men Shoes"});
     isShoes = isShoes?.length === 0 ? "" : isShoes?.[0] ;
     console.log(isShoes);

     let isFootallShoes = categories?.filter((e)=>{ return e === "Football Shoes"});
     isFootallShoes = isFootallShoes?.length === 0 ? "" : isFootallShoes?.[0] ;
     console.log(isFootallShoes);

     let isHoodie = categories?.filter((e)=>{ return e === "Men Hoodie"});
     isHoodie = isHoodie?.length === 0 ? "" : isHoodie?.[0] ;
     console.log(isHoodie);

     let filteredData = nikeProducts?.filter((product)=> { return product.category === isFootallShoes || product.category === isShoes || product.category === isHoodie } );

     console.log(filteredData?.length);
     // let finalData = [];

    
       let finalData = sorting === "-price" ? filteredData.sort((a,b)=>{ return b.price - a.price}) : filteredData?.sort((a,b)=>{ return a.price - b.price});
     // }else{
     //    let finalData = filteredData?.sort((a,b)=>{ b.price - a.price});
     // }

     
     // if(name){
     //      dataObj.name = {$regex:name , $options:"i"};
     // }
     
     if(category){
          dataObj.category = category;
     }
     
     if(AddressName){
          dataObj.AddressName = AddressName;
     }
     
     if(feature){
          dataObj.feature = feature;
     }
      
     // console.log(dataObj);

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
     if(filteredData?.length === 0){
          return res.json(["item one"]);
     }
     res.json(finalData); 
     
})




module.exports = router