import React, { useContext, useEffect, useState} from 'react'
import nikeLogo from "../../Assets/icons/nike.png"
import bag from "../../Assets/icons/bag.png"
import like from "../../Assets/icons/heart.png"

import AddRemove from '../../Context/AddRemove/AddRemove'
import {Link, NavLink, useLocation, useNavigate} from "react-router-dom"








const Logo = ()=>{
   
  return  <Link  className='z-10 relative' to={"/"}> <div className='absolute h-10 w-10 left-1 bg-purple-800 mix-blend-multiply blur-md'></div> <img src={nikeLogo} alt="" className='h-12 z-10 w-12 cursor-pointer ' /> </Link> 

  
    
  }
  
  

  
  const Navbar = ()=>{
    let location = useLocation();
    

    return (
      <>
      <ul className='flex cursor-pointer z-10 gap-5 showUnderLine'>
        {/* <li> <a href="/#featureProduct">Feature product </a></li> */}
        <li><NavLink to={"/men"} className={`${location.pathname === "/men" && "underline"}`}>Products</NavLink></li>
      </ul>
        </>
 )
}




// const SearchBar = ()=>{
//   return (
//     <div className='lg:flex hidden z-10'>
//         <input type="search" name="" className='rounded-lg pt-2 pl-2 pb-2 pr-8' placeholder='Search' id="" />
//       <img src={search} className='h-8 w-8 relative right-12 top-1' alt="" />
//       </div>
//   )
// }




const DropDown = ()=>{
  return <>
  <button id="dropdownDefaultButton" data-dropdown-toggle="dropdownDefaultButton" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">{"a"}<svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
{/* <!-- Dropdown menu --> */}
<div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Update Info</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Order</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logout</a>
      </li>
      <li></li>
      </ul>
      </div>
  </>
}


const SignInUp =()=>{


  
  const[showUserMenu, setUserMenu] = useState(false);
  const[userName, setUserName] = useState("");

  const context = useContext(AddRemove);
  const {SetCurrentInCart, setCartItems} = context;


  const getUserInfo = async ()=>{
    const response = await fetch(`https://nikky-ecommerce.onrender.com/api/users//getuser`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "auth-token": localStorage.getItem("token")
      }
  } )
  const data = await response.json();
  setUserName(data.fname);
  localStorage.setItem("userName",data.fname)
  localStorage.setItem("userEmail",data.email)
   console.log(data);
};


  useEffect(()=>{
    getUserInfo();

  })


   const navigate = useNavigate();
  const handleLogout= ()=>{
    setUserMenu(false)
    localStorage.removeItem('token');
    setCartItems([]);
    SetCurrentInCart(0);
    // setFavItems([]);
    // SetCurrentLike(0);
    navigate("/login");

  }
  return <>
   <div className='flex text-sm absolute right-10 gap-2 top-2'>
  {!localStorage.getItem('token')? <div>
    <Link to={"/login"} className='underline'>Login |</Link>
    <Link to={"/signup"} className='underline'>SignUp</Link> </div>
    : <>
    {/* <DropDown/> */}
    <div className='flex items-center gap-2' onClick={()=>{showUserMenu ? setUserMenu(false) : setUserMenu(true)}}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
</svg>
    <button className='text-lg'>{userName}</button>
    </div>
   <div className={`absolute ${showUserMenu ? "block" : "hidden"} transition ease-in-out delay-150 bg-white top-8 -right-10 z-50 border-b-2 border-black border-x-2`}>
     <ul className='text-lg p-3 w-40'>
      <li className='hover:bg-slate-400 cursor-pointer' >Update Info</li>
      <li className='hover:bg-slate-400 cursor-pointer' >Your Orders</li>
      <li className='hover:bg-slate-400 cursor-pointer' onClick={handleLogout} >Logout</li>
     </ul>
   </div>

    </>
}
    </div>

  </>
}







const FavAndCart = ()=>{


  const context = useContext(AddRemove);
  const { currentInCart,setShowCartBox,ShowCartBox,currentLike,showFavBox, setShowFavBox} = context;
  // const navigate = useNavigate();

  
  // let success = false;

  const onClickCartHandler = ()=>{
       ShowCartBox ? setShowCartBox(false): setShowCartBox(true)
       !ShowCartBox && setShowFavBox(false);
    // return   success ? console.log("cart") : navigate("/login");
  }
  const onClickFavHandler = ()=>{
    showFavBox ? setShowFavBox(false) : setShowFavBox(true)
    !showFavBox && setShowCartBox(false);
 // return   success ? console.log("cart") : navigate("/login");
}


 

  return (
      <div className='gap-3 flex z-10'>
        {currentLike > 0 &&  <div onClick={onClickFavHandler} className='relative cursor-pointer left-12 top-4  w-6 h-6 bg-black text-white text-center rounded-full'>{currentLike}</div> }
        <img src={like} alt="" onClick={onClickFavHandler} className='h-8 w-8 cursor-pointer ' />
        {currentInCart> 0 && <div onClick={onClickCartHandler} className='relative cursor-pointer left-12 top-4 w-6 h-6 bg-black text-white text-center rounded-full'>{currentInCart}</div>}
        <img src={bag} alt="" onClick={onClickCartHandler} className='h-8 w-8 cursor-pointer' />
      </div>
  )
}




// const Menu = ()=>{
//   return (
// <img src={menu} alt="" className="h-8 w-8 flex z-10 lg:hidden" />
//   )
// }

// const HiddenMenu = ()=>{
//   return <>
//        <div className=''>
//         <h1>Products</h1>
//         <FavAndCart/>

//        </div>
//   </>
// }


const NavBg = ()=>{
  return (
<div className='absolute bg-[#D9D9D9] w-full h-20 left-0 -z-0'></div>
  )
}





const Header = () => {
  let location = useLocation();
  let pathName = location.pathname;


  
  return (
    <>
    <header className={`mt-10 h-20 ${pathName ==="/signup" || pathName === "/login" ? "hidden" : "flex"} bg-[#D9D9D9] items-center z-10 justify-between text-xl`}>
    <NavBg/>
    <SignInUp/>
    <Logo/>
    <Navbar/>
    {/* <SearchBar/> */}
    <FavAndCart/>
    {/* <Menu/> */}
    </header>
    {/* <HiddenMenu/> */}
    </>
  )
}

export default Header
