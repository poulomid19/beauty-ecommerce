import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import {X, Menu} from 'lucide-react'
import { useAuth } from './context/Authcontext'
import ShopContext from './context/ShopContext'
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  const {user, logout} = useAuth()
    const [open, Isopen] = useState(false)
    const avatar = (email)=>email? email[0].toUpperCase():"U"
    let {getTotalCartItems} = useContext(ShopContext)
  return (
    <>
      <header className="text-gray-600 body-font bg-pink-200">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span className="ml-3 text-xl">GlowiFy</span>
    </a>
    <nav className="md:ml-auto md:mr-auto md:flex flex-wrap items-center text-base justify-center hidden">
      <Link className="mr-5 hover:text-gray-900 font-bold" to="/">Home</Link>
      <Link className="mr-5 hover:text-gray-900 font-bold" to="/makeup">Makeup</Link>
      <Link className="mr-5 hover:text-gray-900 font-bold" to="/skincare">Skin Care</Link>
      <Link className="mr-5 hover:text-gray-900 font-bold" to="/haircare">Hair Care</Link>
      <Link className="mr-5 hover:text-gray-900 font-bold" to="/about">About</Link>
      <Link className="mr-5 hover:text-gray-900 font-bold" to="/contact">Contact</Link>
    </nav>

    <div className='md:flex font-bold items-center mt-4 md:mt-0 hidden gap-4'>
      {user? (
      <>
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white font-bold">
              {avatar(user.email)}
             </div>
             <Link to="/cart" className="relative inline-block">
  <ShoppingCart className="w-6 h-6 text-black" />
  {getTotalCartItems() > 0 && (
    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
      {getTotalCartItems()}
    </span>
  )}
</Link>

             <button onClick={logout}className="bg-white text-black border-0 py-1 px-3 rounded hover:bg-black hover:text-white transition duration-300">
                    Logout
                  </button>
          </div>
      </>
      ):
      <>
    <Link to='/signup' className='bg-white text-black border-0 py-1 px-3 focus:outline-none hover:bg-black hover:text-white transition duration-300 rounded'>Sign Up</Link>
    <Link to='/login' className='bg-white text-black border-0 py-1 px-3 focus:outline-none hover:bg-black hover:text-white transition duration-300 rounded'>Login</Link>
    </>}  
    </div> 
    <button className='md:hidden'>
    {!open?<Menu onClick={()=>Isopen(!open)}/>:<X onClick={()=>Isopen(!open)}/>}
    </button>
    {open && (
       <nav className="flex flex-col ml-auto mr-auto items-center text-base justify-center">
      <Link className="mr-5 hover:text-gray-900 font-bold mt-3" to="/">Home</Link>
      <Link className="mr-5 hover:text-gray-900 font-bold mt-3" to="/makeup">Makeup</Link>
      <Link className="mr-5 hover:text-gray-900 font-bold mt-3" to="/skincare">Skin Care</Link>
      <Link className="mr-5 hover:text-gray-900 font-bold mt-3" to="/skincare">Hair Care</Link>
      <Link className="mr-5 hover:text-gray-900 font-bold mt-3" to="/about">About</Link>
      <Link className="mr-5 hover:text-gray-900 font-bold mt-3" to="/contact">Contact</Link>
      <div className='flex font-bold items-center mt-4 md:mt-0 gap-4'>
    <button className='bg-white text-black border-0 py-1 px-3 focus:outline-none hover:bg-black hover:text-white transition duration-300 rounded'>Sign Up</button>
    <button className='bg-white text-black border-0 py-1 px-3 focus:outline-none hover:bg-black hover:text-white transition duration-300 rounded'>Login</button>
  </div> 

    </nav>
        )}
  </div>
</header>
    </>
  )
}

export default Navbar