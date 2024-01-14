import React, { useContext } from 'react'
import AddRemove from '../../Context/AddRemove/AddRemove';
import { Link } from 'react-router-dom';
import Item from '../SmallComponents/Item';



const CartItem = () => {
    const context = useContext(AddRemove);
    const {setShowCartBox, cartItems} = context

    console.log(cartItems);
    return (
    <div className='flex absolute right-0'>
      <div className='lg:w-[29vw]  border-2 px-5 border-black bg-white z-50'>
        <header className='flex justify-between  mt-5'>
            <h1 className='text-xl font-semibold '>Shopping cart</h1>
            <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>{setShowCartBox(false)}} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-slate-600 cursor-pointer w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg> 
         
        </header>    
<div className='max-h-[66vh] overflow-y-scroll'>
       <div className={`${cartItems.length === 0 && "my-5"} `} > {cartItems.length === 0 &&  "Add Some Item My Friend"} </div>
        {cartItems.map((e)=>{
return <Item name={e.name} key={e.id} coverImg={e.coverImg} id={e.id} price={e.price} size={e.size} category={e.category}  /> 

})}
</div>
        <button onClick={()=>{setShowCartBox(false)}} className={`w-full my-4 p-2 rounded-md ${cartItems.length === 0 && "hidden"} text-white bg-indigo-600`}> <Link to={"/checkout"}> CheckOut </Link> </button>
      </div>
    </div>
  )
}

export default CartItem
