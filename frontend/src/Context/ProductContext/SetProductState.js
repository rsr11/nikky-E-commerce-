import { useEffect, useReducer } from "react";
// import AddRemove from "./AddRemove";
import axios from "axios";
import SetProduct from "./SetProducts";
import reducer from "./ProductReducer";

const SetProductState = (props) => {
  const intialState = {
    products:[],
    featureProducts:[],
    isLoading:true,
    isError:false,
    
  }

    const [state, dispatch] = useReducer(reducer,intialState);

  const getItems = async ()=>{
       
        dispatch({type:"SET_LOADING"});
       
       try{  const res = await axios.get("https://nikky-ecommerce.onrender.com/api/products");
         const products = await res.data;
         dispatch({type: "SET_FEATURE_DATA", payload:products})

        }catch(error){   
            dispatch({type:"API_ERROR"});   
         }
        //  console.log(products);
  }

  useEffect(()=>{
     getItems();
  },[])

  return (
    <SetProduct.Provider value={{...state}}>
      {props.children}
    </SetProduct.Provider>
  );
};

export default SetProductState;
