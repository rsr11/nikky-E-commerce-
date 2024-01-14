// import React, { useContext } from 'react'
import {Link} from "react-router-dom";

import SetProduct from "../../Context/ProductContext/SetProducts";
import { useContext } from "react";


// Products details i can also make a array of product img like src=[a,b,c] then retrive it as e.src[0]



    // this is feature Product component where 9 products are shown all 9 product are dynamically shown from api request

const FeatureProducts = () => {
    const context = useContext(SetProduct);
    const { featureProducts, isLoading } = context;
   
    if(isLoading){
        return <h1>loading</h1>
    }
    

  return (
    <section id="featureProduct" >
        <h1 className='text-3xl my-10 ml-10'>Feature Products</h1>

        <div className='grid lg:grid-cols-3 lg:grid-rows-3 max-w-6xl mx-auto gap-5'>
         {featureProducts.map((e)=>{
            return  <div className='bg-zinc-100 overflow-hidden' key={e.name}> 
            <Link to={`/men/${e.AddressName}`}>
                <img src={e.coverPage} className='featureImg' alt="" />
                </Link>
                <div className='flex justify-between px-2 pb-2'>
                <div> <div className='font-semibold ' >{e.name}</div>
                      <div className='text-[#666161]' >{e.category}</div> 
                </div>
                <div> <span className='font-semibold min-[1337px]:block hidden' >MRP: ₹ {e.price}</span> </div>
                </div>

            {/*  Thapa technical React E-Commerce video 17 */}
            </div>
         })}
      </div>
       

    </section>
  )
}

export default FeatureProducts
