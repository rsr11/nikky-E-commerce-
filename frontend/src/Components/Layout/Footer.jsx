import React from 'react'
import facebook from "../../Assets/icons/facebook.png"
import insta from "../../Assets/icons/instagram.png"
import { useLocation } from 'react-router-dom'


const QuickLinks = ()=>{
    return (
      <ul>
        <li>Send us Feedback</li>
        <li>Login</li>
        <li>Sign-up</li>
        <li>India © 2023 Nike, Inc. All Rights Reserved</li>
      </ul>
    )
}

const MediaLinks = ()=>{
    return (

      <div className='flex gap-5'>
        <img src={facebook} className='h-10 w-10' alt="" />
        <img src={insta} className='h-10 w-10' alt="" />
        </div>
    )
    
}








const Footer = () => {

  let location = useLocation();
  let pathName = location.pathname;
  return (
    <>
    <footer className={`bg-black ${pathName ==="/signup" || pathName === "/login" ? "hidden" : "flex"} lg:px-36 bottom-0 w-full md:px-32 lg:flex-row flex-col-reverse items-center gap-7 lg:justify-between mt-10 py-5 text-white`}>
    <QuickLinks/>
    <MediaLinks/>
    </footer>
    </>
  )
}

export default Footer
