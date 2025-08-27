import { useState } from 'react'
import info from './footerinfo'
import { ToastContainer,toast } from 'react-toastify'
const Footer = () => {
  const [email, setEmail] = useState("")
  const changeHandler = (e)=>{
    setEmail(e.target.value)
  }
  const submitHandler =(e)=>{
   e.preventDefault()
   fetch("http://localhost:3000/api/subscription", {
     method:"POST",
     headers:{
      "Content-Type":"application/json",
     },
     body: JSON.stringify({email})
   })
    .then(res=>res.json())
    .then((data)=>{
      console.log(data)

      if(data.success){
         toast.success(data.message)
      }
      else{
        toast.error(data.error)
      }
      
    })
    .catch((err)=>{
      console.log(err)
      toast.error("Something went wrong. Try again!")
    })
    setEmail("")
  }
  return (
    <>
        <footer className="body-font bg-black">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap md:text-left text-center order-first">
        {info.map((i)=>(
      <div className="lg:w-1/4 md:w-1/2 w-full px-4" key={i.id}>
        <h2 className="text-lg title-font font-bold mb-3 text-white">{i.name}</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="font-medium text-base text-white">{i.link1}</a>
          </li>
          <li>
            <a className="font-medium text-base text-white">{i.link2}</a>
          </li>
          <li>
            <a className="font-medium text-base text-white">{i.link3}</a>
          </li>
        </nav>
    </div>
    ))}
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font text-white text-lg title-font font-bold mb-3">SUBSCRIBE</h2>
        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <form onSubmit={submitHandler}>
          <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <label htmlFor="footer-field" className='font-medium text-base text-white'>Your mail address</label>
            <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={changeHandler} value={email}/>
          </div>

           <button type='submit' className='bg-lime-700  text-white border-2 border-lime-700 py-1 px-3 focus:outline-none hover:text-lime-700 hover:bg-white transition duration-500 rounded mt-5 font-bold text-xl'>Submit</button>
          </form>
        </div>
      </div>
    </div>
    </div>
    </footer>
    <ToastContainer position='top-right' autoClose={3000}/>
    </>
  )
}

export default Footer