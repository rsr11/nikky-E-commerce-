import React, { useContext, useEffect, useState } from 'react'
import AddRemove from '../../Context/AddRemove/AddRemove';
import loader from "../../Assets/icons/Dual Ring-1s-201px.svg"; 


import back from  "../../Assets/icons/right-arrow.png";



import { Link, useLocation} from 'react-router-dom';
import CartItem from '../CartAndFav/CartItem';
import FavList from '../CartAndFav/FavList';

const ProductDetail = (props) => {
  // let navigate = useNavigate();
  let location = useLocation();
  let pathName = location.pathname;
  let searchPath = "";
  if(pathName.includes("/men")){
    searchPath= pathName.substr(5,pathName.length);
  }
  else{

    searchPath = pathName.substr(1,pathName.length);
  }
  // console.log(searchPath);

  
   
  const [price, setPrice] = useState(0);
  const [name, setName]= useState("");
  const [img, setImg] = useState([]);
  const [detail, setDetail]= useState("");
  const [category, setCategory] = useState("");
  const [coverImg , setCoverImg] = useState("");
  const [size, setSize] = useState("");


  
  useEffect(  () =>{
    props.setProgress(0);
    const getData = async ()=>{
        const data = await fetch(`/api/items/${searchPath}.json`);

        // const currentProduct = await data.pathName;
        const objData = await data.json();

        console.log(objData);
        setPrice(objData[0].price);
        setName(objData[0].name);
        setImg(objData[0].images);
        setCategory(objData[0].category);
        setDetail(objData[0].detail);
        setCoverImg(objData[0].coverPage);
        props.setProgress(100);


    
          }
          getData();
        },[])

        
         

      const context = useContext(AddRemove);
    const {AddLike, AddToCart,ShowCartBox,showFavBox} = context

    //  const getSize = (event)=>{
    //      let name = event;
    //      console.log(name);
    //  }

  console.log(size);

  const SizeSelectorStyle = `border-2 border-slate-300  hover:text-white p-2 hover:border-green-500 font-semibold rounded-md hover:bg-green-500 `;

    // console.log(img);
    // console.log(cartItems);
  //  const {ProName, ProCategory,ProDetail, ProPrice, ProImg} = AboutProduct;

  return (
    <>
    {ShowCartBox  && <CartItem/>}
{showFavBox && <FavList/>}

   {img.length === 0 ?  <div className='h-[80vh] flex flex-col gap-10 justify-center items-center text-3xl  '><h1>Loading- Wait a min.  </h1><img src={loader} alt="" /></div> :
    <div className=' flex flex-col relative lg:flex-row items-center mx-10 md:mx-30 mt-10'>
     <Link to={-1}> <img src={back} className='absolute h-10 w-10 top-0 -left-10 cursor-pointer rotate-180 border-black border-2 rounded-full p-2' alt="" /></Link>
      <div className='grid grid-cols-2 gap-2 grid-rows-2 lg:w-2/3 cursor-not-allowed'>
        <img src={img[0]} alt="" className='' />
        <img src={img[1]} alt="" />
        <img src={img[2]} alt="" />
        <img src={img[3]} alt=""/>
      </div> 
      <div className='lg:w-1/3 lg:ml-20'>
        <h1 className='text-2xl font-semibold'>{name}</h1>
        <p className='font-semibold mb-5'>{category}</p>
        <h2>MRP : ₹ {price}</h2>
        <p className='text-[#757575]'>incl. of taxes</p>
        <p className='text-[#757575] mb-20'>(Also includes all applicable duties)</p>
        <h5 className='mb-2 font-semibold text-xl'>Select Size</h5>
        <div className='grid grid-cols-3 grid-rows-3 gap-2 cursor-pointer'>
          <span className={`${SizeSelectorStyle} ${size === "UK 5" || size === "XS" ? "bg-green-500 border-green-500 text-white" : "bg-slate-300"} `}  id={`${category ==="Men Hoodie" ? "XS" : "UK 5" }`} onClick={(e)=>{setSize(e.currentTarget.id)}} >{`${category ==="Men Hoodie" ? "XS" : "UK 5" }`}</span>
          <span className={`${SizeSelectorStyle} ${size === "UK 6" || size ==="S" ? "bg-green-500 border-green-500 text-white" : "bg-slate-300"} `}  id={`${category ==="Men Hoodie" ? "S" : "UK 6" }`} onClick={(e)=>{setSize(e.currentTarget.id)}} >{`${category ==="Men Hoodie" ? "S" : "UK 6" }`}</span>
          <span className={`${SizeSelectorStyle} ${size === "UK 7" || size ==="M" ? "bg-green-500 border-green-500 text-white" : "bg-slate-300"} `}  id={`${category ==="Men Hoodie" ? "M" : "UK 7" }`} onClick={(e)=>{setSize(e.currentTarget.id)}} >{`${category ==="Men Hoodie" ? "M" : "UK 7" }`}</span>
          <span className={`${SizeSelectorStyle} ${size === "UK 8" || size ==="L" ? "bg-green-500 border-green-500 text-white" : "bg-slate-300"} `}  id={`${category ==="Men Hoodie" ? "L" : "UK 8" }`} onClick={(e)=>{setSize(e.currentTarget.id)}} >{`${category ==="Men Hoodie" ? "L" : "UK 8" }`}</span>
          <span className={`${SizeSelectorStyle} ${size === "UK 9" || size ==="XL" ? "bg-green-500 border-green-500 text-white" : "bg-slate-300"} `}  id={`${category ==="Men Hoodie" ? "XL" : "UK 9" }`} onClick={(e)=>{setSize(e.currentTarget.id)}} >{`${category ==="Men Hoodie" ? "XL" : "UK 9" }`}</span>
          <span className={`${SizeSelectorStyle} ${size === "UK 10" || size ==="XXL" ? "bg-green-500 border-green-500 text-white" : "bg-slate-300"} `}  id={`${category ==="Men Hoodie" ? "XXL" : "UK 10" }`} onClick={(e)=>{setSize(e.currentTarget.id)}} >{`${category ==="Men Hoodie" ? "XXL" : "UK 10" }`}</span>
          </div>
       
        <div className='flex flex-col' >
        <button className={`text-center bg-black text-white py-4 my-3 font-bold rounded-full hover:bg-slate-500 ${size === "" && "cursor-not-allowed"} `} disabled={size === "" && true} onClick={()=>{AddToCart(name,category,price,coverImg,size)}}>Add to Cart</button>
        <button className='text-center border-2 hover:bg-pink-500 hover:border-pink-500 hover:text-white py-4 rounded-full mb-10' onClick={()=>{AddLike(name,category,price,coverImg,size)}} >Favourite  </button>
        <p>{detail}</p>

        </div>
      </div>
    </div>
}
    </>
  )
}

export default ProductDetail
