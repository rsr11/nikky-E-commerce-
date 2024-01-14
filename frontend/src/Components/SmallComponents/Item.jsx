import React, { useContext } from 'react'
import AddRemove from '../../Context/AddRemove/AddRemove';

const Item = ({name,coverImg,price,id,size,category,Heading}) => {
    const context = useContext(AddRemove);
    const {deleteCartItem,removeFavItem} = context
  return (
    <>
      <div className='mb-3'>
     <div className='flex border-b-2 gap-4 border-black mt-5 pb-5'>
      <img src={coverImg} alt="" className='h-32 w-32' />
      <div>
          <div className='flex flex-col justify-between h-32'>
          <div className='flex sm:flex-row flex-col sm:gap-5'>
              <div>
          <h1 className='text-black font-medium'>{name}</h1>
           <p className='text-slate-600' >{price}</p>
           <p className='text-slate-600' >{size}</p>
              </div>
          <h1 className='text-black font-medium' >₹{category}</h1>
          </div>
          <div className='flex justify-between'>
              {/* <h1>Qty1</h1> */}
              <h1 className='text-indigo-600 font-bold cursor-pointer hover:text-red-600' onClick={()=>{Heading === "Favorite List" ? removeFavItem(id) :deleteCartItem(id)}} >REMOVE</h1>
          </div>
          </div>
      </div>
     </div>
  </div>
    </>
  )
}

export default Item
