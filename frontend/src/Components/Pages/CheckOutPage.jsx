import React, { useContext, useEffect, useState } from 'react'
import AddRemove from '../../Context/AddRemove/AddRemove'
import { useNavigate } from 'react-router-dom'
import PlaceOrderModel from '../SmallComponents/PlaceOrderModel'
import Item from '../SmallComponents/Item'
import CartItem from '../CartAndFav/CartItem'
import FavList from '../CartAndFav/FavList'



const CheckOutPage = () => {

  const [PaymentMethod, setPaymentMethod] = useState("");
  const context = useContext(AddRemove);
  const {cartItems,placeOrder, setPlaceOrder,SetCurrentInCart,setCartItems, ShowCartBox,showFavBox} = context;
  
 const navigate = useNavigate();



  let TotalAmount = 0;
  for (let i = 0; i < cartItems.length; i++ ) {
    TotalAmount += cartItems[i].category;
  }
   
  const isOrderPlacedTag = ()=>{
     setPlaceOrder(true)
     setTimeout(() => {
       setPlaceOrder(false);
       SetCurrentInCart(0);
       setCartItems([]);
       navigate("/");

     }, 2000);
  }



useEffect(()=>{
  if(localStorage.getItem('token')){
    console.log("User is defined");
  }
  else{
         navigate("/login");
  }
    // eslint-disable-next-line
},[])
  return (
    <>
{ShowCartBox  && <CartItem/>}
{showFavBox && <FavList/>}
 { placeOrder && <PlaceOrderModel/>}
<div className={`max-w-[90vw] ${placeOrder && "filter blur-md"} h-[100vh] sm:max-w-[80vw] mx-auto`} >
  {/* <Header/> */}

  <div className={`mt-5 flex lg:flex-row flex-col justify-between`}>
    <div>
     <div className='p-5'>
      <h1 className='text-xl font-semibold' >Total Items in Cart.</h1>
      { cartItems.map((e)=>{
       return <Item name={e.name} key={e.id} coverImg={e.coverImg} id={e.id} price={e.price} size={e.size} category={e.category} />
      })}
     </div>
     <div className='p-5 border-2 border-black my-10 flex items-center font-semibold'>Total Amount = ₹ {TotalAmount} {TotalAmount > 0 && "/- only"} </div>
     </div>
     <div className='mr-40'>
     <div className='p-5'>
      <h1 className='mb-5 font-semibold text-xl'>Payment methods</h1>
      <input type="radio" onChange={(e)=>{setPaymentMethod(e.target.value)}} value="CashOnDelivery" name='paymentType' /><span>Cash on Delivery</span> <br/>
      <input type='radio' onChange={(e)=>{setPaymentMethod(e.target.value)}} value="UPI" name='paymentType' /><span>UPI</span> <br/>
      <input type='radio' onChange={(e)=>{setPaymentMethod(e.target.value)}} value="NetBanking" name='paymentType' /><span>NetBanking</span>
      </div>
     <div className=' flex items-start p-5'>
      <button disabled={PaymentMethod === "" && true} className={` p-3 hover:bg-green-600 sm:px-20 border-2 border-black hover:border-green-600 hover:text-white rounded-lg ${PaymentMethod === "" ? "cursor-not-allowed" : "cursor-pointer"}  text-center`} onClick={isOrderPlacedTag}>Place order</button>
     </div>
  </div>
  </div>
    </div>
  {/* <Footer/> */}
    </>
  )
}

export default CheckOutPage
