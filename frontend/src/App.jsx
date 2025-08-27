import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/aboutus/AboutUs'
import Contact from './pages/Contact'
import ProductDetails from './pages/ProductDetails'
import Makeup from './pages/Makeup'
import Skincare from './pages/Skincare'
import Haircare from './pages/Haircare'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import CartItem from './components/cartItems/CartItem'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
         <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/about' element={<About/>} />
           <Route path='/contact' element={<Contact/>} />
           <Route path='/products/:id' element={<ProductDetails/>}/>
           <Route path='/makeup' element={<Makeup/>}/>
           <Route path='/skincare' element={<Skincare/>}/>
           <Route path='/haircare' element={<Haircare/>}/>
           <Route path='/login' element={<Login/>}/>
           <Route path='/signup' element={<SignUp/>}/>
           <Route path='/cart' element={<CartItem/>}/>
         </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
