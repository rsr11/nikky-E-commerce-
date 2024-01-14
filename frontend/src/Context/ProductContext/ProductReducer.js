import React from 'react'

const ProductReducer = (state, action) => {
   
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading:true,
                // isError:falses
            };

        case "API_ERROR":
            return {
                ...state,
                isLoading:false,
                isError:true
            };
            
        case "SET_FEATURE_DATA":
            const featureData = action.payload.filter((e)=>{
                return e.feature === true;
            })
            return{
                ...state,
                isLoading:false,
                products:action.payload,
                featureProducts:featureData,
                isError:false
            }
        
    
        default: 
    }
    
}

export default ProductReducer
