import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import{ToastContainer,toast} from 'react-toastify'
const SignUp = () => {
  const navigate = useNavigate()
    const [form, setForm] = useState({
            name: "",
            email: "",
            number: "",
            password:""
        })
    
        const changeHandler = (e)=>{
            const {name, value} = e.target
            setForm({...form, [name]:value})
        }
        const submitHandler = (e)=>{
            e.preventDefault()
            
            fetch("http://localhost:3000/api/userData",{
                method: "POST",
                headers: {
                   "Content-Type":"application/json"
                },
                body: JSON.stringify(form)
            })
            .then(res=>res.json())
            .then((data)=>{
                console.log(data)
                if(data.success){
                toast.success(data.message)
                navigate("/login")
            setForm({
                    name: "",
                    email:"",
                    number:"",
                    password:""
                  })
                }
                else{
                    toast.error(data.error)
                }
            })
            .catch((err)=>{
                console.log(err)
            })
        }
  return (
    <>
      <form onSubmit={submitHandler}>
       <div className="container px-5 py-24 mx-auto flex">
  <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:mx-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Sign Up</h2>
    <div className="relative mb-4">
      <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
      <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={changeHandler} value={form.name}/>
    </div>
    <div className="relative mb-4">
      <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
      <input type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={changeHandler} value={form.password}/>
    </div>
   <div className="relative mb-4">
      <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
      <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={changeHandler} value={form.email}/>
    </div>
    <div className="relative mb-4">
      <label htmlFor="mobile number" className="leading-7 text-sm text-gray-600">Mobile Number</label>
      <input type="text" id="number" name="number" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={changeHandler} value={form.number}/>
    </div>
    <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" type='submit'>Submit</button>
     {/* <p className='text-center text-md'>OR</p>
     <div className='flex justify-center items-center mb-2'>
   <a href="http://localhost:3000/auth/google">
     <button className="bg-gray-900 text-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 transition duration-300 rounded text-lg" type= "button">Continue with google</button>
     </a>
     </div>
     <div className='flex justify-center items-center mb-2'>
    <a href="http://localhost:3000/auth/facebook">
      <button className="bg-gray-900 text-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 transition duration-300 rounded text-lg" type= "button">Continue with facebook</button>
    </a>
    </div>
    <div className='flex justify-center items-center'>
    <a href="http://localhost:3000/auth/github">
       <button className="bg-gray-900 text-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 transition duration-300 rounded text-lg"  type= "button">Continue with github</button>
    </a>
    </div> */}
  </div>
</div>
</form>
 <ToastContainer position='top-right' autoClose={3000}/>
    </>
  )
}

export default SignUp