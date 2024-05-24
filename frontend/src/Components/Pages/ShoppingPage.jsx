import React, { useContext, useEffect, useState } from 'react'
import CloseEye from "../../Assets/icons/eyebrow.png";
import OpenEye from "../../Assets/icons/eye.png";
import { Link} from 'react-router-dom';
import CartItem from '../CartAndFav/CartItem';
import FavList from "../CartAndFav/FavList";
import AddRemove from '../../Context/AddRemove/AddRemove';
import loader from "../../Assets/icons/Dual Ring-1s-201px.svg";

 
const ShoppingPage = (props) => {
  const context = useContext(AddRemove);
const {ShowCartBox,showFavBox} = context;


     const [showData, setShowData] = useState([]);
     const [sort, setsort]= useState("-price");
     const[closeEye , setCloseEye] = useState(true);
     const[Category, setCategory] = useState(["Football Shoes","Men Shoes","Men Hoodie"]);
     console.log(Category);
  


     const setEye =()=>{
      closeEye === true ? setCloseEye(false) : setCloseEye(true);
     }

     const fetchData = async ()=>{
       props.setProgress(0);
       const res = await fetch(`http://localhost:5000/api/products?${Category}"&sort="+sort}`,{
        method:`POST`,
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({categories:Category,sorting:sort}),
       });
       const jsonData = await res.json();
       setShowData(jsonData);
       props.setProgress(100);
      }
     
      
    
      useEffect(()=>{
        fetchData();
        console.log(sort);

        // if(Category?.length === 0){
        //   setCategory(["Football Shoes","Men Shoes","Men Hoodie"]);
        // }
                  // eslint-diable-next-line
      },[sort,Category]);







    // progressing(100)
    
    // if(showData === "No Data"){

    // }

    
  return (
    <>

      {ShowCartBox  && <CartItem/>}
      {showFavBox && <FavList/>}


      {showData.length === 0  ? <div className='h-[80vh] flex flex-col gap-10 justify-center items-center text-3xl  '><h1>Loading- Wait a min.  </h1><img src={loader} alt="" /></div> :
       <div className={`  ${ShowCartBox && "blur-sm"} flex ${showFavBox && "blur-sm"} flex-col sm:flex-row sm:gap-5 md:gap-10`}>

              <div className={`sm:w-[20vw] mt-[5.5rem] flex flex-col items-start pl-10 sm:pl-2 lg:pl-10 py-2 sm:py-0 bg-zinc-100 ${closeEye ? "block" : "hidden"}`}>

                <h1 className='ml-5 mt-0 sm:mt-5 sm:mb-3 text-xl font-semibold'>Category</h1>
                <div>
                <input defaultChecked type="checkbox" name="category" value={"Men Shoes"} onClick={(e) => {e.target.checked? setCategory([...Category, e.target.value]): setCategory(Category.filter((item) => {return item !== e.target.value }));}} id="" />
                <span> Men Shoes</span>
                </div>
                <div>
                <input defaultChecked type="checkbox" name="category" value={"Men Hoodie"} onClick={(e) => {e.target.checked? setCategory([...Category, e.target.value]): setCategory(Category.filter((item) => {return item !== e.target.value;}));}} id="" />
                <span> Men Hoodie</span>
                </div>
                <div>
                <input defaultChecked type="checkbox" name="category" value={"Football Shoes"} onClick={(e) => {e.target.checked? setCategory([...Category, e.target.value]): setCategory(Category.filter((item) => {return item !== e.target.value;}));}} id="" />
                <span> Football Shoes</span>
                </div>
              </div>
              
              
              <div className={` ${!closeEye ? "w-[100vw]" : "sm:w-[70vw]" } `}>
              <div className='my-5 flex sm:flex-row flex-col items-center  justify-between' >
          <div className='text-3xl'>All Products</div>
          <div className='flex justify-between items-center'>
          <div className='flex items-center m-3 cursor-pointer' onClick={setEye}>
          <p className='mr-2'>{`${closeEye === true ? "Hide Filter" : "Show Filter"}`}</p>
          <img src={closeEye ? CloseEye : OpenEye} className='h-5 w-5 transition-all' alt="" />
          </div>
 
          <div className='relative ml-5 sm:ml-0'>
            <select name="sort" onChange={(e)=>{setsort(e.target.value)}} id="">
              <option value="">Sort</option>
              <option value="-price">High to Low</option>
              <option value="price">Low to High</option>
            </select>    
            </div>
          </div>
        </div>
            <div className={` ${ShowCartBox && "cursor-not-allowed"} grid sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-9  mx-auto gap-x-2 gap-y-10`}>
                {showData.length === 1 ? <div className={`h-[70vh]`} > <h1>Select Category</h1> </div>  :
                showData.map((e)=>{
                  return <div className='lg:w-400px ' key={e.name}>
                    <Link to={ ShowCartBox ? ""  : e.AddressName} className={`${ShowCartBox && "cursor-not-allowed"}`}>
                     <div className='border-b-2 border-black'>
                      
                      <img src={e.coverPage} loading='lazy' alt="" />
                     </div>
                     <div className='flex justify-between bg-zinc-100 px-2 pb-2'>
                      <div>
                 <div className='font-semibold ' >{e.name?.slice(0,14)+".."}</div>
                      <div className='text-[#666161]'>{e.catagory}</div> 
                      </div>
                      <div>MRP: ₹ {e.price}</div>
                </div>
                      </Link>
                  </div>
                })}
                </div>
                </div>

            </div>
              }
        </>
  
  )
}

export default ShoppingPage
