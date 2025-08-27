import React, { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import popular from '../components/popular/product'
import best from '../components/Bestseller/best'
import hair from '../components/categories/haircare'
import skin from '../components/categories/skincare'
import makeup from '../components/categories/makeup' 
import Navbar from '../components/Navbar'
import Footer from '../components/footers/Footer'
import { useState } from 'react'
import ShopContext from '../components/context/ShopContext'

const ProductDetails = () => {
  
  const [num, setNum]= useState(1)
  const {id} = useParams()
  const allProducts = [...popular,...best,...makeup,...hair,...skin]
  const matchProduct = allProducts.find((e)=>e.id ==id)
  
  const {addTocart} = useContext(ShopContext)

  const handleCart=()=>{
    addTocart(matchProduct.id,num)
    setNum(1)  
  }
  return (
    <>
    <Navbar/>
      <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap h-screen">
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-2/3 object-cover object-center rounded" src={matchProduct.image}/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-gray-900 text-3xl title-font font-medium mb-1">{matchProduct.name}</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium my-2">${Number(matchProduct.price)*num}</h1>
        <p class="leading-relaxed">{matchProduct.review}</p>
        <button className='text-lg hover:bg-white text-white border-0 py-1 px-3 focus:outline-none bg-black hover:text-black transition duration-300 rounded mt-2 p-2 mr-1' onClick={()=>setNum(num-1)}>-</button>
        <button className='text-lg hover:bg-white text-white border-0 py-1 px-3 focus:outline-none bg-black hover:text-black transition duration-300 rounded p-2 mr-1'>{num}</button>
        <button className='text-lg hover:bg-white text-white border-0 py-1 px-3 focus:outline-none bg-black hover:text-black transition duration-300 rounded mb-2 p-2 mr-1' onClick={()=>setNum(num+1)}>+</button>
        <br/>
        <button onClick={handleCart}
  className='text-lg hover:bg-white text-white border-0 py-1 px-3 focus:outline-none bg-black hover:text-black transition duration-300 rounded mt-4'
>
  Add to Cart
</button>
    </div>
  </div>
  </div>
</section>
   <Footer/>
    </>
  )
}

export default ProductDetails