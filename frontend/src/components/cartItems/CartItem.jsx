import React, { useContext } from 'react'
import ShopContext from '../context/ShopContext'
import {X} from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/footers/Footer'
const CartItem = () => {
  
    const {cartItem, addTocart, removeFromcart, all_product} = useContext(ShopContext)
    const itemsinCart = all_product.filter((p) => cartItem[p.id]>0).map(i=>({...i,quantity:cartItem[i.id]}))

    const grandTotal = itemsinCart.reduce((acc,item)=> acc+ item.price*item.quantity,0)
     console.log(itemsinCart)
  return (
    <>
    <Navbar/>
   <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Your Cart</h1>
    </div>
    <div className="lg:w-2/3 w-full mx-auto overflow-auto">
    {itemsinCart.length==0?
    <>
      <div className="flex flex-col text-center justify-center">
       <h2 className="text-3xl text-gray-900 font-bold title-font mb-8 pl-10">Your cart is empty!</h2>
       <Link to="/" className='text-lg hover:bg-white text-white border-0 py-1 px-3 focus:outline-none bg-black hover:text-black transition duration-300 rounded mt-4'>Browse Menu</Link>
       </div>
    </>:
    <>
     <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead>
            <tr>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Product</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Title</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Price</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Quantiy</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Total</th>
            <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Remove</th>
          </tr>
        </thead>
        <tbody>
    {itemsinCart.map((i)=>{
         return (    
          <tr>
            <td className="w-10 h-10 object-cover py-3"><img src={i.image}/></td>
            <td className="px-4 py-3">{i.name}</td>
            <td className="px-4 py-3">${i.price}</td>
            <td className="px-4 py-3 text-lg text-gray-900">{i.quantity}</td>
            <td className="px-4 py-3 text-lg text-gray-900">{Number(i.price)*Number(i.quantity)}</td>
            <td className="w-10 text-center" onClick={()=>removeFromcart(i.id)}>
              <X/>
            </td>
          </tr>
          )
           })}
           </tbody>
      </table>
            <div className="flex justify-center gap-20 mt-4 lg:w-2/3 w-full mx-auto">
      <h3 className="sm:text-2xl text-3xl font-medium title-font text-gray-900">Grand Total: ${grandTotal}</h3>
      <button className="text-lg hover:bg-white text-white border-0 py-1 px-3 focus:outline-none bg-black hover:text-black transition duration-300 rounded">Proceed to pay</button>
    </div>
    </>
      
}
    </div>
  </div>
</section>
   <Footer/>
    </>
  )
}

export default CartItem