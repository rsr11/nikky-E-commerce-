import {  useState } from "react";
import AddRemove from "./AddRemove";


const AddRemoveState = (props) => {
  const [currentLike, SetCurrentLike ] = useState(0);
  const [currentInCart, SetCurrentInCart ] = useState(0);
  const [color, SetColor] = useState("blue");
  const [alert, setAlert] = useState(false);
  const [ShowCartBox, setShowCartBox] = useState(false);
  const [cartItems ,setCartItems] = useState([]);
  const[id , setId] = useState(0);
  const[placeOrder, setPlaceOrder] = useState(false);
  const[favItems, setFavItems] = useState([]);
  const[showFavBox, setShowFavBox] = useState(false);


  const AddLike = (name,price,category,coverImg,size) => {
    SetCurrentLike(currentLike + 1);
    SetColor("pink");
    setAlert(true);
    setId(id+1);

    
    setFavItems( [...favItems,{name,category,price,coverImg,size,id}]);

    console.log(favItems);
    setTimeout(() => { setAlert(false)}, 1000);

  };



  const AddToCart = (name,price,category,coverImg,size) => {
    SetCurrentInCart(currentInCart + 1 );
    SetColor("green");
    setAlert(true);
    setId(id+1);
    
    
      setCartItems( [...cartItems,{name,category,price,coverImg,size,id}]);
      
      console.log(cartItems);
      setTimeout(() => { setAlert(false)}, 1000);
      
    } 

    const deleteCartItem = (id)=>{
      
      setCartItems(cartItems.filter((e)=>{
        return e.id !== id;
      }))
      SetCurrentInCart(currentInCart - 1 );
  }

  const removeFavItem = (id)=>{
        setFavItems(favItems.filter((e)=>{
          return e.id !== id;
        }))
        SetCurrentLike(currentLike-1);
      }
      
      // useEffect(()=>{

  // })

  return (
    <AddRemove.Provider value={{favItems,removeFavItem,showFavBox, setShowFavBox,placeOrder,SetCurrentInCart, setPlaceOrder,cartItems ,deleteCartItem,setCartItems,currentLike,ShowCartBox,setShowCartBox, color, SetColor,currentInCart,alert, AddLike, AddToCart }}>
      {props.children}
    </AddRemove.Provider>
  );
};

export default AddRemoveState;
