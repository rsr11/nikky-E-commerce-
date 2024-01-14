import React, { useContext } from 'react'
import AddRemove from '../../Context/AddRemove/AddRemove';
import Item from '../SmallComponents/Item';



const FavList = () => {
    const context = useContext(AddRemove);
    const {setShowFavBox,favItems} = context

    console.log(favItems);

   const Heading="Favorite List";

    return (
    <div className='flex absolute right-0'>
      <div className='lg:w-[29vw]  border-2 px-5 border-black bg-white z-50'>
        <header className='flex justify-between  mt-5'>
            <h1 className='text-xl font-bold decoration-red-500 underline text-pink-500'>{Heading}</h1>
            <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>{setShowFavBox(false)}} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-slate-600 cursor-pointer w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg> 
         
        </header>    
<div className='max-h-[66vh] overflow-y-scroll'>
       <div className={`${favItems.length === 0 && "my-5"} `} > {favItems.length === 0 &&  "Add Some Item My Friend"} </div>
        {favItems.map((e)=>{
return <Item name={e.name} key={e.id} Heading={Heading} coverImg={e.coverImg} id={e.id} price={e.price} size={e.size} category={e.category}  /> 

})}
</div>
      </div>
    </div>
  )
}

export default FavList