import React, { useState } from 'react'
import logo from "../../Assets/icons/nike.png"
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {


  const [credentials , setCredentials] = useState({fname:"",lname:"",email:"",password:"",age:Number(18),gender:""})
    const navigate = useNavigate();
  

    const handleSubmit = async (e)=>{
            e.preventDefault();
            const {fname,lname, email, password,age,gender} = credentials;
            const response = await fetch("https://nikky-ecommerce.onrender.com/api/users/createuser",
            {
                method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({fname,lname, email, password,age,gender})
            });
            const json = await response.json();
            console.log(json);
            if(json.success){
              localStorage.setItem('token', json.authtoken);
              // redirect
              navigate("/");
              alert("Account created successfully", "success");
            }
            else{
              alert("invalid credentials", "danger");
              // props.showAlert("invalid credentials", "danger");
            }
    }

    const onChange = (e) =>{
          setCredentials({...credentials, [e.target.name]:e.target.value })   
    }
    console.log(credentials);
    console.log(typeof(credentials.age));
  return (
    <section className=' flex flex-col items-center mt-20'>
    <div className='flex flex-col text-3xl font-semibold items-center'>
     <Link to={"/"}> <img src={logo} className='w-8 h-8' alt="" /> </Link>
     <h1>We are waiting!</h1>
    </div>
 <form action="" onSubmit={handleSubmit} className=' flex flex-col mt-5 border-2 p-10'>

     <input type="text" name="fname" onChange={onChange} value={credentials.fname} id="" placeholder='First Name' required className='border-2 my-2 px-3 py-2' />      
     <input type="text" name="lname" onChange={onChange} value={credentials.lname} id="" placeholder='Last Name' required className='border-2 my-2 px-3 py-2' />   
     <input type="email" name="email" onChange={onChange} value={credentials.email} id="" placeholder='email' required className='border-2 my-2 px-3 py-2' />
     <input type="number" name="age" onChange={onChange} value={Number(credentials.age)} id="" placeholder='Age' min={18} max={60}  required className='border-2 my-2 px-3 py-2' />
     <select name="gender" onChange={onChange} value={credentials.gender} id="" className='border-2 py-2 my-2'>
      <option value="">select</option>
     <option value="Male">Male</option>
     <option value="Female">Female</option>
     </select>
     <input type="password" name='password' onChange={onChange} required minLength={5} value={credentials.password} placeholder='password' className='border-2 my-2 px-3 py-2' />
     <button type="submit" className='bg-black text-white py-2 font-semibold hover:bg-slate-800'>Sign-up</button>
     <p>Already have account? <Link to={"/login"} className='text-[#939394] hover:underline'>Login</Link> </p>
 </form>

</section>
  )
}

export default SignUp
