import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footers/Footer'
import { ToastContainer, toast } from 'react-toastify'
const Contact = () => {
  const [form, setForm] = useState({
    name:"",
    email:"",
    message:""
  })
 const changeHandler =(e)=>{
  const {name,value} = e.target
  setForm({...form, [name]:value})
 }
  const submitHandler = (e)=>{
    e.preventDefault()
    fetch("https://beauty-ecommerce.onrender.com/api/contactData",{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
    body: JSON.stringify(form)
    })
    .then(res=>res.json())
    .then((data=>{
      console.log(data)
      toast.success("Message sent successfully!")
    }))
    .catch((err=>{
      console.log(err)
      toast.error("Something went wrong")
    }))

    setForm({
     name:"",
    email:"",
    message:""
  })
    
  }
  return (
    <>
      <Navbar/>
<section className="text-gray-600 body-font relative bg-yellow-50">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-100 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe width="100%" height="100%" className="absolute inset-0" frameBorder={0} title="map" marginHeight={0} marginWidth={0} scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=New+York+City&ie=UTF8&t=&z=14&iwloc=B&output=embed" style={{filter: 'grayscale(1) contrast(1.2) opacity(0.4)'}} />
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-bold text-gray-900 tracking-widest text-xl">Contact Us</h2>
          <p className="font-medium text-base">123 Fifth Avenue, New York, NY</p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="text-md title-font font-bold mb-1 text-teal-700">EMAIL</h2>
          <a className="font-medium text-base">contact@info.com</a>
          <h2 className="text-md title-font font-bold mb-1 text-teal-700">PHONE</h2>
          <p className="font-medium text-base">929-242-6868</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-yellow-50 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">

    <form onSubmit={submitHandler}>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={changeHandler} value={form.name}/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={changeHandler}  value={form.email}/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" onChange={changeHandler}  value={form.message}/>
      </div>
      <button type='submit' className="bg-black text-white border-2 py-2 px-3 focus:outline-none hover:text-black hover:bg-white transition duration-500 rounded font-bold text-xl">Submit</button>
      </form>
    </div>
  </div>
</section>
      <ToastContainer position='top-right' autoClose={3000}/>
      <Footer/>
    </>
  )
}

export default Contact