import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import {useNavigate} from "react-router-dom"
import { useAuth } from '../components/context/Authcontext'
const Login = () => {
  const {login}= useAuth()
  const navigate = useNavigate()
  const [data, setData]= useState({
    email:"",
    password:""
  })
  const changeHandler=(e)=>{
    const {name,value}= e.target
    setData({...data, [name]:value})
  }
  const submitHandler=(e)=>{
    e.preventDefault()
    fetch("http://localhost:3000/api/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then((data)=>{
      console.log(data)
      if(data.success){
        login(data.user)
        toast.success(data.message)
        setTimeout(() => {
           navigate("/")
        }, 1500);
          setData({
                    name: "",
                    email:"",
                    number:"",
                    password:""
                  })
      }
      else{
        toast.error(data.message)
      }
    })
    .catch((err)=>{
      console.log(err)
    toast.error("Network Error, Try again!")
  })
}
  return (
    <>
      <form onSubmit={submitHandler}>
       <div className="container px-5 py-24 mx-auto flex">
  <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:mx-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Log In</h2>
   <div className="relative mb-4">
      <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
      <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={changeHandler} value={data.email}/>
    </div>
    <div className="relative mb-4">
      <label htmlFor="mobile number" className="leading-7 text-sm text-gray-600">Password</label>
      <input type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={changeHandler} value={data.password}/>
    </div>
    <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" type='submit'>Submit</button>
  </div>
</div>
</form>
<ToastContainer/>
</>
  )
}

export default Login