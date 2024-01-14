import React, { useState } from 'react'
import logo from "../../Assets/icons/nike.png"
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [credentials , setCredentials] = useState({email:"",password:""})
  const navigate = useNavigate();


  const handleSubmit = async (e)=>{
          e.preventDefault();
          const response = await fetch("https://nikky-ecommerce.onrender.com/api/users/login",
          {
              method:"POST",
              headers:{
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({email :credentials.email, password :credentials.password})
          });
          const json = await response.json();
          console.log(json);
          if(json.success){
            localStorage.setItem('token', json.authtoken);
            // redirect
            navigate("/");
            // props.showAlert("Logged In successfully", "success");
            alert("Logged In successfully", "success");
          }
          else{
            // props.showAlert("invalid credentials", "danger"); 
            alert("invalid credentials", "danger");
          }
  }

  const VisitPage = ()=>{
    navigate("/");
  }

  const onChange = (e) =>{
        setCredentials({...credentials, [e.target.name]:e.target.value })   
  }
  return (
    <section className=' flex flex-col items-center mt-40'>
           <div className='flex flex-col text-3xl font-semibold items-center'>
            <Link to={"/"}><img src={logo} className='w-8 h-8' alt="" /></Link>
            <h1>We are waiting!</h1>
           </div>
        <form action="" onSubmit={handleSubmit} className=' flex flex-col mt-5 border-2 p-10'>
            <input type="email" name="email" onChange={onChange} value={credentials.email} id="" placeholder='email' className='border-2 my-2 px-3 py-2' />
            <input type="password" name="password" onChange={onChange} value={credentials.password} id="" placeholder='password' className='border-2 mb-2 px-3 py-2' />
            <button type="submit" className='bg-black text-white py-2 font-semibold hover:bg-slate-800'>Login</button>
            <p>Don't have account ? <Link to='/signup' className='text-[#939394] hover:underline'>Sign up</Link> </p>
           <button className='bg-purple-500 text-white py-2 mt-3 font-semibold hover:bg-purple-800' onClick={VisitPage} >Visit as Guest</button>
        </form>
      
    </section>
  )
}

export default Login
