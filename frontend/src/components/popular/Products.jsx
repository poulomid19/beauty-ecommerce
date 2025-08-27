import React from 'react'
import Popular from './Popular'
import items from './product'
const Products = () => {
  return (
    <>
      <section className='bg-pink-50'>
      <h2 className="text-xl text-gray-900 font-semibold title-font text-center pt-10">Shop</h2>
      <div class="flex justify-center">
        <div class="w-16 h-1 rounded-full bg-teal-700 inline-flex"></div>
      </div>
       <h2 className="text-3xl text-gray-900 font-bold title-font mb-2 text-center pt-10">Popular Products</h2>
        <div className="flex gap-4 justify-center mx-10 py-10">
           {items.map((p)=>{
            return (
                <Popular key={p.id} value={p} />
            )
            })}
        </div>
        </section>   
    </>
  )
}

export default Products